"use client";

import { useState } from "react";
import { Minus, Plus } from "./icons";

export type AccordeonItem = {
  /** Intitulé du profil de client (widget `toggle` du site de référence). */
  titre: string;
  /** Liste de solutions dépliée sous l'intitulé. */
  points: string[];
};

/**
 * Accordéon (§9.5 / §13) — reproduction du widget `toggle` : une seule
 * entrée ouverte à la fois, ouverture animée par `grid-template-rows`.
 */
export default function Accordion({
  items,
  premierOuvert = true,
  ton = "clair",
}: {
  items: readonly AccordeonItem[];
  premierOuvert?: boolean;
  ton?: "clair" | "sombre";
}) {
  const [ouvert, setOuvert] = useState<number | null>(premierOuvert ? 0 : null);
  const sombre = ton === "sombre";

  return (
    <div
      className={`divide-y border-y ${
        sombre ? "divide-creme/20 border-creme/20" : "divide-encre/12 border-encre/12"
      }`}
    >
      {items.map((item, i) => {
        const estOuvert = ouvert === i;
        return (
          <div key={item.titre}>
            <h3>
              <button
                type="button"
                onClick={() => setOuvert(estOuvert ? null : i)}
                aria-expanded={estOuvert}
                className="group flex w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span
                  className={`t-h6 tr-couleur uppercase ${
                    sombre
                      ? estOuvert
                        ? "text-accent"
                        : "text-white group-hover:text-accent"
                      : estOuvert
                        ? "text-encre"
                        : "text-encre/70 group-hover:text-encre"
                  }`}
                >
                  {item.titre}
                </span>
                <span
                  className={`tr flex h-8 w-8 shrink-0 items-center justify-center ${
                    sombre
                      ? estOuvert
                        ? "text-accent"
                        : "text-white group-hover:text-accent"
                      : `border ${
                          estOuvert
                            ? "border-noir-doux bg-noir-doux text-white"
                            : "border-encre/20 text-encre group-hover:border-encre"
                        }`
                  }`}
                  aria-hidden
                >
                  {estOuvert ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                </span>
              </button>
            </h3>

            <div className="accordeon-panneau" data-ouvert={estOuvert}>
              <div>
                <ul className="flex flex-col gap-2.5 pb-6">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className={`flex items-start gap-3 text-[0.95rem] leading-relaxed ${
                        sombre ? "text-attenue-clair" : "text-encre/75"
                      }`}
                    >
                      <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
