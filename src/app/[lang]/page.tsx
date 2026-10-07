import type { Metadata } from "next";
import Careers from "@/components/sections/Careers";
import Formations from "@/components/sections/Formations";
import Hero from "@/components/sections/Hero";
import Insights from "@/components/sections/Insights";
import Metiers from "@/components/sections/Metiers";
import Projects from "@/components/sections/Projects";
import Promesse from "@/components/sections/Promesse";
import ServicesBand from "@/components/sections/ServicesBand";
import ServicesCards from "@/components/sections/ServicesCards";
import Targets from "@/components/sections/Targets";
import Testimonials from "@/components/sections/Testimonials";
import { alternates } from "@/i18n/config";
import { dictionnaire, getLang } from "@/i18n/serveur";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLang();
  const { meta } = await dictionnaire(lang);
  return {
    title: { absolute: meta.titreDefaut },
    description: meta.accueilDescription,
    alternates: alternates(lang, "/"),
  };
}

/**
 * Page d'accueil — 13 blocs, page longue à défilement continu (§5) :
 * en-tête (layout) · héros · accroche et promesse ·
 * trois pôles · trois services · section services · nos cibles · réalisations ·
 * paroles de KODÊ · pôle Events · réalisations · recrutement · pied de page (layout).
 */
export default function Accueil() {
  return (
    <>
      <Hero />
      <Promesse />
      <Metiers />
      <ServicesCards />
      <ServicesBand />
      <Targets />
      <Projects />
      <Testimonials />
      <Formations />
      <Insights />
      <Careers />
    </>
  );
}
