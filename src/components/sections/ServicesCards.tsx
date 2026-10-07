import Image from "next/image";
import Link from "next/link";
import { img } from "@/lib/site";
import Reveal from "@/components/Reveal";
import { ArrowRight } from "@/components/icons";
import { Btn, Container, Section } from "@/components/ui";

/**
 * Bloc 5 du site de référence — « Trois services », gabarit 2 colonnes.
 * Trois blocs `call-to-action` avec image : organisation d'événements,
 * marketing digital, branding. La première carte occupe les deux colonnes.
 */
const SERVICES = [
  {
    numero: "01",
    nom: "Organisation d’Événements",
    texte:
      "Le cœur de KODÊ. Conception, budget, logistique, coordination du jour J : nous prenons l’événement en charge de bout en bout pour que vous puissiez le vivre — du concept créatif au bilan post-événement.",
    image: img.services[0],
    enAvant: true,
  },
  {
    numero: "02",
    nom: "Marketing Digital & Réseaux Sociaux",
    texte:
      "Nous animons vos pages avec une ligne éditoriale, un calendrier et des contenus pensés pour l’audience centrafricaine — pas pour l’algorithme seul.",
    image: img.services[1],
    enAvant: false,
  },
  {
    numero: "03",
    nom: "Branding & Identité Visuelle",
    texte:
      "Un logo ne suffit pas. Nous construisons une identité complète — nom, signes, couleurs, ton de voix — pour que votre marque soit reconnue au premier coup d’œil.",
    image: img.services[2],
    enAvant: false,
  },
];

export default function ServicesCards() {
  return (
    <Section fond="blanc">
      <Container>
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {SERVICES.map((service, i) =>
            service.enAvant ? (
              <article
                key={service.nom}
                className="carte group grid border border-bordure md:col-span-2 md:grid-cols-2"
              >
                <div className="relative min-h-[260px] overflow-hidden md:min-h-[360px]">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col justify-center p-7 lg:p-12">
                  <p className="t-label-sm text-encre/45">{service.numero}</p>
                  <Reveal delai={200}>
                    <h3 className="t-h4 mt-4">{service.nom}</h3>
                  </Reveal>
                  <p className="mt-4 max-w-md text-[1rem] leading-relaxed text-encre/75">
                    {service.texte}
                  </p>
                  <div className="mt-8">
                    <Btn href="/services" variante="sombre" fleche>
                      En savoir plus
                    </Btn>
                  </div>
                </div>
              </article>
            ) : (
              <article
                key={service.nom}
                className="carte group flex flex-col border border-bordure"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="t-label-sm text-encre/45">{service.numero}</p>
                  <Reveal delai={i === 1 ? 300 : 400}>
                    <h3 className="t-h5 mt-3">{service.nom}</h3>
                  </Reveal>
                  <p className="mt-4 text-[1rem] leading-relaxed text-encre/75">{service.texte}</p>
                  <Link
                    href="/services"
                    className="souligne-lien t-label-sm mt-7 inline-flex items-center gap-2 self-start text-encre"
                  >
                    En savoir plus
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ),
          )}
        </div>
      </Container>
    </Section>
  );
}
