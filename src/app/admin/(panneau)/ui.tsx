import type { ReactNode } from "react";
import BoutonConfirmer from "./BoutonConfirmer";

export { BoutonConfirmer };

export function EnTete({ titre, texte, actions }: { titre: string; texte?: string; actions?: ReactNode }) {
  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <h1 className="font-mono text-[1.7rem] font-bold uppercase leading-tight tracking-[0.02em] text-brun md:text-[2rem]">
          {titre}
        </h1>
        {texte && <p className="mt-2 max-w-2xl text-[0.95rem] text-encre/65">{texte}</p>}
      </div>
      {actions}
    </div>
  );
}

export function Carte({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`border border-bordure bg-white ${className}`}>{children}</div>;
}

export function Pastille({ ton, children }: { ton: "attente" | "ok" | "neutre" | "refus"; children: ReactNode }) {
  const couleurs = {
    attente: "bg-accent/15 text-[#a14f00]",
    ok: "bg-emerald-100 text-emerald-800",
    neutre: "bg-gris-clair text-encre/70",
    refus: "bg-red-100 text-red-800",
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 font-mono text-[0.7rem] font-bold uppercase tracking-[0.08em] ${couleurs[ton]}`}>
      {children}
    </span>
  );
}

export const boutonPrincipal =
  "tr inline-flex items-center justify-center gap-2 bg-brun px-5 py-3 font-mono text-[0.75rem] font-bold uppercase tracking-[0.12em] text-white hover:bg-accent hover:text-noir-doux disabled:opacity-60";

export const boutonSecondaire =
  "tr inline-flex items-center justify-center gap-2 border border-encre/20 px-3 py-2 font-mono text-[0.7rem] font-bold uppercase tracking-[0.1em] text-encre hover:border-brun hover:bg-brun hover:text-white";

export const dateCourte = (iso: string) =>
  new Date(iso).toLocaleString("fr-FR", { dateStyle: "medium", timeStyle: "short", timeZone: "Africa/Bangui" });
