import Reveal from "@/components/Reveal";
import { Container, Overline, Section, Titre } from "@/components/ui";
import { Phone, WhatsApp } from "@/components/icons";
import { site, waLink } from "@/lib/site";

/**
 * Bloc 3 — Accroche et promesse, sur trois colonnes (§5).
 * « On en parle ? » / « Être compris » / « Ne rien improviser ».
 */
export default function Promesse() {
  return (
    <Section fond="blanc">
      <Container>
        <div className="grid gap-12 md:grid-cols-3 md:gap-10 lg:gap-14">
          <div>
            <Reveal delai={200}>
              <Overline>On en parle ?</Overline>
            </Reveal>
            <p className="mt-4 text-[1rem] leading-relaxed text-encre/75">
              Écrivez-nous : nous répondons sous 24 heures. Le premier échange et le devis sont
              gratuits, sans engagement.
            </p>
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
                Écrire sur WhatsApp
              </a>
            </div>
          </div>

          <div>
            <Reveal delai={300}>
              <Titre niveau={4}>Être compris</Titre>
            </Reveal>
            <p className="mt-4 text-[1rem] leading-relaxed text-encre/75">
              Une entreprise peut être visible sans vraiment être comprise. Une bonne communication ne
              se contente pas de faire parler de vous : elle vous donne une image, une voix et une
              place dans l’esprit du public.
            </p>
          </div>

          <div>
            <Reveal delai={400}>
              <Titre niveau={4}>Ne rien improviser</Titre>
            </Reveal>
            <p className="mt-4 text-[1rem] leading-relaxed text-encre/75">
              L’improvisation peut créer une surprise. Elle ne crée pas une stratégie. Écoute,
              stratégie, création, exécution, mesure : chaque projet suit la même méthode, et les
              imprévus ont déjà été envisagés.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
