import Image from "next/image";
import Link from "next/link";
import Carousel from "@/components/Carousel";
import Reveal from "@/components/Reveal";
import { Container, Section, TitreSection } from "@/components/ui";
import { localiser } from "@/i18n/config";
import { getDictionnaire, getLang } from "@/i18n/serveur";
import { img } from "@/lib/site";

/** Bloc 11 — « Réalisations » : une sélection de travaux, en loop-carousel. */
export default async function Insights() {
  const lang = await getLang();
  const dict = await getDictionnaire();
  const t = dict.realisations;
  const ARTICLES = t.items.map((item, i) => ({ ...item, image: img.contenus[i] }));
  const lienRealisations = localiser(lang, "/labo");

  return (
    <Section fond="gris">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <TitreSection
            surtitre={t.surtitre}
            titre={t.titre}
            texte={t.texte}
          />
          <Reveal delai={300} className="shrink-0 md:pb-2">
            <Link href={lienRealisations} className="souligne-lien t-label text-encre">
              {t.toutes}
            </Link>
          </Reveal>
        </div>

        <div className="mt-12">
          <Carousel
            etiquette={t.carrousel}
            textes={dict.carrousel}
            variante="boucle"
            slides={ARTICLES.map((article) => (
              <article key={article.titre} className="flex h-full flex-col bg-white">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={article.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 32vw, 88vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="t-label-sm text-encre/50">{article.tag}</span>
                  <h3 className="t-h5 mt-4">{article.titre}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-encre/75">{article.texte}</p>
                  <Link
                    href={lienRealisations}
                    className="souligne-lien t-label-sm mt-auto inline-flex self-start pt-7 text-encre"
                  >
                    {t.voir}
                  </Link>
                </div>
              </article>
            ))}
          />
        </div>
      </Container>
    </Section>
  );
}
