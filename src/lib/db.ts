import "server-only";
import { setDefaultAutoSelectFamilyAttemptTimeout } from "node:net";
import { neon, neonConfig, type NeonQueryFunction } from "@neondatabase/serverless";
import { realisationsInitiales } from "./realisations-initiales";

/*
 * Node n'accorde par défaut que 250 ms à chaque adresse IP pour ouvrir une
 * connexion TCP. Depuis Bangui ou un réseau lent, la base (us-east-1) met
 * souvent plus : toutes les tentatives échouaient en ETIMEDOUT. 3 s par
 * adresse laissent le temps à une liaison lente sans bloquer longtemps.
 */
setDefaultAutoSelectFamilyAttemptTimeout(3000);

/*
 * Le pilote Neon passe par HTTPS (fetch). Une coupure réseau passagère
 * (« fetch failed », ETIMEDOUT) est retentée deux fois avant d'échouer :
 * sans effet sur les erreurs SQL, qui arrivent dans une réponse HTTP.
 */
neonConfig.fetchFunction = async (...args: Parameters<typeof fetch>) => {
  let derniere: unknown;
  for (let essai = 0; essai < 3; essai++) {
    try {
      return await fetch(...args);
    } catch (erreur) {
      derniere = erreur;
      await new Promise((resoudre) => setTimeout(resoudre, 300 * (essai + 1)));
    }
  }
  throw derniere;
};

let client: NeonQueryFunction<false, false> | null = null;

export function baseDisponible() {
  return Boolean(process.env.DATABASE_URL);
}

export function sql() {
  if (!client) {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL n'est pas défini");
    client = neon(process.env.DATABASE_URL);
  }
  return client;
}

let pret: Promise<void> | null = null;

/**
 * Crée les tables au premier usage et insère une seule fois les
 * réalisations de départ. Mémorisé par instance de serveur : un aller-retour
 * au démarrage à froid.
 */
export function assurerSchema() {
  pret ??= installer().catch((erreur) => {
    pret = null;
    throw erreur;
  });
  return pret;
}

async function installer() {
  const db = sql();
  await db.transaction([
    db`create table if not exists realisations (
      id serial primary key,
      position integer not null default 0,
      publiee boolean not null default true,
      image_url text not null default '',
      contenu jsonb not null,
      cree_le timestamptz not null default now(),
      modifie_le timestamptz not null default now()
    )`,
    db`create table if not exists avis (
      id serial primary key,
      nom text not null,
      fonction text not null default '',
      prestation text not null default '',
      note integer not null check (note between 1 and 5),
      texte text not null,
      langue text not null default 'fr',
      statut text not null default 'en_attente',
      cree_le timestamptz not null default now()
    )`,
    db`create table if not exists demandes (
      id serial primary key,
      nom text not null,
      structure text not null default '',
      email text not null,
      telephone text not null default '',
      besoin text not null default '',
      budget text not null default '',
      message text not null,
      langue text not null default 'fr',
      canal text not null default '',
      traitee boolean not null default false,
      cree_le timestamptz not null default now()
    )`,
    db`create table if not exists textes (
      langue text primary key,
      donnees jsonb not null,
      modifie_le timestamptz not null default now()
    )`,
    db`create table if not exists reglages (
      cle text primary key,
      valeur text not null
    )`,
  ]);

  /* Une seule fois : supprimer toutes les réalisations ensuite ne doit pas
     les faire réapparaître. */
  const dejaFait = await db`select 1 from reglages where cle = 'realisations_initialisees'`;
  if (dejaFait.length > 0) return;
  await db.transaction([
    ...realisationsInitiales.map(
      (r) =>
        db`insert into realisations (position, publiee, image_url, contenu)
           values (${r.position}, ${r.publiee}, ${r.imageUrl}, ${JSON.stringify(r.contenu)})`,
    ),
    db`insert into reglages (cle, valeur) values ('realisations_initialisees', 'oui')
       on conflict (cle) do nothing`,
  ]);
}
