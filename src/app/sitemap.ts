import type { MetadataRoute } from "next";
import { langues, locales, localiser } from "@/i18n/config";
import { pages, site } from "@/lib/site";

/** Une entrée par page et par langue, avec les liens `hreflang` croisés. */
export default function sitemap(): MetadataRoute.Sitemap {
  const maintenant = new Date();

  return pages.flatMap((page) =>
    langues.map((lang) => ({
      url: `${site.url}${localiser(lang, page.href) === "/" ? "" : localiser(lang, page.href)}`,
      lastModified: maintenant,
      changeFrequency: "monthly" as const,
      priority: page.priority,
      alternates: {
        languages: Object.fromEntries(
          langues.map((autre) => [locales[autre].html, `${site.url}${localiser(autre, page.href)}`]),
        ),
      },
    })),
  );
}
