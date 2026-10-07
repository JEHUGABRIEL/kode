"use client";

import { useRef, useState } from "react";
import { site, waLink } from "@/lib/site";
import { Mail, WhatsApp } from "./icons";

const BESOINS = [
  "Organisation d’événement",
  "Scénographie & décoration",
  "Stratégie de communication",
  "Branding & identité visuelle",
  "Marketing digital & réseaux sociaux",
  "Publicité & médias",
  "Impressions & signalétique",
  "Protocole & hôtesses",
  "Location de matériel",
  "Production photo / vidéo",
  "Création de site web",
  "Autre / je ne sais pas encore",
];

const BUDGETS = [
  "Moins de 250 000 FCFA",
  "250 000 – 1 000 000 FCFA",
  "1 000 000 – 5 000 000 FCFA",
  "Plus de 5 000 000 FCFA",
  "À définir ensemble",
];

/**
 * Site statique : le formulaire pré-remplit WhatsApp ou le client e-mail.
 * Pour recevoir les demandes côté serveur, brancher une Server Action et
 * remplacer `envoyer`.
 */
export default function ContactForm() {
  const refFormulaire = useRef<HTMLFormElement>(null);
  const [statut, setStatut] = useState<string | null>(null);

  const envoyer = (canal: "whatsapp" | "email") => {
    const formulaire = refFormulaire.current;
    if (!formulaire || !formulaire.reportValidity()) return;

    const donnees = new FormData(formulaire);
    const valeur = (cle: string) => String(donnees.get(cle) ?? "").trim() || "—";

    const corps = [
      "Nouvelle demande depuis kode-rca.com",
      "",
      `Nom : ${valeur("nom")}`,
      `Structure : ${valeur("structure")}`,
      `E-mail : ${valeur("email")}`,
      `Téléphone : ${valeur("telephone")}`,
      `Besoin : ${valeur("besoin")}`,
      `Budget : ${valeur("budget")}`,
      "",
      "Message :",
      valeur("message"),
    ].join("\n");

    if (canal === "email") {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        `Demande de devis — ${valeur("nom")}`,
      )}&body=${encodeURIComponent(corps)}`;
      setStatut("Votre client e-mail s’ouvre avec la demande pré-remplie.");
    } else {
      window.open(waLink(corps), "_blank", "noopener");
      setStatut("WhatsApp s’ouvre avec la demande pré-remplie : il ne reste qu’à l’envoyer.");
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
            Nom complet <span className="text-accent">*</span>
          </label>
          <input id="nom" name="nom" required autoComplete="name" className={champ} />
        </div>
        <div className="grid gap-2">
          <label className={etiquette} htmlFor="structure">
            Entreprise / structure
          </label>
          <input id="structure" name="structure" autoComplete="organization" className={champ} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <label className={etiquette} htmlFor="email">
            E-mail <span className="text-accent">*</span>
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={champ} />
        </div>
        <div className="grid gap-2">
          <label className={etiquette} htmlFor="telephone">
            Téléphone / WhatsApp
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
            Service souhaité <span className="text-accent">*</span>
          </label>
          <select id="besoin" name="besoin" required defaultValue="" className={champ}>
            <option value="" disabled>
              Choisir un service
            </option>
            {BESOINS.map((besoin) => (
              <option key={besoin}>{besoin}</option>
            ))}
          </select>
        </div>
        <div className="grid gap-2">
          <label className={etiquette} htmlFor="budget">
            Budget envisagé
          </label>
          <select id="budget" name="budget" defaultValue="" className={champ}>
            <option value="">Non défini</option>
            {BUDGETS.map((budget) => (
              <option key={budget}>{budget}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-2">
        <label className={etiquette} htmlFor="message">
          Votre projet <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Contexte, objectifs, délais…"
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
          Envoyer via WhatsApp
        </button>
        <button
          type="button"
          onClick={() => envoyer("email")}
          className="tr inline-flex items-center justify-center gap-2.5 border border-encre/25 px-7 py-4 font-mono text-[0.8rem] font-bold uppercase tracking-[0.12em] text-encre hover:border-noir-doux hover:bg-noir-doux hover:text-white"
        >
          <Mail className="h-[18px] w-[18px]" />
          Envoyer par e-mail
        </button>
      </div>

      {statut && (
        <p role="status" className="border border-accent/60 bg-accent/10 px-4 py-3 text-[0.88rem] text-encre">
          {statut}
        </p>
      )}

      <p className="text-[0.84rem] text-encre/60">
        Vos informations ne servent qu’à traiter votre demande. Elles ne sont ni revendues,
        ni partagées.
      </p>
    </form>
  );
}
