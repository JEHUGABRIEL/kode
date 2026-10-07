import type { Metadata } from "next";
import { toutesLesDemandes } from "@/lib/contenu";
import { baseDisponible } from "@/lib/db";
import { basculerDemande, supprimerDemande } from "../../actions";
import { BoutonConfirmer, boutonSecondaire, Carte, dateCourte, EnTete, Pastille } from "../ui";

export const metadata: Metadata = { title: "Demandes de contact" };

export default async function PageDemandes() {
  const demandes = baseDisponible() ? await toutesLesDemandes() : [];
  const aTraiter = demandes.filter((d) => !d.traitee);
  const traitees = demandes.filter((d) => d.traitee);

  return (
    <>
      <EnTete
        titre="Demandes de contact"
        texte="Chaque demande envoyée depuis la page Contact est enregistrée ici, en plus du message WhatsApp ou e-mail reçu."
      />

      {[
        { titre: `À traiter (${aTraiter.length})`, liste: aTraiter },
        { titre: `Traitées (${traitees.length})`, liste: traitees },
      ].map((groupe) => (
        <section key={groupe.titre} className="mb-10">
          <h2 className="mb-4 font-mono text-[0.85rem] font-bold uppercase tracking-[0.12em] text-brun">{groupe.titre}</h2>
          <div className="flex flex-col gap-4">
            {groupe.liste.map((d) => {
              const telephone = d.telephone.replace(/[^\d+]/g, "");
              return (
                <Carte key={d.id} className={`p-6 ${d.traitee ? "opacity-75" : ""}`}>
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <p className="text-[1.05rem] font-semibold">{d.nom}</p>
                        {d.structure && <span className="text-encre/60">· {d.structure}</span>}
                        <Pastille ton={d.traitee ? "neutre" : "attente"}>{d.traitee ? "Traitée" : "À traiter"}</Pastille>
                        <Pastille ton="neutre">{d.langue.toUpperCase()}</Pastille>
                      </div>
                      <dl className="mt-3 grid gap-x-6 gap-y-1 text-[0.88rem] sm:grid-cols-2">
                        <div><dt className="inline text-encre/50">E-mail : </dt><dd className="inline"><a href={`mailto:${d.email}`} className="text-brun underline">{d.email}</a></dd></div>
                        <div><dt className="inline text-encre/50">Téléphone : </dt><dd className="inline">{d.telephone || "—"}</dd></div>
                        <div><dt className="inline text-encre/50">Besoin : </dt><dd className="inline">{d.besoin || "—"}</dd></div>
                        <div><dt className="inline text-encre/50">Budget : </dt><dd className="inline">{d.budget || "—"}</dd></div>
                        <div><dt className="inline text-encre/50">Reçue : </dt><dd className="inline">{dateCourte(d.creeLe)} (via {d.canal === "email" ? "e-mail" : "WhatsApp"})</dd></div>
                      </dl>
                      <p className="mt-4 whitespace-pre-line border-l-2 border-accent pl-4 text-[0.95rem] leading-relaxed">{d.message}</p>
                    </div>

                    <div className="flex shrink-0 flex-wrap gap-2 md:w-44 md:flex-col">
                      <a href={`mailto:${d.email}?subject=${encodeURIComponent("KODÊ — votre demande")}`} className={`${boutonSecondaire} w-full`}>
                        Répondre par e-mail
                      </a>
                      {telephone && (
                        <a href={`https://wa.me/${telephone.replace(/^\+/, "")}`} target="_blank" rel="noopener noreferrer" className={`${boutonSecondaire} w-full`}>
                          WhatsApp
                        </a>
                      )}
                      <form action={basculerDemande}>
                        <input type="hidden" name="id" value={d.id} />
                        <button type="submit" className={`${boutonSecondaire} w-full`}>
                          {d.traitee ? "Remettre à traiter" : "Marquer traitée"}
                        </button>
                      </form>
                      <form action={supprimerDemande}>
                        <input type="hidden" name="id" value={d.id} />
                        <BoutonConfirmer
                          message={`Supprimer définitivement la demande de ${d.nom} ?`}
                          className={`${boutonSecondaire} w-full border-red-700/30 text-red-800 hover:border-red-700 hover:bg-red-700`}
                        >
                          Supprimer
                        </BoutonConfirmer>
                      </form>
                    </div>
                  </div>
                </Carte>
              );
            })}
            {groupe.liste.length === 0 && <Carte className="p-6 text-[0.92rem] text-encre/55">Aucune demande.</Carte>}
          </div>
        </section>
      ))}
    </>
  );
}
