"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { envoyerAvis, type EtatEnvoi } from "@/lib/actions-publiques";
import type { Langue } from "@/i18n/config";
import type { Dictionnaire } from "@/i18n/dictionnaires/fr";
import type { Avis } from "@/lib/types";
import { Check, Close, Quote, Star } from "./icons";
import { Container, Overline } from "./ui";

/**
 * « Laisser un avis » — KODÊ ne publie que de vrais retours.
 * 1. Les avis validés dans le back-office (/admin/avis) s'affichent en tête.
 * 2. Le bandeau présente la démarche ; le bouton déplie un formulaire (même
 *    animation `grid-template-rows` que l'accordéon).
 * 3. L'avis est enregistré en base « en attente » : il n'apparaît sur le
 *    site qu'une fois publié depuis le back-office.
 */
export default function AvisSection({
  textes: t,
  avis,
  lang,
}: {
  textes: Dictionnaire["avis"];
  avis: Avis[];
  lang: Langue;
}) {
  const [ouvert, setOuvert] = useState(false);
  const [note, setNote] = useState(0);
  const [survol, setSurvol] = useState(0);
  const [alerteNote, setAlerteNote] = useState(false);
  const [etat, action, enCours] = useActionState<EtatEnvoi, FormData>(envoyerAvis, { statut: "idle" });
  const refFormulaire = useRef<HTMLFormElement>(null);
  const premierChamp = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!ouvert) return;
    const minuteur = window.setTimeout(() => premierChamp.current?.focus(), 320);
    return () => window.clearTimeout(minuteur);
  }, [ouvert]);

  /* Après un envoi réussi, le formulaire est vidé. */
  useEffect(() => {
    if (etat.statut !== "merci") return;
    refFormulaire.current?.reset();
    const frame = requestAnimationFrame(() => setNote(0));
    return () => cancelAnimationFrame(frame);
  }, [etat]);

  const champ =
    "w-full border border-bordure bg-white px-4 py-3 text-[0.95rem] text-encre outline-none transition-colors duration-300 placeholder:text-encre/35 focus:border-accent";
  const etiquette = "t-label-sm text-encre/70";
  const affichee = survol || note;

  const message = alerteNote
    ? t.statutNote
    : etat.statut === "merci"
      ? t.statutMerci
      : etat.statut === "invalide"
        ? t.statutInvalide
        : etat.statut === "erreur"
          ? t.statutErreur
          : null;

  return (
    <section id="avis" className="relative scroll-mt-28 bg-brun py-16 text-white md:py-24">
      <Container>
        {/* Avis publiés */}
        {avis.length > 0 && (
          <div className="mb-16 md:mb-20">
            <Overline ton="sombre">{t.publiesTitre}</Overline>
            <p className="mt-3 max-w-xl text-[0.95rem] text-attenue-clair">{t.publiesTexte}</p>
            <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {avis.map((a) => (
                <li key={a.id} className="flex flex-col border border-filet bg-noir-doux/45 p-7">
                  <div className="flex items-center gap-1 text-accent" aria-label={`${a.note}/5`}>
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < a.note ? "" : "opacity-25"}`} />
                    ))}
                  </div>
                  <p className="mt-4 flex-1 text-[0.98rem] leading-relaxed text-creme">« {a.texte} »</p>
                  <p className="t-label-sm mt-6 text-white">{a.nom}</p>
                  <p className="mt-1 text-[0.85rem] text-attenue-clair">
                    {[a.fonction, a.prestation].filter(Boolean).join(" · ")}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-20">
          <div>
            <Overline ton="sombre">{t.surtitre}</Overline>
            <h2 className="t-h2 mt-4 text-white">{t.titre}</h2>
            <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-attenue-clair">{t.texte}</p>
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
            <p className="t-serif mt-5 text-[1.35rem] leading-snug text-creme md:text-[1.6rem]">{t.citation}</p>
            <div className="mt-6 flex items-center gap-1 text-accent" aria-hidden>
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className="h-5 w-5" />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setOuvert((valeur) => !valeur)}
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
              action={action}
              onSubmit={(e) => {
                if (note === 0) {
                  e.preventDefault();
                  setAlerteNote(true);
                  return;
                }
                setAlerteNote(false);
              }}
              className="mt-12 grid gap-6 bg-white p-7 text-encre md:p-10"
            >
              <input type="hidden" name="note" value={note} />
              <input type="hidden" name="langue" value={lang} />
              {/* Piège à robots : invisible et ignoré par les lecteurs d'écran */}
              <input
                type="text"
                name="site_web"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
              />

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
                        onClick={() => {
                          setNote(valeur);
                          setAlerteNote(false);
                        }}
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
                  <input
                    ref={premierChamp}
                    id="avis-nom"
                    name="nom"
                    required
                    minLength={2}
                    maxLength={120}
                    autoComplete="name"
                    className={champ}
                  />
                </div>
                <div className="grid gap-2">
                  <label className={etiquette} htmlFor="avis-fonction">
                    {t.fonction}
                  </label>
                  <input
                    id="avis-fonction"
                    name="fonction"
                    maxLength={160}
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
                  maxLength={3000}
                  placeholder={t.avisExemple}
                  className={`${champ} resize-y`}
                />
              </div>

              <label className="flex items-start gap-3 text-[0.92rem] leading-relaxed text-encre/75">
                <input type="checkbox" name="accord" required className="mt-1 h-4 w-4 shrink-0 accent-[#fd850d]" />
                {t.accord}
              </label>

              <div>
                <button
                  type="submit"
                  disabled={enCours}
                  className="tr inline-flex items-center justify-center gap-2.5 bg-accent px-8 py-4 font-mono text-[0.82rem] font-bold uppercase tracking-[0.12em] text-noir-doux hover:bg-noir-doux hover:text-white disabled:opacity-60"
                >
                  <Star className="h-4 w-4" />
                  {enCours ? t.envoi : t.envoyer}
                </button>
              </div>

              {message && (
                <p
                  role="status"
                  className={`border px-4 py-3 text-[0.9rem] text-encre ${
                    etat.statut === "merci" && !alerteNote
                      ? "border-accent/60 bg-accent/10"
                      : "border-red-700/40 bg-red-50"
                  }`}
                >
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
