/**
 * KODÊ — Agence Créative · Communication & Événementiel — données factuelles,
 * communes aux deux langues. Les textes affichés sont dans
 * `src/i18n/dictionnaires/` (français et anglais).
 *
 * Coordonnées reprises du site KODÊ (`~/Bureau/kode`). L'URL est celle du
 * déploiement Vercel, en attendant un nom de domaine propre.
 */
export const site = {
  name: "KODÊ",
  shortName: "KODÊ",
  tagline: "Agence créative de communication et d’événementiel",
  phoneDisplay: "+236 70 08 50 53",
  phoneRaw: "+23670085053",
  whatsapp: "23670085053",
  email: "groupekode@outlook.com",
  address: "Avenue Benzvi, derrière la CEMAC",
  city: "Bangui",
  cities: "Bangui",
  country: "République Centrafricaine",
  countryCode: "CF",
  facebook: "https://www.facebook.com/profile.php?id=61584902049592",
  url: "https://kode-rca.vercel.app",
} as const;

/**
 * Réseaux sociaux. Facebook et WhatsApp sont les comptes réels ; Instagram,
 * TikTok et LinkedIn pointent sur `#` en attendant les adresses des pages
 * (comme sur le site KODÊ d'origine).
 */
export const reseaux = [
  { nom: "Facebook", href: "https://www.facebook.com/profile.php?id=61584902049592" },
  { nom: "Instagram", href: "#" },
  { nom: "TikTok", href: "#" },
  { nom: "LinkedIn", href: "#" },
  { nom: "WhatsApp", href: "https://wa.me/23670085053" },
] as const;

/**
 * Navigation principale : 5 entrées. Les libellés sont dans les
 * dictionnaires (`dict.pages`). Les adresses `/formations` et `/labo`
 * portent le pôle Événementiel et les Réalisations.
 */
export const nav = ["/", "/agence", "/services", "/formations", "/labo"] as const;

/** CTA permanent de l'en-tête (bouton + bouton WhatsApp flottant). */
export const navCta = "/contact";

/**
 * Signature et visuels de la marque KODÊ. La photo du héros est un visuel
 * Unsplash de remplacement, à remplacer par une vraie photo d'événement.
 */
export const assets = {
  /* Vrai logo KODÊ, version pour fond clair (fond retiré, crème → brun) */
  logo: "/img/kode-logo-clair.png",
  logoCarre: "/img/kode-logo.jpg",
  herosPhoto:
    "https://images.unsplash.com/photo-1573164574511-73c773193279?auto=format&fit=crop&w=1800&q=72",
  motif: "/img/kode-motif.svg",
} as const;

/** Toutes les pages du site — sitemap, pied de page et 404. */
export const pages = [
  { href: "/", priority: 1 },
  { href: "/agence", priority: 0.8 },
  { href: "/services", priority: 0.9 },
  { href: "/formations", priority: 0.9 },
  { href: "/labo", priority: 0.7 },
  { href: "/contact", priority: 0.9 },
  { href: "/mentions-legales", priority: 0.2 },
] as const;

export type CheminPage = (typeof pages)[number]["href"];

export const waLink = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

/**
 * Visuels — photographies Unsplash (licence libre, usage commercial).
 * Ils tiennent la place des visuels d'origine : les remplacer par les
 * vraies photos en déposant les fichiers dans `public/img/`.
 */
const u = (id: string, w = 1400, q = 72) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const img = {
  hero: u("1573164574511-73c773193279", 1800),
  heroSecondaire: u("1670028514318-0ac718c0590d", 1200),

  /* Trois métiers — flip-box */
  metiers: [
    u("1573164574397-dd250bc8a598", 900),
    u("1572319663329-ac47c4efdef0", 900),
    u("1577648884063-1d3d1477b8a7", 900),
  ],

  /* Trois services — call-to-action avec image */
  services: [
    u("1611926653458-09294b3142bf", 1200),
    u("1516251193007-45ef944ab0c6", 900),
    u("1610376096719-9819725cfb00", 900),
  ],

  cibles: u("1573497019418-b400bb3ab074", 1200),
  ciblesSecondaire: u("1563132337-f159f484226c", 1200),

  /* Récents projets — 4 études de cas, même gabarit 50/50 */
  projets: [
    u("1573496527892-904f897eb744", 1200),
    u("1617813437449-c4f8f233dcd6", 1200),
    u("1611679099100-807871562ec8", 1200),
    u("1614036634955-ae5e90f9b9eb", 1200),
  ],

  /* Paroles de KODÊ — carrousel média */
  temoignages: [
    u("1528901166007-3784c7dd3653", 1200),
    u("1579869847557-1f67382cc158", 1200),
    u("1666867540898-aaa1993ffabc", 1200),
  ],

  /* Pôle Events — formats d'événements */
  formations: [
    u("1594098882270-66ce9399b040", 1000),
    u("1625690303837-654c9666d2d0", 1000),
    u("1660675133902-acd1b057f75d", 1000),
  ],

  /* Réalisations — carrousel */
  contenus: [
    u("1603126004251-d01882b9bfd3", 900),
    u("1573339887617-d674bc961c31", 900),
    u("1459508583695-86e229e8855a", 900),
  ],

  recrutement: u("1560248904-e8d105ff5981", 1400),

  /* Pages internes */
  agence: u("1528901166007-3784c7dd3653", 1600),
  agenceEquipe: u("1542732351-fa2c82b0c746", 1200),
  agenceStudio: u("1614036634955-ae5e90f9b9eb", 1200),
  agencePortrait: u("1631563019701-efcf403bc5fe", 1000),
  servicesPage: u("1503694978374-8a2fa686963a", 1600),
  formationsPage: u("1660675133902-acd1b057f75d", 1600),
  laboPage: u("1603126004251-d01882b9bfd3", 1600),
  contact: u("1573164574511-73c773193279", 1600),
  mentions: u("1573164574511-73c773193279", 1600),

  /* Visuels d'ambiance pour les effets de défilement (Motion FX) */
  ambianceScaled: u("1573497019418-b400bb3ab074", 1600),
  ambianceRotation: u("1572319663329-ac47c4efdef0", 900),
} as const;
