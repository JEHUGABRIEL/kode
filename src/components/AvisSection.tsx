"use client";

import { useEffect, useRef, useState } from "react";
import { site, waLink } from "@/lib/site";
import { Check, Close, Mail, Quote, Star, WhatsApp } from "./icons";
import { Container, Overline } from "./ui";
import type { Dictionnaire } from "@/i18n/dictionnaires/fr";

/**
 * « Laisser un avis » — KODÊ ne publie que de vrais retours. Le bandeau
 * présente la démarche ; le bouton déplie un formulaire (même animation
 * `grid-template-rows` que l'accordéon). Le site étant statique, l'avis
 * part pré-rédigé par WhatsApp ou par e-mail, comme le formulaire de contact.
 */
export default function AvisSection({ textes: t }: { textes: Dictionnaire["avis"] }) {
  const [ouvert, setOuvert] = useState(false);
  const [note, setNote] = useState(0);
  const [survol, setSurvol] = useState(0);
  const [statut, setStatut] = useState<string | null>(null);
  const refFormulaire = useRef<HTMLFormElement>(null);
  const premierChamp = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!ouvert) return;
    const minuteur = window.setTimeout(() => premierChamp.current?.focus(), 320);
    return () => window.clearTimeout(minuteur);
  }, [ouvert]);

  const envoyer = (canal: "whatsapp" | "email") => {
    const formulaire = refFormulaire.current;
    if (!formulaire || !formulaire.reportValidity()) return;
    if (note === 0) {
      setStatut(t.statutNote);
      return;
    }

    const donnees = new FormData(formulaire);
    const valeur = (cle: string) => String(donnees.get(cle) ?? "").trim() || "—";

    const corps = [
      t.message.entete,
      "",
      `${t.message.note} : ${"★".repeat(note)}${"☆".repeat(5 - note)} (${note}/5)`,
      `${t.message.nom} : ${valeur("nom")}`,
      `${t.message.fonction} : ${valeur("fonction")}`,
      `${t.message.prestation} : ${valeur("prestation")}`,
      "",
      `${t.message.avis} :`,
      valeur("avis"),
      "",
      t.message.accord,
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
  const affichee = survol || note;

  return (
    <section id="avis" className="relative scroll-mt-28 bg-brun py-16 text-white md:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-20">
          <div>
            <Overline ton="sombre">{t.surtitre}</Overline>
            <h2 className="t-h2 mt-4 text-white">{t.titre}</h2>
            <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-attenue-clair">
              {t.texte}
            </p>
            <ul className="mt-8 flex flex-col gap-3">
              {t.engagements.map((engagement) => (
                <li key={engagement} className="flex items-center gap-3 text-[0.95rem] text-attenue-clair">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Check className="h-3 w-3" />
                  </span>
                  {engagement}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative border border-filet bg-noir-doux/45 p-8 lg:p-10">
            <Quote className="h-8 w-8 text-accent" />
            <p className="t-serif mt-5 text-[1.35rem] leading-snug text-creme md:text-[1.6rem]">
              {t.citation}
            </p>
            <div className="mt-6 flex items-center gap-1 text-accent" aria-hidden>
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className="h-5 w-5" />
              ))}
            </div>
            <button
              type="button"
              onClick={() => {
                setOuvert((valeur) => !valeur);
                setStatut(null);
              }}
              aria-expanded={ouvert}
              aria-controls="formulaire-avis"
              className="tr mt-8 inline-flex w-full items-center justify-center gap-3 bg-accent px-7 py-4 font-mono text-[0.82rem] font-bold uppercase tracking-[0.12em] text-noir-doux hover:bg-white"
            >
              {ouvert ? (
                <>
                  {t.fermer}
                  <Close className="h-4 w-4" />
                </>
              ) : (
                <>
                  {t.ouvrir}
                  <Star className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Formulaire dépliable */}
        <div id="formulaire-avis" className="accordeon-panneau" data-ouvert={ouvert} inert={!ouvert}>
          <div>
            <form
              ref={refFormulaire}
              onSubmit={(e) => e.preventDefault()}
              noValidate
              className="mt-12 grid gap-6 bg-white p-7 text-encre md:p-10"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <h3 className="t-h4">{t.formTitre}</h3>
                <p className="text-[0.88rem] text-encre/55">
                  {t.obligatoiresAvant} <span className="text-accent">*</span> {t.obligatoiresApres}
                </p>
              </div>

              <fieldset>
                <legend className={etiquette}>
                  {t.note} <span className="text-accent">*</span>
                </legend>
                <div className="mt-3 flex items-center gap-1.5" onMouseLeave={() => setSurvol(0)}>
                  {Array.from({ length: 5 }, (_, i) => {
                    const valeur = i + 1;
                    return (
                      <button
                        key={valeur}
                        type="button"
                        onClick={() => setNote(valeur)}
                        onMouseEnter={() => setSurvol(valeur)}
                        aria-label={`${valeur} ${valeur > 1 ? t.etoiles : t.etoile} ${t.sur5}`}
                        aria-pressed={note === valeur}
                        className={`tr-couleur p-0.5 ${valeur <= affichee ? "text-accent" : "text-bordure hover:text-accent/60"}`}
                      >
                        <Star className="h-8 w-8" />
                      </button>
                    );
                  })}
                  <span className="t-label-sm ml-3 text-encre/55">{note ? `${note}/5` : t.nonNote}</span>
                </div>
              </fieldset>

              <div className="grid gap-5 md:grid-cols-3">
                <div className="grid gap-2">
                  <label className={etiquette} htmlFor="avis-nom">
                    {t.nom} <span className="text-accent">*</span>
                  </label>
                  <input ref={premierChamp} id="avis-nom" name="nom" required autoComplete="name" className={champ} />
                </div>
                <div className="grid gap-2">
                  <label className={etiquette} htmlFor="avis-fonction">
                    {t.fonction}
                  </label>
                  <input
                    id="avis-fonction"
                    name="fonction"
                    autoComplete="organization-title"
                    placeholder={t.fonctionExemple}
                    className={champ}
                  />
                </div>
                <div className="grid gap-2">
                  <label className={etiquette} htmlFor="avis-prestation">
                    {t.prestation} <span className="text-accent">*</span>
                  </label>
                  <select id="avis-prestation" name="prestation" required defaultValue="" className={champ}>
                    <option value="" disabled>
                      {t.choisir}
                    </option>
                    {t.prestations.map((prestation) => (
                      <option key={prestation}>{prestation}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid gap-2">
                <label className={etiquette} htmlFor="avis-texte">
                  {t.avis} <span className="text-accent">*</span>
                </label>
                <textarea
                  id="avis-texte"
                  name="avis"
                  required
                  rows={5}
                  minLength={20}
                  placeholder={t.avisExemple}
                  className={`${champ} resize-y`}
                />
              </div>

              <label className="flex items-start gap-3 text-[0.92rem] leading-relaxed text-encre/75">
                <input type="checkbox" name="accord" required className="mt-1 h-4 w-4 shrink-0 accent-[#fd850d]" />
                {t.accord}
              </label>

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
                <p role="status" className="border border-accent/60 bg-accent/10 px-4 py-3 text-[0.9rem] text-encre">
                  {statut}
                </p>
              )}
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
