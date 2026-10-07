import type { Metadata } from "next";
import { EnTete } from "../../ui";
import FormulaireRealisation from "../FormulaireRealisation";

export const metadata: Metadata = { title: "Nouvelle réalisation" };

export default function NouvelleRealisation() {
  return (
    <>
      <EnTete titre="Nouvelle réalisation" texte="Renseignez les textes en français et en anglais, puis ajoutez une photo." />
      <FormulaireRealisation />
    </>
  );
}
