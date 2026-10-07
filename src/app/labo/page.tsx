import type { Metadata } from "next";
import Insights from "@/components/sections/Insights";
import PageHero from "@/components/sections/PageHero";
import Reveal from "@/components/Reveal";
import { Btn, Container, Divider, Section, TitreSection } from "@/components/ui";
import { img, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Réalisations — campagnes, événements et scénographies",
  description:
    "Les réalisations de KODÊ à Bangui : campagnes, événements, prises de parole et transformations d’espaces conçus, produits et livrés par l’agence.",
  alternates: { canonical: "/labo" },
};

const A_VENIR = [
  {
    rubrique: "Campagne",
    titre: "Octobre Rose en RCA",
    texte:
      "Mobilisation contre le cancer du sein en Centrafrique : conception du visuel de campagne, message de prévention et diffusion sur les réseaux.",
  },
  {
    rubrique: "Événementiel",
    titre: "Un événement de 40 personnes",
    texte:
      "Format intimiste entièrement pris en charge : scénographie, art de la table, décoration et coordination du déroulé jusqu’à l’aftermovie.",
  },
  {
    rubrique: "Marque",
    titre: "« Ministère de l’Événementiel »",
    texte:
      "Campagne de marque décalée sous forme d’arrêtés officiels, qui défend l’exigence et l’exécution maîtrisée dans l’événementiel centrafricain.",
  },
] as const;

export default function Labo() {
  return (
    <>
      <PageHero
        surtitre="Réalisations"
        titre="Ce que nous avons conçu, produit et livré."
        texte="Campagnes, événements, prises de parole et transformations d’espaces. Une sélection de travaux signés KODÊ à Bangui."
        image={img.laboPage}
        fil="Réalisations"
      />

      {/* Réalisations (§5 bloc 11) */}
      <Insights />

      <Section fond="blanc">
        <Container>
          <TitreSection
            surtitre="Notre signature"
            titre="Avant. Après. La différence, c’est notre savoir-faire."
            texte="Chaque projet part du même point : comprendre ce que le client veut obtenir. Puis nous construisons — un message, un décor, une campagne — jusqu’à ce que le résultat se retienne."
          />

          <div className="mt-12 flex flex-col">
            {A_VENIR.map((sujet, i) => (
              <div key={sujet.titre}>
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
                  <p className="t-label-sm text-accent">Signé KODÊ</p>
                </div>
              </div>
            ))}
            <Divider />
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <p className="max-w-2xl text-[1rem] leading-relaxed text-encre/75">
              Vous avez travaillé avec KODÊ ? Nous préférons publier de vrais retours plutôt que
              des phrases inventées : votre témoignage a toute sa place ici.
            </p>
            <Btn
              href={waLink("Bonjour KODÊ, je souhaite laisser un témoignage.")}
              variante="contour"
              externe
              fleche
            >
              Laisser un témoignage
            </Btn>
          </div>
        </Container>
      </Section>
    </>
  );
}
