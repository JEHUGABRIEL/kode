import Link from "next/link";
import type { ReactNode } from "react";
import Reveal from "./Reveal";
import { ArrowRight, Check } from "./icons";

/** Fonds alternés du site : blanc, gris quasi blanc, presque noir. */
export type Ton = "clair" | "sombre";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  children,
  id,
  fond = "blanc",
  className = "",
}: {
  children: ReactNode;
  id?: string;
  fond?: "blanc" | "gris" | "sombre" | "brun";
  className?: string;
}) {
  const surface =
    fond === "gris"
      ? "bg-gris-clair text-encre"
      : fond === "sombre"
        ? "bg-noir-doux text-white"
        : fond === "brun"
          ? "bg-brun text-white"
          : "bg-white text-encre";

  return (
    <section id={id} className={`relative py-14 md:py-20 lg:py-24 ${surface} ${className}`}>
      {children}
    </section>
  );
}

/** Espaceur explicite, comme les widgets `spacer` du site de référence. */
export function Spacer({
  taille = "m",
  className = "",
}: {
  taille?: "s" | "m" | "l";
  className?: string;
}) {
  const hauteur = taille === "s" ? "h-5 md:h-7" : taille === "l" ? "h-14 md:h-20" : "h-9 md:h-14";
  return <div aria-hidden className={`${hauteur} ${className}`} />;
}

/** Filets et séparateurs — vamtam_accent_7 / vamtam_accent_8. */
export function Divider({ ton = "clair", className = "" }: { ton?: Ton; className?: string }) {
  return <hr className={`border-0 border-t ${ton === "sombre" ? "border-filet" : "border-bordure"} ${className}`} />;
}

export function Overline({
  children,
  ton = "clair",
  className = "",
}: {
  children: ReactNode;
  ton?: Ton;
  className?: string;
}) {
  return (
    <p className={`t-label ${ton === "sombre" ? "text-accent" : "text-encre/60"} ${className}`}>
      {children}
    </p>
  );
}

const BALISES = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
  display: "p",
} as const;

export type NiveauTitre = keyof typeof BALISES;

export function Titre({
  niveau = 2,
  children,
  className = "",
}: {
  niveau?: NiveauTitre;
  children: ReactNode;
  className?: string;
}) {
  const Tag = BALISES[niveau];
  const echelle = niveau === "display" ? "t-display" : `t-h${niveau}`;
  return <Tag className={`${echelle} ${className}`}>{children}</Tag>;
}

/**
 * Bloc de titre d'une section.
 * Dans le site de référence, les animations d'entrée portent presque
 * exclusivement sur les titres — d'où le `Reveal` posé ici.
 */
export function TitreSection({
  surtitre,
  titre,
  texte,
  ton = "clair",
  centre = false,
  delai = 200,
  className = "",
}: {
  surtitre?: string;
  titre: ReactNode;
  texte?: string;
  ton?: Ton;
  centre?: boolean;
  delai?: 200 | 300 | 400 | 500;
  className?: string;
}) {
  return (
    <div className={`${centre ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}>
      {surtitre && <Overline ton={ton}>{surtitre}</Overline>}
      <Reveal delai={delai} className="mt-4">
        <Titre niveau={2} className={ton === "sombre" ? "text-white" : "text-encre"}>
          {titre}
        </Titre>
      </Reveal>
      {texte && (
        <p
          className={`mt-5 max-w-2xl text-[1rem] leading-relaxed ${
            centre ? "mx-auto" : ""
          } ${ton === "sombre" ? "text-attenue-clair" : "text-encre/75"}`}
        >
          {texte}
        </p>
      )}
    </div>
  );
}

type VarianteBouton = "accent" | "sombre" | "clair" | "contour" | "contour-clair";

const VARIANTES: Record<VarianteBouton, string> = {
  accent: "bg-accent text-noir-doux hover:bg-noir-doux hover:text-white",
  sombre: "bg-noir-doux text-white hover:bg-accent hover:text-noir-doux",
  clair: "bg-white text-noir-doux hover:bg-accent",
  contour: "border border-encre/25 text-encre hover:border-noir-doux hover:bg-noir-doux hover:text-white",
  "contour-clair": "border border-white/35 text-white hover:border-white hover:bg-white hover:text-noir-doux",
};

export function Btn({
  href,
  children,
  variante = "accent",
  taille = "md",
  externe = false,
  fleche = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variante?: VarianteBouton;
  taille?: "md" | "lg";
  externe?: boolean;
  fleche?: boolean;
  className?: string;
}) {
  const classes = `btn group inline-flex items-center justify-center gap-2.5 font-mono text-[0.82rem] font-bold uppercase tracking-[0.12em] ${
    taille === "lg" ? "px-8 py-4" : "px-6 py-3.5"
  } ${VARIANTES[variante]} ${className}`;

  const contenu = (
    <>
      {children}
      {fleche && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (externe) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {contenu}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {contenu}
    </Link>
  );
}

/** `icon-list` du site de référence : une puce, une ligne de texte. */
export function ListeIcones({
  items,
  ton = "clair",
  className = "",
}: {
  items: readonly string[];
  ton?: Ton;
  className?: string;
}) {
  return (
    <ul className={`flex flex-col gap-2.5 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[0.95rem] leading-relaxed">
          <Check
            className={`mt-1 h-4 w-4 shrink-0 ${ton === "sombre" ? "text-accent" : "text-encre/50"}`}
          />
          <span className={ton === "sombre" ? "text-attenue-clair" : "text-encre/80"}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Colonne collante (§9.3) : le texte de gauche reste fixe pendant que
 * la colonne de droite défile. Activée sur desktop et tablette.
 */
export function ColonneCollante({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`colle ${className}`}>{children}</div>;
}
