import Link from "next/link";
import { pages, site } from "@/lib/site";
import { Container } from "@/components/ui";

export default function PageIntrouvable() {
  return (
    <section className="bg-noir-doux pt-36 pb-20 text-white md:pt-44">
      <Container>
        <p className="t-display text-accent">404</p>
        <h1 className="t-h2 mt-6 text-white">Cette page n’existe pas encore.</h1>
        <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-attenue-clair">
          Le lien est peut-être erroné, ou la page a été déplacée. Revenez à l’accueil ou
          dites-nous ce que vous cherchiez. Besoin d’aide immédiate ?{" "}
          <a href={`tel:${site.phoneRaw}`} className="text-accent underline decoration-accent/50">
            {site.phoneDisplay}
          </a>
          .
        </p>

        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
          {pages
            .filter((page) => page.href !== "/mentions-legales")
            .map((page) => (
              <li key={page.href}>
                <Link
                  href={page.href}
                  className="souligne-lien tr-couleur font-mono text-[0.82rem] font-bold uppercase tracking-[0.14em] text-white/80 hover:text-white"
                >
                  {page.label}
                </Link>
              </li>
            ))}
        </ul>
      </Container>
    </section>
  );
}
