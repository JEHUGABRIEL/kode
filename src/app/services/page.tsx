import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ServicesBand from "@/components/sections/ServicesBand";
import ServicesCards from "@/components/sections/ServicesCards";
import Targets from "@/components/sections/Targets";
import Reveal from "@/components/Reveal";
import { Btn, Container, Section, TitreSection } from "@/components/ui";
import { img } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services — communication et événementiel",
  description:
    "Les douze expertises de KODÊ à Bangui : stratégie, branding, marketing digital, publicité, organisation d’événements, scénographie, décoration, protocole, location de matériel, impressions, audiovisuel et site web.",
  alternates: { canonical: "/services" },
};

/** Catalogue complet — repris dans la longue liste d'expertises du pied de page. */
const EXPERTISES = [
  {
    nom: "Stratégie & conseil en communication",
    texte:
      "Avant de communiquer, il faut comprendre. Nous posons un diagnostic, définissons votre positionnement et bâtissons un plan de communication qui tient dans la durée.",
    tags: ["Audit", "Plan de com 360°", "Messages clés", "Media training", "Gestion de crise"],
  },
  {
    nom: "Branding & identité visuelle",
    texte:
      "Un logo ne suffit pas. Nous construisons une identité complète — nom, signes, couleurs, ton de voix — pour que votre marque soit reconnue au premier coup d’œil.",
    tags: ["Logo", "Charte graphique", "Naming & baseline", "Storytelling", "Refonte"],
  },
  {
    nom: "Marketing digital & réseaux sociaux",
    texte:
      "Nous animons vos pages avec une ligne éditoriale, un calendrier et des contenus pensés pour l’audience centrafricaine — pas pour l’algorithme seul.",
    tags: ["Community management", "Ligne éditoriale", "Publicité Facebook & Instagram", "Rapports"],
  },
  {
    nom: "Publicité & médias",
    texte:
      "De la radio nationale à l’affichage urbain, de l’activation terrain au street marketing : nous plaçons votre message là où votre public se trouve réellement.",
    tags: ["Spots radio & TV", "Affichage urbain", "Activation BTL", "Achat d’espace"],
  },
  {
    nom: "Organisation d’événements",
    texte:
      "Le cœur de KODÊ. Conception, budget, logistique, coordination du jour J : nous prenons l’événement en charge de bout en bout pour que vous puissiez le vivre.",
    tags: ["Signature KODÊ", "Concept", "Budgétisation", "Logistique", "Coordination jour J"],
  },
  {
    nom: "Scénographie & design d’espace",
    texte:
      "« Vous voyez un espace. Nous y voyons une expérience. » Plan de salle, volumes, lumière et parcours invité : l’espace devient un récit.",
    tags: ["Signature KODÊ", "Plan de salle 2D", "Design de stand", "Mise en lumière"],
  },
  {
    nom: "Décoration & aménagement",
    texte:
      "Mobilier, textiles, floral, vaisselle, signalétique décorative : chaque détail est choisi pour servir l’émotion que vous voulez provoquer.",
    tags: ["Signature KODÊ", "Décoration thématique", "Art de la table", "Photocall"],
  },
  {
    nom: "Protocole, hôtesses & accueil",
    texte:
      "L’image de votre événement se joue dès la porte. Équipe d’accueil formée, placement des officiels, gestion du déroulé : rien n’est laissé au hasard.",
    tags: ["Signature KODÊ", "Hôtesses", "Maître de cérémonie", "Accréditations"],
  },
  {
    nom: "Location de matériel événementiel",
    texte:
      "Sonorisation, lumière, scène, tentes, mobilier : un parc de matériel et des partenaires fiables à Bangui, livrés, installés et opérés par nos équipes.",
    tags: ["Signature KODÊ", "Sonorisation", "Éclairage", "Scène", "Tentes"],
  },
  {
    nom: "Impressions & signalétique",
    texte:
      "Cartes de visite, bâches, roll-ups, kakemonos, flyers, goodies, habillage véhicule : vos supports physiques produits au bon format et au bon moment.",
    tags: ["Signature KODÊ", "Bâches & roll-ups", "Goodies", "Habillage véhicule"],
  },
  {
    nom: "Production audiovisuelle & contenu",
    texte:
      "Photo, vidéo, aftermovie, reportage institutionnel, motion design : des contenus qui font vivre votre marque bien après la fin de l’événement.",
    tags: ["Shooting photo", "Film institutionnel", "Aftermovie", "Captation live"],
  },
  {
    nom: "Site web & présence en ligne",
    texte:
      "Un site vitrine clair, rapide et mobile-first, plus une fiche Google à jour : les deux points de contact que vos clients cherchent en premier.",
    tags: ["Site vitrine", "Landing page", "Fiche Google", "Référencement local"],
  },
] as const;

export default function Services() {
  return (
    <>
      <PageHero
        surtitre="Nos services"
        titre="Douze expertises, un seul interlocuteur."
        texte="De la réflexion stratégique à l’impression du dernier badge, KODÊ couvre toute la chaîne. Vous choisissez une prestation isolée ou l’accompagnement complet — les deux fonctionnent."
        image={img.servicesPage}
        fil="Services"
      />

      <Section fond="blanc">
        <Container>
          <TitreSection
            surtitre="Catalogue complet"
            titre="Tout ce que KODÊ peut prendre en charge."
            texte="Chaque service peut être commandé seul. Assemblés, ils forment un dispositif de communication 360° cohérent, piloté par la même équipe."
            delai={300}
          />

          <div className="mt-14 grid gap-px bg-bordure md:grid-cols-2 lg:grid-cols-3">
            {EXPERTISES.map((expertise, i) => (
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
          <TitreSection
            surtitre="Un besoin précis ?"
            titre="Un devis en 24 heures."
            texte="Dites-nous ce que vous voulez obtenir et sous quel délai. Nous revenons vers vous avec une proposition chiffrée, sans engagement."
          />
          <Btn href="/contact" variante="sombre" taille="lg" fleche>
            Demander un devis
          </Btn>
        </Container>
      </Section>
    </>
  );
}
