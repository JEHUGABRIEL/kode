"use client";

import { upload } from "@vercel/blob/client";
import Image from "next/image";
import Link from "next/link";
import { useActionState, useState } from "react";
import { langues, locales } from "@/i18n/config";
import type { Realisation } from "@/lib/types";
import { enregistrerRealisation, type EtatFormulaire } from "../../actions";
import { boutonPrincipal, boutonSecondaire } from "../ui";

const champ =
  "w-full border border-bordure bg-white px-3.5 py-2.5 font-sans text-[0.95rem] font-normal normal-case tracking-normal text-encre outline-none transition-colors focus:border-accent";
const etiquette = "flex flex-col gap-1.5 font-mono text-[0.72rem] font-bold uppercase tracking-[0.1em] text-encre/65";

export default function FormulaireRealisation({ realisation }: { realisation?: Realisation }) {
  const [etat, action, enCours] = useActionState<EtatFormulaire, FormData>(enregistrerRealisation, {});
  const [imageUrl, setImageUrl] = useState(realisation?.imageUrl ?? "");
  const [televersement, setTeleversement] = useState<string | null>(null);

  const televerser = async (fichier: File | undefined) => {
    if (!fichier) return;
    setTeleversement("Envoi de la photo… 0 %");
    try {
      const resultat = await upload(`realisations/${fichier.name}`, fichier, {
        access: "public",
        handleUploadUrl: "/api/televersement",
        onUploadProgress: ({ percentage }) => setTeleversement(`Envoi de la photo… ${Math.round(percentage)} %`),
      });
      setImageUrl(resultat.url);
      setTeleversement(null);
    } catch (erreur) {
      setTeleversement(`Échec de l’envoi : ${(erreur as Error).message}`);
    }
  };

  return (
    <form action={action} className="flex flex-col gap-8">
      {realisation && <input type="hidden" name="id" value={realisation.id} />}

      <div className="grid gap-6 lg:grid-cols-2">
        {langues.map((lang) => {
          const t = realisation?.contenu[lang];
          return (
            <fieldset key={lang} className="flex flex-col gap-4 border border-bordure bg-white p-6">
              <legend className="px-2 font-mono text-[0.8rem] font-bold uppercase tracking-[0.12em] text-brun">
                {locales[lang].nom}
              </legend>
              <label className={etiquette}>
                Catégorie
                <input name={`${lang}.categorie`} defaultValue={t?.categorie} maxLength={80} placeholder={lang === "fr" ? "Campagne, Événementiel…" : "Campaign, Event…"} className={champ} />
              </label>
              <label className={etiquette}>
                Titre *
                <input name={`${lang}.titre`} defaultValue={t?.titre} required maxLength={160} className={champ} />
              </label>
              <label className={etiquette}>
                Texte *
                <textarea name={`${lang}.texte`} defaultValue={t?.texte} required rows={5} maxLength={2000} className={`${champ} resize-y`} />
              </label>
              <label className={etiquette}>
                Livrables (un par ligne)
                <textarea name={`${lang}.livrables`} defaultValue={t?.livrables.join("\n")} rows={4} className={`${champ} resize-y`} />
              </label>
            </fieldset>
          );
        })}
      </div>

      <fieldset className="grid gap-6 border border-bordure bg-white p-6 md:grid-cols-[240px_1fr]">
        <legend className="px-2 font-mono text-[0.8rem] font-bold uppercase tracking-[0.12em] text-brun">Photo</legend>
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-gris-clair">
          {imageUrl ? (
            <Image src={imageUrl} alt="" fill sizes="240px" className="object-cover" />
          ) : (
            <span className="absolute inset-0 flex items-center justify-center text-[0.85rem] text-encre/45">Aucune photo</span>
          )}
        </div>
        <div className="flex flex-col gap-4">
          <label className={etiquette}>
            Téléverser une photo (JPG, PNG, WebP — 12 Mo max)
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp,image/avif"
              onChange={(e) => televerser(e.target.files?.[0])}
              className="text-[0.9rem] font-normal normal-case tracking-normal file:mr-4 file:border-0 file:bg-brun file:px-4 file:py-2 file:font-mono file:text-[0.72rem] file:font-bold file:uppercase file:text-white"
            />
          </label>
          {televersement && <p className="text-[0.88rem] text-encre/70">{televersement}</p>}
          <label className={etiquette}>
            … ou adresse de l’image
            <input name="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="https://" className={champ} />
          </label>
        </div>
      </fieldset>

      <label className="flex items-center gap-3 text-[0.95rem]">
        <input type="checkbox" name="publiee" defaultChecked={realisation?.publiee ?? true} className="h-4 w-4 accent-[#fd850d]" />
        Publiée sur le site
      </label>

      {etat.erreur && (
        <p role="alert" className="border border-red-700/40 bg-red-50 px-4 py-3 text-[0.92rem] text-red-900">
          {etat.erreur}
        </p>
      )}

      <div className="flex flex-wrap gap-3">
        <button type="submit" disabled={enCours || televersement?.startsWith("Envoi") === true} className={boutonPrincipal}>
          {enCours ? "Enregistrement…" : "Enregistrer"}
        </button>
        <Link href="/admin/realisations" className={boutonSecondaire}>
          Annuler
        </Link>
      </div>
    </form>
  );
}
