"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ENTREES = [
  { href: "/admin", label: "Tableau de bord" },
  { href: "/admin/avis", label: "Avis clients" },
  { href: "/admin/demandes", label: "Demandes de contact" },
  { href: "/admin/realisations", label: "Réalisations" },
  { href: "/admin/textes", label: "Textes du site" },
];

export default function NavAdmin() {
  const chemin = usePathname();

  return (
    <nav aria-label="Back-office" className="flex gap-1 overflow-x-auto px-3 py-4 lg:flex-col lg:overflow-visible">
      {ENTREES.map((entree) => {
        const actif = entree.href === "/admin" ? chemin === "/admin" : chemin.startsWith(entree.href);
        return (
          <Link
            key={entree.href}
            href={entree.href}
            aria-current={actif ? "page" : undefined}
            className={`tr whitespace-nowrap px-3 py-2.5 font-mono text-[0.78rem] font-bold uppercase tracking-[0.1em] ${
              actif ? "bg-accent text-noir-doux" : "text-attenue-clair hover:bg-white/5 hover:text-white"
            }`}
          >
            {entree.label}
          </Link>
        );
      })}
    </nav>
  );
}
