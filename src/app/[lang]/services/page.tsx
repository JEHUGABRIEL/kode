import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ServicesBand from "@/components/sections/ServicesBand";
import ServicesCards from "@/components/sections/ServicesCards";
import Targets from "@/components/sections/Targets";
import Reveal from "@/components/Reveal";
import { Btn, Container, Section, TitreSection } from "@/components/ui";
import { alternates, localiser } from "@/i18n/config";
import { dictionnaire, getDictionnaire, getLang } from "@/i18n/serveur";
import { img } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLang();
  const { services } = dictionnaire(lang);
  return {
    title: services.meta.titre,
    description: services.meta.description,
    alternates: alternates(lang, "/services"),
  };
}

export default async function Services() {
  const lang = await getLang();
  const dict = await getDictionnaire();
  const t = dict.services;

  return (
    <>
      <PageHero
        surtitre={t.hero.surtitre}
        titre={t.hero.titre}
        texte={t.hero.texte}
        image={img.servicesPage}
        fil={dict.pages["/services"]}
      />

      <Section fond="blanc">
        <Container>
          <TitreSection
            surtitre={t.catalogue.surtitre}
            titre={t.catalogue.titre}
            texte={t.catalogue.texte}
            delai={300}
          />

          {/* Catalogue complet — repris dans la longue liste d'expertises du pied de page */}
          <div className="mt-14 grid gap-px bg-bordure md:grid-cols-2 lg:grid-cols-3">
            {t.expertises.map((expertise, i) => (
              <article key={expertise.nom} className="tr group flex flex-col bg-white p-7 hover:bg-gris-clair">
                <p className="t-label-sm text-encre/40">{String(i + 1).padStart(2, "0")}</p>
                <Reveal delai={((200 + (i % 4) * 100) as 200 | 300 | 400 | 500)} className="mt-4">
                  <h2 className="t-h5">{expertise.nom}</h2>
                </Reveal>
                <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-encre/75">
                  {expertise.texte}
                </p>
                <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1.5">
                  {expertise.tags.map((tag) => (
                    <li key={tag} className="t-label-sm text-encre/45">
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* Trois services mis en avant (§5 bloc 5) */}
      <ServicesCards />

      <ServicesBand />

      {/* Nos cibles (§5 bloc 7) */}
      <Targets />

      <Section fond="gris">
        <Container className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <TitreSection surtitre={t.besoin.surtitre} titre={t.besoin.titre} texte={t.besoin.texte} />
          <Btn href={localiser(lang, "/contact")} variante="sombre" taille="lg" fleche>
            {t.besoin.cta}
          </Btn>
        </Container>
      </Section>
    </>
  );
}
