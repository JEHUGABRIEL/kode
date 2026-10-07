import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { ArrowRight } from "@/components/icons";
import { Container } from "@/components/ui";
import { assets, heros } from "@/lib/site";

/* Conteneur du site de référence : 1280 px de large, 30 px de remplissage
   intérieur, filets verticaux à 1 px (#E6E9EB) sur les deux bords. */
const CONTENEUR = "mx-auto w-full max-w-[1280px]";

/**
 * Bloc 2 — Héros, calé sur le site de référence.
 *
 * Structure relevée (viewport 1503 px) : un bloc blanc de 300 px bordé de
 * filets verticaux (#E6E9EB) contenant un espace de 54 px, la ligne
 * « Bienvenue » (barre oblique en accent + mot en DM Serif Display 18 px),
 * le H1 (Roboto Mono 900 / 50 px / interligne 55 px / −1 px, capitales,
 * largeur 750 px) et le bouton « Services » posé à cheval sur le bord ;
 * puis un bandeau photo pleine largeur de 617 px, animé par le zoom
 * `out-in` de 20 % à 80 % (§7, Motion FX 1) ; enfin l'accroche et les
 * deux chiffres du site.
 */
export default function Hero() {
  return (
    <>
      <section className="bg-white">
        <div className={`${CONTENEUR} bloc-heros relative flex min-h-[300px] flex-col px-[30px] pb-[40px] pt-[54px]`}>
          <ul className="flex items-center">
            <li className="flex items-center gap-1.5">
              <span aria-hidden className="font-mono text-[13px] font-bold text-accent">
                /
              </span>
              <span className="sur-titre-heros pl-[5px]">{heros.surtitre}</span>
            </li>
          </ul>

          <Reveal delai={200} className="mt-2">
            <h1 className="titre-heros max-w-[750px]">{heros.titre}</h1>
          </Reveal>

          <Link href="/services" className="btn-heros tr absolute bottom-0 right-[30px] z-10 translate-y-1/2">
            {heros.cta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="relative h-[380px] overflow-hidden md:h-[500px] lg:h-[617px]">
        <div aria-hidden className="fx-zoom absolute inset-0">
          <Image
            src={assets.herosPhoto}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </section>

      <section className="bg-white py-14 lg:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,430px)_1fr] lg:gap-20">
            <p className="text-[1rem] leading-[1.45] text-encre">{heros.intro}</p>

            <dl className="grid gap-10 sm:grid-cols-2">
              {heros.stats.map((stat) => (
                <div key={stat.valeur} className="bloc-grille px-6">
                  <dt className="t-display">{stat.valeur}</dt>
                  <dd className="mt-3 max-w-[300px] text-[0.95rem] leading-relaxed text-encre/70">
                    {stat.libelle}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>
    </>
  );
}
