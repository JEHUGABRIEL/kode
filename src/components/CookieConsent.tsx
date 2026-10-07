"use client";

import { useEffect, useState } from "react";

/** Clé de mémorisation du choix : "accepte" ou "refuse". */
const CLE = "kode-cookies";

type Choix = "accepte" | "refuse";

/**
 * Bandeau de consentement aux cookies (§11 du document de référence :
 * Consent Mode v2, refus par défaut).
 *
 * Le site de référence charge un outil tiers (CookieYes / Site Kit) ;
 * ici aucun script tiers n'existe : ce composant se contente d'enregistrer
 * le choix du visiteur dans `localStorage`, et la carte disparaît dès
 * qu'un choix a été fait. Le jour où un outil de mesure est branché, il
 * devra être chargé depuis `enregistrer("accepte")` uniquement.
 */
export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  /* ESLint interdit le setState synchrone dans le corps d'un effet :
     la lecture de `localStorage` est donc faite dans un callback de
     rafraîchissement (même motif que Reveal.tsx et Carousel.tsx). */
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      try {
        setVisible(window.localStorage.getItem(CLE) === null);
      } catch {
        /* Stockage indisponible (navigation privée verrouillée) :
           on affiche la carte par défaut, sans planter la page. */
        setVisible(true);
      }
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  const enregistrer = (choix: Choix) => {
    try {
      window.localStorage.setItem(CLE, choix);
    } catch {
      /* Le choix n'a pas pu être mémorisé : la carte se referme
         quand même pour ne pas bloquer la navigation. */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      role="dialog"
      aria-label="Préférences de cookies"
      className="fixed bottom-[84px] right-4 z-[95] w-[min(340px,calc(100vw-32px))] rounded-[10px] bg-white p-6 shadow-[0_18px_50px_-12px_rgba(42,18,1,.28)]"
    >
      <h2 className="text-[17px] font-bold leading-snug text-encre">
        Pour Nous Souvenir de Vous
      </h2>

      <p className="mt-3 text-[14px] leading-[1.6] text-encre/70">
        Nous utilisons des cookies pour rendre votre expérience de navigation
        personnalisée, nous souvenir de vous et analyser le trafic. En cliquant
        sur « Tout Annuler », vous refusez cela à nos équipes.
      </p>

      <div className="mt-6 flex flex-col gap-3">
        <button
          type="button"
          onClick={() => enregistrer("refuse")}
          className="tr self-start font-mono text-[13px] font-bold uppercase tracking-[1px] text-encre hover:text-encre/60"
        >
          Tout Refuser
        </button>
        <button
          type="button"
          onClick={() => enregistrer("accepte")}
          className="tr w-full bg-noir-doux px-6 py-3.5 font-mono text-[13px] font-bold uppercase tracking-[1px] text-white hover:bg-accent hover:text-noir-doux"
        >
          Tout Accepter
        </button>
      </div>
    </aside>
  );
}
