import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Roboto, Roboto_Mono } from "next/font/google";
import CookieConsent from "@/components/CookieConsent";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { langues, locales, alternates } from "@/i18n/config";
import { dictionnaire, getDictionnaire, getLang } from "@/i18n/serveur";
import { site } from "@/lib/site";
import "../globals.css";

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

/** Les deux langues sont générées à la construction (rendu statique). */
export function generateStaticParams() {
  return langues.map((lang) => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLang();
  const dict = dictionnaire(lang);
  return {
    metadataBase: new URL(site.url),
    title: {
      default: dict.meta.titreDefaut,
      template: "%s | KODÊ",
    },
    description: dict.meta.description,
    applicationName: site.name,
    authors: [{ name: site.name }],
    creator: site.name,
    publisher: site.name,
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: locales[lang].og,
      alternateLocale: langues.filter((l) => l !== lang).map((l) => locales[l].og),
      url: site.url,
      title: dict.meta.titreDefaut,
      description: dict.meta.ogDescription,
      images: ["/img/kode-logo.jpg"],
    },
    alternates: alternates(lang, "/"),
  };
}

export const viewport: Viewport = {
  themeColor: "#5B2904",
};

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const lang = await getLang();
  const dict = await getDictionnaire();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    description: dict.meta.jsonLd,
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
      { "@type": "Country", name: dict.commun.pays },
    ],
    sameAs: [site.facebook],
    knowsLanguage: ["fr", "en", "sg"],
    priceRange: "$$",
  };

  return (
    <html
      lang={locales[lang].html}
      className={`${chasseFixe.variable} ${texteCourant.variable} ${editorial.variable}`}
    >
      <body>
        <a
          href="#principal"
          className="sr-only focus:not-sr-only focus:absolute focus:left-0 focus:top-0 focus:z-[200] focus:bg-accent focus:px-5 focus:py-3 focus:font-mono focus:text-[0.8rem] focus:font-bold focus:uppercase focus:text-noir-doux"
        >
          {dict.commun.allerAuContenu}
        </a>

        <Header lang={lang} pages={dict.pages} entete={dict.entete} langue={dict.langue} panneau={dict.panneau} />

        <main id="principal">{children}</main>

        <Footer />

        <CookieConsent textes={dict.cookies} />

        <WhatsAppFloat />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
