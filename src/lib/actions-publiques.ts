"use server";

import { hasLangue } from "@/i18n/config";
import { assurerSchema, baseDisponible, sql } from "./db";

export type EtatEnvoi = { statut: "idle" | "merci" | "invalide" | "erreur" };

const champ = (donnees: FormData, cle: string, max: number) =>
  String(donnees.get(cle) ?? "").trim().slice(0, max);

/* Champ invisible pour les humains : un robot qui le remplit est ignoré
   sans erreur visible. */
const estRobot = (donnees: FormData) => champ(donnees, "site_web", 200) !== "";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Formulaire « Laisser un avis » : enregistré en attente de validation. */
export async function envoyerAvis(_precedent: EtatEnvoi, donnees: FormData): Promise<EtatEnvoi> {
  if (estRobot(donnees)) return { statut: "merci" };

  const nom = champ(donnees, "nom", 120);
  const fonction = champ(donnees, "fonction", 160);
  const prestation = champ(donnees, "prestation", 120);
  const texte = champ(donnees, "avis", 3000);
  const note = Number(donnees.get("note"));
  const langue = champ(donnees, "langue", 5);
  const accord = donnees.get("accord") === "on";

  if (
    nom.length < 2 ||
    !prestation ||
    texte.length < 20 ||
    !Number.isInteger(note) ||
    note < 1 ||
    note > 5 ||
    !accord ||
    !hasLangue(langue)
  ) {
    return { statut: "invalide" };
  }

  if (!baseDisponible()) return { statut: "erreur" };
  try {
    await assurerSchema();
    await sql()`insert into avis (nom, fonction, prestation, note, texte, langue)
                values (${nom}, ${fonction}, ${prestation}, ${note}, ${texte}, ${langue})`;
    return { statut: "merci" };
  } catch (erreur) {
    console.error("[avis] enregistrement impossible :", erreur);
    return { statut: "erreur" };
  }
}

export type NouvelleDemande = {
  nom: string;
  structure: string;
  email: string;
  telephone: string;
  besoin: string;
  budget: string;
  message: string;
  langue: string;
  canal: "whatsapp" | "email";
  site_web?: string;
};

/**
 * Formulaire de contact : la demande est enregistrée pour le back-office,
 * en plus de l'envoi par WhatsApp ou e-mail fait côté navigateur.
 */
export async function enregistrerDemande(demande: NouvelleDemande): Promise<boolean> {
  if ((demande.site_web ?? "").trim() !== "") return true;

  const coupe = (valeur: unknown, max: number) => String(valeur ?? "").trim().slice(0, max);
  const d = {
    nom: coupe(demande.nom, 120),
    structure: coupe(demande.structure, 160),
    email: coupe(demande.email, 200),
    telephone: coupe(demande.telephone, 60),
    besoin: coupe(demande.besoin, 120),
    budget: coupe(demande.budget, 120),
    message: coupe(demande.message, 5000),
    langue: coupe(demande.langue, 5),
    canal: demande.canal === "email" ? "email" : "whatsapp",
  };

  if (d.nom.length < 2 || !EMAIL.test(d.email) || !d.message || !hasLangue(d.langue)) return false;
  if (!baseDisponible()) return false;

  try {
    await assurerSchema();
    await sql()`insert into demandes (nom, structure, email, telephone, besoin, budget, message, langue, canal)
                values (${d.nom}, ${d.structure}, ${d.email}, ${d.telephone}, ${d.besoin}, ${d.budget},
                        ${d.message}, ${d.langue}, ${d.canal})`;
    return true;
  } catch (erreur) {
    console.error("[demandes] enregistrement impossible :", erreur);
    return false;
  }
}
