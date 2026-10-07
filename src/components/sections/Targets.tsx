import Image from "next/image";
import Link from "next/link";
import { assets } from "@/lib/site";
import Accordion, { type AccordeonItem } from "@/components/Accordion";
import { ArrowRight } from "@/components/icons";
import Reveal from "@/components/Reveal";
import { Container, Section } from "@/components/ui";

/**
 * Bloc 7 du site de référence — « Nos cibles », gabarit 50/50 sur fond
 * sombre : grand visuel à gauche (le logo KODÊ), accordéon à droite. Un en-tête par profil de client,
 * chacun ouvrant ses solutions et les packs recommandés.
 */
const CIBLES: AccordeonItem[] = [
  {
    titre: "Entrepreneurs & marques personnelles",
    points: [
      "Personal branding : positionnement, récit et identité visuelle cohérents",
      "Contenu social : photo, vidéo et citations pour nourrir vos pages chaque semaine",
      "Présence en ligne : site vitrine, fiche Google et bio homogène sur tous les réseaux",
      "Relations presse : interviews, passages radio et parutions dans les médias locaux",
      "Pack Visibilité (branding + réseaux sociaux) ou Pack Autorité (site web + contenu + presse)",
    ],
  },
  {
    titre: "PME, commerces & startups",
    points: [
      "Identité & supports : logo, charte, enseigne, cartes, bâches et habillage de point de vente",
      "Acquisition digitale : pages animées, publicités ciblées et messages qui convertissent",
      "Activation terrain : animations commerciales, jeux concours et street marketing à Bangui",
      "Mesure : rapport mensuel simple — ce qui a marché, ce qu’on arrête, ce qu’on augmente",
      "Pack Croissance (digital + print + terrain) ou Pack Lancement (branding + site + campagne)",
    ],
  },
  {
    titre: "Institutions, ONG & projets",
    points: [
      "Plan de communication : stratégie intégrée digital + médias traditionnels, alignée sur vos bailleurs",
      "Événements institutionnels : ateliers, forums, lancements, cérémonies officielles et protocole",
      "Production de contenu : reportages, films d’impact, infographies et rapports illustrés",
      "Mobilisation : campagnes de sensibilisation et relais communautaires en sango et en français",
      "Pack Impact (stratégie + mass media + presse) ou Pack Terrain (événementiel + contenu + mobilisation)",
    ],
  },
  {
    titre: "Particuliers & grandes célébrations",
    points: [
      "Conception du concept : thème, ambiance, palette et parcours des invités définis en amont",
      "Décoration & scénographie : mise en scène complète de la salle, de l’entrée à la piste",
      "Coordination jour J : un interlocuteur unique qui tient le déroulé minute par minute",
      "Souvenirs : photo, vidéo, aftermovie et supports personnalisés pour les invités",
      "Pack Célébration (déco + coordination) ou Pack Prestige (clé en main de A à Z)",
    ],
  },
];

export default function Targets() {
  return (
    <Section fond="brun" className="overflow-hidden lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Le logo KODÊ remplace la fusée du site de référence. Son fond est
              le brun de la section : un masque radial fond les bords, et le
              logo pivote doucement pendant la descente (Motion FX 2, §7). */}
          <div className="relative mx-auto aspect-square w-full max-w-[560px]">
            <div className="fx-rotation-douce absolute inset-0">
              <Image
                src={assets.logoCarre}
                alt="KODÊ — Konsulting · Events"
                fill
                sizes="(min-width: 1024px) 560px, 90vw"
                className="object-contain [mask-image:radial-gradient(circle_at_center,#000_60%,transparent_85%)]"
              />
            </div>
          </div>

          <div>
            <Reveal delai={200}>
              <h2 className="t-h1 uppercase text-white">Nos cibles</h2>
            </Reveal>
            <p className="t-label mt-6 text-accent">
              Nous savons ce qui marche pour chaque type de client.
            </p>
            <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-attenue-clair">
              Les problèmes ne sont pas les mêmes selon que vous êtes entrepreneur, commerçant,
              institution ou famille qui prépare une grande célébration. Nos offres sont
              construites par situation, pas par catalogue.
            </p>

            <div className="mt-10 max-w-xl">
              <Accordion items={CIBLES} ton="sombre" premierOuvert={false} />
            </div>

            <Link
              href="/contact"
              className="souligne-lien tr-couleur mt-12 inline-flex items-center gap-4 font-mono text-[0.85rem] font-bold uppercase tracking-[0.12em] text-white hover:text-accent"
            >
              Trouver mon offre
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
