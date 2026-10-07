import Image from "next/image";
import Reveal from "@/components/Reveal";
import { Btn, Container, ListeIcones, Overline, Section } from "@/components/ui";
import { img, site, waLink } from "@/lib/site";

/** Bloc 12 — « Recrutement » : « Vous voulez intégrer notre équipe ? » */
const PROFILS = [
  "Graphistes, vidéastes et community managers",
  "Chargés de production événementielle",
  "Hôtes et hôtesses d’accueil",
];

export default function Careers() {
  return (
    <Section fond="sombre">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden">
            {/* Motion FX 3 (§7) : légère parallaxe verticale (translateY,
                vitesse 1). L'image est agrandie pour ne jamais découvrir
                le cadre pendant la translation. */}
            <div className="fx-parallaxe absolute inset-0">
              <Image
                src={img.recrutement}
                alt=""
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="scale-[1.12] object-cover"
              />
            </div>
          </div>

          <div>
            <Overline ton="sombre">Rejoindre KODÊ</Overline>

            <Reveal delai={200} className="mt-4">
              <h2 className="t-h2 text-white">Vous voulez intégrer notre équipe ?</h2>
            </Reveal>

            <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-attenue-clair">
              Nous recherchons régulièrement des profils créatifs à Bangui. Envoyez-nous votre
              portfolio, même sans offre publiée : nous gardons votre candidature sous la main pour
              la prochaine campagne ou le prochain événement.
            </p>

            <ListeIcones items={PROFILS} ton="sombre" className="mt-7" />

            <div className="mt-9 flex flex-wrap gap-3.5">
              <Btn
                href={`mailto:${site.email}?subject=${encodeURIComponent("Candidature spontanée")}`}
                variante="accent"
                taille="lg"
                fleche
              >
                Envoyer une candidature
              </Btn>
              <Btn
                href={waLink("Bonjour, je souhaite rejoindre l’équipe de KODÊ.")}
                variante="contour-clair"
                taille="lg"
                externe
              >
                Nous écrire sur WhatsApp
              </Btn>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
