import type { Metadata } from "next";
import Image from "next/image";
import Careers from "@/components/sections/Careers";
import Metiers from "@/components/sections/Metiers";
import PageHero from "@/components/sections/PageHero";
import Reveal from "@/components/Reveal";
import { Btn, Container, Divider, ListeIcones, Section, Spacer, TitreSection } from "@/components/ui";
import { alternates, localiser } from "@/i18n/config";
import { dictionnaire, getDictionnaire, getLang } from "@/i18n/serveur";
import { img, site } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLang();
  const { agence } = await dictionnaire(lang);
  return {
    title: agence.meta.titre,
    description: agence.meta.description,
    alternates: alternates(lang, "/agence"),
  };
}

export default async function Agence() {
  const lang = await getLang();
  const dict = await getDictionnaire();
  const t = dict.agence;

  return (
    <>
      <PageHero
        surtitre={t.hero.surtitre}
        titre={t.hero.titre}
        texte={t.hero.texte}
        image={img.agence}
        fil={dict.pages["/agence"]}
      />

      {/* Notre histoire */}
      <Section fond="blanc">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <TitreSection surtitre={t.histoire.surtitre} titre={t.histoire.titre} />
              <div className="mt-6 flex flex-col gap-5 text-[1rem] leading-relaxed text-encre/75">
                {t.histoire.paragraphes.map((paragraphe) => (
                  <p key={paragraphe}>{paragraphe}</p>
                ))}
              </div>
              <Spacer taille="m" />
              <ListeIcones items={t.histoire.liste} />
              <Spacer taille="m" />
              <Btn href={localiser(lang, "/contact")} variante="sombre" fleche>
                {t.histoire.cta}
              </Btn>
            </div>

            <div className="flex flex-col gap-6">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={img.agenceEquipe}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="border border-bordure p-6">
                <p className="t-label-sm text-encre/60">{t.implantation.etiquette}</p>
                <p className="t-h5 mt-3">
                  {site.city} — {dict.commun.rca}
                </p>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-encre/75">
                  {dict.commun.adresse}. {t.implantation.texte}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Nos valeurs */}
      <Section fond="gris">
        <Container>
          <TitreSection surtitre={t.valeurs.surtitre} titre={t.valeurs.titre} texte={t.valeurs.texte} />
          <div className="mt-12 grid gap-px bg-bordure md:grid-cols-2 lg:grid-cols-4">
            {t.valeurs.items.map((valeur, i) => (
              <div key={valeur.nom} className="bg-gris-clair p-7">
                <p className="t-label-sm text-accent">{`0${i + 1}`}</p>
                <Reveal delai={((200 + i * 100) as 200 | 300 | 400 | 500)} className="mt-4">
                  <h3 className="t-h5">{valeur.nom}</h3>
                </Reveal>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-encre/75">{valeur.texte}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Les trois pôles (§5 bloc 4) */}
      <Metiers />

      <Section fond="blanc">
        <Container>
          <Divider />
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <TitreSection surtitre={t.methode.surtitre} titre={t.methode.titre} texte={t.methode.texte} />
            <Btn href={localiser(lang, "/services")} variante="contour" fleche>
              {t.methode.cta}
            </Btn>
          </div>
        </Container>
      </Section>

      <Careers fond="gris" />
    </>
  );
}
