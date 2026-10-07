import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "@/components/icons";
import Reveal from "@/components/Reveal";
import { Container } from "@/components/ui";
import { localiser } from "@/i18n/config";
import { getDictionnaire, getLang } from "@/i18n/serveur";

/* Même conteneur que le héros de l'accueil : 1280 px, filets verticaux. */
const CONTENEUR = "mx-auto w-full max-w-[1280px]";

/**
 * Bandeau d'en-tête des pages internes — même gabarit que le héros de
 * l'accueil : bloc blanc bordé de filets (fil d'Ariane, « / sur-titre »,
 * H1 en capitales), puis bandeau photo pleine largeur, net et sans voile,
 * animé par le même zoom Motion FX ; enfin le chapeau.
 */
export default async function PageHero({
  surtitre,
  titre,
  texte,
  image,
  fil,
}: {
  surtitre: string;
  titre: string;
  texte: string;
  image: string;
  fil: string;
}) {
  const lang = await getLang();
  const { commun } = await getDictionnaire();

  return (
    <>
      <section className="bg-white">
        <div className={`${CONTENEUR} bloc-heros flex flex-col px-[30px] pb-[48px] pt-[40px]`}>
          <nav
            className="flex flex-wrap items-center gap-2 text-[0.82rem] text-encre/55"
            aria-label={commun.filAriane}
          >
            <Link href={localiser(lang, "/")} className="tr-couleur hover:text-accent">
              {commun.accueil}
            </Link>
            <ChevronRight className="h-3 w-3 opacity-60" />
            <span className="text-encre">{fil}</span>
          </nav>

          <ul className="mt-8 flex items-center">
            <li className="flex items-center gap-1.5">
              <span aria-hidden className="font-mono text-[13px] font-bold text-accent">
                /
              </span>
              <span className="sur-titre-heros pl-[5px]">{surtitre}</span>
            </li>
          </ul>

          <Reveal delai={200} className="mt-2">
            <h1 className="titre-heros max-w-[900px]">{titre}</h1>
          </Reveal>
        </div>
      </section>

      <section className="relative h-[260px] overflow-hidden md:h-[380px] lg:h-[460px]">
        <div aria-hidden className="fx-zoom absolute inset-0">
          <Image src={image} alt="" fill priority sizes="100vw" className="object-cover object-center" />
        </div>
      </section>

      <section className="bg-white py-12 lg:py-16">
        <Container>
          <p className="max-w-3xl text-[1.05rem] leading-relaxed text-encre/80">{texte}</p>
        </Container>
      </section>
    </>
  );
}
