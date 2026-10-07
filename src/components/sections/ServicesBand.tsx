import { Btn, Container, Section, TitreSection } from "@/components/ui";
import { localiser } from "@/i18n/config";
import { getDictionnaire, getLang } from "@/i18n/serveur";

/**
 * Bloc 6 du site de référence — section services pleine largeur :
 * titre + texte + bouton, sur fond gris quasi blanc.
 */
export default async function ServicesBand() {
  const lang = await getLang();
  const { servicesBande: t } = await getDictionnaire();

  return (
    <Section fond="gris">
      <Container>
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <TitreSection
            surtitre={t.surtitre}
            titre={t.titre}
            texte={t.texte}
            delai={300}
          />
          <div className="shrink-0">
            <Btn href={localiser(lang, "/services")} variante="sombre" taille="lg" fleche>
              {t.cta}
            </Btn>
          </div>
        </div>
      </Container>
    </Section>
  );
}
