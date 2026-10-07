import type { Metadata } from "next";
import Link from "next/link";
import { tousLesAvis } from "@/lib/contenu";
import { baseDisponible } from "@/lib/db";
import type { StatutAvis } from "@/lib/types";
import { changerStatutAvis, supprimerAvis } from "../../actions";
import { BoutonConfirmer, boutonSecondaire, Carte, dateCourte, EnTete, Pastille } from "../ui";

export const metadata: Metadata = { title: "Avis clients" };

const ONGLETS: { statut: StatutAvis; label: string }[] = [
  { statut: "en_attente", label: "À valider" },
  { statut: "publie", label: "Publiés" },
  { statut: "refuse", label: "Refusés" },
];

export default async function PageAvis({ searchParams }: PageProps<"/admin/avis">) {
  const demande = (await searchParams).statut;
  const statut: StatutAvis = ONGLETS.some((o) => o.statut === demande) ? (demande as StatutAvis) : "en_attente";
  const avis = baseDisponible() ? await tousLesAvis() : [];
  const liste = avis.filter((a) => a.statut === statut);

  return (
    <>
      <EnTete
        titre="Avis clients"
        texte="Les avis envoyés depuis la page Réalisations arrivent ici. Seuls les avis publiés apparaissent sur le site."
      />

      <div className="mb-6 flex flex-wrap gap-2">
        {ONGLETS.map((o) => {
          const nombre = avis.filter((a) => a.statut === o.statut).length;
          return (
            <Link
              key={o.statut}
              href={`/admin/avis?statut=${o.statut}`}
              className={`tr px-4 py-2 font-mono text-[0.75rem] font-bold uppercase tracking-[0.1em] ${
                o.statut === statut ? "bg-brun text-white" : "border border-bordure bg-white text-encre/70 hover:border-brun"
              }`}
            >
              {o.label} ({nombre})
            </Link>
          );
        })}
      </div>

      <div className="flex flex-col gap-4">
        {liste.map((a) => (
          <Carte key={a.id} className="p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-[1.05rem] font-semibold">{a.nom}</p>
                  <span className="text-accent" aria-label={`${a.note}/5`}>
                    {"★".repeat(a.note)}
                    <span className="text-bordure">{"★".repeat(5 - a.note)}</span>
                  </span>
                  <Pastille ton="neutre">{a.langue.toUpperCase()}</Pastille>
                </div>
                <p className="mt-1 text-[0.85rem] text-encre/55">
                  {[a.fonction, a.prestation, dateCourte(a.creeLe)].filter(Boolean).join(" · ")}
                </p>
                <p className="mt-4 whitespace-pre-line text-[0.97rem] leading-relaxed">{a.texte}</p>
              </div>

              <div className="flex shrink-0 flex-wrap gap-2 md:flex-col">
                {a.statut !== "publie" && (
                  <form action={changerStatutAvis}>
                    <input type="hidden" name="id" value={a.id} />
                    <input type="hidden" name="statut" value="publie" />
                    <button type="submit" className={`${boutonSecondaire} w-full border-emerald-700/40 text-emerald-800 hover:border-emerald-700 hover:bg-emerald-700`}>
                      Publier
                    </button>
                  </form>
                )}
                {a.statut !== "refuse" && (
                  <form action={changerStatutAvis}>
                    <input type="hidden" name="id" value={a.id} />
                    <input type="hidden" name="statut" value="refuse" />
                    <button type="submit" className={`${boutonSecondaire} w-full`}>
                      {a.statut === "publie" ? "Retirer" : "Refuser"}
                    </button>
                  </form>
                )}
                <form action={supprimerAvis}>
                  <input type="hidden" name="id" value={a.id} />
                  <BoutonConfirmer
                    message={`Supprimer définitivement l’avis de ${a.nom} ?`}
                    className={`${boutonSecondaire} w-full border-red-700/30 text-red-800 hover:border-red-700 hover:bg-red-700`}
                  >
                    Supprimer
                  </BoutonConfirmer>
                </form>
              </div>
            </div>
          </Carte>
        ))}
        {liste.length === 0 && (
          <Carte className="p-8 text-center text-[0.95rem] text-encre/55">Aucun avis dans cette catégorie.</Carte>
        )}
      </div>
    </>
  );
}
