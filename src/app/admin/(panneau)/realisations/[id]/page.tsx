import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { realisationParId } from "@/lib/contenu";
import { EnTete } from "../../ui";
import FormulaireRealisation from "../FormulaireRealisation";

export const metadata: Metadata = { title: "Modifier une réalisation" };

export default async function ModifierRealisation({ params }: PageProps<"/admin/realisations/[id]">) {
  const id = Number((await params).id);
  const realisation = Number.isInteger(id) ? await realisationParId(id) : null;
  if (!realisation) notFound();

  return (
    <>
      <EnTete titre="Modifier la réalisation" texte={realisation.contenu.fr.titre} />
      <FormulaireRealisation realisation={realisation} />
    </>
  );
}
