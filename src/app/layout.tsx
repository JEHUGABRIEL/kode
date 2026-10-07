import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Roboto, Roboto_Mono } from "next/font/google";
import type { ReactNode } from "react";
import CookieConsent from "@/components/CookieConsent";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { site } from "@/lib/site";
import "./globals.css";

/* Polices Google du site de référence (§2) : les titres sont en chasse
   fixe (Roboto Mono 700), le texte courant en Roboto, et DM Serif Display
   sert d'accent éditorial ponctuel. */
const chasseFixe = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto-mono",
  display: "swap",
});

const texteCourant = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const editorial = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "KODÊ — Agence de Communication & d’Événementiel à Bangui, RCA",
    template: "%s | KODÊ",
  },
  description:
    "KODÊ est l’agence créative de communication et d’événementiel à Bangui, Centrafrique : stratégie, branding, marketing digital, organisation d’événements, scénographie, décoration et impressions.",
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "fr_FR",
    url: site.url,
    title: "KODÊ — Agence de Communication & d’Événementiel à Bangui, RCA",
    description:
      "Stratégie, branding, marketing digital, organisation d’événements, scénographie et impressions : l’agence créative de Bangui.",
    images: ["/img/kode-logo.jpg"],
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#5B2904",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    description:
      "Agence créative de communication et d’événementiel à Bangui : stratégie, branding, marketing digital, organisation d’événements, scénographie, décoration et impressions.",
    url: site.url,
    logo: `${site.url}/img/kode-logo.jpg`,
    telephone: site.phoneRaw,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: site.city,
      addressCountry: site.countryCode,
    },
    areaServed: [
      { "@type": "City", name: "Bangui" },
      { "@type": "Country", name: site.country },
    ],
    sameAs: [site.facebook],
    knowsLanguage: ["fr", "sg"],
    priceRange: "$$",
  };

  return (
    <html
      lang="fr-FR"
      className={`${chasseFixe.variable} ${texteCourant.variable} ${editorial.variable}`}
    >
      <body>
        <a
          href="#principal"
          className="sr-only focus:not-sr-only focus:absolute focus:left-0 focus:top-0 focus:z-[200] focus:bg-accent focus:px-5 focus:py-3 focus:font-mono focus:text-[0.8rem] focus:font-bold focus:uppercase focus:text-noir-doux"
        >
          Aller au contenu
        </a>

        <Header />

        <main id="principal">{children}</main>

        <Footer />

        <CookieConsent />

        <WhatsAppFloat />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
