"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useRef } from "react";
import { ArrowRight, Close } from "./icons";
import { localiser, type Langue } from "@/i18n/config";
import type { Dictionnaire } from "@/i18n/dictionnaires/fr";
import { assets } from "@/lib/site";

/**
 * Panneau latéral « Contactez-nous » (§5, pop-up 1493 du site de référence).
 *
 * Sur adjemson.com, le bouton carré à 9 points de l'en-tête ouvre une
 * pop-up Elementor : un panneau blanc de 570 px, plein hauteur, qui entre
 * depuis la droite (`slideInRight`, 0,6 s) derrière un voile sombre, avec
 * l'ombre `2px 8px 23px 3px rgba(0,0,0,.2)`. Contenu relevé : le motif de
 * la marque, « / Contactez-nous » (barre oblique accent + DM Serif
 * Display), « KODÊ — Agence Créative » (Roboto Mono 700 / 38 px), une
 * présentation de 12 px, la liste des domaines d'intervention et un bouton
 * sombre « Contact » de 456 × 68 px.
 *
 * Le tiroir de navigation prend le relais sous 1024 px : la visibilité de
 * ce panneau est donc réglée en CSS (voir `.panneau-lateral`), et le
 * défilement de la page n'est bloqué que lorsqu'un des deux est visible.
 */
export default function PanneauContact({
  ouvert,
  onFermer,
  lang,
  textes: panneau,
}: {
  ouvert: boolean;
  onFermer: () => void;
  lang: Langue;
  textes: Dictionnaire["panneau"];
}) {
  const croix = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!ouvert) return;

    /* Le focus part sur la croix, Échap referme, et il revient au bouton
       de l'en-tête à la fermeture — comme le fait Elementor (`a11y_navigation`). */
    const avant = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const frame = requestAnimationFrame(() => croix.current?.focus());
    const auClavier = (evenement: KeyboardEvent) => {
      if (evenement.key === "Escape") onFermer();
    };
    document.addEventListener("keydown", auClavier);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("keydown", auClavier);
      avant?.focus();
    };
  }, [ouvert, onFermer]);

  if (!ouvert) return null;

  return (
    <>
      <button
        type="button"
        aria-label={panneau.fermer}
        onClick={onFermer}
        className="voile-panneau"
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label={panneau.surtitre}
        className="panneau-lateral"
      >
        <button
          ref={croix}
          type="button"
          onClick={onFermer}
          aria-label={panneau.fermer}
          className="fermer-panneau"
        >
          <Close className="h-[26px] w-[26px]" />
        </button>

        <Image
          src={assets.motif}
          alt=""
          width={130}
          height={130}
          unoptimized
          className="mx-auto mt-[105px] h-auto w-[205px]"
        />

        <div className="px-[82px]">
          <ul className="mt-[52px] flex items-center">
            <li className="flex items-center gap-1.5">
              <span aria-hidden className="font-mono text-[13px] font-bold text-accent">
                /
              </span>
              <span className="sur-titre-heros pl-[5px]">{panneau.surtitre}</span>
            </li>
          </ul>

          <h2 className="t-h4 mt-1 uppercase">{panneau.titre}</h2>

          <div className="mt-6 max-w-[369px] text-[12px] leading-[1.7] text-encre/80">
            <p>{panneau.texte}</p>

            <p className="mt-3">
              {panneau.domainesLabel}{" "}
              {panneau.domaines.map((domaine, i) => {
                const noeud = panneau.domainesLies.includes(i) ? (
                  <Link href={localiser(lang, "/services")} className="tr-couleur hover:text-accent hover:underline">
                    {domaine}
                  </Link>
                ) : (
                  domaine
                );

                return i === 0 ? (
                  <Fragment key={domaine}>{noeud}</Fragment>
                ) : (
                  <Fragment key={domaine}>
                    {" | "}
                    {noeud}
                  </Fragment>
                );
              })}
              .
            </p>
          </div>
        </div>

        <Link
          href={localiser(lang, "/contact")}
          className="tr mt-auto mb-[86px] mr-[114px] flex h-[68px] items-center justify-center gap-3 bg-noir-doux px-6 font-mono text-[14px] font-bold tracking-[2px] text-white uppercase hover:bg-accent hover:text-noir-doux"
        >
          {panneau.cta}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </aside>
    </>
  );
}
