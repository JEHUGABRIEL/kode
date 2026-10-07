"use client";

import { useEffect, useState } from "react";

type Langue = "fr" | "en";

const LANGUES: { code: Langue; label: string; nom: string }[] = [
  { code: "fr", label: "FR", nom: "Français" },
  { code: "en", label: "EN", nom: "English" },
];

const CLE = "kode-langue";

/**
 * Sélecteur de langue FR / EN. Seul le bouton existe pour l'instant : le
 * choix est mémorisé, mais les contenus restent en français tant que la
 * traduction anglaise n'est pas branchée.
 */
export default function LangSwitch({ ton = "clair", className = "" }: { ton?: "clair" | "sombre"; className?: string }) {
  const [langue, setLangue] = useState<Langue>("fr");

  /* Même motif que CookieConsent : lecture du stockage dans un rafraîchissement. */
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      try {
        const memorisee = window.localStorage.getItem(CLE);
        if (memorisee === "fr" || memorisee === "en") setLangue(memorisee);
      } catch {
        /* Stockage indisponible : on reste en français. */
      }
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  const choisir = (code: Langue) => {
    setLangue(code);
    try {
      window.localStorage.setItem(CLE, code);
    } catch {
      /* Le choix n'est simplement pas mémorisé. */
    }
  };

  const sombre = ton === "sombre";

  return (
    <div
      role="group"
      aria-label="Langue du site"
      className={`flex items-center gap-1 font-mono text-[12px] font-bold tracking-[1px] ${className}`}
    >
      {LANGUES.map((item, i) => {
        const actif = langue === item.code;
        return (
          <span key={item.code} className="flex items-center gap-1">
            {i > 0 && <span aria-hidden className={sombre ? "text-white/30" : "text-encre/25"}>/</span>}
            <button
              type="button"
              lang={item.code}
              aria-pressed={actif}
              title={item.nom}
              onClick={() => choisir(item.code)}
              className={`tr-couleur px-1 py-1 ${
                actif ? "text-accent" : sombre ? "text-white/70 hover:text-white" : "text-brun/60 hover:text-brun"
              }`}
            >
              {item.label}
            </button>
          </span>
        );
      })}
    </div>
  );
}
