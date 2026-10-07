import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Check } from "@/components/icons";
import Reveal from "@/components/Reveal";
import { Btn, Container, Section, TitreSection } from "@/components/ui";
import { localiser } from "@/i18n/config";
import { getDictionnaire, getLang } from "@/i18n/serveur";
import { img } from "@/lib/site";

/**
 * Bloc 10 du site de référence (§5) : « Pôle Events ».
 * Des cartes de formats d'événements, empilées en colonne : chacune colle
 * sous l'en-tête (`.pile-carte`) et la suivante remonte pour la recouvrir.
 * Aucun prix n'est affiché : chaque événement fait l'objet d'un devis.
 */
const DELAIS = [200, 300, 400] as const;

export default async function Formations() {
  const lang = await getLang();
  const { events: t } = await getDictionnaire();
  const formations = t.items.map((item, i) => ({ ...item, image: img.formations[i] }));
  const lienEvents = localiser(lang, "/formations");

  return (
    <Section fond="blanc">
      <Container>
        <TitreSection
          surtitre={t.surtitre}
          titre={t.titre}
          texte={t.texte}
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
                  {formation.public}
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
                  {t.priseEnCharge}
                </p>

                <Link
                  href={lienEvents}
                  className="souligne-lien t-label-sm tr-couleur mt-5 inline-flex items-center gap-2 self-start text-encre"
                >
                  {t.voirPole}
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
          <Btn href={lienEvents} variante="sombre" fleche>
            {t.cta}
          </Btn>
        </div>
      </Container>
    </Section>
  );
}
