import type { Metadata } from "next";
import Image from "next/image";
import Careers from "@/components/sections/Careers";
import Metiers from "@/components/sections/Metiers";
import PageHero from "@/components/sections/PageHero";
import Reveal from "@/components/Reveal";
import { Btn, Container, Divider, ListeIcones, Section, Spacer, TitreSection } from "@/components/ui";
import { img, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "L’Agence — qui sommes-nous",
  description:
    "KODÊ est une agence créative centrafricaine qui réunit le conseil en communication, l’événementiel et la production de contenus, à Bangui.",
  alternates: { canonical: "/agence" },
};

const VALEURS = [
  {
    nom: "Exigence",
    texte:
      "« Toute forme d’approximation constitue un délit contre l’excellence. » Nous préférons dire non à un délai qu’à la qualité.",
  },
  {
    nom: "Ancrage",
    texte:
      "Nous sommes centrafricains. Nous connaissons les codes, les langues, les réseaux et les contraintes réelles du terrain à Bangui.",
  },
  {
    nom: "Anticipation",
    texte:
      "Les imprévus arrivent toujours. Quand ils arrivent chez nous, ils ont déjà été envisagés et solutionnés en amont.",
  },
  {
    nom: "Transparence",
    texte:
      "Un budget annoncé est un budget tenu. Vous savez ce que vous payez, à qui et pourquoi, avant de signer.",
  },
] as const;

export default function Agence() {
  return (
    <>
      <PageHero
        surtitre="L’Agence"
        titre="Plus qu’une agence, le maillon fort entre vous et vos objectifs."
        texte={`KODÊ est une agence créative centrafricaine qui réunit le conseil en communication, l’événementiel et la production de contenus. Nous travaillons à ${site.city}, pour des marques, des institutions et des particuliers qui veulent être compris, pas seulement vus.`}
        image={img.agence}
        fil="L’Agence"
      />

      {/* Notre histoire */}
      <Section fond="blanc">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <TitreSection
                surtitre="Notre histoire"
                titre="Née à Bangui, pensée pour la Centrafrique."
              />
              <div className="mt-6 flex flex-col gap-5 text-[1rem] leading-relaxed text-encre/75">
                <p>
                  KODÊ est née d’un constat simple : en Centrafrique, beaucoup d’entreprises
                  communiquent sans stratégie, et beaucoup d’événements se décident trois jours
                  avant le jour J. Résultat : des budgets dépensés sans résultat mesurable, et des
                  événements qui tiennent debout sans jamais marquer les esprits.
                </p>
                <p>
                  Nous avons construit une agence qui refuse ce fonctionnement. Un seul
                  interlocuteur, une méthode écrite, un budget annoncé dès le départ, et une
                  exigence d’exécution qui ne se négocie pas.
                </p>
                <p>
                  KODÊ, c’est la rencontre de deux métiers : le conseil en communication —
                  comprendre, positionner, raconter — et l’événementiel — concevoir, produire,
                  coordonner. Les deux se nourrissent : un bon événement est un acte de
                  communication, et une bonne communication a besoin de moments réels.
                </p>
              </div>
              <Spacer taille="m" />
              <ListeIcones
                items={[
                  "Une équipe pluridisciplinaire basée à Bangui, disponible sur le terrain",
                  "Douze expertises internalisées, de la stratégie à l’impression",
                  "Un accompagnement en français et en sango, selon vos publics",
                ]}
              />
              <Spacer taille="m" />
              <Btn href="/contact" variante="sombre" fleche>
                Travailler avec nous
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
                <p className="t-label-sm text-encre/60">Notre implantation</p>
                <p className="t-h5 mt-3">
                  {site.city} — RCA
                </p>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-encre/75">
                  {site.address}. Une équipe basée à Bangui, mobilisable dans toute la
                  République Centrafricaine.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Nos valeurs */}
      <Section fond="gris">
        <Container>
          <TitreSection
            surtitre="Notre raison d’être"
            titre="Donner à chaque marque une image, une voix et une place."
            texte="Une entreprise peut être visible sans vraiment être comprise. Notre travail consiste à combler cet écart : transformer de la présence en compréhension, et de la compréhension en préférence."
          />
          <div className="mt-12 grid gap-px bg-bordure md:grid-cols-2 lg:grid-cols-4">
            {VALEURS.map((valeur, i) => (
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
            <TitreSection
              surtitre="Notre méthode"
              titre="Cinq étapes, aucune impro."
              texte="« L’improvisation peut créer une surprise. Elle ne crée pas une stratégie. » Écoute, stratégie, création, exécution, mesure : le chemin que suit chaque projet confié à KODÊ."
            />
            <Btn href="/services" variante="contour" fleche>
              Voir nos expertises
            </Btn>
          </div>
        </Container>
      </Section>

      <Careers />
    </>
  );
}
