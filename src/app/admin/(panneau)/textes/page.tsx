import type { Metadata } from "next";
import Link from "next/link";
import { hasLangue, langues, locales, type Langue } from "@/i18n/config";
import { dictionnaireFusionne, surchargeTextes } from "@/lib/contenu";
import { baseDisponible } from "@/lib/db";
import { reinitialiserTextes } from "../../actions";
import { BoutonConfirmer, boutonSecondaire, EnTete } from "../ui";
import EditeurTextes from "./EditeurTextes";

export const metadata: Metadata = { title: "Textes du site" };

export default async function PageTextes({ searchParams }: PageProps<"/admin/textes">) {
  const demandee = String((await searchParams).langue ?? "fr");
  const lang: Langue = hasLangue(demandee) ? demandee : "fr";

  const [textes, reference, modifies] = await Promise.all([
    dictionnaireFusionne(lang),
    lang === "fr" ? Promise.resolve(null) : dictionnaireFusionne("fr"),
    baseDisponible() ? surchargeTextes(lang) : Promise.resolve(null),
  ]);

  return (
    <>
      <EnTete
        titre="Textes du site"
        texte="Tous les textes affichés sur le site, rubrique par rubrique. Un champ laissé vide reprend le texte d’origine. Le site est mis à jour dès l’enregistrement."
        actions={
          modifies ? (
            <form action={reinitialiserTextes}>
              <input type="hidden" name="langue" value={lang} />
              <BoutonConfirmer
                message={`Revenir aux textes d’origine en ${locales[lang].nom} ? Toutes les modifications de cette langue seront perdues.`}
                className={`${boutonSecondaire} border-red-700/30 text-red-800 hover:border-red-700 hover:bg-red-700`}
              >
                Revenir aux textes d’origine ({locales[lang].court})
              </BoutonConfirmer>
            </form>
          ) : undefined
        }
      />

      <div className="mb-6 flex gap-2">
        {langues.map((l) => (
          <Link
            key={l}
            href={`/admin/textes?langue=${l}`}
            className={`tr px-4 py-2 font-mono text-[0.75rem] font-bold uppercase tracking-[0.1em] ${
              l === lang ? "bg-brun text-white" : "border border-bordure bg-white text-encre/70 hover:border-brun"
            }`}
          >
            {locales[l].nom}
          </Link>
        ))}
      </div>

      {/* `key` : l'éditeur repart de zéro quand on change de langue. */}
      <EditeurTextes key={lang} lang={lang} textes={textes} reference={reference} />
    </>
  );
}
