import { DM_Serif_Display, Roboto, Roboto_Mono } from "next/font/google";

/* Polices Google du site de référence (§2) : les titres sont en chasse
   fixe (Roboto Mono 700), le texte courant en Roboto, et DM Serif Display
   sert d'accent éditorial ponctuel. */
export const chasseFixe = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const texteCourant = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const editorial = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
  display: "swap",
});
