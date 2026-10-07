import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "./icons";

/**
 * Flip box (§9.1) — ce n'est PAS un retournement 3D.
 * Le verso balaie le recto : `clip-path: inset(0 100% 0 0)` → `inset(0)`
 * en 570 ms, sur la courbe signature `cubic-bezier(.62,.83,.34,.93)`.
 *
 * Verso : icon-list + titre + bouton, comme les trois cartes métiers.
 */
export default function FlipBox({
  image,
  titre,
  accroche,
  points,
  href,
  cta,
  sens = "gauche",
  className = "",
}: {
  image: string;
  titre: string;
  accroche: string;
  points: readonly string[];
  href: string;
  cta: string;
  /** Direction du balayage : left / right / up / down. */
  sens?: "gauche" | "droite" | "haut" | "bas";
  className?: string;
}) {
  return (
    <article className={`flip h-full ${className}`} data-sens={sens}>
      {/* Recto : visuel + titre */}
      <div className="relative flex min-h-[420px] flex-col justify-end">
        <Image
          src={image}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(to_top,rgba(42,18,1,.92)_0%,rgba(42,18,1,.45)_55%,rgba(42,18,1,.15)_100%)]"
        />
        <div className="relative z-[1] p-7">
          <h3 className="t-h4 text-white">{titre}</h3>
          <p className="t-label-sm mt-3 text-accent">{accroche}</p>
        </div>
      </div>

      {/* Verso : il balaie le recto au survol */}
      <div className="flip-verso flex flex-col justify-center bg-noir-doux p-7 text-white">
        <h3 className="t-h5">{titre}</h3>
        <ul className="mt-6 flex flex-col gap-2.5">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-3 text-[0.92rem] leading-relaxed">
              <Check className="mt-1 h-4 w-4 shrink-0 text-accent" />
              <span className="text-attenue-clair">{point}</span>
            </li>
          ))}
        </ul>
        <Link
          href={href}
          className="souligne-lien t-label-sm mt-8 inline-flex items-center gap-2 self-start text-accent"
        >
          {cta}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
