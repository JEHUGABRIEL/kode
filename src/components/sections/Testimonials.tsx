import Image from "next/image";
import Carousel from "@/components/Carousel";
import { Quote } from "@/components/icons";
import { ColonneCollante, Container, Divider, Section, TitreSection } from "@/components/ui";
import { img } from "@/lib/site";

/**
 * Bloc 9 du site de référence (§5) : « Paroles de KODÊ ».
 * Grille 50/50 — titre, texte et filet d'un côté ; carrousel média de
 * l'autre (§9.4 : un `media-carousel` + un `loop-carousel`).
 *
 * KODÊ ne publie aucun témoignage inventé : le carrousel porte le
 * manifeste de l'agence en attendant de vrais retours clients signés.
 */
const temoignages = [
  {
    citation: "Une entreprise peut être visible sans vraiment être comprise.",
    fonction: "Manifeste KODÊ",
    secteur: "Konsulting",
    image: img.temoignages[0],
  },
  {
    citation: "Vous voyez un espace. Nous y voyons une expérience.",
    fonction: "Pôle Scénographie",
    secteur: "Events",
    image: img.temoignages[1],
  },
  {
    citation: "Chez KODÊ, on ne fait pas que publier. On fait parler les marques.",
    fonction: "Pôle Studio",
    secteur: "Contenus & digital",
    image: img.temoignages[2],
  },
];

export default function Testimonials() {
  return (
    <Section fond="gris">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <ColonneCollante>
            <TitreSection
              surtitre="Paroles de KODÊ"
              titre="Ce en quoi nous croyons."
              texte="« KODÊ est le maillon fort entre vous et vos objectifs. » Quelques convictions qui guident chaque projet, du premier appel au bilan final."
            />
            <Divider className="mt-10" />
            <p className="mt-6 max-w-xl text-[0.95rem] leading-relaxed text-encre/70">
              Nous préférons publier de vrais retours plutôt que des phrases inventées. Vous
              avez travaillé avec KODÊ ? Votre témoignage a toute sa place ici.
            </p>
          </ColonneCollante>

          <Carousel
            etiquette="Paroles de KODÊ"
            variante="media"
            slides={temoignages.map((temoignage) => (
              <figure key={temoignage.citation}>
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  <Image
                    src={temoignage.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <blockquote className="mt-7">
                  <Quote className="h-6 w-6 text-accent" />
                  <p className="t-serif mt-4 text-[1.25rem] leading-snug text-encre md:text-[1.5rem]">
                    « {temoignage.citation} »
                  </p>
                </blockquote>
                <figcaption className="t-label-sm mt-5 text-encre/60">
                  {temoignage.fonction} — {temoignage.secteur}
                </figcaption>
              </figure>
            ))}
          />
        </div>
      </Container>
    </Section>
  );
}
