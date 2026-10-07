import Link from "next/link";
import { pages, site, waLink } from "@/lib/site";
import { Divider } from "./ui";
import { Container } from "./ui";

/**
 * Pied de page (§5 bloc 13) — signature blanche, texte de présentation,
 * longue énumération d'expertises séparées par des barres verticales
 * (bon pour le référencement, et donne une impression d'étendue de
 * l'offre), puis les mentions légales.
 */
const EXPERTISES = [
  "Stratégie de communication",
  "Branding & identité visuelle",
  "Marketing digital",
  "Community management",
  "Publicité ATL & BTL",
  "Organisation d’événements",
  "Scénographie",
  "Décoration & aménagement",
  "Protocole & hôtesses",
  "Location de matériel",
  "Impressions & signalétique",
  "Production audiovisuelle",
  "Création de site web",
  "Relations presse",
  "Bangui · République Centrafricaine",
] as const;

export default function Footer() {
  const annee = new Date().getFullYear();

  return (
    <footer className="bg-noir-doux pt-16 text-white lg:pt-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          <div>
            <p className="font-mono text-[1.15rem] font-bold uppercase tracking-[0.2em] text-white">
              KODÊ
            </p>
            <p className="t-label-sm mt-2 text-accent">Konsulting · Events</p>

            <p className="mt-6 max-w-xl text-[0.95rem] leading-relaxed text-attenue-clair">
              {site.tagline} basée à {site.city}. De l’idée à la réalisation, nous
              transformons chaque projet en expérience unique : conseil, événementiel et
              production réunis dans une même équipe, un seul interlocuteur de bout en bout.
            </p>

            <ul className="mt-7 flex flex-col gap-2 text-[0.92rem] text-attenue-clair">
              <li>
                <a href={`tel:${site.phoneRaw}`} className="tr-couleur hover:text-white">
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tr-couleur hover:text-white"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="tr-couleur hover:text-white">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tr-couleur hover:text-white"
                >
                  Facebook
                </a>
              </li>
              <li className="text-white/45">
                {site.address}
                <br />
                {site.city} — RCA
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="t-label-sm text-white/40">Navigation</p>
              <ul className="mt-5 flex flex-col gap-2.5">
                {pages
                  .filter((page) => page.href !== "/mentions-legales")
                  .map((page) => (
                    <li key={page.href}>
                      <Link
                        href={page.href}
                        className="souligne-lien pied-lien inline-block text-[0.93rem] text-attenue-clair"
                      >
                        {page.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            <div>
              <p className="t-label-sm text-white/40">Nous joindre</p>
              <ul className="mt-5 flex flex-col gap-2.5 text-[0.93rem] text-attenue-clair">
                <li>
                  <Link href="/contact" className="souligne-lien pied-lien inline-block text-attenue-clair">
                    Démarrer un projet
                  </Link>
                </li>
                <li>
                  <Link
                    href="/formations"
                    className="souligne-lien pied-lien inline-block text-attenue-clair"
                  >
                    Pôle Events
                  </Link>
                </li>
                <li>
                  <Link href="/labo" className="souligne-lien pied-lien inline-block text-attenue-clair">
                    Nos réalisations
                  </Link>
                </li>
                <li>
                  <a
                    href={waLink("Bonjour, je souhaite un renseignement.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="souligne-lien pied-lien inline-block text-attenue-clair"
                  >
                    Écrire sur WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Divider ton="sombre" className="my-11" />

        {/* Longue énumération d'expertises séparées par des | */}
        <p className="t-label-sm leading-[2.4] text-white/45">
          {EXPERTISES.map((expertise, i) => (
            <span key={expertise}>
              {expertise}
              {i < EXPERTISES.length - 1 && <span className="mx-2 text-accent/60">|</span>}
            </span>
          ))}
        </p>

        <Divider ton="sombre" className="my-9" />

        <div className="flex flex-wrap items-center justify-between gap-4 pb-10 text-[0.82rem] text-white/45">
          <p>
            © {annee} {site.name} — Agence Créative. Tous droits réservés.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/mentions-legales" className="tr-couleur hover:text-white">
              Mentions légales
            </Link>
            <Link href="/contact" className="tr-couleur hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
