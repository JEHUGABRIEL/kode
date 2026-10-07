import type { Metadata } from "next";
import { chasseFixe, editorial, texteCourant } from "../polices";
import "../globals.css";

export const metadata: Metadata = {
  title: { default: "Back-office — KODÊ", template: "%s — Back-office KODÊ" },
  robots: { index: false, follow: false },
};

/** Layout racine du back-office : en français, hors du routage FR / EN du site. */
export default function LayoutAdmin({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr-FR" className={`${chasseFixe.variable} ${texteCourant.variable} ${editorial.variable}`}>
      <body className="min-h-screen bg-gris-clair text-encre">{children}</body>
    </html>
  );
}
