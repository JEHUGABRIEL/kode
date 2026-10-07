"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { Check, ChevronDown, Globe } from "./icons";
import { langues, locales, localiser, sansPrefixe, type Langue } from "@/i18n/config";
import type { Dictionnaire } from "@/i18n/dictionnaires/fr";

/**
 * Sélecteur de langue, présenté comme un `select` : un déclencheur
 * (globe + code de la langue + chevron) qui ouvre une liste des langues.
 * Chaque entrée renvoie vers la même page dans l'autre langue
 * (`/agence` ⇄ `/en/agence`). Échap ou un clic à l'extérieur referme.
 */
export default function LangSwitch({
  lang,
  textes,
  ton = "clair",
  className = "",
}: {
  lang: Langue;
  textes: Dictionnaire["langue"];
  ton?: "clair" | "sombre";
  className?: string;
}) {
  const chemin = sansPrefixe(usePathname());
  const [ouvert, setOuvert] = useState(false);
  const racine = useRef<HTMLDivElement>(null);
  const idListe = useId();
  const sombre = ton === "sombre";

  useEffect(() => {
    if (!ouvert) return;
    const auClic = (evenement: MouseEvent) => {
      if (!racine.current?.contains(evenement.target as Node)) setOuvert(false);
    };
    const auClavier = (evenement: KeyboardEvent) => {
      if (evenement.key === "Escape") setOuvert(false);
    };
    document.addEventListener("mousedown", auClic);
    document.addEventListener("keydown", auClavier);
    return () => {
      document.removeEventListener("mousedown", auClic);
      document.removeEventListener("keydown", auClavier);
    };
  }, [ouvert]);

  return (
    <div ref={racine} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOuvert((valeur) => !valeur)}
        aria-haspopup="menu"
        aria-expanded={ouvert}
        aria-controls={idListe}
        aria-label={`${textes.changer} — ${locales[lang].nom}`}
        className={`tr inline-flex h-10 items-center gap-2 border px-3 font-mono text-[12px] font-bold tracking-[1px] ${
          sombre
            ? "border-white/25 text-white hover:border-white"
            : `border-bordure text-brun hover:border-brun ${ouvert ? "border-brun" : ""}`
        }`}
      >
        <Globe className="h-4 w-4 text-accent" />
        {locales[lang].court}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${ouvert ? "rotate-180" : ""}`} />
      </button>

      {ouvert && (
        <ul
          id={idListe}
          role="menu"
          aria-label={textes.etiquette}
          className={`voile-menu absolute top-full z-[120] mt-2 min-w-[190px] py-1.5 shadow-[0_18px_40px_-14px_rgba(42,18,1,.35)] ${
            sombre ? "left-0 bg-white" : "right-0 bg-white"
          } border border-bordure`}
        >
          {langues.map((code) => {
            const actif = code === lang;
            return (
              <li key={code} role="none">
                <Link
                  role="menuitem"
                  href={localiser(code, chemin)}
                  hrefLang={locales[code].html}
                  lang={code}
                  aria-current={actif ? "true" : undefined}
                  onClick={() => setOuvert(false)}
                  className={`tr flex items-center gap-3 px-4 py-2.5 text-[0.92rem] ${
                    actif ? "bg-gris-clair text-encre" : "text-encre/75 hover:bg-gris-clair hover:text-encre"
                  }`}
                >
                  <span className="w-6 font-mono text-[11px] font-bold tracking-[1px] text-accent">
                    {locales[code].court}
                  </span>
                  <span className="flex-1">{locales[code].nom}</span>
                  {actif && <Check className="h-3.5 w-3.5 text-accent" />}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
