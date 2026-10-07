import { NextResponse, type NextRequest } from "next/server";
import { langueParDefaut, langues } from "@/i18n/config";

/**
 * Routage des langues. Toutes les pages vivent sous `app/[lang]` :
 *   · `/en/...`  → servi tel quel (anglais) ;
 *   · `/fr/...`  → redirigé vers l'adresse sans préfixe (une seule URL
 *                   par page française, pour le référencement) ;
 *   · le reste   → réécrit en interne vers `/fr/...` : le français reste
 *                   la langue par défaut, sans préfixe visible.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const prefixe = langues.find((lang) => pathname === `/${lang}` || pathname.startsWith(`/${lang}/`));

  if (prefixe === langueParDefaut) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(prefixe.length + 1) || "/";
    return NextResponse.redirect(url, 308);
  }

  if (prefixe) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${langueParDefaut}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  /* Ni les fichiers internes de Next, ni les fichiers statiques (tout chemin
     avec une extension : images, icônes, sitemap.xml, robots.txt). */
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
