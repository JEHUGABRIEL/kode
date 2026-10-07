import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import { localiser } from "@/i18n/config";
import { getDictionnaire, getLang } from "@/i18n/serveur";
import { pages, reseaux, site, waLink } from "@/lib/site";
import { ArrowRight, Facebook, Instagram, LinkedIn, TikTok, WhatsApp } from "./icons";
import { Container } from "./ui";

/**
 * Pied de page (§5 bloc 13), disposé comme sur le site de référence :
 *   1. trois cases de contact bordées (adresse + localisation, e-mail,
 *      WhatsApp) ;
 *   2. colonnes de liens à titres en capitales ;
 *   3. filet pleine largeur, puis présentation de l'agence et longue
 *      énumération de ses domaines (bon pour le référencement) ;
 *   4. barre basse : copyright, liens légaux et icônes des réseaux.
 */
const ICONES: Record<(typeof reseaux)[number]["nom"], ComponentType<SVGProps<SVGSVGElement>>> = {
  Facebook,
  Instagram,
  TikTok,
  LinkedIn,
  WhatsApp,
};

const CARTE = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.address}, ${site.city}, ${site.country}`,
)}`;

const lienCase =
  "souligne-lien tr-couleur inline-flex items-center gap-3 border-b border-white pb-1 font-mono text-[0.9rem] font-bold uppercase tracking-[0.14em] text-white hover:text-accent";

export default async function Footer() {
  const lang = await getLang();
  const dict = await getDictionnaire();
  const { pied } = dict;
  const annee = new Date().getFullYear();

  return (
    <footer className="bg-noir-doux pt-16 text-white lg:pt-20">
      <Container>
        {/* 1. Cases de contact */}
        <div className="grid border border-filet md:grid-cols-3">
          <div className="flex flex-col justify-center gap-6 p-8 lg:p-14">
            <p className="font-mono text-[0.9rem] font-bold uppercase leading-relaxed tracking-[0.14em]">
              {dict.commun.adresse}
              <br />
              {site.city} — {dict.commun.rca}
            </p>
            <a href={CARTE} target="_blank" rel="noopener noreferrer" className={`${lienCase} self-start`}>
              {pied.localisation}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="flex items-center justify-center border-t border-filet p-8 md:border-l md:border-t-0 lg:p-14">
            <a href={`mailto:${site.email}`} className={lienCase}>
              {pied.emailIci}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="flex items-center justify-center border-t border-filet p-8 md:border-l md:border-t-0 lg:p-14">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className={lienCase}>
              {pied.whatsappIci}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* 2. Colonnes de liens */}
        <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-3 lg:grid-cols-5">
          {pied.colonnes.map((colonne) => (
            <nav key={colonne.titre} aria-label={colonne.titre}>
              <p className="font-mono text-[1.05rem] font-bold uppercase tracking-[0.04em]">
                {colonne.titre}
              </p>
              <ul className="mt-6 flex flex-col gap-3 text-[0.95rem] text-attenue-clair">
                {colonne.liens.map((lien) => (
                  <li key={lien.label}>
                    <Link href={localiser(lang, lien.href)} className="tr-couleur hover:text-accent">
                      {lien.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <p className="font-mono text-[1.05rem] font-bold uppercase tracking-[0.04em]">{pied.contact}</p>
            <ul className="mt-6 flex flex-col gap-3 text-[0.95rem] text-attenue-clair">
              <li>
                <a href={`tel:${site.phoneRaw}`} className="tr-couleur hover:text-accent">
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="tr-couleur break-all hover:text-accent">
                  {site.email}
                </a>
              </li>
              <li>{pied.horaires}</li>
              <li>{pied.reponse}</li>
            </ul>
          </div>

          <nav aria-label={pied.menuRapide}>
            <p className="font-mono text-[1.05rem] font-bold uppercase tracking-[0.04em]">{pied.menuRapide}</p>
            <ul className="mt-6 flex flex-col gap-3 text-[0.95rem] text-attenue-clair">
              {pages
                .filter((page) => page.href !== "/mentions-legales")
                .map((page) => (
                  <li key={page.href}>
                    <Link href={localiser(lang, page.href)} className="tr-couleur hover:text-accent">
                      {dict.pages[page.href]}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
        </div>
      </Container>

      {/* 3. Présentation et domaines */}
      <div className="mt-16 border-t border-filet">
        <Container>
          <p className="pt-10 text-[0.82rem] leading-[1.7] text-white/45">
            <strong className="font-semibold text-white/70">{site.name}</strong>
            {pied.presentationAvant}
            <strong className="font-semibold text-white/70">{pied.presentationFort}</strong>
            {pied.presentationApres}
            <strong className="font-semibold text-white/70">{pied.domaines}</strong>{" "}
            {dict.panneau.domaines.join(" | ")}.
          </p>

          {/* 4. Barre basse */}
          <div className="flex flex-col gap-6 py-9 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.82rem] text-white/45">
              <p>
                <span className="text-white">© {annee}</span> {site.name} {pied.droits}
              </p>
              <Link href={localiser(lang, "/mentions-legales")} className="tr-couleur hover:text-white">
                {pied.mentions}
              </Link>
              <Link href={localiser(lang, "/contact")} className="tr-couleur hover:text-white">
                {pied.contact}
              </Link>
              <a href="/sitemap.xml" className="tr-couleur hover:text-white">
                {pied.planDuSite}
              </a>
            </div>

            <ul className="flex items-center gap-3">
              {reseaux.map((reseau) => {
                const Icone = ICONES[reseau.nom];
                const externe = reseau.href.startsWith("http");
                return (
                  <li key={reseau.nom}>
                    <a
                      href={reseau.href}
                      target={externe ? "_blank" : undefined}
                      rel={externe ? "noopener noreferrer" : undefined}
                      aria-label={`${site.name} ${pied.sur} ${reseau.nom}`}
                      className="tr flex h-10 w-10 items-center justify-center rounded-full border border-filet text-white hover:border-accent hover:bg-accent"
                    >
                      <Icone className="h-[18px] w-[18px]" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </Container>
      </div>
    </footer>
  );
}
