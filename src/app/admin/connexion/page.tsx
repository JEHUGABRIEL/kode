import type { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";
import { estAdmin } from "@/lib/auth";
import { assets } from "@/lib/site";
import FormulaireConnexion from "./FormulaireConnexion";

export const metadata: Metadata = { title: "Connexion" };

export default async function PageConnexion() {
  if (await estAdmin()) redirect("/admin");

  return (
    <main className="flex min-h-screen items-center justify-center bg-noir-doux px-4 py-12">
      <div className="w-full max-w-sm">
        <div className="flex justify-center">
          <Image src={assets.logoCarre} alt="KODÊ" width={120} height={120} className="h-28 w-28 rounded-2xl" />
        </div>
        <h1 className="mt-8 text-center font-mono text-[1.6rem] font-bold uppercase tracking-[0.04em] text-white">
          Back-office
        </h1>
        <p className="mt-2 text-center text-[0.92rem] text-attenue-clair">
          Avis, demandes, réalisations et textes du site.
        </p>
        <FormulaireConnexion />
      </div>
    </main>
  );
}
