"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "./icons";
import type { Dictionnaire } from "@/i18n/dictionnaires/fr";

/**
 * Carrousel (§9.4). Le site de référence utilise Swiper ; ici le
 * défilement aimanté natif remplace le moteur, avec flèches et pastilles.
 *
 * - `media`  : carrousel média des témoignages (vignettes larges) ;
 * - `boucle` : loop-carousel des projets et des contenus (3 vignettes).
 */
export default function Carousel({
  slides,
  etiquette,
  textes,
  variante = "boucle",
  className = "",
}: {
  slides: ReactNode[];
  etiquette: string;
  textes: Dictionnaire["carrousel"];
  variante?: "media" | "boucle";
  className?: string;
}) {
  const piste = useRef<HTMLDivElement>(null);
  const [actif, setActif] = useState(0);
  const [monte, setMonte] = useState(false);

  /* Le préchargeur Swiper n'a de sens qu'avant l'hydratation : l'état est
     relevé au premier rafraîchissement de l'affichage. */
  useEffect(() => {
    const frame = requestAnimationFrame(() => setMonte(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const largeur =
    variante === "media"
      ? "w-full md:w-[74%] lg:w-[58%]"
      : "w-[88%] sm:w-[62%] md:w-[47%] lg:w-[31.5%]";

  const aller = useCallback((index: number) => {
    const el = piste.current;
    if (!el) return;
    const cible = el.children[index] as HTMLElement | undefined;
    if (!cible) return;
    el.scrollTo({ left: cible.offsetLeft - el.offsetLeft, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const el = piste.current;
    if (!el) return;

    const auDefilement = () => {
      const enfants = Array.from(el.children) as HTMLElement[];
      let meilleur = { distance: Number.POSITIVE_INFINITY, index: 0 };
      enfants.forEach((enfant, index) => {
        const distance = Math.abs(enfant.offsetLeft - el.offsetLeft - el.scrollLeft);
        if (distance < meilleur.distance) meilleur = { distance, index };
      });
      setActif(meilleur.index);
    };

    el.addEventListener("scroll", auDefilement, { passive: true });
    return () => el.removeEventListener("scroll", auDefilement);
  }, []);

  const dernier = slides.length - 1;

  return (
    <div
      /* `min-w-0` : sans lui, la piste de défilement impose sa largeur
         minimale à la grille parente et fait déborder toute la page. */
      className={`relative min-w-0 ${className}`}
      role="group"
      aria-roledescription={textes.role}
      aria-label={etiquette}
    >
      <div ref={piste} className="carrousel-piste -mx-5 px-5 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0">
        {slides.map((slide, i) => (
          <div key={i} className={`carrousel-item ${largeur} pr-6 lg:pr-7`} aria-hidden={i !== actif}>
            {slide}
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between gap-6">
        <div className="flex flex-wrap items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => aller(i)}
              aria-label={`${etiquette} — ${i + 1}`}
              aria-current={i === actif}
              className={`tr h-1.5 ${
                i === actif ? "w-8 bg-accent" : "w-4 bg-encre/25 hover:bg-encre/50"
              }`}
            />
          ))}
        </div>

        {monte ? (
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => aller(Math.max(0, actif - 1))}
              disabled={actif === 0}
              aria-label={textes.precedent}
              className="tr flex h-11 w-11 items-center justify-center border border-encre/20 text-encre hover:border-noir-doux hover:bg-noir-doux hover:text-white disabled:pointer-events-none disabled:opacity-35"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => aller(Math.min(dernier, actif + 1))}
              disabled={actif === dernier}
              aria-label={textes.suivant}
              className="tr flex h-11 w-11 items-center justify-center border border-encre/20 text-encre hover:border-noir-doux hover:bg-noir-doux hover:text-white disabled:pointer-events-none disabled:opacity-35"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        ) : (
          /* Préchargeur Swiper du thème, le temps de l'hydratation */
          <span className="chargeur h-5 w-5 border-2 border-encre/20 border-t-accent" aria-hidden />
        )}
      </div>
    </div>
  );
}
