import type { Metadata } from "next";
import Link from "next/link";
import { toutesLesDemandes, toutesLesRealisations, tousLesAvis } from "@/lib/contenu";
import { baseDisponible } from "@/lib/db";
import { Carte, dateCourte, EnTete, Pastille } from "./ui";

export const metadata: Metadata = { title: "Tableau de bord" };

export default async function TableauDeBord() {
  if (!baseDisponible()) return <EnTete titre="Tableau de bord" />;

  const [avis, demandes, realisations] = await Promise.all([tousLesAvis(), toutesLesDemandes(), toutesLesRealisations()]);
  const avisEnAttente = avis.filter((a) => a.statut === "en_attente");
  const demandesATraiter = demandes.filter((d) => !d.traitee);

  const chiffres = [
    { valeur: avisEnAttente.length, libelle: "avis à valider", href: "/admin/avis", alerte: avisEnAttente.length > 0 },
    { valeur: demandesATraiter.length, libelle: "demandes à traiter", href: "/admin/demandes", alerte: demandesATraiter.length > 0 },
    { valeur: realisations.filter((r) => r.publiee).length, libelle: "réalisations publiées", href: "/admin/realisations", alerte: false },
    { valeur: avis.filter((a) => a.statut === "publie").length, libelle: "avis publiés", href: "/admin/avis?statut=publie", alerte: false },
  ];

  return (
    <>
      <EnTete titre="Tableau de bord" texte="Ce qui demande votre attention aujourd’hui." />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {chiffres.map((c) => (
          <Link key={c.libelle} href={c.href} className="tr group border border-bordure bg-white p-6 hover:border-brun">
            <p className={`font-mono text-[2.6rem] font-bold leading-none ${c.alerte ? "text-accent" : "text-brun"}`}>{c.valeur}</p>
            <p className="mt-3 text-[0.9rem] text-encre/70 group-hover:text-encre">{c.libelle}</p>
          </Link>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Carte className="p-6">
          <h2 className="font-mono text-[0.85rem] font-bold uppercase tracking-[0.12em] text-brun">Derniers avis</h2>
          <ul className="mt-4 divide-y divide-bordure">
            {avis.slice(0, 5).map((a) => (
              <li key={a.id} className="flex items-start justify-between gap-4 py-3">
                <div className="min-w-0">
                  <p className="font-semibold">
                    {a.nom} <span className="text-accent">{"★".repeat(a.note)}</span>
                  </p>
                  <p className="truncate text-[0.88rem] text-encre/60">{a.texte}</p>
                </div>
                <Pastille ton={a.statut === "publie" ? "ok" : a.statut === "refuse" ? "refus" : "attente"}>
                  {a.statut === "publie" ? "Publié" : a.statut === "refuse" ? "Refusé" : "À valider"}
                </Pastille>
              </li>
            ))}
            {avis.length === 0 && <li className="py-3 text-[0.9rem] text-encre/55">Aucun avis pour l’instant.</li>}
          </ul>
        </Carte>

        <Carte className="p-6">
          <h2 className="font-mono text-[0.85rem] font-bold uppercase tracking-[0.12em] text-brun">Dernières demandes</h2>
          <ul className="mt-4 divide-y divide-bordure">
            {demandes.slice(0, 5).map((d) => (
              <li key={d.id} className="flex items-start justify-between gap-4 py-3">
                <div className="min-w-0">
                  <p className="font-semibold">
                    {d.nom} <span className="font-normal text-encre/55">· {d.besoin || "—"}</span>
                  </p>
                  <p className="text-[0.82rem] text-encre/55">{dateCourte(d.creeLe)}</p>
                </div>
                <Pastille ton={d.traitee ? "neutre" : "attente"}>{d.traitee ? "Traitée" : "À traiter"}</Pastille>
              </li>
            ))}
            {demandes.length === 0 && <li className="py-3 text-[0.9rem] text-encre/55">Aucune demande pour l’instant.</li>}
          </ul>
        </Carte>
      </div>
    </>
  );
}
