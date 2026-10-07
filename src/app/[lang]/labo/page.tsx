import type { Metadata } from "next";
import AvisSection from "@/components/AvisSection";
import Insights from "@/components/sections/Insights";
import PageHero from "@/components/sections/PageHero";
import Reveal from "@/components/Reveal";
import { Container, Divider, Section, TitreSection } from "@/components/ui";
import { alternates } from "@/i18n/config";
import { dictionnaire, getDictionnaire, getLang } from "@/i18n/serveur";
import { avisPublies, realisationsPubliees } from "@/lib/contenu";
import { img } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLang();
  const { pageRealisations } = await dictionnaire(lang);
  return {
    title: pageRealisations.meta.titre,
    description: pageRealisations.meta.description,
    alternates: alternates(lang, "/labo"),
  };
}

/** Réalisations (adresse `/labo` conservée pour l'architecture). */
export default async function Labo() {
  const lang = await getLang();
  const dict = await getDictionnaire();
  const t = dict.pageRealisations;
  const realisations = await realisationsPubliees();
  const avis = await avisPublies();

  return (
    <>
      <PageHero
        surtitre={t.hero.surtitre}
        titre={t.hero.titre}
        texte={t.hero.texte}
        image={img.laboPage}
        fil={dict.pages["/labo"]}
      />

      {/* Réalisations (§5 bloc 11) */}
      <Insights />

      <Section fond="blanc">
        <Container>
          <TitreSection surtitre={t.signature.surtitre} titre={t.signature.titre} texte={t.signature.texte} />

          <div className="mt-12 flex flex-col">
            {realisations.map(({ id, contenu }, i) => {
              const sujet = { rubrique: contenu[lang].categorie, titre: contenu[lang].titre, texte: contenu[lang].texte };
              return (
              <div key={id}>
                {i > 0 && <Divider />}
                <div className="grid gap-4 py-8 lg:grid-cols-[220px_1fr_auto] lg:items-baseline lg:gap-10">
                  <p className="t-label-sm text-encre/45">{sujet.rubrique}</p>
                  <div>
                    <Reveal delai={200}>
                      <h2 className="t-h5">{sujet.titre}</h2>
                    </Reveal>
                    <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-encre/75">
                      {sujet.texte}
                    </p>
                  </div>
                  <p className="t-label-sm text-accent">{t.signature.signe}</p>
                </div>
              </div>
              );
            })}
            <Divider />
          </div>
        </Container>
      </Section>

      {/* Laisser un avis : le formulaire se déplie au clic */}
      <AvisSection textes={dict.avis} avis={avis} lang={lang} />
    </>
  );
}
