import Image from "next/image";
import Carousel from "@/components/Carousel";
import Link from "next/link";
import { Quote, Star } from "@/components/icons";
import { ColonneCollante, Container, Divider, Section, TitreSection } from "@/components/ui";
import { localiser } from "@/i18n/config";
import { getDictionnaire, getLang } from "@/i18n/serveur";
import { img } from "@/lib/site";

/**
 * Bloc 9 du site de référence (§5) : « Paroles de KODÊ ».
 * Grille 50/50 — titre, texte et filet d'un côté ; carrousel média de
 * l'autre (§9.4 : un `media-carousel` + un `loop-carousel`).
 *
 * KODÊ ne publie aucun témoignage inventé : le carrousel porte le
 * manifeste de l'agence en attendant de vrais retours clients signés.
 */
export default async function Testimonials() {
  const lang = await getLang();
  const dict = await getDictionnaire();
  const t = dict.paroles;
  const temoignages = t.items.map((item, i) => ({ ...item, image: img.temoignages[i] }));

  return (
    <Section fond="gris">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <ColonneCollante>
            <TitreSection
              surtitre={t.surtitre}
              titre={t.titre}
              texte={t.texte}
            />
            <Divider className="mt-10" />
            <p className="mt-6 max-w-xl text-[0.95rem] leading-relaxed text-encre/70">
              {t.note}
            </p>
            <Link
              href={localiser(lang, "/labo#avis")}
              className="souligne-lien tr-couleur mt-6 inline-flex items-center gap-2.5 font-mono text-[0.82rem] font-bold uppercase tracking-[0.12em] text-encre hover:text-accent"
            >
              <Star className="h-4 w-4 text-accent" />
              {t.laisserAvis}
            </Link>
          </ColonneCollante>

          <Carousel
            etiquette={t.carrousel}
            textes={dict.carrousel}
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
                    {lang === "fr" ? `« ${temoignage.citation} »` : `“${temoignage.citation}”`}
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
