import { img } from "./site";
import type { Realisation } from "./types";

/**
 * Réalisations de départ : insérées une seule fois dans la base, puis
 * gérées depuis /admin/realisations. Servent aussi de repli quand aucune
 * base n'est configurée (développement sans DATABASE_URL).
 */
export const realisationsInitiales: Omit<Realisation, "id">[] = [
  {
    position: 0,
    publiee: true,
    imageUrl: img.projets[0],
    contenu: {
      fr: {
        categorie: "Campagne",
        titre: "Octobre Rose en RCA",
        texte:
          "Mobilisation de KODÊ contre le cancer du sein en Centrafrique : conception du visuel de campagne, message de prévention et diffusion sur les réseaux, pour une cause qui concerne chaque famille.",
        livrables: ["Direction artistique", "Création de visuel", "Campagne sociale"],
      },
      en: {
        categorie: "Campaign",
        titre: "Pink October in the CAR",
        texte:
          "KODÊ’s breast cancer awareness drive in the Central African Republic: campaign visual, prevention message and social media distribution, for a cause that touches every family.",
        livrables: ["Art direction", "Visual design", "Social campaign"],
      },
    },
  },
  {
    position: 1,
    publiee: true,
    imageUrl: img.projets[1],
    contenu: {
      fr: {
        categorie: "Événementiel",
        titre: "Un événement de 40 personnes",
        texte:
          "Format intimiste entièrement pris en charge : scénographie, art de la table, décoration et coordination du déroulé jusqu’à l’aftermovie. Quarante invités, aucun détail laissé au hasard.",
        livrables: ["Scénographie", "Décoration", "Coordination", "Aftermovie"],
      },
      en: {
        categorie: "Event",
        titre: "An event for 40 guests",
        texte:
          "An intimate format handled from start to finish: set design, table styling, decoration and coordination of the schedule, right through to the aftermovie. Forty guests, no detail left to chance.",
        livrables: ["Set design", "Decoration", "Coordination", "Aftermovie"],
      },
    },
  },
  {
    position: 2,
    publiee: true,
    imageUrl: img.projets[2],
    contenu: {
      fr: {
        categorie: "Marque",
        titre: "Série « Vrai ou Faux »",
        texte:
          "Format éditorial récurrent qui interroge les idées reçues sur la communication d’entreprise et installe KODÊ comme voix experte à Bangui.",
        livrables: ["Ligne éditoriale", "Design social", "Engagement"],
      },
      en: {
        categorie: "Brand",
        titre: "The “True or False” series",
        texte:
          "A recurring editorial format that challenges common misconceptions about business communication and establishes KODÊ as an expert voice in Bangui.",
        livrables: ["Editorial line", "Social design", "Engagement"],
      },
    },
  },
  {
    position: 3,
    publiee: true,
    imageUrl: img.projets[3],
    contenu: {
      fr: {
        categorie: "Marque",
        titre: "« Ministère de l’Événementiel »",
        texte:
          "Campagne de marque décalée sous forme d’arrêtés officiels, qui défend l’exigence et l’exécution maîtrisée dans l’événementiel centrafricain.",
        livrables: ["Concept créatif", "Copywriting", "Série visuelle"],
      },
      en: {
        categorie: "Brand",
        titre: "“Ministry of Events”",
        texte:
          "A tongue-in-cheek brand campaign styled as official decrees, championing high standards and controlled execution in Central African events.",
        livrables: ["Creative concept", "Copywriting", "Visual series"],
      },
    },
  },
  {
    position: 4,
    publiee: true,
    imageUrl: img.contenus[0],
    contenu: {
      fr: {
        categorie: "Scénographie",
        titre: "Donner vie aux espaces",
        texte:
          "Avant / après de transformation d’espaces à Bangui : quelques mètres carrés convertis en univers de marque, du plan à l’installation.",
        livrables: ["Design d’espace", "Mise en lumière", "Installation"],
      },
      en: {
        categorie: "Set design",
        titre: "Bringing spaces to life",
        texte:
          "Before / after transformations of spaces in Bangui: a few square metres turned into a brand universe, from floor plan to installation.",
        livrables: ["Spatial design", "Lighting design", "Installation"],
      },
    },
  },
  {
    position: 5,
    publiee: true,
    imageUrl: img.contenus[1],
    contenu: {
      fr: {
        categorie: "Territoire",
        titre: "Bangui, terrain de jeu",
        texte:
          "Série photographique valorisant la capitale centrafricaine — la ville comme décor et comme public des marques que nous accompagnons.",
        livrables: ["Photographie", "Contenu de marque", "Ancrage local"],
      },
      en: {
        categorie: "Territory",
        titre: "Bangui, our playground",
        texte:
          "A photo series celebrating the Central African capital — the city as both a backdrop and an audience for the brands we support.",
        livrables: ["Photography", "Brand content", "Local roots"],
      },
    },
  },
];
