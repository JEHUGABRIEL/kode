import FlipBox from "@/components/FlipBox";
import { Container, Section, TitreSection } from "@/components/ui";
import { localiser } from "@/i18n/config";
import { getDictionnaire, getLang } from "@/i18n/serveur";
import { img } from "@/lib/site";

/* Destination du bouton de chaque pôle : Konsulting, Events, Studio. */
const LIENS = ["/services", "/formations", "/services"] as const;

/**
 * Bloc 4 — Trois pôles (§5).
 * Trois flip-box « direction-left » : le verso balaie le recto en 570 ms
 * et présente une icon-list, un titre et un bouton (§9.1).
 */
export default async function Metiers() {
  const lang = await getLang();
  const { metiers } = await getDictionnaire();

  return (
    <Section fond="gris">
      <Container>
        <TitreSection surtitre={metiers.surtitre} titre={metiers.titre} texte={metiers.texte} />

        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-16">
          {metiers.cartes.map((carte, i) => (
            <FlipBox
              key={carte.titre}
              image={img.metiers[i]}
              titre={carte.titre}
              accroche={carte.accroche}
              points={carte.points}
              href={localiser(lang, LIENS[i])}
              cta={carte.cta}
              sens="gauche"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
