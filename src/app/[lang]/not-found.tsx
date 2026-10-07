import Link from "next/link";
import { Container } from "@/components/ui";
import { localiser } from "@/i18n/config";
import { getDictionnaire, getLang } from "@/i18n/serveur";
import { pages, site } from "@/lib/site";

export default async function PageIntrouvable() {
  const lang = await getLang();
  const dict = await getDictionnaire();

  return (
    <section className="bg-noir-doux pt-36 pb-20 text-white md:pt-44">
      <Container>
        <p className="t-display text-accent">404</p>
        <h1 className="t-h2 mt-6 text-white">{dict.introuvable.titre}</h1>
        <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-attenue-clair">
          {dict.introuvable.texte}{" "}
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
                  href={localiser(lang, page.href)}
                  className="souligne-lien tr-couleur font-mono text-[0.82rem] font-bold uppercase tracking-[0.14em] text-white/80 hover:text-white"
                >
                  {dict.pages[page.href]}
                </Link>
              </li>
            ))}
        </ul>
      </Container>
    </section>
  );
}
