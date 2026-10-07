/**
 * KODÊ — Agence Créative · Communication & Événementiel — données factuelles.
 * Le site est en français uniquement (`lang="fr-FR"`), il n'y a donc ni
 * dictionnaire ni sélecteur de langue.
 *
 * Coordonnées reprises du site KODÊ (`~/Bureau/kode`). Le domaine
 * `kode-rca.com` reste à confirmer avant toute publication.
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
  url: "https://www.kode-rca.com",
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
 * Navigation principale : 5 entrées. Les adresses `/formations` et `/labo`
 * sont conservées pour garder l'architecture : elles portent désormais le
 * pôle Événementiel et les Réalisations.
 */
export const nav = [
  { href: "/", label: "Accueil" },
  { href: "/agence", label: "L’Agence" },
  { href: "/services", label: "Services" },
  { href: "/formations", label: "Événementiel" },
  { href: "/labo", label: "Réalisations" },
] as const;

/** CTA permanent de l'en-tête (bouton + bouton WhatsApp flottant). */
export const navCta = { href: "/contact", label: "Démarrer un projet" } as const;

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

/**
 * Panneau latéral « Contactez-nous ». Le bouton carré à 9 points de
 * l'en-tête ouvre un panneau blanc de 570 px qui entre depuis la droite,
 * avec le motif de la marque, un sur-titre, le nom de la société, une
 * présentation, la liste des domaines d'intervention et un bouton « Contact ».
 */
export const panneau = {
  surtitre: "Contactez-nous",
  titre: "KODÊ — Agence Créative",
  texte:
    "KODÊ, plus qu’une agence, c’est le maillon fort entre vous et vos objectifs : conseil en communication, événementiel et production réunis sous un même toit à Bangui. De l’idée à la réalisation, nous transformons chaque projet en expérience unique.",
  domaines: [
    "Stratégie & Conseil",
    "Branding",
    "Marketing Digital",
    "Publicité & Médias",
    "Organisation d’Événements",
    "Scénographie",
    "Décoration",
    "Protocole & Hôtesses",
    "Location de Matériel",
    "Impressions & Signalétique",
    "Production Audiovisuelle",
    "Site Web",
  ],
  /* Les domaines renvoyés vers une page dédiée. */
  domainesLies: ["Branding", "Marketing Digital", "Organisation d’Événements"],
  cta: { href: "/contact", label: "Contact" },
} as const;

/** Contenu du haut de page. */
export const heros = {
  surtitre: "Agence créative · Bangui, RCA",
  titre: "Agence de Communication & d’Événementiel à Bangui.",
  cta: "Nos 12 expertises",
  intro:
    "KODÊ vous accompagne dans votre stratégie de communication et l’organisation d’événements immersifs. De l’idée à la réalisation, nous transformons chaque projet en expérience unique — avec un interlocuteur unique et une réponse sous 24 heures.",
  stats: [
    {
      valeur: "12",
      libelle: "Douze expertises réunies sous un seul toit, de la stratégie à l’impression.",
    },
    {
      valeur: "360°",
      libelle: "De l’idée au démontage, un interlocuteur unique — à Bangui et sur tout le territoire.",
    },
  ],
} as const;

/** Toutes les pages du site — sert au sitemap et au pied de page. */
export const pages = [
  { href: "/", label: "Accueil", priority: 1 },
  { href: "/agence", label: "L’Agence", priority: 0.8 },
  { href: "/services", label: "Services", priority: 0.9 },
  { href: "/formations", label: "Événementiel", priority: 0.9 },
  { href: "/labo", label: "Réalisations", priority: 0.7 },
  { href: "/contact", label: "Contact", priority: 0.9 },
  { href: "/mentions-legales", label: "Mentions légales", priority: 0.2 },
] as const;

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
