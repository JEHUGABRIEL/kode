import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import { Container, Divider, Section } from "@/components/ui";
import { img, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site de KODÊ : éditeur, hébergement, propriété intellectuelle et traitement des données personnelles.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false, follow: true },
};

const RUBRIQUES = [
  {
    titre: "Éditeur du site",
    paragraphes: [
      `${site.name} — Agence Créative, agence de communication et d’événementiel, ${site.address}, ${site.city}, ${site.country}.`,
      `Téléphone : ${site.phoneDisplay} — E-mail : ${site.email}.`,
      "Les informations d’immatriculation (NIF, RCCM) sont communiquées sur demande écrite, et figurent sur les devis et factures émis par l’agence.",
    ],
  },
  {
    titre: "Hébergement",
    paragraphes: [
      "Le site est hébergé sur une infrastructure mutualisée. Les coordonnées complètes de l’hébergeur sont fournies sur demande écrite à l’adresse de contact ci-dessus.",
    ],
  },
  {
    titre: "Propriété intellectuelle",
    paragraphes: [
      "L’ensemble des contenus de ce site (textes, structure, identité visuelle, illustrations) est protégé par le droit d’auteur. Toute reproduction ou représentation, totale ou partielle, sans autorisation écrite préalable est interdite.",
      "Les marques et logos de clients ou partenaires cités restent la propriété de leurs titulaires respectifs.",
      "Les photographies d’illustration proviennent d’Unsplash et sont utilisées conformément à sa licence, qui autorise l’usage commercial.",
    ],
  },
  {
    titre: "Données personnelles",
    paragraphes: [
      "Les informations transmises via le formulaire de contact ou par WhatsApp servent uniquement à répondre à la demande et, le cas échéant, à établir un devis. Elles ne sont ni revendues ni utilisées à d’autres fins.",
      "Vous pouvez demander l’accès, la rectification ou la suppression des informations vous concernant en écrivant à l’adresse de contact. La demande est traitée dans les meilleurs délais.",
      "Ce site ne dépose aucun cookie publicitaire. Aucun outil de mesure d’audience tiers n’est activé à ce jour ; s’il l’était, le consentement préalable serait demandé.",
    ],
  },
  {
    titre: "Responsabilité",
    paragraphes: [
      "Les informations publiées sont fournies de bonne foi et peuvent évoluer. Les liens externes éventuels n’engagent pas la responsabilité de l’éditeur quant à leur contenu.",
    ],
  },
] as const;

export default function MentionsLegales() {
  return (
    <>
      <PageHero
        surtitre="Informations légales"
        titre="Mentions légales"
        texte="Éditeur du site, hébergement, propriété intellectuelle, traitement des données personnelles et responsabilité."
        image={img.mentions}
        fil="Mentions légales"
      />

      <Section fond="blanc">
        <Container>
          <div className="max-w-3xl">
            {RUBRIQUES.map((rubrique, i) => (
              <article key={rubrique.titre}>
                {i > 0 && <Divider className="my-10" />}
                <h2 className="t-h4">{rubrique.titre}</h2>
                <div className="mt-5 flex flex-col gap-4 text-[1rem] leading-relaxed text-encre/75">
                  {rubrique.paragraphes.map((paragraphe) => (
                    <p key={paragraphe}>{paragraphe}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
