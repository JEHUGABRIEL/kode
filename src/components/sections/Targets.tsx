import Image from "next/image";
import Link from "next/link";
import { localiser } from "@/i18n/config";
import { getDictionnaire, getLang } from "@/i18n/serveur";
import { assets } from "@/lib/site";
import Accordion, { type AccordeonItem } from "@/components/Accordion";
import { ArrowRight } from "@/components/icons";
import Reveal from "@/components/Reveal";
import { Container, Section } from "@/components/ui";

/**
 * Bloc 7 du site de référence — « Nos cibles », gabarit 50/50 sur fond
 * sombre : grand visuel à gauche (le logo KODÊ), accordéon à droite. Un en-tête par profil de client,
 * chacun ouvrant ses solutions et les packs recommandés.
 */
export default async function Targets() {
  const lang = await getLang();
  const { cibles } = await getDictionnaire();
  const CIBLES: AccordeonItem[] = cibles.items;

  return (
    <Section fond="brun" className="overflow-hidden lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Le logo KODÊ remplace la fusée du site de référence. Son fond est
              le brun de la section : un masque radial fond les bords, et le
              logo pivote doucement pendant la descente (Motion FX 2, §7). */}
          <div className="relative mx-auto aspect-square w-full max-w-[560px]">
            <div className="fx-rotation-douce absolute inset-0">
              <Image
                src={assets.logoCarre}
                alt={cibles.logoAlt}
                fill
                sizes="(min-width: 1024px) 560px, 90vw"
                className="object-contain [mask-image:radial-gradient(circle_at_center,#000_60%,transparent_85%)]"
              />
            </div>
          </div>

          <div>
            <Reveal delai={200}>
              <h2 className="t-h1 uppercase text-white">{cibles.titre}</h2>
            </Reveal>
            <p className="t-label mt-6 text-accent">{cibles.sousTitre}</p>
            <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-attenue-clair">
              {cibles.texte}
            </p>

            <div className="mt-10 max-w-xl">
              <Accordion items={CIBLES} ton="sombre" premierOuvert={false} />
            </div>

            <Link
              href={localiser(lang, "/contact")}
              className="souligne-lien tr-couleur mt-12 inline-flex items-center gap-4 font-mono text-[0.85rem] font-bold uppercase tracking-[0.12em] text-white hover:text-accent"
            >
              {cibles.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
