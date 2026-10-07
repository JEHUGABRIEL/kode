import { notFound } from "next/navigation";
import { lang as paramLang } from "next/root-params";
import { hasLangue, type Langue } from "./config";
import { en } from "./dictionnaires/en";
import { fr } from "./dictionnaires/fr";

const dictionnaires = { fr, en } as const;

/**
 * Langue de la page en cours, lue depuis le segment racine `app/[lang]`
 * (`next/root-params`) : aucun composant serveur n'a besoin de la recevoir
 * en propriété.
 */
export async function getLang(): Promise<Langue> {
  const valeur = await paramLang();
  if (!hasLangue(valeur)) notFound();
  return valeur;
}

/** Dictionnaire de la langue en cours. */
export async function getDictionnaire() {
  return dictionnaires[await getLang()];
}

/** Dictionnaire d'une langue donnée (métadonnées, sitemap). */
export const dictionnaire = (lang: Langue) => dictionnaires[lang];
