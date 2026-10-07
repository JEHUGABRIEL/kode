import type { Metadata } from "next";
import Formations from "@/components/sections/Formations";
import PageHero from "@/components/sections/PageHero";
import Reveal from "@/components/Reveal";
import { Btn, Container, Section, Spacer, TitreSection } from "@/components/ui";
import { alternates, localiser } from "@/i18n/config";
import { dictionnaire, getDictionnaire, getLang } from "@/i18n/serveur";
import { img, waLink } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLang();
  const { evenementiel } = dictionnaire(lang);
  return {
    title: evenementiel.meta.titre,
    description: evenementiel.meta.description,
    alternates: alternates(lang, "/formations"),
  };
}

/** Pôle Événementiel (adresse `/formations` conservée pour l'architecture). */
export default async function FormationsPage() {
  const lang = await getLang();
  const dict = await getDictionnaire();
  const t = dict.evenementiel;

  return (
    <>
      <PageHero
        surtitre={t.hero.surtitre}
        titre={t.hero.titre}
        texte={t.hero.texte}
        image={img.formationsPage}
        fil={dict.pages["/formations"]}
      />

      {/* Formats d'événements (§5 bloc 10) */}
      <Formations />

      <Section fond="gris">
        <Container>
          <TitreSection surtitre={t.calendrier.surtitre} titre={t.calendrier.titre} texte={t.calendrier.texte} />

          <ol className="mt-12 grid gap-px bg-bordure md:grid-cols-2 lg:grid-cols-4">
            {t.calendrier.etapes.map((etape, i) => (
              <li key={etape.nom} className="bg-gris-clair p-7">
                <p className="t-label-sm text-accent">{`0${i + 1}`}</p>
                <Reveal delai={((200 + i * 100) as 200 | 300 | 400 | 500)} className="mt-4">
                  <h2 className="t-h5">{etape.nom}</h2>
                </Reveal>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-encre/75">{etape.texte}</p>
              </li>
            ))}
          </ol>

          <Spacer taille="l" />

          <div className="border border-bordure bg-white p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="t-h4">{t.encart.titre}</h2>
                <p className="mt-4 max-w-2xl text-[1rem] leading-relaxed text-encre/75">{t.encart.texte}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Btn href={localiser(lang, "/contact")} variante="sombre" fleche>
                  {t.encart.cta}
                </Btn>
                <Btn href={waLink(t.encart.message)} variante="contour" externe>
                  {t.encart.whatsapp}
                </Btn>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
