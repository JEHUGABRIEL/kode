import Image from "next/image";
import Link from "next/link";
import type React from "react";
import {
  Btn,
  Container,
  ListeIcones,
  Overline,
  Section,
  TitreSection,
} from "@/components/ui";
import { ArrowRight } from "@/components/icons";
import Reveal from "@/components/Reveal";
import { img } from "@/lib/site";

/**
 * Bloc 8 du site de référence (§5) : « Récentes réalisations ».
 * Une intro pleine largeur, puis QUATRE cartes empilées en colonne : même
 * gabarit 50/50 (texte à gauche, image à droite) dans un cadre bordé.
 * Chaque carte colle sous l'en-tête (`.pile-carte`) et la suivante remonte
 * pour la recouvrir pendant le défilement, comme sur le site de référence.
 *
 * Les visuels sont des photos de remplacement : à remplacer par les
 * vraies photos des réalisations KODÊ.
 */
const DELAIS = [200, 300, 400, 500] as const;

const projets = [
  {
    categorie: "Campagne",
    titre: "Octobre Rose en RCA",
    texte:
      "Mobilisation de KODÊ contre le cancer du sein en Centrafrique : conception du visuel de campagne, message de prévention et diffusion sur les réseaux, pour une cause qui concerne chaque famille.",
    livrables: ["Direction artistique", "Création de visuel", "Campagne sociale"],
    image: img.projets[0],
  },
  {
    categorie: "Événementiel",
    titre: "Un événement de 40 personnes",
    texte:
      "Format intimiste entièrement pris en charge : scénographie, art de la table, décoration et coordination du déroulé jusqu'à l'aftermovie. Quarante invités, aucun détail laissé au hasard.",
    livrables: ["Scénographie", "Décoration", "Coordination", "Aftermovie"],
    image: img.projets[1],
  },
  {
    categorie: "Marque",
    titre: "Série « Vrai ou Faux »",
    texte:
      "Format éditorial récurrent qui interroge les idées reçues sur la communication d'entreprise et installe KODÊ comme voix experte à Bangui.",
    livrables: ["Ligne éditoriale", "Design social", "Engagement"],
    image: img.projets[2],
  },
  {
    categorie: "Marque",
    titre: "« Ministère de l'Événementiel »",
    texte:
      "Campagne de marque décalée sous forme d'arrêtés officiels, qui défend l'exigence et l'exécution maîtrisée dans l'événementiel centrafricain.",
    livrables: ["Concept créatif", "Copywriting", "Série visuelle"],
    image: img.projets[3],
  },
];

export default function Projects() {
  return (
    <Section fond="blanc">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <TitreSection
            surtitre="Récentes réalisations"
            titre="Ce que nous avons signé dernièrement."
            texte="Campagnes, événements et prises de parole conçus et produits par KODÊ à Bangui."
          />
          <Reveal delai={300} className="shrink-0">
            <Btn href="/labo" variante="contour" fleche>
              Voir toutes les réalisations
            </Btn>
          </Reveal>
        </div>
      </Container>

      <Container>
        <div className="mt-14 flex flex-col gap-8 md:mt-20 md:gap-10 md:pb-10">
          {projets.map((projet, i) => (
            <article
              key={projet.titre}
              style={{ "--rang": i } as React.CSSProperties}
              className="pile-carte grid border border-bordure bg-white md:grid-cols-2"
            >
              <div className="flex flex-col justify-center p-7 md:px-[8%] md:py-12">
                <Overline ton="clair">{projet.categorie}</Overline>
                <Reveal delai={DELAIS[i]} className="mt-4">
                  <h3 className="t-h3 text-encre">{projet.titre}</h3>
                </Reveal>
                <p className="mt-5 text-[1rem] leading-relaxed text-encre/75 lg:text-justify">
                  {projet.texte}
                </p>
                <ListeIcones items={projet.livrables} className="mt-6" />
                <div className="mt-7">
                  <Link
                    href="/labo"
                    className="souligne-lien tr-couleur inline-flex items-center gap-5 font-mono text-[0.82rem] font-bold uppercase tracking-[0.12em] text-encre hover:text-accent"
                  >
                    Voir la réalisation
                    <ArrowRight className="h-[13px] w-[13px]" />
                  </Link>
                </div>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden bg-gris-clair md:my-12 md:aspect-auto md:min-h-[360px]">
                <Image
                  src={projet.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
