import { Btn, Container, Section, TitreSection } from "@/components/ui";

/**
 * Bloc 6 du site de référence — section services pleine largeur :
 * titre + texte + bouton, sur fond gris quasi blanc.
 */
export default function ServicesBand() {
  return (
    <Section fond="gris">
      <Container>
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <TitreSection
            surtitre="Nos services"
            titre="Communication & événementiel en Centrafrique."
            texte="Douze expertises complémentaires. Notre terrain de prédilection : l’événement physique, de la scénographie au protocole, que peu d’agences couvrent réellement à Bangui."
            delai={300}
          />
          <div className="shrink-0">
            <Btn href="/services" variante="sombre" taille="lg" fleche>
              Découvrir toutes nos expertises
            </Btn>
          </div>
        </div>
      </Container>
    </Section>
  );
}
