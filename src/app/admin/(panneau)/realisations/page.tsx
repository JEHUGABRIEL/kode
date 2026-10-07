import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { toutesLesRealisations } from "@/lib/contenu";
import { baseDisponible } from "@/lib/db";
import { basculerRealisation, deplacerRealisation, supprimerRealisation } from "../../actions";
import { BoutonConfirmer, boutonPrincipal, boutonSecondaire, Carte, EnTete, Pastille } from "../ui";

export const metadata: Metadata = { title: "Réalisations" };

export default async function PageRealisations() {
  const realisations = baseDisponible() ? await toutesLesRealisations() : [];

  return (
    <>
      <EnTete
        titre="Réalisations"
        texte="L’ordre ci-dessous est celui du site : les quatre premières réalisations publiées apparaissent sur l’accueil, toutes apparaissent sur la page Réalisations."
        actions={
          <Link href="/admin/realisations/nouvelle" className={boutonPrincipal}>
            + Nouvelle réalisation
          </Link>
        }
      />

      <div className="flex flex-col gap-3">
        {realisations.map((r, i) => (
          <Carte key={r.id} className={`flex flex-col gap-4 p-4 md:flex-row md:items-center ${r.publiee ? "" : "opacity-70"}`}>
            <div className="relative h-24 w-full shrink-0 overflow-hidden bg-gris-clair md:w-36">
              {r.imageUrl && <Image src={r.imageUrl} alt="" fill sizes="144px" className="object-cover" />}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-[0.75rem] font-bold text-accent">{String(i + 1).padStart(2, "0")}</span>
                <p className="font-semibold">{r.contenu.fr.titre}</p>
                <Pastille ton={r.publiee ? "ok" : "neutre"}>{r.publiee ? "Publiée" : "Brouillon"}</Pastille>
                {r.publiee && i < 4 && <Pastille ton="attente">Accueil</Pastille>}
              </div>
              <p className="mt-1 text-[0.85rem] text-encre/55">
                {r.contenu.fr.categorie} · EN : {r.contenu.en.titre}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {(["haut", "bas"] as const).map((sens) => (
                <form key={sens} action={deplacerRealisation}>
                  <input type="hidden" name="id" value={r.id} />
                  <input type="hidden" name="sens" value={sens} />
                  <button
                    type="submit"
                    disabled={sens === "haut" ? i === 0 : i === realisations.length - 1}
                    aria-label={sens === "haut" ? "Monter" : "Descendre"}
                    className={`${boutonSecondaire} disabled:pointer-events-none disabled:opacity-30`}
                  >
                    {sens === "haut" ? "↑" : "↓"}
                  </button>
                </form>
              ))}
              <form action={basculerRealisation}>
                <input type="hidden" name="id" value={r.id} />
                <button type="submit" className={boutonSecondaire}>
                  {r.publiee ? "Dépublier" : "Publier"}
                </button>
              </form>
              <Link href={`/admin/realisations/${r.id}`} className={boutonSecondaire}>
                Modifier
              </Link>
              <form action={supprimerRealisation}>
                <input type="hidden" name="id" value={r.id} />
                <BoutonConfirmer
                  message={`Supprimer « ${r.contenu.fr.titre} » ?`}
                  className={`${boutonSecondaire} border-red-700/30 text-red-800 hover:border-red-700 hover:bg-red-700`}
                >
                  Supprimer
                </BoutonConfirmer>
              </form>
            </div>
          </Carte>
        ))}
        {realisations.length === 0 && (
          <Carte className="p-8 text-center text-[0.95rem] text-encre/55">Aucune réalisation.</Carte>
        )}
      </div>
    </>
  );
}
