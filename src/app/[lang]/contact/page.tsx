import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/sections/PageHero";
import { Container, Section, TitreSection } from "@/components/ui";
import { Mail, Phone, Pin, WhatsApp } from "@/components/icons";
import { alternates } from "@/i18n/config";
import { dictionnaire, getDictionnaire, getLang } from "@/i18n/serveur";
import { img, site, waLink } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLang();
  const { contact } = await dictionnaire(lang);
  return {
    title: contact.meta.titre,
    description: contact.meta.description,
    alternates: alternates(lang, "/contact"),
  };
}

export default async function Contact() {
  const lang = await getLang();
  const dict = await getDictionnaire();
  const t = dict.contact;

  const coordonnees = [
    {
      Icone: Phone,
      etiquette: t.coordonnees.telephone,
      valeur: site.phoneDisplay,
      href: `tel:${site.phoneRaw}`,
      externe: false,
    },
    {
      Icone: WhatsApp,
      etiquette: t.coordonnees.whatsapp,
      valeur: t.coordonnees.discuter,
      href: waLink(dict.whatsapp.message),
      externe: true,
    },
    {
      Icone: Mail,
      etiquette: t.coordonnees.email,
      valeur: site.email,
      href: `mailto:${site.email}`,
      externe: false,
    },
    {
      Icone: Pin,
      etiquette: t.coordonnees.adresse,
      valeur: `${dict.commun.adresse}, ${site.city} — ${dict.commun.pays}`,
      href: undefined,
      externe: false,
    },
  ];

  return (
    <>
      <PageHero
        surtitre={t.hero.surtitre}
        titre={t.hero.titre}
        texte={t.hero.texte}
        image={img.contact}
        fil={dict.pages["/contact"]}
      />

      <Section fond="blanc">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <TitreSection
                surtitre={t.joindre.surtitre}
                titre={t.joindre.titre}
                texte={t.joindre.texte}
              />

              <ul className="mt-10 flex flex-col divide-y divide-bordure border-y border-bordure">
                {coordonnees.map(({ Icone, etiquette, valeur, href, externe }) => (
                  <li key={etiquette} className="flex items-start gap-4 py-5">
                    <Icone className="mt-1 h-5 w-5 shrink-0 text-encre/45" />
                    <div>
                      <p className="t-label-sm text-encre/50">{etiquette}</p>
                      {href ? (
                        <a
                          href={href}
                          target={externe ? "_blank" : undefined}
                          rel={externe ? "noopener noreferrer" : undefined}
                          className="souligne-lien tr-couleur mt-1.5 inline-block text-[1rem] text-encre hover:text-noir-doux"
                        >
                          {valeur}
                        </a>
                      ) : (
                        <p className="mt-1.5 text-[1rem] text-encre">{valeur}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-[0.88rem] leading-relaxed text-encre/60">
                {t.disponibilite}
              </p>
            </div>

            <div className="border border-bordure p-7 lg:p-9">
              <h2 className="t-h4">{t.formulaire.titre}</h2>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-encre/70">{t.formulaire.texte}</p>
              <div className="mt-8">
                <ContactForm textes={dict.formulaire} lang={lang} />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
