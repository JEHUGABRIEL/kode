"use client";

import { useActionState, useMemo, useState } from "react";
import type { Langue } from "@/i18n/config";
import type { Dictionnaire } from "@/i18n/dictionnaires/fr";
import { enregistrerTextes, type EtatFormulaire } from "../../actions";
import { boutonPrincipal } from "../ui";

/** Intitulés lisibles des rubriques du dictionnaire. */
const RUBRIQUES: Record<string, string> = {
  meta: "Référencement (titres et descriptions Google)",
  commun: "Éléments communs",
  pages: "Noms des pages (menu, pied de page)",
  entete: "En-tête",
  langue: "Sélecteur de langue",
  panneau: "Panneau « Contactez-nous »",
  whatsapp: "Bouton WhatsApp flottant",
  cookies: "Bandeau cookies",
  carrousel: "Carrousels (accessibilité)",
  pied: "Pied de page",
  heros: "Accueil — héros",
  promesse: "Accueil — promesse",
  metiers: "Trois pôles",
  servicesCartes: "Trois services mis en avant",
  servicesBande: "Bandeau « Nos services »",
  cibles: "Nos cibles",
  projets: "Récentes réalisations (en-tête de section)",
  paroles: "Paroles de KODÊ",
  events: "Pôle Events — formats",
  realisations: "Carrousel des réalisations (en-tête)",
  carrieres: "Carrières",
  avis: "Avis clients (section et formulaire)",
  formulaire: "Formulaire de contact",
  introuvable: "Page 404",
  agence: "Page L’Agence",
  services: "Page Services",
  evenementiel: "Page Événementiel",
  pageRealisations: "Page Réalisations",
  contact: "Page Contact",
  mentions: "Mentions légales",
};

type Champ = { chemin: string; libelle: string; valeur: string; reference?: string };

/** Aplatit le dictionnaire en champs texte (« cibles.items.0.titre »). */
function aplatir(noeud: unknown, chemin: string, reference: unknown, sortie: Champ[]) {
  if (typeof noeud === "string") {
    sortie.push({
      chemin,
      libelle: libelleDe(chemin),
      valeur: noeud,
      reference: typeof reference === "string" ? reference : undefined,
    });
    return;
  }
  if (Array.isArray(noeud)) {
    noeud.forEach((e, i) => aplatir(e, `${chemin}.${i}`, Array.isArray(reference) ? reference[i] : undefined, sortie));
    return;
  }
  if (noeud && typeof noeud === "object") {
    for (const [cle, valeur] of Object.entries(noeud)) {
      const ref = reference && typeof reference === "object" ? (reference as Record<string, unknown>)[cle] : undefined;
      aplatir(valeur, chemin ? `${chemin}.${cle}` : cle, ref, sortie);
    }
  }
}

function libelleDe(chemin: string) {
  return chemin
    .split(".")
    .slice(1)
    .map((segment) =>
      /^\d+$/.test(segment)
        ? `n° ${Number(segment) + 1}`
        : segment.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/^./, (c) => c.toUpperCase()),
    )
    .join(" › ");
}

export default function EditeurTextes({
  lang,
  textes,
  reference,
}: {
  lang: Langue;
  textes: Dictionnaire;
  reference: Dictionnaire | null;
}) {
  const [etat, action, enCours] = useActionState<EtatFormulaire, FormData>(enregistrerTextes, {});
  const [filtre, setFiltre] = useState("");

  const rubriques = useMemo(
    () =>
      Object.keys(textes).map((cle) => {
        const champs: Champ[] = [];
        aplatir(
          (textes as Record<string, unknown>)[cle],
          cle,
          reference ? (reference as Record<string, unknown>)[cle] : undefined,
          champs,
        );
        return { cle, titre: RUBRIQUES[cle] ?? cle, champs };
      }),
    [textes, reference],
  );

  const recherche = filtre.trim().toLowerCase();
  const correspond = (c: Champ) =>
    !recherche ||
    c.valeur.toLowerCase().includes(recherche) ||
    c.libelle.toLowerCase().includes(recherche) ||
    (c.reference ?? "").toLowerCase().includes(recherche);

  return (
    <form action={action} className="flex flex-col gap-4">
      <input type="hidden" name="langue" value={lang} />

      <div className="sticky top-0 z-10 -mx-1 flex flex-col gap-3 bg-gris-clair px-1 py-3 md:flex-row md:items-center">
        <input
          type="search"
          value={filtre}
          onChange={(e) => setFiltre(e.target.value)}
          placeholder="Rechercher un texte…"
          className="w-full flex-1 border border-bordure bg-white px-4 py-3 text-[0.95rem] outline-none focus:border-accent"
        />
        <button type="submit" disabled={enCours} className={boutonPrincipal}>
          {enCours ? "Enregistrement…" : "Enregistrer les textes"}
        </button>
      </div>

      {etat.enregistre && !enCours && (
        <p role="status" className="border border-emerald-700/30 bg-emerald-50 px-4 py-3 text-[0.92rem] text-emerald-900">
          Textes enregistrés : le site est à jour.
        </p>
      )}
      {etat.erreur && (
        <p role="alert" className="border border-red-700/40 bg-red-50 px-4 py-3 text-[0.92rem] text-red-900">
          {etat.erreur}
        </p>
      )}

      {rubriques.map(({ cle, titre, champs }) => {
        const visibles = champs.filter(correspond).length;
        return (
          <details
            key={cle}
            open={recherche ? visibles > 0 : undefined}
            className={`border border-bordure bg-white ${recherche && visibles === 0 ? "hidden" : ""}`}
          >
            <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 font-mono text-[0.82rem] font-bold uppercase tracking-[0.1em] text-brun">
              {titre}
              <span className="font-sans text-[0.8rem] font-normal normal-case tracking-normal text-encre/50">
                {recherche ? `${visibles} / ${champs.length}` : champs.length} champ{champs.length > 1 ? "s" : ""}
              </span>
            </summary>
            <div className="grid gap-5 border-t border-bordure px-5 py-5">
              {champs.map((c) => {
                const long = c.valeur.length > 90 || c.valeur.includes("\n");
                return (
                  <label key={c.chemin} className={`flex flex-col gap-1.5 ${correspond(c) ? "" : "hidden"}`}>
                    <span className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.08em] text-encre/55">
                      {c.libelle || titre}
                    </span>
                    {long ? (
                      <textarea
                        name={`t:${c.chemin}`}
                        defaultValue={c.valeur}
                        rows={Math.min(8, Math.ceil(c.valeur.length / 95) + 1)}
                        className="w-full resize-y border border-bordure px-3.5 py-2.5 text-[0.93rem] leading-relaxed outline-none focus:border-accent"
                      />
                    ) : (
                      <input
                        name={`t:${c.chemin}`}
                        defaultValue={c.valeur}
                        className="w-full border border-bordure px-3.5 py-2.5 text-[0.93rem] outline-none focus:border-accent"
                      />
                    )}
                    {c.reference && <span className="text-[0.8rem] italic text-encre/45">FR : {c.reference}</span>}
                  </label>
                );
              })}
            </div>
          </details>
        );
      })}
    </form>
  );
}
