"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { langues, type Langue } from "@/i18n/config";
import { exigerAdmin, fermerSession, motDePasseValide, ouvrirSession } from "@/lib/auth";
import { dictionnairesDuCode } from "@/lib/contenu";
import { assurerSchema, sql } from "@/lib/db";
import { ecrireChemin } from "@/lib/fusion";
import type { StatutAvis, TexteRealisation } from "@/lib/types";

export type EtatFormulaire = { erreur?: string; enregistre?: boolean };

/** Régénère toutes les pages publiques (les deux langues). */
function rafraichirSite() {
  revalidatePath("/[lang]", "layout");
}

const texte = (donnees: FormData, cle: string, max = 4000) => String(donnees.get(cle) ?? "").trim().slice(0, max);
const identifiant = (donnees: FormData) => Number(donnees.get("id")) || 0;

// ---------- Session ----------

export async function connexion(_precedent: EtatFormulaire, donnees: FormData): Promise<EtatFormulaire> {
  if (!motDePasseValide(String(donnees.get("motDePasse") ?? ""))) {
    /* Ralentit les essais en série. */
    await new Promise((resoudre) => setTimeout(resoudre, 800));
    return { erreur: "Mot de passe incorrect." };
  }
  await ouvrirSession();
  redirect("/admin");
}

export async function deconnexion() {
  await fermerSession();
  redirect("/admin/connexion");
}

// ---------- Avis ----------

const STATUTS: StatutAvis[] = ["en_attente", "publie", "refuse"];

export async function changerStatutAvis(donnees: FormData) {
  await exigerAdmin();
  await assurerSchema();
  const statut = texte(donnees, "statut", 20) as StatutAvis;
  if (!STATUTS.includes(statut)) return;
  await sql()`update avis set statut = ${statut} where id = ${identifiant(donnees)}`;
  rafraichirSite();
  revalidatePath("/admin", "layout");
}

export async function supprimerAvis(donnees: FormData) {
  await exigerAdmin();
  await assurerSchema();
  await sql()`delete from avis where id = ${identifiant(donnees)}`;
  rafraichirSite();
  revalidatePath("/admin", "layout");
}

// ---------- Demandes ----------

export async function basculerDemande(donnees: FormData) {
  await exigerAdmin();
  await assurerSchema();
  await sql()`update demandes set traitee = not traitee where id = ${identifiant(donnees)}`;
  revalidatePath("/admin", "layout");
}

export async function supprimerDemande(donnees: FormData) {
  await exigerAdmin();
  await assurerSchema();
  await sql()`delete from demandes where id = ${identifiant(donnees)}`;
  revalidatePath("/admin", "layout");
}

// ---------- Réalisations ----------

const URL_OU_VIDE = /^(https:\/\/\S+|\/\S*)?$/;

function texteRealisation(donnees: FormData, lang: Langue): TexteRealisation {
  return {
    categorie: texte(donnees, `${lang}.categorie`, 80),
    titre: texte(donnees, `${lang}.titre`, 160),
    texte: texte(donnees, `${lang}.texte`, 2000),
    livrables: texte(donnees, `${lang}.livrables`, 1000)
      .split("\n")
      .map((ligne) => ligne.trim())
      .filter(Boolean)
      .slice(0, 8),
  };
}

export async function enregistrerRealisation(
  _precedent: EtatFormulaire,
  donnees: FormData,
): Promise<EtatFormulaire> {
  await exigerAdmin();
  await assurerSchema();

  const id = identifiant(donnees);
  const imageUrl = texte(donnees, "imageUrl", 1000);
  const publiee = donnees.get("publiee") === "on";
  const contenu = { fr: texteRealisation(donnees, "fr"), en: texteRealisation(donnees, "en") };

  if (!contenu.fr.titre || !contenu.en.titre) return { erreur: "Le titre est obligatoire en français et en anglais." };
  if (!contenu.fr.texte || !contenu.en.texte) return { erreur: "Le texte est obligatoire en français et en anglais." };
  if (!URL_OU_VIDE.test(imageUrl)) return { erreur: "L’image doit être une adresse https:// (ou laissée vide)." };

  const db = sql();
  if (id) {
    await db`update realisations
             set image_url = ${imageUrl}, publiee = ${publiee}, contenu = ${JSON.stringify(contenu)}, modifie_le = now()
             where id = ${id}`;
  } else {
    await db`insert into realisations (position, publiee, image_url, contenu)
             values ((select coalesce(max(position), -1) + 1 from realisations), ${publiee}, ${imageUrl},
                     ${JSON.stringify(contenu)})`;
  }
  rafraichirSite();
  revalidatePath("/admin", "layout");
  redirect("/admin/realisations");
}

export async function supprimerRealisation(donnees: FormData) {
  await exigerAdmin();
  await assurerSchema();
  await sql()`delete from realisations where id = ${identifiant(donnees)}`;
  rafraichirSite();
  revalidatePath("/admin", "layout");
}

export async function basculerRealisation(donnees: FormData) {
  await exigerAdmin();
  await assurerSchema();
  await sql()`update realisations set publiee = not publiee, modifie_le = now() where id = ${identifiant(donnees)}`;
  rafraichirSite();
  revalidatePath("/admin", "layout");
}

/** Monte ou descend une réalisation d'un rang (échange avec sa voisine). */
export async function deplacerRealisation(donnees: FormData) {
  await exigerAdmin();
  await assurerSchema();
  const id = identifiant(donnees);
  const sens = texte(donnees, "sens", 10) === "haut" ? -1 : 1;

  const db = sql();
  const lignes = (await db`select id from realisations order by position, id`) as { id: number }[];
  const ordre = lignes.map((l) => l.id);
  const i = ordre.indexOf(id);
  const j = i + sens;
  if (i < 0 || j < 0 || j >= ordre.length) return;
  [ordre[i], ordre[j]] = [ordre[j], ordre[i]];

  await db.transaction(ordre.map((idRealisation, position) => db`update realisations set position = ${position} where id = ${idRealisation}`));
  rafraichirSite();
  revalidatePath("/admin", "layout");
}

// ---------- Textes du site ----------

/**
 * Enregistre les textes d'une langue. Seules les chaînes existant dans le
 * dictionnaire du code sont acceptées (champs nommés par leur chemin,
 * « t:cibles.items.0.titre ») : la structure du site ne peut pas casser.
 */
export async function enregistrerTextes(_precedent: EtatFormulaire, donnees: FormData): Promise<EtatFormulaire> {
  await exigerAdmin();
  await assurerSchema();

  const lang = texte(donnees, "langue", 5) as Langue;
  if (!langues.includes(lang)) return { erreur: "Langue inconnue." };

  const resultat = structuredClone(dictionnairesDuCode[lang]);
  for (const [cle, valeur] of donnees.entries()) {
    if (!cle.startsWith("t:") || typeof valeur !== "string") continue;
    const propre = valeur.trim().slice(0, 5000);
    if (propre) ecrireChemin(resultat, cle.slice(2), propre);
  }

  await sql()`insert into textes (langue, donnees, modifie_le) values (${lang}, ${JSON.stringify(resultat)}, now())
              on conflict (langue) do update set donnees = excluded.donnees, modifie_le = now()`;
  rafraichirSite();
  revalidatePath("/admin/textes");
  return { enregistre: true };
}

/** Revient aux textes d'origine (ceux du code) pour une langue. */
export async function reinitialiserTextes(donnees: FormData) {
  await exigerAdmin();
  await assurerSchema();
  const lang = texte(donnees, "langue", 5);
  if (!langues.includes(lang as Langue)) return;
  await sql()`delete from textes where langue = ${lang}`;
  rafraichirSite();
  revalidatePath("/admin/textes");
}
