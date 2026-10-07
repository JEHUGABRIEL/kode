import Reveal from "@/components/Reveal";
import { Container, Overline, Section, Titre } from "@/components/ui";
import { Phone, WhatsApp } from "@/components/icons";
import { getDictionnaire } from "@/i18n/serveur";
import { site, waLink } from "@/lib/site";

const DELAIS = [300, 400] as const;

/**
 * Bloc 3 — Accroche et promesse, sur trois colonnes (§5).
 * « On en parle ? » / « Être compris » / « Ne rien improviser ».
 */
export default async function Promesse() {
  const { promesse, commun } = await getDictionnaire();

  return (
    <Section fond="blanc">
      <Container>
        <div className="grid gap-12 md:grid-cols-3 md:gap-10 lg:gap-14">
          <div>
            <Reveal delai={200}>
              <Overline>{promesse.surtitre}</Overline>
            </Reveal>
            <p className="mt-4 text-[1rem] leading-relaxed text-encre/75">{promesse.texte}</p>
            <div className="mt-6 flex flex-col items-start gap-3">
              <a
                href={`tel:${site.phoneRaw}`}
                className="souligne-lien inline-flex items-center gap-2.5 text-[0.95rem] font-semibold text-encre"
              >
                <Phone className="h-4 w-4" />
                {site.phoneDisplay}
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="souligne-lien inline-flex items-center gap-2.5 text-[0.95rem] font-semibold text-encre"
              >
                <WhatsApp className="h-4 w-4" />
                {commun.ecrireWhatsApp}
              </a>
            </div>
          </div>

          {promesse.colonnes.map((colonne, i) => (
            <div key={colonne.titre}>
              <Reveal delai={DELAIS[i]}>
                <Titre niveau={4}>{colonne.titre}</Titre>
              </Reveal>
              <p className="mt-4 text-[1rem] leading-relaxed text-encre/75">{colonne.texte}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
