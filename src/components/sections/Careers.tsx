import Reveal from "@/components/Reveal";
import { ArrowUpRight, Mail, WhatsApp } from "@/components/icons";
import { Btn, Container, Overline, Section } from "@/components/ui";
import { getDictionnaire } from "@/i18n/serveur";
import { site, waLink } from "@/lib/site";

/**
 * Bloc 12 — « Carrières ». Une page carrière sobre plutôt qu'un visuel
 * d'ambiance : l'accroche à gauche, la démarche à droite, puis les
 * profils que KODÊ recrute régulièrement, présentés comme des postes, et
 * un bandeau pour la candidature spontanée.
 */
export default async function Careers({ fond = "blanc" }: { fond?: "blanc" | "gris" }) {
  const { carrieres: t } = await getDictionnaire();
  const candidature = (poste: string) =>
    `mailto:${site.email}?subject=${encodeURIComponent(`${t.objet} — ${poste}`)}`;

  return (
    <Section fond={fond}>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-20">
          <div>
            <Overline>{t.surtitre}</Overline>
            <Reveal delai={200} className="mt-4">
              <h2 className="t-h2 text-encre">{t.titre}</h2>
            </Reveal>
          </div>
          <p className="max-w-xl text-[1rem] leading-relaxed text-encre/75">
            {t.texte}
          </p>
        </div>

        <ul className="mt-14 border-t border-encre/15">
          {t.postes.map((profil, i) => (
            <li key={profil.poste} className="border-b border-encre/15">
              <a
                href={candidature(profil.poste)}
                className="group grid gap-3 py-7 md:grid-cols-[64px_1.1fr_1.4fr_auto] md:items-center md:gap-8"
              >
                <span className="t-label-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <span className="t-label-sm block text-encre/45">
                    {t.pole} {profil.pole} · {site.city}
                  </span>
                  <span className="t-h5 tr-couleur mt-2 block text-encre group-hover:text-accent">
                    {profil.poste}
                  </span>
                </span>
                <span className="text-[0.95rem] leading-relaxed text-encre/70">{profil.texte}</span>
                <span className="tr t-label-sm inline-flex items-center gap-2 self-start text-encre group-hover:text-accent md:self-center">
                  {t.postuler}
                  <span className="tr flex h-9 w-9 items-center justify-center rounded-full border border-encre/20 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-6 bg-noir-doux p-8 text-white md:grid-cols-[1fr_auto] md:items-center lg:p-10">
          <div>
            <p className="t-h5 text-white">{t.autreTitre}</p>
            <p className="mt-2 max-w-2xl text-[0.95rem] leading-relaxed text-attenue-clair">
              {t.autreTexte}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Btn href={candidature(t.spontanee)} variante="accent">
              <Mail className="h-4 w-4" />
              {t.envoyer}
            </Btn>
            <Btn
              href={waLink(t.whatsappMessage)}
              variante="contour-clair"
              externe
            >
              <WhatsApp className="h-4 w-4" />
              {t.whatsapp}
            </Btn>
          </div>
        </div>
      </Container>
    </Section>
  );
}
