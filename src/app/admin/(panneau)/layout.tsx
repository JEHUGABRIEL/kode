import Image from "next/image";
import Link from "next/link";
import { exigerAdmin } from "@/lib/auth";
import { baseDisponible } from "@/lib/db";
import { assets } from "@/lib/site";
import { deconnexion } from "../actions";
import NavAdmin from "./NavAdmin";

/** Toutes les pages du panneau exigent une session valide. */
export default async function LayoutPanneau({ children }: { children: React.ReactNode }) {
  await exigerAdmin();

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[260px_1fr]">
      <aside className="flex flex-col bg-noir-doux text-white lg:sticky lg:top-0 lg:h-screen">
        <div className="flex items-center gap-3 border-b border-filet px-6 py-5">
          <Image src={assets.logoCarre} alt="" width={40} height={40} className="h-10 w-10 rounded-lg" />
          <div>
            <p className="font-mono text-[0.95rem] font-bold uppercase tracking-[0.14em]">KODÊ</p>
            <p className="text-[0.75rem] text-attenue-clair">Back-office</p>
          </div>
        </div>
        <NavAdmin />
        <div className="mt-auto flex flex-col gap-2 border-t border-filet px-6 py-5 text-[0.85rem]">
          <Link href="/" target="_blank" className="tr-couleur text-attenue-clair hover:text-white">
            Voir le site ↗
          </Link>
          <form action={deconnexion}>
            <button type="submit" className="tr-couleur text-attenue-clair hover:text-accent">
              Se déconnecter
            </button>
          </form>
        </div>
      </aside>

      <main className="min-w-0 px-5 py-8 md:px-10 md:py-12">
        {!baseDisponible() && (
          <p className="mb-8 border border-red-700/40 bg-red-50 px-4 py-3 text-[0.92rem] text-red-900">
            Aucune base de données n’est configurée (DATABASE_URL manquante) : le back-office ne peut
            rien enregistrer.
          </p>
        )}
        <div className="mx-auto max-w-6xl">{children}</div>
      </main>
    </div>
  );
}
