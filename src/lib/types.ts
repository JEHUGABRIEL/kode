import type { Langue } from "@/i18n/config";

export type TexteRealisation = {
  categorie: string;
  titre: string;
  texte: string;
  livrables: string[];
};

export type Realisation = {
  id: number;
  position: number;
  publiee: boolean;
  imageUrl: string;
  contenu: Record<Langue, TexteRealisation>;
};

export type StatutAvis = "en_attente" | "publie" | "refuse";

export type Avis = {
  id: number;
  nom: string;
  fonction: string;
  prestation: string;
  note: number;
  texte: string;
  langue: Langue;
  statut: StatutAvis;
  creeLe: string;
};

export type Demande = {
  id: number;
  nom: string;
  structure: string;
  email: string;
  telephone: string;
  besoin: string;
  budget: string;
  message: string;
  langue: Langue;
  canal: string;
  traitee: boolean;
  creeLe: string;
};
