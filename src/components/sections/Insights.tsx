import Image from "next/image";
import Link from "next/link";
import Carousel from "@/components/Carousel";
import Reveal from "@/components/Reveal";
import { Container, Section, TitreSection } from "@/components/ui";
import { img } from "@/lib/site";

/** Bloc 11 — « Réalisations » : une sélection de travaux, en loop-carousel. */
const ARTICLES = [
  {
    tag: "Scénographie",
    titre: "Donner vie aux espaces",
    texte:
      "Avant / après de transformation d’espaces à Bangui : quelques mètres carrés convertis en univers de marque, du plan à l’installation.",
    image: img.contenus[0],
  },
  {
    tag: "Territoire",
    titre: "Bangui, terrain de jeu",
    texte:
      "Série photographique valorisant la capitale centrafricaine — la ville comme décor et comme public des marques que nous accompagnons.",
    image: img.contenus[1],
  },
  {
    tag: "Marque",
    titre: "Série « Vrai ou Faux »",
    texte:
      "Format éditorial récurrent qui interroge les idées reçues sur la communication d’entreprise et installe KODÊ comme voix experte à Bangui.",
    image: img.contenus[2],
  },
];

export default function Insights() {
  return (
    <Section fond="gris">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <TitreSection
            surtitre="Réalisations"
            titre="Ce que nous avons conçu, produit et livré."
            texte="Campagnes, événements, prises de parole et transformations d’espaces : une sélection de travaux signés KODÊ à Bangui."
          />
          <Reveal delai={300} className="shrink-0 md:pb-2">
            <Link href="/labo" className="souligne-lien t-label text-encre">
              Toutes les réalisations
            </Link>
          </Reveal>
        </div>

        <div className="mt-12">
          <Carousel
            etiquette="Réalisations KODÊ"
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
                    href="/labo"
                    className="souligne-lien t-label-sm mt-auto inline-flex self-start pt-7 text-encre"
                  >
                    Voir
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
