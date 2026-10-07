import "server-only";
import { cache } from "react";
import type { Langue } from "@/i18n/config";
import { en } from "@/i18n/dictionnaires/en";
import { fr, type Dictionnaire } from "@/i18n/dictionnaires/fr";
import { assurerSchema, baseDisponible, sql } from "./db";
import { fusionner } from "./fusion";
import { realisationsInitiales } from "./realisations-initiales";
import type { Avis, Demande, Realisation } from "./types";

export const dictionnairesDuCode: Record<Langue, Dictionnaire> = { fr, en };

/**
 * Lecture protégée : sans base (ou base injoignable pendant un build),
 * le site retombe sur le contenu du code au lieu de casser.
 */
async function lire<T>(requete: () => Promise<T>, repli: T): Promise<T> {
  if (!baseDisponible()) return repli;
  try {
    await assurerSchema();
    return await requete();
  } catch (erreur) {
    console.error("[contenu] lecture impossible, contenu du code utilisé :", erreur);
    return repli;
  }
}

/** Textes modifiés depuis /admin/textes pour une langue (bruts). */
export const surchargeTextes = cache(async (lang: Langue): Promise<unknown> =>
  lire(async () => {
    const lignes = await sql()`select donnees from textes where langue = ${lang}`;
    return lignes[0]?.donnees ?? null;
  }, null),
);

/** Dictionnaire d'une langue : code + textes modifiés dans le back-office. */
export const dictionnaireFusionne = cache(async (lang: Langue): Promise<Dictionnaire> =>
  fusionner(dictionnairesDuCode[lang], await surchargeTextes(lang)),
);

type LigneRealisation = {
  id: number;
  position: number;
  publiee: boolean;
  image_url: string;
  contenu: Realisation["contenu"];
};

const versRealisation = (l: LigneRealisation): Realisation => ({
  id: l.id,
  position: l.position,
  publiee: l.publiee,
  imageUrl: l.image_url,
  contenu: l.contenu,
});

const repliRealisations: Realisation[] = realisationsInitiales.map((r, i) => ({ ...r, id: i + 1 }));

/** Réalisations publiées, dans l'ordre choisi dans le back-office. */
export const realisationsPubliees = cache(async (): Promise<Realisation[]> =>
  lire(async () => {
    const lignes = (await sql()`select * from realisations where publiee order by position, id`) as LigneRealisation[];
    return lignes.map(versRealisation);
  }, repliRealisations),
);

export async function toutesLesRealisations(): Promise<Realisation[]> {
  await assurerSchema();
  const lignes = (await sql()`select * from realisations order by position, id`) as LigneRealisation[];
  return lignes.map(versRealisation);
}

export async function realisationParId(id: number): Promise<Realisation | null> {
  await assurerSchema();
  const lignes = (await sql()`select * from realisations where id = ${id}`) as LigneRealisation[];
  return lignes[0] ? versRealisation(lignes[0]) : null;
}

type LigneAvis = Omit<Avis, "creeLe"> & { cree_le: string | Date };
const versAvis = (l: LigneAvis): Avis => ({ ...l, creeLe: new Date(l.cree_le).toISOString() });

/** Avis validés dans le back-office, les plus récents d'abord. */
export const avisPublies = cache(async (): Promise<Avis[]> =>
  lire(async () => {
    const lignes = (await sql()`select * from avis where statut = 'publie' order by cree_le desc`) as LigneAvis[];
    return lignes.map(versAvis);
  }, []),
);

export async function tousLesAvis(): Promise<Avis[]> {
  await assurerSchema();
  const lignes = (await sql()`select * from avis order by cree_le desc`) as LigneAvis[];
  return lignes.map(versAvis);
}

type LigneDemande = Omit<Demande, "creeLe"> & { cree_le: string | Date };

export async function toutesLesDemandes(): Promise<Demande[]> {
  await assurerSchema();
  const lignes = (await sql()`select * from demandes order by cree_le desc`) as LigneDemande[];
  return lignes.map((l) => ({ ...l, creeLe: new Date(l.cree_le).toISOString() }));
}
