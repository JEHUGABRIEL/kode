"use client";

import { useRef, useState } from "react";
import { site, waLink } from "@/lib/site";
import { Mail, WhatsApp } from "./icons";
import type { Dictionnaire } from "@/i18n/dictionnaires/fr";

/**
 * Site statique : le formulaire pré-remplit WhatsApp ou le client e-mail.
 * Pour recevoir les demandes côté serveur, brancher une Server Action et
 * remplacer `envoyer`.
 */
export default function ContactForm({ textes: t }: { textes: Dictionnaire["formulaire"] }) {
  const refFormulaire = useRef<HTMLFormElement>(null);
  const [statut, setStatut] = useState<string | null>(null);

  const envoyer = (canal: "whatsapp" | "email") => {
    const formulaire = refFormulaire.current;
    if (!formulaire || !formulaire.reportValidity()) return;

    const donnees = new FormData(formulaire);
    const valeur = (cle: string) => String(donnees.get(cle) ?? "").trim() || "—";

    const corps = [
      t.message.entete,
      "",
      `${t.message.nom} : ${valeur("nom")}`,
      `${t.message.structure} : ${valeur("structure")}`,
      `${t.message.email} : ${valeur("email")}`,
      `${t.message.telephone} : ${valeur("telephone")}`,
      `${t.message.besoin} : ${valeur("besoin")}`,
      `${t.message.budget} : ${valeur("budget")}`,
      "",
      `${t.message.projet} :`,
      valeur("message"),
    ].join("\n");

    if (canal === "email") {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        `${t.message.objet} — ${valeur("nom")}`,
      )}&body=${encodeURIComponent(corps)}`;
      setStatut(t.statutEmail);
    } else {
      window.open(waLink(corps), "_blank", "noopener");
      setStatut(t.statutWhatsApp);
    }
  };

  const champ =
    "w-full border border-bordure bg-white px-4 py-3 text-[0.95rem] text-encre outline-none transition-colors duration-300 placeholder:text-encre/35 focus:border-accent";
  const etiquette = "t-label-sm text-encre/70";

  return (
    <form ref={refFormulaire} onSubmit={(e) => e.preventDefault()} className="grid gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <label className={etiquette} htmlFor="nom">
            {t.nom} <span className="text-accent">*</span>
          </label>
          <input id="nom" name="nom" required autoComplete="name" className={champ} />
        </div>
        <div className="grid gap-2">
          <label className={etiquette} htmlFor="structure">
            {t.structure}
          </label>
          <input id="structure" name="structure" autoComplete="organization" className={champ} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <label className={etiquette} htmlFor="email">
            {t.email} <span className="text-accent">*</span>
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={champ} />
        </div>
        <div className="grid gap-2">
          <label className={etiquette} htmlFor="telephone">
            {t.telephone}
          </label>
          <input
            id="telephone"
            name="telephone"
            type="tel"
            autoComplete="tel"
            placeholder="+236 …"
            className={champ}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <label className={etiquette} htmlFor="besoin">
            {t.besoin} <span className="text-accent">*</span>
          </label>
          <select id="besoin" name="besoin" required defaultValue="" className={champ}>
            <option value="" disabled>
              {t.choisir}
            </option>
            {t.besoins.map((besoin) => (
              <option key={besoin}>{besoin}</option>
            ))}
          </select>
        </div>
        <div className="grid gap-2">
          <label className={etiquette} htmlFor="budget">
            {t.budget}
          </label>
          <select id="budget" name="budget" defaultValue="" className={champ}>
            <option value="">{t.nonDefini}</option>
            {t.budgets.map((budget) => (
              <option key={budget}>{budget}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-2">
        <label className={etiquette} htmlFor="message">
          {t.projet} <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder={t.projetExemple}
          className={`${champ} resize-y`}
        />
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => envoyer("whatsapp")}
          className="tr inline-flex items-center justify-center gap-2.5 bg-accent px-7 py-4 font-mono text-[0.8rem] font-bold uppercase tracking-[0.12em] text-noir-doux hover:bg-noir-doux hover:text-white"
        >
          <WhatsApp className="h-[18px] w-[18px]" />
          {t.envoyerWhatsApp}
        </button>
        <button
          type="button"
          onClick={() => envoyer("email")}
          className="tr inline-flex items-center justify-center gap-2.5 border border-encre/25 px-7 py-4 font-mono text-[0.8rem] font-bold uppercase tracking-[0.12em] text-encre hover:border-noir-doux hover:bg-noir-doux hover:text-white"
        >
          <Mail className="h-[18px] w-[18px]" />
          {t.envoyerEmail}
        </button>
      </div>

      {statut && (
        <p role="status" className="border border-accent/60 bg-accent/10 px-4 py-3 text-[0.88rem] text-encre">
          {statut}
        </p>
      )}

      <p className="text-[0.84rem] text-encre/60">
        {t.confidentialite}
      </p>
    </form>
  );
}
