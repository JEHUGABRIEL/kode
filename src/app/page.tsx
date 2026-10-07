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

export const metadata: Metadata = {
  title: { absolute: "KODÊ — Agence de Communication & d’Événementiel à Bangui, RCA" },
  description:
    "KODÊ vous accompagne dans votre stratégie de communication et l’organisation d’événements immersifs à Bangui : stratégie, branding, marketing digital, événementiel, scénographie, décoration et impressions.",
  alternates: { canonical: "/" },
};

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
