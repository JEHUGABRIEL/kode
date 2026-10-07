import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/sections/PageHero";
import { Container, Section, TitreSection } from "@/components/ui";
import { Mail, Phone, Pin, WhatsApp } from "@/components/icons";
import { img, site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — parler de votre projet",
  description: `Parlons de votre projet : téléphone et WhatsApp ${site.phoneDisplay}, ${site.email}. KODÊ, ${site.address}, ${site.city}, ${site.country}. Réponse sous 24 heures.`,
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  const coordonnees = [
    {
      Icone: Phone,
      etiquette: "Téléphone",
      valeur: site.phoneDisplay,
      href: `tel:${site.phoneRaw}`,
      externe: false,
    },
    {
      Icone: WhatsApp,
      etiquette: "WhatsApp",
      valeur: "Discuter maintenant",
      href: waLink("Bonjour KODÊ, je souhaite parler de mon projet."),
      externe: true,
    },
    {
      Icone: Mail,
      etiquette: "E-mail",
      valeur: site.email,
      href: `mailto:${site.email}`,
      externe: false,
    },
    {
      Icone: Pin,
      etiquette: "Où nous trouver",
      valeur: `${site.address}, ${site.city} — ${site.country}`,
      href: undefined,
      externe: false,
    },
  ];

  return (
    <>
      <PageHero
        surtitre="Contact"
        titre="Parlons de votre projet."
        texte="Un appel, un message WhatsApp ou le formulaire ci-dessous : choisissez le canal qui vous arrange. Le premier échange et le devis sont gratuits, sans engagement."
        image={img.contact}
        fil="Contact"
      />

      <Section fond="blanc">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <TitreSection
                surtitre="Nous joindre"
                titre="KODÊ à Bangui."
                texte="Nos bureaux sont Avenue Benzvi, derrière la CEMAC. Prévenez-nous avant de passer : l’équipe est souvent en production sur le terrain."
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
                Disponibilité : du lundi au samedi, 8 h – 18 h. Réponse sous 24 heures.
              </p>
            </div>

            <div className="border border-bordure p-7 lg:p-9">
              <h2 className="t-h4">Décrivez-nous votre besoin.</h2>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-encre/70">
                Remplissez ces quelques champs, puis choisissez d’envoyer par WhatsApp ou par
                e-mail. Votre message part déjà pré-rédigé.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
