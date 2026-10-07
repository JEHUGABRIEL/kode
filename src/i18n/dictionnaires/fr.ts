/**
 * Dictionnaire français — langue de référence du site.
 * `en.ts` doit fournir exactement la même structure (type `Dictionnaire`).
 * Les liens internes sont écrits sans préfixe de langue : les composants
 * les passent par `localiser()`.
 */
export const fr = {
  meta: {
    titreDefaut: "KODÊ — Agence de Communication & d’Événementiel à Bangui, RCA",
    description:
      "KODÊ est l’agence créative de communication et d’événementiel à Bangui, Centrafrique : stratégie, branding, marketing digital, organisation d’événements, scénographie, décoration et impressions.",
    ogDescription:
      "Stratégie, branding, marketing digital, organisation d’événements, scénographie et impressions : l’agence créative de Bangui.",
    jsonLd:
      "Agence créative de communication et d’événementiel à Bangui : stratégie, branding, marketing digital, organisation d’événements, scénographie, décoration et impressions.",
    accueilDescription:
      "KODÊ vous accompagne dans votre stratégie de communication et l’organisation d’événements immersifs à Bangui : stratégie, branding, marketing digital, événementiel, scénographie, décoration et impressions.",
  },

  commun: {
    allerAuContenu: "Aller au contenu",
    filAriane: "Fil d’Ariane",
    accueil: "Accueil",
    ecrireWhatsApp: "Écrire sur WhatsApp",
    rca: "RCA",
    pays: "République Centrafricaine",
    adresse: "Avenue Benzvi, derrière la CEMAC",
  },

  /** Libellés des pages (navigation, pied de page, 404, sitemap). */
  pages: {
    "/": "Accueil",
    "/agence": "L’Agence",
    "/services": "Services",
    "/formations": "Événementiel",
    "/labo": "Réalisations",
    "/contact": "Contact",
    "/mentions-legales": "Mentions légales",
  },

  entete: {
    cta: "Démarrer un projet",
    navigation: "Navigation",
    accueilAria: "accueil",
    ouvrirMenu: "Ouvrir le menu",
    fermerMenu: "Fermer le menu",
  },

  langue: {
    etiquette: "Langue du site",
    changer: "Changer de langue",
  },

  panneau: {
    surtitre: "Contactez-nous",
    titre: "KODÊ — Agence Créative",
    texte:
      "KODÊ, plus qu’une agence, c’est le maillon fort entre vous et vos objectifs : conseil en communication, événementiel et production réunis sous un même toit à Bangui. De l’idée à la réalisation, nous transformons chaque projet en expérience unique.",
    domainesLabel: "Domaines :",
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
    /** Index des domaines qui renvoient vers la page Services. */
    domainesLies: [1, 2, 4],
    cta: "Contact",
    fermer: "Fermer le panneau",
  },

  whatsapp: {
    message: "Bonjour KODÊ, je souhaite parler de mon projet.",
    aria: "Discuter avec KODÊ sur WhatsApp",
    bulle: "Une Question ?",
  },

  cookies: {
    aria: "Préférences de cookies",
    titre: "Pour Nous Souvenir de Vous",
    texte:
      "Nous utilisons des cookies pour rendre votre expérience de navigation personnalisée, nous souvenir de vous et analyser le trafic. En cliquant sur « Tout Refuser », vous refusez cela à nos équipes.",
    refuser: "Tout Refuser",
    accepter: "Tout Accepter",
  },

  carrousel: {
    role: "carrousel",
    precedent: "Précédent",
    suivant: "Suivant",
  },

  pied: {
    localisation: "Localisation",
    emailIci: "E-mail ici",
    whatsappIci: "WhatsApp ici",
    colonnes: [
      {
        titre: "Konsulting",
        liens: [
          { label: "Stratégie & conseil", href: "/services" },
          { label: "Branding", href: "/services" },
          { label: "Marketing digital", href: "/services" },
          { label: "Publicité & médias", href: "/services" },
          { label: "Media training", href: "/services" },
        ],
      },
      {
        titre: "Pôle Events",
        liens: [
          { label: "Organisation d’événements", href: "/formations" },
          { label: "Scénographie", href: "/formations" },
          { label: "Décoration", href: "/formations" },
          { label: "Protocole & hôtesses", href: "/formations" },
          { label: "Location de matériel", href: "/formations" },
        ],
      },
      {
        titre: "Studio",
        liens: [
          { label: "Production audiovisuelle", href: "/services" },
          { label: "Impressions & signalétique", href: "/services" },
          { label: "Site web", href: "/services" },
          { label: "Nos réalisations", href: "/labo" },
        ],
      },
    ],
    contact: "Contact",
    horaires: "Lundi – Samedi · 8 h – 18 h",
    reponse: "Réponse sous 24 heures",
    menuRapide: "Menu rapide",
    presentationAvant: ", plus qu’une ",
    presentationFort: "agence de communication et d’événementiel",
    presentationApres:
      ", c’est le maillon fort entre vous et vos objectifs : conseil, événementiel et production réunis sous un même toit à Bangui. ",
    domaines: "Domaines :",
    droits: "— Agence Créative, tous droits réservés.",
    mentions: "Mentions légales",
    planDuSite: "Plan du site",
    sur: "sur",
  },

  heros: {
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
  },

  promesse: {
    surtitre: "On en parle ?",
    texte:
      "Écrivez-nous : nous répondons sous 24 heures. Le premier échange et le devis sont gratuits, sans engagement.",
    colonnes: [
      {
        titre: "Être compris",
        texte:
          "Une entreprise peut être visible sans vraiment être comprise. Une bonne communication ne se contente pas de faire parler de vous : elle vous donne une image, une voix et une place dans l’esprit du public.",
      },
      {
        titre: "Ne rien improviser",
        texte:
          "L’improvisation peut créer une surprise. Elle ne crée pas une stratégie. Écoute, stratégie, création, exécution, mesure : chaque projet suit la même méthode, et les imprévus ont déjà été envisagés.",
      },
    ],
  },

  metiers: {
    surtitre: "Notre organisation",
    titre: "Trois pôles, une seule équipe.",
    texte:
      "KODÊ réunit sous un même toit le conseil, l’événementiel et la production. Vous ne coordonnez plus cinq prestataires : vous parlez à une équipe qui tient la chaîne de bout en bout.",
    cartes: [
      {
        titre: "Pôle Konsulting",
        accroche: "Stratégie · Audit · Plan de com · Media training",
        points: [
          "Comprendre votre marché, votre public et vos objectifs",
          "Stratégie, positionnement et plan d’action",
          "Accompagnement sur la durée et media training",
        ],
        cta: "Voir nos services",
      },
      {
        titre: "Pôle Events",
        accroche: "La signature KODÊ",
        points: [
          "Conception, scénographie et décoration",
          "Logistique, protocole et location de matériel",
          "L’événement pris en charge, du concept au démontage",
        ],
        cta: "Découvrir le pôle Events",
      },
      {
        titre: "Pôle Studio",
        accroche: "Branding · Digital · Audiovisuel · Impressions · Web",
        points: [
          "Identité visuelle et supports de marque",
          "Contenus sociaux, photo et vidéo",
          "Impressions, signalétique et site web",
        ],
        cta: "Voir nos services",
      },
    ],
  },

  servicesCartes: {
    enSavoirPlus: "En savoir plus",
    items: [
      {
        nom: "Organisation d’Événements",
        texte:
          "Le cœur de KODÊ. Conception, budget, logistique, coordination du jour J : nous prenons l’événement en charge de bout en bout pour que vous puissiez le vivre — du concept créatif au bilan post-événement.",
      },
      {
        nom: "Marketing Digital & Réseaux Sociaux",
        texte:
          "Nous animons vos pages avec une ligne éditoriale, un calendrier et des contenus pensés pour l’audience centrafricaine — pas pour l’algorithme seul.",
      },
      {
        nom: "Branding & Identité Visuelle",
        texte:
          "Un logo ne suffit pas. Nous construisons une identité complète — nom, signes, couleurs, ton de voix — pour que votre marque soit reconnue au premier coup d’œil.",
      },
    ],
  },

  servicesBande: {
    surtitre: "Nos services",
    titre: "Communication & événementiel en Centrafrique.",
    texte:
      "Douze expertises complémentaires. Notre terrain de prédilection : l’événement physique, de la scénographie au protocole, que peu d’agences couvrent réellement à Bangui.",
    cta: "Découvrir toutes nos expertises",
  },

  cibles: {
    titre: "Nos cibles",
    sousTitre: "Nous savons ce qui marche pour chaque type de client.",
    texte:
      "Les problèmes ne sont pas les mêmes selon que vous êtes entrepreneur, commerçant, institution ou famille qui prépare une grande célébration. Nos offres sont construites par situation, pas par catalogue.",
    cta: "Trouver mon offre",
    logoAlt: "KODÊ — Konsulting · Events",
    items: [
      {
        titre: "Entrepreneurs & marques personnelles",
        points: [
          "Personal branding : positionnement, récit et identité visuelle cohérents",
          "Contenu social : photo, vidéo et citations pour nourrir vos pages chaque semaine",
          "Présence en ligne : site vitrine, fiche Google et bio homogène sur tous les réseaux",
          "Relations presse : interviews, passages radio et parutions dans les médias locaux",
          "Pack Visibilité (branding + réseaux sociaux) ou Pack Autorité (site web + contenu + presse)",
        ],
      },
      {
        titre: "PME, commerces & startups",
        points: [
          "Identité & supports : logo, charte, enseigne, cartes, bâches et habillage de point de vente",
          "Acquisition digitale : pages animées, publicités ciblées et messages qui convertissent",
          "Activation terrain : animations commerciales, jeux concours et street marketing à Bangui",
          "Mesure : rapport mensuel simple — ce qui a marché, ce qu’on arrête, ce qu’on augmente",
          "Pack Croissance (digital + print + terrain) ou Pack Lancement (branding + site + campagne)",
        ],
      },
      {
        titre: "Institutions, ONG & projets",
        points: [
          "Plan de communication : stratégie intégrée digital + médias traditionnels, alignée sur vos bailleurs",
          "Événements institutionnels : ateliers, forums, lancements, cérémonies officielles et protocole",
          "Production de contenu : reportages, films d’impact, infographies et rapports illustrés",
          "Mobilisation : campagnes de sensibilisation et relais communautaires en sango et en français",
          "Pack Impact (stratégie + mass media + presse) ou Pack Terrain (événementiel + contenu + mobilisation)",
        ],
      },
      {
        titre: "Particuliers & grandes célébrations",
        points: [
          "Conception du concept : thème, ambiance, palette et parcours des invités définis en amont",
          "Décoration & scénographie : mise en scène complète de la salle, de l’entrée à la piste",
          "Coordination jour J : un interlocuteur unique qui tient le déroulé minute par minute",
          "Souvenirs : photo, vidéo, aftermovie et supports personnalisés pour les invités",
          "Pack Célébration (déco + coordination) ou Pack Prestige (clé en main de A à Z)",
        ],
      },
    ],
  },

  projets: {
    surtitre: "Récentes réalisations",
    titre: "Ce que nous avons signé dernièrement.",
    texte: "Campagnes, événements et prises de parole conçus et produits par KODÊ à Bangui.",
    cta: "Voir toutes les réalisations",
    voir: "Voir la réalisation",
    items: [
      {
        categorie: "Campagne",
        titre: "Octobre Rose en RCA",
        texte:
          "Mobilisation de KODÊ contre le cancer du sein en Centrafrique : conception du visuel de campagne, message de prévention et diffusion sur les réseaux, pour une cause qui concerne chaque famille.",
        livrables: ["Direction artistique", "Création de visuel", "Campagne sociale"],
      },
      {
        categorie: "Événementiel",
        titre: "Un événement de 40 personnes",
        texte:
          "Format intimiste entièrement pris en charge : scénographie, art de la table, décoration et coordination du déroulé jusqu’à l’aftermovie. Quarante invités, aucun détail laissé au hasard.",
        livrables: ["Scénographie", "Décoration", "Coordination", "Aftermovie"],
      },
      {
        categorie: "Marque",
        titre: "Série « Vrai ou Faux »",
        texte:
          "Format éditorial récurrent qui interroge les idées reçues sur la communication d’entreprise et installe KODÊ comme voix experte à Bangui.",
        livrables: ["Ligne éditoriale", "Design social", "Engagement"],
      },
      {
        categorie: "Marque",
        titre: "« Ministère de l’Événementiel »",
        texte:
          "Campagne de marque décalée sous forme d’arrêtés officiels, qui défend l’exigence et l’exécution maîtrisée dans l’événementiel centrafricain.",
        livrables: ["Concept créatif", "Copywriting", "Série visuelle"],
      },
    ],
  },

  paroles: {
    surtitre: "Paroles de KODÊ",
    titre: "Ce en quoi nous croyons.",
    texte:
      "« KODÊ est le maillon fort entre vous et vos objectifs. » Quelques convictions qui guident chaque projet, du premier appel au bilan final.",
    note: "Nous préférons publier de vrais retours plutôt que des phrases inventées. Vous avez travaillé avec KODÊ ? Votre témoignage a toute sa place ici.",
    laisserAvis: "Laisser un avis",
    carrousel: "Paroles de KODÊ",
    items: [
      {
        citation: "Une entreprise peut être visible sans vraiment être comprise.",
        fonction: "Manifeste KODÊ",
        secteur: "Konsulting",
      },
      {
        citation: "Vous voyez un espace. Nous y voyons une expérience.",
        fonction: "Pôle Scénographie",
        secteur: "Events",
      },
      {
        citation: "Chez KODÊ, on ne fait pas que publier. On fait parler les marques.",
        fonction: "Pôle Studio",
        secteur: "Contenus & digital",
      },
    ],
  },

  events: {
    surtitre: "Pôle Events",
    titre: "Tous les formats, du comité restreint au grand rassemblement.",
    texte:
      "Quarante personnes autour d’une table ou plusieurs centaines sous chapiteau : la méthode est la même, seule l’échelle change.",
    priseEnCharge: "Pris en charge du concept au démontage",
    voirPole: "Voir le pôle Events",
    cta: "Tous nos formats d’événements",
    items: [
      {
        public: "Entreprises · institutions",
        titre: "Séminaires & conférences",
        texte:
          "Lancements de produit, assemblées générales, ateliers, forums et conventions d’entreprise.",
        modules: ["Plan de salle", "Régie technique", "Badges & accueil", "Captation"],
      },
      {
        public: "Institutions · officiels",
        titre: "Cérémonies officielles",
        texte:
          "Inaugurations, remises de diplômes, signatures de convention et cérémonies institutionnelles.",
        modules: ["Protocole", "Placement officiel", "Maître de cérémonie", "Couverture presse"],
      },
      {
        public: "Familles · Bangui et province",
        titre: "Mariages & grandes célébrations",
        texte: "Mariages, dots, anniversaires, baptêmes et fêtes de famille à Bangui et en province.",
        modules: ["Décoration", "Art de la table", "Photocall", "Coordination jour J"],
      },
    ],
  },

  realisations: {
    surtitre: "Réalisations",
    titre: "Ce que nous avons conçu, produit et livré.",
    texte:
      "Campagnes, événements, prises de parole et transformations d’espaces : une sélection de travaux signés KODÊ à Bangui.",
    toutes: "Toutes les réalisations",
    carrousel: "Réalisations KODÊ",
    voir: "Voir",
    items: [
      {
        tag: "Scénographie",
        titre: "Donner vie aux espaces",
        texte:
          "Avant / après de transformation d’espaces à Bangui : quelques mètres carrés convertis en univers de marque, du plan à l’installation.",
      },
      {
        tag: "Territoire",
        titre: "Bangui, terrain de jeu",
        texte:
          "Série photographique valorisant la capitale centrafricaine — la ville comme décor et comme public des marques que nous accompagnons.",
      },
      {
        tag: "Marque",
        titre: "Série « Vrai ou Faux »",
        texte:
          "Format éditorial récurrent qui interroge les idées reçues sur la communication d’entreprise et installe KODÊ comme voix experte à Bangui.",
      },
    ],
  },

  carrieres: {
    surtitre: "Carrières",
    titre: "Rejoignez l’équipe qui fait parler les marques.",
    texte:
      "Nous recrutons régulièrement des profils créatifs et terrain à Bangui. Pas besoin d’attendre une offre : envoyez votre portfolio, nous gardons chaque candidature pour la prochaine campagne ou le prochain événement.",
    pole: "Pôle",
    postuler: "Postuler",
    objet: "Candidature",
    postes: [
      {
        pole: "Studio",
        poste: "Graphiste & directeur artistique",
        texte: "Identités visuelles, supports print et déclinaisons pour les réseaux.",
      },
      {
        pole: "Studio",
        poste: "Vidéaste & monteur",
        texte: "Captation d’événements, aftermovies, films institutionnels et contenus courts.",
      },
      {
        pole: "Konsulting",
        poste: "Community manager",
        texte: "Ligne éditoriale, calendrier de publication, animation et rapports de performance.",
      },
      {
        pole: "Events",
        poste: "Chargé de production événementielle",
        texte: "Prestataires, logistique, rétroplanning et coordination du jour J.",
      },
      {
        pole: "Events",
        poste: "Hôtes & hôtesses d’accueil",
        texte: "Accueil des invités, protocole, placement des officiels et accréditations.",
      },
    ],
    autreTitre: "Votre profil n’est pas dans la liste ?",
    autreTexte:
      "Candidature spontanée, stage ou collaboration ponctuelle : présentez-vous en quelques lignes, avec votre CV ou votre portfolio.",
    spontanee: "Candidature spontanée",
    envoyer: "Envoyer ma candidature",
    whatsappMessage: "Bonjour, je souhaite rejoindre l’équipe de KODÊ.",
    whatsapp: "WhatsApp",
  },

  avis: {
    surtitre: "Votre avis compte",
    titre: "Vous avez travaillé avec KODÊ ?",
    texte:
      "Nous préférons publier de vrais retours plutôt que des phrases inventées. Racontez-nous votre expérience : votre avis aide les prochains clients à nous choisir — et nous aide à progresser.",
    engagements: [
      "Publié uniquement avec votre accord",
      "Aucun avis inventé ni retouché",
      "Deux minutes suffisent",
    ],
    citation: "« Un avis sincère vaut mieux que cent promesses. »",
    ouvrir: "Laisser un avis",
    fermer: "Fermer le formulaire",
    formTitre: "Votre avis sur KODÊ",
    obligatoiresAvant: "Les champs marqués",
    obligatoiresApres: "sont obligatoires.",
    note: "Votre note",
    nonNote: "Non noté",
    etoile: "étoile",
    etoiles: "étoiles",
    sur5: "sur 5",
    nom: "Nom complet",
    fonction: "Fonction, structure",
    fonctionExemple: "Ex. Directrice, ONG …",
    prestation: "Prestation",
    choisir: "Choisir",
    prestations: [
      "Organisation d’événement",
      "Scénographie & décoration",
      "Stratégie de communication",
      "Branding & identité visuelle",
      "Marketing digital & réseaux sociaux",
      "Impressions & signalétique",
      "Production photo / vidéo",
      "Autre",
    ],
    avis: "Votre avis",
    avisExemple: "Le contexte, ce qui a bien fonctionné, ce que vous retiendrez…",
    accord: "J’accepte que cet avis soit publié sur le site de KODÊ, avec mon nom et ma fonction.",
    envoyerWhatsApp: "Envoyer via WhatsApp",
    envoyerEmail: "Envoyer par e-mail",
    statutNote: "Choisissez une note de 1 à 5 étoiles avant d’envoyer.",
    statutEmail: "Votre messagerie s’ouvre avec l’avis pré-rédigé : il ne reste qu’à l’envoyer. Merci !",
    statutWhatsApp: "WhatsApp s’ouvre avec votre avis pré-rédigé : il ne reste qu’à l’envoyer. Merci !",
    message: {
      entete: "Avis client pour KODÊ",
      note: "Note",
      nom: "Nom",
      fonction: "Fonction / structure",
      prestation: "Prestation",
      avis: "Avis",
      accord: "J’accepte que cet avis soit publié sur le site de KODÊ.",
      objet: "Avis client",
    },
  },

  formulaire: {
    nom: "Nom complet",
    structure: "Entreprise / structure",
    email: "E-mail",
    telephone: "Téléphone / WhatsApp",
    besoin: "Service souhaité",
    choisir: "Choisir un service",
    budget: "Budget envisagé",
    nonDefini: "Non défini",
    projet: "Votre projet",
    projetExemple: "Contexte, objectifs, délais…",
    envoyerWhatsApp: "Envoyer via WhatsApp",
    envoyerEmail: "Envoyer par e-mail",
    statutEmail: "Votre client e-mail s’ouvre avec la demande pré-remplie.",
    statutWhatsApp: "WhatsApp s’ouvre avec la demande pré-remplie : il ne reste qu’à l’envoyer.",
    confidentialite:
      "Vos informations ne servent qu’à traiter votre demande. Elles ne sont ni revendues, ni partagées.",
    besoins: [
      "Organisation d’événement",
      "Scénographie & décoration",
      "Stratégie de communication",
      "Branding & identité visuelle",
      "Marketing digital & réseaux sociaux",
      "Publicité & médias",
      "Impressions & signalétique",
      "Protocole & hôtesses",
      "Location de matériel",
      "Production photo / vidéo",
      "Création de site web",
      "Autre / je ne sais pas encore",
    ],
    budgets: [
      "Moins de 250 000 FCFA",
      "250 000 – 1 000 000 FCFA",
      "1 000 000 – 5 000 000 FCFA",
      "Plus de 5 000 000 FCFA",
      "À définir ensemble",
    ],
    message: {
      entete: "Nouvelle demande depuis le site KODÊ",
      nom: "Nom",
      structure: "Structure",
      email: "E-mail",
      telephone: "Téléphone",
      besoin: "Besoin",
      budget: "Budget",
      projet: "Message",
      objet: "Demande de devis",
    },
  },

  introuvable: {
    titre: "Cette page n’existe pas encore.",
    texte:
      "Le lien est peut-être erroné, ou la page a été déplacée. Revenez à l’accueil ou dites-nous ce que vous cherchiez. Besoin d’aide immédiate ?",
  },

  agence: {
    meta: {
      titre: "L’Agence — qui sommes-nous",
      description:
        "KODÊ est une agence créative centrafricaine qui réunit le conseil en communication, l’événementiel et la production de contenus, à Bangui.",
    },
    hero: {
      surtitre: "L’Agence",
      titre: "Plus qu’une agence, le maillon fort entre vous et vos objectifs.",
      texte:
        "KODÊ est une agence créative centrafricaine qui réunit le conseil en communication, l’événementiel et la production de contenus. Nous travaillons à Bangui, pour des marques, des institutions et des particuliers qui veulent être compris, pas seulement vus.",
    },
    histoire: {
      surtitre: "Notre histoire",
      titre: "Née à Bangui, pensée pour la Centrafrique.",
      paragraphes: [
        "KODÊ est née d’un constat simple : en Centrafrique, beaucoup d’entreprises communiquent sans stratégie, et beaucoup d’événements se décident trois jours avant le jour J. Résultat : des budgets dépensés sans résultat mesurable, et des événements qui tiennent debout sans jamais marquer les esprits.",
        "Nous avons construit une agence qui refuse ce fonctionnement. Un seul interlocuteur, une méthode écrite, un budget annoncé dès le départ, et une exigence d’exécution qui ne se négocie pas.",
        "KODÊ, c’est la rencontre de deux métiers : le conseil en communication — comprendre, positionner, raconter — et l’événementiel — concevoir, produire, coordonner. Les deux se nourrissent : un bon événement est un acte de communication, et une bonne communication a besoin de moments réels.",
      ],
      liste: [
        "Une équipe pluridisciplinaire basée à Bangui, disponible sur le terrain",
        "Douze expertises internalisées, de la stratégie à l’impression",
        "Un accompagnement en français et en sango, selon vos publics",
      ],
      cta: "Travailler avec nous",
    },
    implantation: {
      etiquette: "Notre implantation",
      texte: "Une équipe basée à Bangui, mobilisable dans toute la République Centrafricaine.",
    },
    valeurs: {
      surtitre: "Notre raison d’être",
      titre: "Donner à chaque marque une image, une voix et une place.",
      texte:
        "Une entreprise peut être visible sans vraiment être comprise. Notre travail consiste à combler cet écart : transformer de la présence en compréhension, et de la compréhension en préférence.",
      items: [
        {
          nom: "Exigence",
          texte:
            "« Toute forme d’approximation constitue un délit contre l’excellence. » Nous préférons dire non à un délai qu’à la qualité.",
        },
        {
          nom: "Ancrage",
          texte:
            "Nous sommes centrafricains. Nous connaissons les codes, les langues, les réseaux et les contraintes réelles du terrain à Bangui.",
        },
        {
          nom: "Anticipation",
          texte:
            "Les imprévus arrivent toujours. Quand ils arrivent chez nous, ils ont déjà été envisagés et solutionnés en amont.",
        },
        {
          nom: "Transparence",
          texte:
            "Un budget annoncé est un budget tenu. Vous savez ce que vous payez, à qui et pourquoi, avant de signer.",
        },
      ],
    },
    methode: {
      surtitre: "Notre méthode",
      titre: "Cinq étapes, aucune impro.",
      texte:
        "« L’improvisation peut créer une surprise. Elle ne crée pas une stratégie. » Écoute, stratégie, création, exécution, mesure : le chemin que suit chaque projet confié à KODÊ.",
      cta: "Voir nos expertises",
    },
  },

  services: {
    meta: {
      titre: "Services — communication et événementiel",
      description:
        "Les douze expertises de KODÊ à Bangui : stratégie, branding, marketing digital, publicité, organisation d’événements, scénographie, décoration, protocole, location de matériel, impressions, audiovisuel et site web.",
    },
    hero: {
      surtitre: "Nos services",
      titre: "Douze expertises, un seul interlocuteur.",
      texte:
        "De la réflexion stratégique à l’impression du dernier badge, KODÊ couvre toute la chaîne. Vous choisissez une prestation isolée ou l’accompagnement complet — les deux fonctionnent.",
    },
    catalogue: {
      surtitre: "Catalogue complet",
      titre: "Tout ce que KODÊ peut prendre en charge.",
      texte:
        "Chaque service peut être commandé seul. Assemblés, ils forment un dispositif de communication 360° cohérent, piloté par la même équipe.",
    },
    expertises: [
      {
        nom: "Stratégie & conseil en communication",
        texte:
          "Avant de communiquer, il faut comprendre. Nous posons un diagnostic, définissons votre positionnement et bâtissons un plan de communication qui tient dans la durée.",
        tags: ["Audit", "Plan de com 360°", "Messages clés", "Media training", "Gestion de crise"],
      },
      {
        nom: "Branding & identité visuelle",
        texte:
          "Un logo ne suffit pas. Nous construisons une identité complète — nom, signes, couleurs, ton de voix — pour que votre marque soit reconnue au premier coup d’œil.",
        tags: ["Logo", "Charte graphique", "Naming & baseline", "Storytelling", "Refonte"],
      },
      {
        nom: "Marketing digital & réseaux sociaux",
        texte:
          "Nous animons vos pages avec une ligne éditoriale, un calendrier et des contenus pensés pour l’audience centrafricaine — pas pour l’algorithme seul.",
        tags: ["Community management", "Ligne éditoriale", "Publicité Facebook & Instagram", "Rapports"],
      },
      {
        nom: "Publicité & médias",
        texte:
          "De la radio nationale à l’affichage urbain, de l’activation terrain au street marketing : nous plaçons votre message là où votre public se trouve réellement.",
        tags: ["Spots radio & TV", "Affichage urbain", "Activation BTL", "Achat d’espace"],
      },
      {
        nom: "Organisation d’événements",
        texte:
          "Le cœur de KODÊ. Conception, budget, logistique, coordination du jour J : nous prenons l’événement en charge de bout en bout pour que vous puissiez le vivre.",
        tags: ["Signature KODÊ", "Concept", "Budgétisation", "Logistique", "Coordination jour J"],
      },
      {
        nom: "Scénographie & design d’espace",
        texte:
          "« Vous voyez un espace. Nous y voyons une expérience. » Plan de salle, volumes, lumière et parcours invité : l’espace devient un récit.",
        tags: ["Signature KODÊ", "Plan de salle 2D", "Design de stand", "Mise en lumière"],
      },
      {
        nom: "Décoration & aménagement",
        texte:
          "Mobilier, textiles, floral, vaisselle, signalétique décorative : chaque détail est choisi pour servir l’émotion que vous voulez provoquer.",
        tags: ["Signature KODÊ", "Décoration thématique", "Art de la table", "Photocall"],
      },
      {
        nom: "Protocole, hôtesses & accueil",
        texte:
          "L’image de votre événement se joue dès la porte. Équipe d’accueil formée, placement des officiels, gestion du déroulé : rien n’est laissé au hasard.",
        tags: ["Signature KODÊ", "Hôtesses", "Maître de cérémonie", "Accréditations"],
      },
      {
        nom: "Location de matériel événementiel",
        texte:
          "Sonorisation, lumière, scène, tentes, mobilier : un parc de matériel et des partenaires fiables à Bangui, livrés, installés et opérés par nos équipes.",
        tags: ["Signature KODÊ", "Sonorisation", "Éclairage", "Scène", "Tentes"],
      },
      {
        nom: "Impressions & signalétique",
        texte:
          "Cartes de visite, bâches, roll-ups, kakemonos, flyers, goodies, habillage véhicule : vos supports physiques produits au bon format et au bon moment.",
        tags: ["Signature KODÊ", "Bâches & roll-ups", "Goodies", "Habillage véhicule"],
      },
      {
        nom: "Production audiovisuelle & contenu",
        texte:
          "Photo, vidéo, aftermovie, reportage institutionnel, motion design : des contenus qui font vivre votre marque bien après la fin de l’événement.",
        tags: ["Shooting photo", "Film institutionnel", "Aftermovie", "Captation live"],
      },
      {
        nom: "Site web & présence en ligne",
        texte:
          "Un site vitrine clair, rapide et mobile-first, plus une fiche Google à jour : les deux points de contact que vos clients cherchent en premier.",
        tags: ["Site vitrine", "Landing page", "Fiche Google", "Référencement local"],
      },
    ],
    besoin: {
      surtitre: "Un besoin précis ?",
      titre: "Un devis en 24 heures.",
      texte:
        "Dites-nous ce que vous voulez obtenir et sous quel délai. Nous revenons vers vous avec une proposition chiffrée, sans engagement.",
      cta: "Demander un devis",
    },
  },

  evenementiel: {
    meta: {
      titre: "Événementiel — organisation d’événements à Bangui",
      description:
        "Pôle Events de KODÊ : séminaires, cérémonies officielles, mariages, activations de marque, salons et événements culturels à Bangui. Conception, scénographie, logistique et coordination clé en main.",
    },
    hero: {
      surtitre: "Pôle Events",
      titre: "Un événement ne s’improvise pas.",
      texte:
        "On ne peut pas attendre le jour J en supposant que tout ira bien, ni compter sur le fameux « on va gérer ». Un bon événement, c’est une préparation solide, de l’anticipation et une attention portée à tout ce que l’œil ne voit pas.",
    },
    calendrier: {
      surtitre: "Le calendrier idéal",
      titre: "Quand faut-il nous appeler ?",
      texte:
        "Plus le délai est court, plus les options se referment : salles prises, prestataires réservés, impressions en urgence. Voici le rythme que nous recommandons.",
      etapes: [
        {
          nom: "J‑6 semaines · Cadrage",
          texte:
            "Brief, visite de site, définition du concept et validation du budget. Un événement bien cadré coûte moins cher qu’un événement rattrapé.",
        },
        {
          nom: "J‑4 semaines · Réservations",
          texte:
            "Verrouillage du lieu, des prestataires et du matériel. Lancement des créations graphiques et des invitations.",
        },
        {
          nom: "J‑2 semaines · Production",
          texte:
            "Impressions, signalétique, décors et goodies. Briefing des équipes d’accueil et répétition du déroulé.",
        },
        {
          nom: "J‑1 et Jour J",
          texte:
            "Montage, essais son et lumière, puis un coordinateur KODÊ tient le déroulé minute par minute. Votre seul rôle : être présent pour vos invités.",
        },
      ],
    },
    encart: {
      titre: "Vous avez un événement en préparation ?",
      texte:
        "Contactez KODÊ dès maintenant. Plus tôt nous en parlons, plus large est le champ des possibles — et meilleur est le prix. Avant, pendant et après le jour J, nous tenons la chaîne entière.",
      cta: "Décrire mon événement",
      whatsapp: "WhatsApp",
      message: "Bonjour KODÊ, je prépare un événement et j’aimerais en parler.",
    },
  },

  pageRealisations: {
    meta: {
      titre: "Réalisations — campagnes, événements et scénographies",
      description:
        "Les réalisations de KODÊ à Bangui : campagnes, événements, prises de parole et transformations d’espaces conçus, produits et livrés par l’agence.",
    },
    hero: {
      surtitre: "Réalisations",
      titre: "Ce que nous avons conçu, produit et livré.",
      texte:
        "Campagnes, événements, prises de parole et transformations d’espaces. Une sélection de travaux signés KODÊ à Bangui.",
    },
    signature: {
      surtitre: "Notre signature",
      titre: "Avant. Après. La différence, c’est notre savoir-faire.",
      texte:
        "Chaque projet part du même point : comprendre ce que le client veut obtenir. Puis nous construisons — un message, un décor, une campagne — jusqu’à ce que le résultat se retienne.",
      signe: "Signé KODÊ",
      items: [
        {
          rubrique: "Campagne",
          titre: "Octobre Rose en RCA",
          texte:
            "Mobilisation contre le cancer du sein en Centrafrique : conception du visuel de campagne, message de prévention et diffusion sur les réseaux.",
        },
        {
          rubrique: "Événementiel",
          titre: "Un événement de 40 personnes",
          texte:
            "Format intimiste entièrement pris en charge : scénographie, art de la table, décoration et coordination du déroulé jusqu’à l’aftermovie.",
        },
        {
          rubrique: "Marque",
          titre: "« Ministère de l’Événementiel »",
          texte:
            "Campagne de marque décalée sous forme d’arrêtés officiels, qui défend l’exigence et l’exécution maîtrisée dans l’événementiel centrafricain.",
        },
      ],
    },
  },

  contact: {
    meta: {
      titre: "Contact — parler de votre projet",
      description:
        "Parlons de votre projet : téléphone et WhatsApp +236 70 08 50 53, groupekode@outlook.com. KODÊ, Avenue Benzvi, derrière la CEMAC, Bangui, République Centrafricaine. Réponse sous 24 heures.",
    },
    hero: {
      surtitre: "Contact",
      titre: "Parlons de votre projet.",
      texte:
        "Un appel, un message WhatsApp ou le formulaire ci-dessous : choisissez le canal qui vous arrange. Le premier échange et le devis sont gratuits, sans engagement.",
    },
    joindre: {
      surtitre: "Nous joindre",
      titre: "KODÊ à Bangui.",
      texte:
        "Nos bureaux sont Avenue Benzvi, derrière la CEMAC. Prévenez-nous avant de passer : l’équipe est souvent en production sur le terrain.",
    },
    coordonnees: {
      telephone: "Téléphone",
      whatsapp: "WhatsApp",
      discuter: "Discuter maintenant",
      email: "E-mail",
      adresse: "Où nous trouver",
    },
    disponibilite: "Disponibilité : du lundi au samedi, 8 h – 18 h. Réponse sous 24 heures.",
    formulaire: {
      titre: "Décrivez-nous votre besoin.",
      texte:
        "Remplissez ces quelques champs, puis choisissez d’envoyer par WhatsApp ou par e-mail. Votre message part déjà pré-rédigé.",
    },
  },

  mentions: {
    meta: {
      titre: "Mentions légales",
      description:
        "Mentions légales du site de KODÊ : éditeur, hébergement, propriété intellectuelle et traitement des données personnelles.",
    },
    hero: {
      surtitre: "Informations légales",
      titre: "Mentions légales",
      texte:
        "Éditeur du site, hébergement, propriété intellectuelle, traitement des données personnelles et responsabilité.",
    },
    rubriques: [
      {
        titre: "Éditeur du site",
        paragraphes: [
          "KODÊ — Agence Créative, agence de communication et d’événementiel, Avenue Benzvi, derrière la CEMAC, Bangui, République Centrafricaine.",
          "Téléphone : +236 70 08 50 53 — E-mail : groupekode@outlook.com.",
          "Les informations d’immatriculation (NIF, RCCM) sont communiquées sur demande écrite, et figurent sur les devis et factures émis par l’agence.",
        ],
      },
      {
        titre: "Hébergement",
        paragraphes: [
          "Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.",
        ],
      },
      {
        titre: "Propriété intellectuelle",
        paragraphes: [
          "L’ensemble des contenus de ce site (textes, structure, identité visuelle, illustrations) est protégé par le droit d’auteur. Toute reproduction ou représentation, totale ou partielle, sans autorisation écrite préalable est interdite.",
          "Les marques et logos de clients ou partenaires cités restent la propriété de leurs titulaires respectifs.",
          "Les photographies d’illustration proviennent d’Unsplash et sont utilisées conformément à sa licence, qui autorise l’usage commercial.",
        ],
      },
      {
        titre: "Données personnelles",
        paragraphes: [
          "Les informations transmises via le formulaire de contact ou par WhatsApp servent uniquement à répondre à la demande et, le cas échéant, à établir un devis. Elles ne sont ni revendues ni utilisées à d’autres fins.",
          "Vous pouvez demander l’accès, la rectification ou la suppression des informations vous concernant en écrivant à l’adresse de contact. La demande est traitée dans les meilleurs délais.",
          "Ce site ne dépose aucun cookie publicitaire. Aucun outil de mesure d’audience tiers n’est activé à ce jour ; s’il l’était, le consentement préalable serait demandé.",
        ],
      },
      {
        titre: "Responsabilité",
        paragraphes: [
          "Les informations publiées sont fournies de bonne foi et peuvent évoluer. Les liens externes éventuels n’engagent pas la responsabilité de l’éditeur quant à leur contenu.",
        ],
      },
    ],
  },
};

export type Dictionnaire = typeof fr;
