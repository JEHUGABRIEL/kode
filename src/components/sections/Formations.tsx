import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Check } from "@/components/icons";
import Reveal from "@/components/Reveal";
import { Btn, Container, Section, TitreSection } from "@/components/ui";
import { img } from "@/lib/site";

/**
 * Bloc 10 du site de référence (§5) : « Pôle Events ».
 * Des cartes de formats d'événements, empilées en colonne : chacune colle
 * sous l'en-tête (`.pile-carte`) et la suivante remonte pour la recouvrir.
 * Aucun prix n'est affiché : chaque événement fait l'objet d'un devis.
 */
const DELAIS = [200, 300, 400] as const;

const formations = [
  {
    image: img.formations[0],
    duree: "Entreprises · institutions",
    titre: "Séminaires & conférences",
    texte:
      "Lancements de produit, assemblées générales, ateliers, forums et conventions d'entreprise.",
    modules: ["Plan de salle", "Régie technique", "Badges & accueil", "Captation"],
  },
  {
    image: img.formations[1],
    duree: "Institutions · officiels",
    titre: "Cérémonies officielles",
    texte:
      "Inaugurations, remises de diplômes, signatures de convention et cérémonies institutionnelles.",
    modules: ["Protocole", "Placement officiel", "Maître de cérémonie", "Couverture presse"],
  },
  {
    image: img.formations[2],
    duree: "Familles · Bangui et province",
    titre: "Mariages & grandes célébrations",
    texte:
      "Mariages, dots, anniversaires, baptêmes et fêtes de famille à Bangui et en province.",
    modules: ["Décoration", "Art de la table", "Photocall", "Coordination jour J"],
  },
];

export default function Formations() {
  return (
    <Section fond="blanc">
      <Container>
        <TitreSection
          surtitre="Pôle Events"
          titre="Tous les formats, du comité restreint au grand rassemblement."
          texte="Quarante personnes autour d’une table ou plusieurs centaines sous chapiteau : la méthode est la même, seule l’échelle change."
        />

        <div className="mt-12 flex flex-col gap-8 md:mt-16 md:gap-10">
          {formations.map((formation, i) => (
            <article
              key={formation.titre}
              style={{ "--rang": i } as React.CSSProperties}
              className="pile-carte grid border border-bordure bg-white md:grid-cols-2"
            >
              <div className="flex flex-col justify-center p-7 md:px-[8%] md:py-12">
                <p className="t-label-sm flex items-center gap-2.5 text-encre/55">
                  <Award className="h-4 w-4 text-accent" />
                  {formation.duree}
                </p>

                <Reveal delai={DELAIS[i]} className="mt-4">
                  <h3 className="t-h4 text-encre">{formation.titre}</h3>
                </Reveal>

                <p className="mt-5 text-[0.98rem] leading-relaxed text-encre/75">{formation.texte}</p>

                <ul className="mt-6 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                  {formation.modules.map((module) => (
                    <li key={module} className="flex items-start gap-3 text-[0.92rem] leading-relaxed">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-accent" />
                      <span className="text-encre/80">{module}</span>
                    </li>
                  ))}
                </ul>

                <p className="t-label-sm mt-7 border-t border-bordure pt-5 text-encre/55">
                  Pris en charge du concept au démontage
                </p>

                <Link
                  href="/formations"
                  className="souligne-lien t-label-sm tr-couleur mt-5 inline-flex items-center gap-2 self-start text-encre"
                >
                  Voir le pôle Events
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden bg-gris-clair md:my-12 md:aspect-auto md:min-h-[360px]">
                <Image
                  src={formation.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 md:mt-14">
          <Btn href="/formations" variante="sombre" fleche>
            Tous nos formats d’événements
          </Btn>
        </div>
      </Container>
    </Section>
  );
}
