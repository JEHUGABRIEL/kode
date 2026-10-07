import { notFound } from "next/navigation";
import { lang as paramLang } from "next/root-params";
import { dictionnaireFusionne } from "@/lib/contenu";
import { hasLangue, type Langue } from "./config";

/**
 * Langue de la page en cours, lue depuis le segment racine `app/[lang]`
 * (`next/root-params`) : aucun composant serveur n'a besoin de la recevoir
 * en propriété.
 */
export async function getLang(): Promise<Langue> {
  const valeur = await paramLang();
  if (!valeur || !hasLangue(valeur)) notFound();
  return valeur;
}

/**
 * Dictionnaire de la langue en cours : textes du code, remplacés par ceux
 * modifiés dans le back-office (/admin/textes).
 */
export async function getDictionnaire() {
  return dictionnaireFusionne(await getLang());
}

/** Dictionnaire d'une langue donnée (métadonnées). */
export const dictionnaire = (lang: Langue) => dictionnaireFusionne(lang);
