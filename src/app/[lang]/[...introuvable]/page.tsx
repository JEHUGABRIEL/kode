import { notFound } from "next/navigation";

/**
 * Toute adresse inconnue sous une langue (`/xyz`, `/en/xyz`) arrive ici et
 * affiche la page 404 localisée de `[lang]/not-found.tsx`, dans le layout
 * du site (en-tête, pied de page).
 */
export default function Introuvable() {
  notFound();
}
