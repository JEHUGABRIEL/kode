/**
 * Langues du site. Le français est la langue par défaut et reste sans
 * préfixe (`/agence`) ; l'anglais est servi sous `/en` (`/en/agence`).
 * Le routage est assuré par `src/proxy.ts`, qui réécrit les adresses sans
 * préfixe vers le segment `app/[lang]`.
 *
 * Ce module ne dépend pas de `next/root-params` : il est utilisable dans
 * les composants client comme serveur.
 */
export const langues = ["fr", "en"] as const;

export type Langue = (typeof langues)[number];

export const langueParDefaut: Langue = "fr";

export const hasLangue = (valeur: string): valeur is Langue =>
  (langues as readonly string[]).includes(valeur);

/** Attribut `lang` du document et `og:locale` par langue. */
export const locales: Record<Langue, { html: string; og: string; nom: string; court: string }> = {
  fr: { html: "fr-FR", og: "fr_FR", nom: "Français", court: "FR" },
  en: { html: "en", og: "en_US", nom: "English", court: "EN" },
};

/**
 * Adresse localisée d'un lien interne : `/services` reste tel quel en
 * français et devient `/en/services` en anglais. Les liens externes,
 * `mailto:`, `tel:` et ancres pures sont renvoyés sans changement.
 */
export function localiser(lang: Langue, href: string): string {
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  if (lang === langueParDefaut) return href;
  return href === "/" ? `/${lang}` : `/${lang}${href}`;
}

/** Retire le préfixe de langue d'un chemin (`/en/agence` → `/agence`). */
export function sansPrefixe(chemin: string): string {
  for (const lang of langues) {
    if (chemin === `/${lang}`) return "/";
    if (chemin.startsWith(`/${lang}/`)) return chemin.slice(lang.length + 1);
  }
  return chemin;
}

/** Langue déduite d'un chemin de navigateur. */
export function langueDuChemin(chemin: string): Langue {
  for (const lang of langues) {
    if (lang !== langueParDefaut && (chemin === `/${lang}` || chemin.startsWith(`/${lang}/`))) return lang;
  }
  return langueParDefaut;
}

/**
 * Métadonnées `alternates` d'une page : URL canonique dans la langue en
 * cours et liens `hreflang` vers chaque version.
 */
export function alternates(lang: Langue, href: string) {
  return {
    canonical: localiser(lang, href),
    languages: {
      ...Object.fromEntries(langues.map((l) => [locales[l].html, localiser(l, href)])),
      "x-default": localiser(langueParDefaut, href),
    },
  };
}
