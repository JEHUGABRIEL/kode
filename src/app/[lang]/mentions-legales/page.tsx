import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import { Container, Divider, Section } from "@/components/ui";
import { alternates } from "@/i18n/config";
import { dictionnaire, getDictionnaire, getLang } from "@/i18n/serveur";
import { img } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLang();
  const { mentions } = await dictionnaire(lang);
  return {
    title: mentions.meta.titre,
    description: mentions.meta.description,
    alternates: alternates(lang, "/mentions-legales"),
    robots: { index: false, follow: true },
  };
}

export default async function MentionsLegales() {
  const dict = await getDictionnaire();
  const t = dict.mentions;
  const RUBRIQUES = t.rubriques;

  return (
    <>
      <PageHero
        surtitre={t.hero.surtitre}
        titre={t.hero.titre}
        texte={t.hero.texte}
        image={img.mentions}
        fil={dict.pages["/mentions-legales"]}
      />

      <Section fond="blanc">
        <Container>
          <div className="max-w-3xl">
            {RUBRIQUES.map((rubrique, i) => (
              <article key={rubrique.titre}>
                {i > 0 && <Divider className="my-10" />}
                <h2 className="t-h4">{rubrique.titre}</h2>
                <div className="mt-5 flex flex-col gap-4 text-[1rem] leading-relaxed text-encre/75">
                  {rubrique.paragraphes.map((paragraphe) => (
                    <p key={paragraphe}>{paragraphe}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
