import Image from "next/image";
import Link from "next/link";
import type React from "react";
import {
  Btn,
  Container,
  ListeIcones,
  Overline,
  Section,
  TitreSection,
} from "@/components/ui";
import { ArrowRight } from "@/components/icons";
import Reveal from "@/components/Reveal";
import { localiser } from "@/i18n/config";
import { getDictionnaire, getLang } from "@/i18n/serveur";
import { realisationsPubliees } from "@/lib/contenu";

/**
 * Bloc 8 du site de référence (§5) : « Récentes réalisations ».
 * Une intro pleine largeur, puis QUATRE cartes empilées en colonne : même
 * gabarit 50/50 (texte à gauche, image à droite) dans un cadre bordé.
 * Chaque carte colle sous l'en-tête (`.pile-carte`) et la suivante remonte
 * pour la recouvrir pendant le défilement, comme sur le site de référence.
 *
 * Les visuels sont des photos de remplacement : à remplacer par les
 * vraies photos des réalisations KODÊ.
 */
const DELAIS = [200, 300, 400, 500] as const;

export default async function Projects() {
  const lang = await getLang();
  const { projets: t } = await getDictionnaire();
  /* Les quatre premières réalisations publiées, dans l'ordre du back-office. */
  const projets = (await realisationsPubliees())
    .slice(0, 4)
    .map((r) => ({ ...r.contenu[lang], image: r.imageUrl, id: r.id }));
  const lienRealisations = localiser(lang, "/labo");

  return (
    <Section fond="blanc">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <TitreSection
            surtitre={t.surtitre}
            titre={t.titre}
            texte={t.texte}
          />
          <Reveal delai={300} className="shrink-0">
            <Btn href={lienRealisations} variante="contour" fleche>
              {t.cta}
            </Btn>
          </Reveal>
        </div>
      </Container>

      <Container>
        <div className="mt-14 flex flex-col gap-8 md:mt-20 md:gap-10 md:pb-10">
          {projets.map((projet, i) => (
            <article
              key={projet.id}
              style={{ "--rang": i } as React.CSSProperties}
              className="pile-carte grid border border-bordure bg-white md:grid-cols-2"
            >
              <div className="flex flex-col justify-center p-7 md:px-[8%] md:py-12">
                <Overline ton="clair">{projet.categorie}</Overline>
                <Reveal delai={DELAIS[i]} className="mt-4">
                  <h3 className="t-h3 text-encre">{projet.titre}</h3>
                </Reveal>
                <p className="mt-5 text-[1rem] leading-relaxed text-encre/75 lg:text-justify">
                  {projet.texte}
                </p>
                <ListeIcones items={projet.livrables} className="mt-6" />
                <div className="mt-7">
                  <Link
                    href={lienRealisations}
                    className="souligne-lien tr-couleur inline-flex items-center gap-5 font-mono text-[0.82rem] font-bold uppercase tracking-[0.12em] text-encre hover:text-accent"
                  >
                    {t.voir}
                    <ArrowRight className="h-[13px] w-[13px]" />
                  </Link>
                </div>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden bg-gris-clair md:my-12 md:aspect-auto md:min-h-[360px]">
                {projet.image && (
                  <Image
                    src={projet.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                )}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
