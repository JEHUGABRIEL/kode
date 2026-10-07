"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import PanneauContact from "./PanneauContact";
import { Calendar, Phone } from "./icons";
import { assets, nav, navCta, site, waLink } from "@/lib/site";

type Entree = { href: string; label: string; actif: boolean };

/**
 * En-tête du site (§5 bloc 1) : barre de 88 px sur fond blanc, filet bas,
 * logo de 150×44 à 30 px du bord, menu à 132 px du logo (Roboto Mono 700 /
 * 14 px / +1 px de lettrage, entrée active en orange flamme avec son trait
 * au-dessus), bouton « Démarrer un projet » (13 px / +2 px, blanc sur le
 * brun signature) et burger carré de 82 px orange, collés au bord droit.
 *
 * Le site de référence double cet en-tête d'un clone fixe qui apparaît
 * d'un coup (§9.2) : on reproduit ce comportement.
 *
 * Le bouton carré de droite commande le même état `menu` : au bureau
 * (≥ 1024 px) il ouvre le panneau « Contactez-nous » (pop-up 1493 du site
 * de référence, voir `PanneauContact`), sur tablette et mobile il ouvre le
 * tiroir de navigation. C'est le CSS qui décide lequel des deux s'affiche,
 * si bien que le verrouillage du défilement correspond toujours à un
 * panneau visible.
 */
export default function Header() {
  const chemin = usePathname();
  const [collant, setCollant] = useState(false);
  const [prete, setPrete] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const auDefilement = () => {
      const y = window.scrollY;
      setCollant(y > 240);
      if (y <= 240) setPrete(false);
    };
    auDefilement();
    window.addEventListener("scroll", auDefilement, { passive: true });
    return () => window.removeEventListener("scroll", auDefilement);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("bloque-defilement", menu);
    return () => document.body.classList.remove("bloque-defilement");
  }, [menu]);

  const fermer = useCallback(() => setMenu(false), []);

  const entrees: Entree[] = nav.map((item) => ({
    href: item.href,
    label: item.label,
    actif: chemin === item.href,
  }));

  return (
    <>
      <header className="entete relative z-50">
        <Barre entrees={entrees} onOuvrir={() => setMenu(true)} />
      </header>

      {/* Panneau « Contactez-nous » : bureau seulement (§5) */}
      <PanneauContact ouvert={menu} onFermer={fermer} />

      {/* Clone fixe : invisible 90 % de la seconde, puis apparition nette */}
      {collant && (
        <div
          onAnimationEnd={() => setPrete(true)}
          className={`entete-collant entete-collant-entree entete-collant-transparent entete ${
            prete ? "" : "pointer-events-none"
          }`}
        >
          <Barre entrees={entrees} onOuvrir={() => setMenu(true)} />
        </div>
      )}

      {/* Tiroir mobile */}
      {menu && (
        <div className="fixed inset-0 z-[110] lg:hidden">
          <button
            type="button"
            aria-label="Fermer le menu"
            onClick={() => setMenu(false)}
            className="voile-menu absolute inset-0 bg-noir-doux/70"
          />
          <div className="tiroir-menu absolute inset-y-0 right-0 flex w-full max-w-sm flex-col overflow-y-auto bg-noir-doux px-6 py-6 text-white">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[1.02rem] font-bold uppercase tracking-[0.2em] text-white">
                KODÊ
              </span>
              <button
                type="button"
                onClick={() => setMenu(false)}
                aria-label="Fermer le menu"
                className="flex h-10 w-10 items-center justify-center border border-white/25 text-white"
              >
                <span className="relative block h-4 w-4">
                  <span className="absolute left-0 top-1/2 h-[1.5px] w-4 -translate-y-1/2 rotate-45 bg-current" />
                  <span className="absolute left-0 top-1/2 h-[1.5px] w-4 -translate-y-1/2 -rotate-45 bg-current" />
                </span>
              </button>
            </div>

            <nav className="mt-10 flex flex-col" aria-label="Navigation">
              {entrees.map((entree) => (
                <Link
                  key={entree.href}
                  href={entree.href}
                  onClick={() => setMenu(false)}
                  aria-current={entree.actif ? "page" : undefined}
                  className="tr-couleur border-b border-filet py-4 font-mono text-[1.05rem] font-bold uppercase tracking-[0.06em] text-white/90 hover:text-accent"
                >
                  {entree.label}
                </Link>
              ))}
            </nav>

            <div className="mt-8 flex flex-col gap-3">
              <Link
                href={navCta.href}
                onClick={() => setMenu(false)}
                className="btn-entete h-auto justify-center py-4 text-white"
              >
                {navCta.label}
                <Calendar className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${site.phoneRaw}`}
                className="tr inline-flex items-center justify-center gap-2 border border-white/25 px-6 py-4 font-mono text-[0.82rem] font-bold uppercase tracking-[0.12em] text-white hover:bg-white hover:text-noir-doux"
              >
                <Phone className="h-4 w-4" />
                {site.phoneDisplay}
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="t-label-sm mt-2 text-center text-accent"
              >
                WhatsApp — {site.cities}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Barre({ entrees, onOuvrir }: { entrees: Entree[]; onOuvrir: () => void }) {
  return (
    <div className="flex h-[88px] items-stretch pl-[30px]">
      <Link href="/" className="flex items-center" aria-label={`${site.name} — accueil`}>
        <Image
          src={assets.logo}
          alt={site.name}
          width={300}
          height={88}
          priority
          unoptimized
          className="h-[44px] w-[150px] object-contain object-left"
        />
      </Link>

      <nav className="ml-[132px] hidden items-stretch lg:flex" aria-label="Navigation">
        {entrees.map((entree) => (
          <Link
            key={entree.href}
            href={entree.href}
            aria-current={entree.actif ? "page" : undefined}
            className="nav-lien"
          >
            {entree.label}
          </Link>
        ))}
      </nav>

      <div className="ml-auto flex items-stretch">
        <Link href={navCta.href} className="btn-entete hidden lg:inline-flex">
          {navCta.label}
          <Calendar className="h-4 w-4" />
        </Link>

        {/* Bouton carré de droite : panneau « Contactez-nous » au bureau,
            tiroir de navigation en dessous de 1024 px. Sa pastille à neuf
            points reprend celle du site de référence. */}
        <button
          type="button"
          onClick={onOuvrir}
          aria-label="Ouvrir le menu"
          className="btn-burger-entete"
        >
          <span aria-hidden className="grid grid-cols-3 gap-[4px]">
            {Array.from({ length: 9 }, (_, i) => (
              <span key={i} className="block h-[4px] w-[4px] bg-current" />
            ))}
          </span>
        </button>
      </div>
    </div>
  );
}
