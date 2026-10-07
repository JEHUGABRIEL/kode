import FlipBox from "@/components/FlipBox";
import { Container, Section, TitreSection } from "@/components/ui";
import { img } from "@/lib/site";

/**
 * Bloc 4 — Trois pôles (§5).
 * Trois flip-box « direction-left » : le verso balaie le recto en 570 ms
 * et présente une icon-list, un titre et un bouton (§9.1).
 */
export default function Metiers() {
  return (
    <Section fond="gris">
      <Container>
        <TitreSection
          surtitre="Notre organisation"
          titre="Trois pôles, une seule équipe."
          texte="KODÊ réunit sous un même toit le conseil, l’événementiel et la production. Vous ne coordonnez plus cinq prestataires : vous parlez à une équipe qui tient la chaîne de bout en bout."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-16">
          <FlipBox
            image={img.metiers[0]}
            titre="Pôle Konsulting"
            accroche="Stratégie · Audit · Plan de com · Media training"
            points={[
              "Comprendre votre marché, votre public et vos objectifs",
              "Stratégie, positionnement et plan d’action",
              "Accompagnement sur la durée et media training",
            ]}
            href="/services"
            cta="Voir nos services"
            sens="gauche"
          />

          <FlipBox
            image={img.metiers[1]}
            titre="Pôle Events"
            accroche="La signature KODÊ"
            points={[
              "Conception, scénographie et décoration",
              "Logistique, protocole et location de matériel",
              "L’événement pris en charge, du concept au démontage",
            ]}
            href="/formations"
            cta="Découvrir le pôle Events"
            sens="gauche"
          />

          <FlipBox
            image={img.metiers[2]}
            titre="Pôle Studio"
            accroche="Branding · Digital · Audiovisuel · Impressions · Web"
            points={[
              "Identité visuelle et supports de marque",
              "Contenus sociaux, photo et vidéo",
              "Impressions, signalétique et site web",
            ]}
            href="/services"
            cta="Voir nos services"
            sens="gauche"
          />
        </div>
      </Container>
    </Section>
  );
}
