import type { MetadataRoute } from "next";
import { pages, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const maintenant = new Date();

  return pages.map((page) => ({
    url: `${site.url}${page.href === "/" ? "" : page.href}`,
    lastModified: maintenant,
    changeFrequency: "monthly" as const,
    priority: page.priority,
  }));
}
