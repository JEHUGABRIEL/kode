import type { Metadata } from "next";
import Formations from "@/components/sections/Formations";
import PageHero from "@/components/sections/PageHero";
import Reveal from "@/components/Reveal";
import { Btn, Container, Section, Spacer, TitreSection } from "@/components/ui";
import { img, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Événementiel — organisation d’événements à Bangui",
  description:
    "Pôle Events de KODÊ : séminaires, cérémonies officielles, mariages, activations de marque, salons et événements culturels à Bangui. Conception, scénographie, logistique et coordination clé en main.",
  alternates: { canonical: "/formations" },
};

const PARCOURS = [
  {
    nom: "J‑6 semaines · Cadrage",
    texte:
      "Brief, visite de site, définition du concept et validation du budget. Un événement bien cadré coûte moins cher qu’un événement rattrapé.",
  },
  {
    nom: "J‑4 semaines · Réservations",
    texte:
      "Verrouillage du lieu, des prestataires et du matériel. Lancement des créations graphiques et des invitations.",
  },
  {
    nom: "J‑2 semaines · Production",
    texte:
      "Impressions, signalétique, décors et goodies. Briefing des équipes d’accueil et répétition du déroulé.",
  },
  {
    nom: "J‑1 et Jour J",
    texte:
      "Montage, essais son et lumière, puis un coordinateur KODÊ tient le déroulé minute par minute. Votre seul rôle : être présent pour vos invités.",
  },
] as const;

export default function FormationsPage() {
  return (
    <>
      <PageHero
        surtitre="Pôle Events"
        titre="Un événement ne s’improvise pas."
        texte="On ne peut pas attendre le jour J en supposant que tout ira bien, ni compter sur le fameux « on va gérer ». Un bon événement, c’est une préparation solide, de l’anticipation et une attention portée à tout ce que l’œil ne voit pas."
        image={img.formationsPage}
        fil="Événementiel"
      />

      {/* Formats d'événements (§5 bloc 10) */}
      <Formations />

      <Section fond="gris">
        <Container>
          <TitreSection
            surtitre="Le calendrier idéal"
            titre="Quand faut-il nous appeler ?"
            texte="Plus le délai est court, plus les options se referment : salles prises, prestataires réservés, impressions en urgence. Voici le rythme que nous recommandons."
          />

          <ol className="mt-12 grid gap-px bg-bordure md:grid-cols-2 lg:grid-cols-4">
            {PARCOURS.map((etape, i) => (
              <li key={etape.nom} className="bg-gris-clair p-7">
                <p className="t-label-sm text-accent">{`0${i + 1}`}</p>
                <Reveal delai={((200 + i * 100) as 200 | 300 | 400 | 500)} className="mt-4">
                  <h2 className="t-h5">{etape.nom}</h2>
                </Reveal>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-encre/75">{etape.texte}</p>
              </li>
            ))}
          </ol>

          <Spacer taille="l" />

          <div className="border border-bordure bg-white p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="t-h4">Vous avez un événement en préparation ?</h2>
                <p className="mt-4 max-w-2xl text-[1rem] leading-relaxed text-encre/75">
                  Contactez KODÊ dès maintenant. Plus tôt nous en parlons, plus large est le
                  champ des possibles — et meilleur est le prix. Avant, pendant et après le
                  jour J, nous tenons la chaîne entière.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Btn href="/contact" variante="sombre" fleche>
                  Décrire mon événement
                </Btn>
                <Btn href={waLink("Bonjour KODÊ, je prépare un événement et j’aimerais en parler.")} variante="contour" externe>
                  WhatsApp
                </Btn>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
