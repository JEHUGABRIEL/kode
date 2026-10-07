"use client";

import { useActionState } from "react";
import { connexion, type EtatFormulaire } from "../actions";

export default function FormulaireConnexion() {
  const [etat, action, enCours] = useActionState<EtatFormulaire, FormData>(connexion, {});

  return (
    <form action={action} className="mt-8 flex flex-col gap-4 border border-filet bg-brun/40 p-6">
      <label className="flex flex-col gap-2 font-mono text-[12px] font-bold uppercase tracking-[0.12em] text-attenue-clair">
        Mot de passe
        <input
          type="password"
          name="motDePasse"
          required
          autoFocus
          autoComplete="current-password"
          className="border border-filet bg-transparent px-4 py-3 font-sans text-[0.95rem] normal-case tracking-normal text-white outline-none transition-colors focus:border-accent"
        />
      </label>
      {etat.erreur && (
        <p role="alert" className="text-[0.9rem] text-red-300">
          {etat.erreur}
        </p>
      )}
      <button
        type="submit"
        disabled={enCours}
        className="tr bg-accent py-3.5 font-mono text-[0.82rem] font-bold uppercase tracking-[0.12em] text-noir-doux hover:bg-white disabled:opacity-60"
      >
        {enCours ? "Connexion…" : "Se connecter"}
      </button>
    </form>
  );
}
