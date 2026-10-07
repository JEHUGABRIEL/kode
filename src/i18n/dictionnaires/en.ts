import type { Dictionnaire } from "./fr";

/** English dictionary — same structure as `fr.ts`, enforced by the type. */
export const en: Dictionnaire = {
  meta: {
    titreDefaut: "KODÊ — Communication & Event Agency in Bangui, CAR",
    description:
      "KODÊ is the creative communication and event agency in Bangui, Central African Republic: strategy, branding, digital marketing, event management, set design, decoration and printing.",
    ogDescription:
      "Strategy, branding, digital marketing, event management, set design and printing: Bangui’s creative agency.",
    jsonLd:
      "Creative communication and event agency in Bangui: strategy, branding, digital marketing, event management, set design, decoration and printing.",
    accueilDescription:
      "KODÊ supports your communication strategy and the organisation of immersive events in Bangui: strategy, branding, digital marketing, events, set design, decoration and printing.",
  },

  commun: {
    allerAuContenu: "Skip to content",
    filAriane: "Breadcrumb",
    accueil: "Home",
    ecrireWhatsApp: "Message us on WhatsApp",
    rca: "CAR",
    pays: "Central African Republic",
    adresse: "Avenue Benzvi, behind the CEMAC building",
  },

  pages: {
    "/": "Home",
    "/agence": "The Agency",
    "/services": "Services",
    "/formations": "Events",
    "/labo": "Our Work",
    "/contact": "Contact",
    "/mentions-legales": "Legal notice",
  },

  entete: {
    cta: "Start a project",
    navigation: "Navigation",
    accueilAria: "home",
    ouvrirMenu: "Open menu",
    fermerMenu: "Close menu",
  },

  langue: {
    etiquette: "Site language",
    changer: "Change language",
  },

  panneau: {
    surtitre: "Contact us",
    titre: "KODÊ — Creative Agency",
    texte:
      "KODÊ is more than an agency: it is the strong link between you and your goals, with communication consulting, events and production under one roof in Bangui. From idea to delivery, we turn every project into a unique experience.",
    domainesLabel: "Areas:",
    domaines: [
      "Strategy & Consulting",
      "Branding",
      "Digital Marketing",
      "Advertising & Media",
      "Event Management",
      "Set Design",
      "Decoration",
      "Protocol & Hosts",
      "Equipment Rental",
      "Printing & Signage",
      "Video Production",
      "Website",
    ],
    domainesLies: [1, 2, 4],
    cta: "Contact",
    fermer: "Close panel",
  },

  whatsapp: {
    message: "Hello KODÊ, I would like to talk about my project.",
    aria: "Chat with KODÊ on WhatsApp",
    bulle: "Any questions?",
  },

  cookies: {
    aria: "Cookie preferences",
    titre: "Helping Us Remember You",
    texte:
      "We use cookies to personalise your browsing experience, remember you and analyse traffic. By clicking “Reject All”, you decline this.",
    refuser: "Reject All",
    accepter: "Accept All",
  },

  carrousel: {
    role: "carousel",
    precedent: "Previous",
    suivant: "Next",
  },

  pied: {
    localisation: "Location",
    emailIci: "Email us",
    whatsappIci: "WhatsApp us",
    colonnes: [
      {
        titre: "Konsulting",
        liens: [
          { label: "Strategy & consulting", href: "/services" },
          { label: "Branding", href: "/services" },
          { label: "Digital marketing", href: "/services" },
          { label: "Advertising & media", href: "/services" },
          { label: "Media training", href: "/services" },
        ],
      },
      {
        titre: "Events",
        liens: [
          { label: "Event management", href: "/formations" },
          { label: "Set design", href: "/formations" },
          { label: "Decoration", href: "/formations" },
          { label: "Protocol & hosts", href: "/formations" },
          { label: "Equipment rental", href: "/formations" },
        ],
      },
      {
        titre: "Studio",
        liens: [
          { label: "Video production", href: "/services" },
          { label: "Printing & signage", href: "/services" },
          { label: "Website", href: "/services" },
          { label: "Our work", href: "/labo" },
        ],
      },
    ],
    contact: "Contact",
    horaires: "Monday – Saturday · 8 am – 6 pm",
    reponse: "Reply within 24 hours",
    menuRapide: "Quick links",
    presentationAvant: " is more than a ",
    presentationFort: "communication and event agency",
    presentationApres:
      ": it is the strong link between you and your goals, with consulting, events and production under one roof in Bangui. ",
    domaines: "Areas:",
    droits: "— Creative Agency, all rights reserved.",
    mentions: "Legal notice",
    planDuSite: "Sitemap",
    sur: "on",
  },

  heros: {
    surtitre: "Creative agency · Bangui, CAR",
    titre: "Communication & Event Agency in Bangui.",
    cta: "Our 12 services",
    intro:
      "KODÊ supports your communication strategy and the organisation of immersive events. From idea to delivery, we turn every project into a unique experience — with a single point of contact and a reply within 24 hours.",
    stats: [
      {
        valeur: "12",
        libelle: "Twelve areas of expertise under one roof, from strategy to printing.",
      },
      {
        valeur: "360°",
        libelle: "From the first idea to the final teardown, one point of contact — in Bangui and nationwide.",
      },
    ],
  },

  promesse: {
    surtitre: "Shall we talk?",
    texte:
      "Write to us: we reply within 24 hours. The first conversation and the quote are free, with no commitment.",
    colonnes: [
      {
        titre: "Being understood",
        texte:
          "A business can be visible without really being understood. Good communication does more than get people talking about you: it gives you an image, a voice and a place in the public’s mind.",
      },
      {
        titre: "Leaving nothing to chance",
        texte:
          "Improvisation can create a surprise. It does not create a strategy. Listening, strategy, creation, execution, measurement: every project follows the same method, and the unexpected has already been planned for.",
      },
    ],
  },

  metiers: {
    surtitre: "How we are organised",
    titre: "Three divisions, one team.",
    texte:
      "KODÊ brings consulting, events and production together under one roof. You no longer coordinate five suppliers: you talk to one team that handles the whole chain from start to finish.",
    cartes: [
      {
        titre: "Konsulting",
        accroche: "Strategy · Audit · Comms plan · Media training",
        points: [
          "Understanding your market, your audience and your goals",
          "Strategy, positioning and action plan",
          "Long-term support and media training",
        ],
        cta: "See our services",
      },
      {
        titre: "Events",
        accroche: "KODÊ’s signature",
        points: [
          "Concept, set design and decoration",
          "Logistics, protocol and equipment rental",
          "Your event handled from concept to teardown",
        ],
        cta: "Discover our Events division",
      },
      {
        titre: "Studio",
        accroche: "Branding · Digital · Video · Printing · Web",
        points: [
          "Visual identity and brand collateral",
          "Social content, photo and video",
          "Printing, signage and websites",
        ],
        cta: "See our services",
      },
    ],
  },

  servicesCartes: {
    enSavoirPlus: "Learn more",
    items: [
      {
        nom: "Event Management",
        texte:
          "The heart of KODÊ. Concept, budget, logistics, coordination on the day: we handle your event end to end so that you can actually enjoy it — from the creative concept to the post-event review.",
      },
      {
        nom: "Digital Marketing & Social Media",
        texte:
          "We run your pages with an editorial line, a calendar and content designed for a Central African audience — not just for the algorithm.",
      },
      {
        nom: "Branding & Visual Identity",
        texte:
          "A logo is not enough. We build a complete identity — name, symbols, colours, tone of voice — so that your brand is recognised at first glance.",
      },
    ],
  },

  servicesBande: {
    surtitre: "Our services",
    titre: "Communication & events in the Central African Republic.",
    texte:
      "Twelve complementary areas of expertise. Our home ground: live events, from set design to protocol, which few agencies in Bangui truly cover.",
    cta: "Discover all our services",
  },

  cibles: {
    titre: "Who we serve",
    sousTitre: "We know what works for each type of client.",
    texte:
      "The challenges differ depending on whether you are an entrepreneur, a retailer, an institution or a family preparing a big celebration. Our offers are built around situations, not a catalogue.",
    cta: "Find my offer",
    logoAlt: "KODÊ — Konsulting · Events",
    items: [
      {
        titre: "Entrepreneurs & personal brands",
        points: [
          "Personal branding: consistent positioning, story and visual identity",
          "Social content: photos, videos and quotes to feed your pages every week",
          "Online presence: website, Google Business profile and a consistent bio on every network",
          "Press relations: interviews, radio appearances and coverage in local media",
          "Visibility Pack (branding + social media) or Authority Pack (website + content + press)",
        ],
      },
      {
        titre: "SMEs, retailers & startups",
        points: [
          "Identity & collateral: logo, brand guidelines, shop sign, cards, banners and point-of-sale design",
          "Digital acquisition: active pages, targeted ads and messages that convert",
          "Field activation: sales events, contests and street marketing in Bangui",
          "Measurement: a simple monthly report — what worked, what we stop, what we scale up",
          "Growth Pack (digital + print + field) or Launch Pack (branding + website + campaign)",
        ],
      },
      {
        titre: "Institutions, NGOs & projects",
        points: [
          "Communication plan: integrated digital + traditional media strategy, aligned with your donors",
          "Institutional events: workshops, forums, launches, official ceremonies and protocol",
          "Content production: reports, impact films, infographics and illustrated reports",
          "Mobilisation: awareness campaigns and community outreach in Sango and French",
          "Impact Pack (strategy + mass media + press) or Field Pack (events + content + mobilisation)",
        ],
      },
      {
        titre: "Individuals & big celebrations",
        points: [
          "Concept design: theme, mood, colour palette and guest journey defined upfront",
          "Decoration & set design: the whole venue staged, from the entrance to the dance floor",
          "On-the-day coordination: a single contact who runs the schedule minute by minute",
          "Keepsakes: photo, video, aftermovie and personalised items for your guests",
          "Celebration Pack (decor + coordination) or Prestige Pack (turnkey from A to Z)",
        ],
      },
    ],
  },

  projets: {
    surtitre: "Recent work",
    titre: "What we have delivered lately.",
    texte: "Campaigns, events and brand voices designed and produced by KODÊ in Bangui.",
    cta: "See all our work",
    voir: "View project",
  },

  paroles: {
    surtitre: "Words from KODÊ",
    titre: "What we believe in.",
    texte:
      "“KODÊ is the strong link between you and your goals.” A few convictions that guide every project, from the first call to the final review.",
    note: "We would rather publish genuine feedback than invented quotes. Have you worked with KODÊ? Your testimonial belongs here.",
    laisserAvis: "Leave a review",
    carrousel: "Words from KODÊ",
    items: [
      {
        citation: "A business can be visible without really being understood.",
        fonction: "KODÊ Manifesto",
        secteur: "Konsulting",
      },
      {
        citation: "You see a space. We see an experience.",
        fonction: "Set Design team",
        secteur: "Events",
      },
      {
        citation: "At KODÊ, we don’t just post. We get brands talking.",
        fonction: "Studio team",
        secteur: "Content & digital",
      },
    ],
  },

  events: {
    surtitre: "Events",
    titre: "Every format, from a small committee to a large gathering.",
    texte:
      "Forty people around a table or several hundred under a marquee: the method is the same, only the scale changes.",
    priseEnCharge: "Handled from concept to teardown",
    voirPole: "See our Events division",
    cta: "All our event formats",
    items: [
      {
        public: "Companies · institutions",
        titre: "Seminars & conferences",
        texte: "Product launches, general assemblies, workshops, forums and corporate conventions.",
        modules: ["Floor plan", "Technical direction", "Badges & welcome", "Filming"],
      },
      {
        public: "Institutions · officials",
        titre: "Official ceremonies",
        texte: "Inaugurations, graduations, agreement signings and institutional ceremonies.",
        modules: ["Protocol", "VIP seating", "Master of ceremonies", "Press coverage"],
      },
      {
        public: "Families · Bangui and beyond",
        titre: "Weddings & big celebrations",
        texte: "Weddings, dowry ceremonies, birthdays, christenings and family parties in Bangui and across the country.",
        modules: ["Decoration", "Table styling", "Photo booth", "On-the-day coordination"],
      },
    ],
  },

  realisations: {
    surtitre: "Our work",
    titre: "What we have designed, produced and delivered.",
    texte:
      "Campaigns, events, brand voices and space transformations: a selection of work signed KODÊ in Bangui.",
    toutes: "All our work",
    carrousel: "KODÊ projects",
    voir: "View",
  },

  carrieres: {
    surtitre: "Careers",
    titre: "Join the team that gets brands talking.",
    texte:
      "We regularly recruit creative and field profiles in Bangui. No need to wait for a job posting: send us your portfolio, and we keep every application on file for the next campaign or event.",
    pole: "Division:",
    postuler: "Apply",
    objet: "Application",
    postes: [
      {
        pole: "Studio",
        poste: "Graphic designer & art director",
        texte: "Visual identities, print collateral and social media adaptations.",
      },
      {
        pole: "Studio",
        poste: "Videographer & editor",
        texte: "Event filming, aftermovies, corporate films and short-form content.",
      },
      {
        pole: "Konsulting",
        poste: "Community manager",
        texte: "Editorial line, publishing calendar, community engagement and performance reports.",
      },
      {
        pole: "Events",
        poste: "Event production officer",
        texte: "Suppliers, logistics, planning and on-the-day coordination.",
      },
      {
        pole: "Events",
        poste: "Hosts & hostesses",
        texte: "Welcoming guests, protocol, VIP seating and accreditation.",
      },
    ],
    autreTitre: "Don’t see your profile?",
    autreTexte:
      "Open application, internship or one-off collaboration: introduce yourself in a few lines, with your CV or portfolio.",
    spontanee: "Open application",
    envoyer: "Send my application",
    whatsappMessage: "Hello, I would like to join the KODÊ team.",
    whatsapp: "WhatsApp",
  },

  avis: {
    surtitre: "Your opinion matters",
    titre: "Have you worked with KODÊ?",
    texte:
      "We would rather publish genuine feedback than invented quotes. Tell us about your experience: your review helps future clients choose us — and helps us improve.",
    engagements: [
      "Published only with your consent",
      "No invented or edited reviews",
      "It only takes two minutes",
    ],
    citation: "“One honest review is worth a hundred promises.”",
    ouvrir: "Leave a review",
    fermer: "Close the form",
    formTitre: "Your review of KODÊ",
    obligatoiresAvant: "Fields marked",
    obligatoiresApres: "are required.",
    note: "Your rating",
    nonNote: "Not rated",
    etoile: "star",
    etoiles: "stars",
    sur5: "out of 5",
    nom: "Full name",
    fonction: "Job title, organisation",
    fonctionExemple: "E.g. Director, NGO …",
    prestation: "Service",
    choisir: "Choose",
    prestations: [
      "Event management",
      "Set design & decoration",
      "Communication strategy",
      "Branding & visual identity",
      "Digital marketing & social media",
      "Printing & signage",
      "Photo / video production",
      "Other",
    ],
    avis: "Your review",
    avisExemple: "The context, what worked well, what you will remember…",
    accord: "I agree that this review may be published on the KODÊ website, with my name and job title.",
    envoyer: "Send my review",
    envoi: "Sending…",
    statutNote: "Please choose a rating from 1 to 5 stars before sending.",
    statutMerci: "Thank you! Your review has been received and will be published once our team has approved it.",
    statutErreur: "Sending failed. Please try again in a moment or message us on WhatsApp.",
    statutInvalide: "Please check the required fields: name, service and a review of at least 20 characters.",
    publiesTitre: "They trusted us",
    publiesTexte: "Verified reviews, published with their authors’ consent.",
  },

  formulaire: {
    nom: "Full name",
    structure: "Company / organisation",
    email: "Email",
    telephone: "Phone / WhatsApp",
    besoin: "Service required",
    choisir: "Choose a service",
    budget: "Estimated budget",
    nonDefini: "Not defined",
    projet: "Your project",
    projetExemple: "Context, goals, deadlines…",
    envoyerWhatsApp: "Send via WhatsApp",
    envoyerEmail: "Send by email",
    statutEmail: "Your email app is opening with the request pre-filled.",
    statutWhatsApp: "WhatsApp is opening with the request pre-filled: just hit send.",
    confidentialite: "Your details are only used to handle your request. They are never sold or shared.",
    besoins: [
      "Event management",
      "Set design & decoration",
      "Communication strategy",
      "Branding & visual identity",
      "Digital marketing & social media",
      "Advertising & media",
      "Printing & signage",
      "Protocol & hosts",
      "Equipment rental",
      "Photo / video production",
      "Website creation",
      "Other / not sure yet",
    ],
    budgets: [
      "Under 250,000 FCFA",
      "250,000 – 1,000,000 FCFA",
      "1,000,000 – 5,000,000 FCFA",
      "Over 5,000,000 FCFA",
      "To be discussed",
    ],
    message: {
      entete: "New request from the KODÊ website",
      nom: "Name",
      structure: "Organisation",
      email: "Email",
      telephone: "Phone",
      besoin: "Service",
      budget: "Budget",
      projet: "Message",
      objet: "Quote request",
    },
  },

  introuvable: {
    titre: "This page doesn’t exist yet.",
    texte:
      "The link may be wrong, or the page may have moved. Go back to the home page or tell us what you were looking for. Need help right away?",
  },

  agence: {
    meta: {
      titre: "The Agency — who we are",
      description:
        "KODÊ is a Central African creative agency bringing together communication consulting, events and content production in Bangui.",
    },
    hero: {
      surtitre: "The Agency",
      titre: "More than an agency: the strong link between you and your goals.",
      texte:
        "KODÊ is a Central African creative agency that brings together communication consulting, events and content production. We work in Bangui for brands, institutions and individuals who want to be understood, not just seen.",
    },
    histoire: {
      surtitre: "Our story",
      titre: "Born in Bangui, built for the Central African Republic.",
      paragraphes: [
        "KODÊ was born from a simple observation: in the Central African Republic, many businesses communicate without a strategy, and many events are decided three days before the big day. The result: budgets spent with no measurable outcome, and events that hold together without ever leaving a mark.",
        "We built an agency that refuses to work that way. One point of contact, a written method, a budget announced from the outset, and non-negotiable standards of execution.",
        "KODÊ is where two crafts meet: communication consulting — understanding, positioning, storytelling — and events — designing, producing, coordinating. Each feeds the other: a good event is an act of communication, and good communication needs real moments.",
      ],
      liste: [
        "A multidisciplinary team based in Bangui, available on the ground",
        "Twelve in-house areas of expertise, from strategy to printing",
        "Support in French and Sango, depending on your audiences",
      ],
      cta: "Work with us",
    },
    implantation: {
      etiquette: "Where we are",
      texte: "A team based in Bangui, available throughout the Central African Republic.",
    },
    valeurs: {
      surtitre: "Our purpose",
      titre: "Giving every brand an image, a voice and a place.",
      texte:
        "A business can be visible without really being understood. Our job is to close that gap: turning presence into understanding, and understanding into preference.",
      items: [
        {
          nom: "High standards",
          texte:
            "“Any form of approximation is an offence against excellence.” We would rather say no to a deadline than to quality.",
        },
        {
          nom: "Local roots",
          texte:
            "We are Central African. We know the codes, the languages, the networks and the real constraints on the ground in Bangui.",
        },
        {
          nom: "Anticipation",
          texte:
            "The unexpected always happens. When it happens with us, it has already been foreseen and solved in advance.",
        },
        {
          nom: "Transparency",
          texte:
            "A budget announced is a budget kept. You know what you pay, to whom and why, before you sign.",
        },
      ],
    },
    methode: {
      surtitre: "Our method",
      titre: "Five steps, zero improvisation.",
      texte:
        "“Improvisation can create a surprise. It does not create a strategy.” Listening, strategy, creation, execution, measurement: the path every project entrusted to KODÊ follows.",
      cta: "See our services",
    },
  },

  services: {
    meta: {
      titre: "Services — communication and events",
      description:
        "KODÊ’s twelve areas of expertise in Bangui: strategy, branding, digital marketing, advertising, event management, set design, decoration, protocol, equipment rental, printing, video and websites.",
    },
    hero: {
      surtitre: "Our services",
      titre: "Twelve areas of expertise, one point of contact.",
      texte:
        "From strategic thinking to printing the very last badge, KODÊ covers the whole chain. Choose a single service or full support — both work.",
    },
    catalogue: {
      surtitre: "Full catalogue",
      titre: "Everything KODÊ can take care of.",
      texte:
        "Each service can be ordered on its own. Combined, they form a coherent 360° communication plan, run by the same team.",
    },
    expertises: [
      {
        nom: "Communication strategy & consulting",
        texte:
          "Before communicating, you need to understand. We run a diagnosis, define your positioning and build a communication plan that lasts.",
        tags: ["Audit", "360° comms plan", "Key messages", "Media training", "Crisis management"],
      },
      {
        nom: "Branding & visual identity",
        texte:
          "A logo is not enough. We build a complete identity — name, symbols, colours, tone of voice — so that your brand is recognised at first glance.",
        tags: ["Logo", "Brand guidelines", "Naming & tagline", "Storytelling", "Rebranding"],
      },
      {
        nom: "Digital marketing & social media",
        texte:
          "We run your pages with an editorial line, a calendar and content designed for a Central African audience — not just for the algorithm.",
        tags: ["Community management", "Editorial line", "Facebook & Instagram ads", "Reports"],
      },
      {
        nom: "Advertising & media",
        texte:
          "From national radio to city billboards, from field activation to street marketing: we put your message where your audience really is.",
        tags: ["Radio & TV spots", "Billboards", "BTL activation", "Media buying"],
      },
      {
        nom: "Event management",
        texte:
          "The heart of KODÊ. Concept, budget, logistics, coordination on the day: we handle your event end to end so that you can actually enjoy it.",
        tags: ["KODÊ signature", "Concept", "Budgeting", "Logistics", "On-the-day coordination"],
      },
      {
        nom: "Set design & spatial design",
        texte:
          "“You see a space. We see an experience.” Floor plan, volumes, lighting and guest journey: the space becomes a story.",
        tags: ["KODÊ signature", "2D floor plan", "Booth design", "Lighting design"],
      },
      {
        nom: "Decoration & fit-out",
        texte:
          "Furniture, textiles, flowers, tableware, decorative signage: every detail is chosen to serve the emotion you want to create.",
        tags: ["KODÊ signature", "Themed decoration", "Table styling", "Photo booth"],
      },
      {
        nom: "Protocol, hosts & welcome",
        texte:
          "Your event’s image starts at the door. A trained welcome team, VIP seating, schedule management: nothing is left to chance.",
        tags: ["KODÊ signature", "Hosts", "Master of ceremonies", "Accreditation"],
      },
      {
        nom: "Event equipment rental",
        texte:
          "Sound, lighting, stage, marquees, furniture: a fleet of equipment and reliable partners in Bangui, delivered, set up and operated by our teams.",
        tags: ["KODÊ signature", "Sound", "Lighting", "Stage", "Marquees"],
      },
      {
        nom: "Printing & signage",
        texte:
          "Business cards, banners, roll-ups, flyers, goodies, vehicle wraps: your physical collateral produced in the right format, at the right time.",
        tags: ["KODÊ signature", "Banners & roll-ups", "Goodies", "Vehicle wraps"],
      },
      {
        nom: "Video production & content",
        texte:
          "Photo, video, aftermovies, corporate reports, motion design: content that keeps your brand alive long after the event is over.",
        tags: ["Photo shoots", "Corporate film", "Aftermovie", "Live filming"],
      },
      {
        nom: "Website & online presence",
        texte:
          "A clear, fast, mobile-first website plus an up-to-date Google profile: the two touchpoints your clients look for first.",
        tags: ["Showcase website", "Landing page", "Google profile", "Local SEO"],
      },
    ],
    besoin: {
      surtitre: "A specific need?",
      titre: "A quote within 24 hours.",
      texte:
        "Tell us what you want to achieve and by when. We will come back to you with a costed proposal, with no commitment.",
      cta: "Request a quote",
    },
  },

  evenementiel: {
    meta: {
      titre: "Events — event management in Bangui",
      description:
        "KODÊ Events: seminars, official ceremonies, weddings, brand activations, trade fairs and cultural events in Bangui. Turnkey concept, set design, logistics and coordination.",
    },
    hero: {
      surtitre: "Events",
      titre: "Great events are never improvised.",
      texte:
        "You can’t wait for the big day assuming everything will be fine, or rely on the famous “we’ll manage”. A great event takes solid preparation, anticipation and attention to everything the eye doesn’t see.",
    },
    calendrier: {
      surtitre: "The ideal timeline",
      titre: "When should you call us?",
      texte:
        "The shorter the lead time, the fewer the options: venues booked, suppliers taken, rush printing. Here is the pace we recommend.",
      etapes: [
        {
          nom: "6 weeks before · Scoping",
          texte:
            "Brief, site visit, concept definition and budget approval. A well-scoped event costs less than one that needs rescuing.",
        },
        {
          nom: "4 weeks before · Bookings",
          texte: "Venue, suppliers and equipment locked in. Graphic design and invitations launched.",
        },
        {
          nom: "2 weeks before · Production",
          texte: "Printing, signage, sets and goodies. Briefing of the welcome team and run-through of the schedule.",
        },
        {
          nom: "The day before & the big day",
          texte:
            "Set-up, sound and lighting checks, then a KODÊ coordinator runs the schedule minute by minute. Your only job: being there for your guests.",
        },
      ],
    },
    encart: {
      titre: "Planning an event?",
      texte:
        "Get in touch with KODÊ now. The earlier we talk, the wider the possibilities — and the better the price. Before, during and after the big day, we handle the whole chain.",
      cta: "Describe my event",
      whatsapp: "WhatsApp",
      message: "Hello KODÊ, I am planning an event and would like to talk about it.",
    },
  },

  pageRealisations: {
    meta: {
      titre: "Our work — campaigns, events and set design",
      description:
        "KODÊ’s work in Bangui: campaigns, events, brand voices and space transformations designed, produced and delivered by the agency.",
    },
    hero: {
      surtitre: "Our work",
      titre: "What we have designed, produced and delivered.",
      texte:
        "Campaigns, events, brand voices and space transformations. A selection of work signed KODÊ in Bangui.",
    },
    signature: {
      surtitre: "Our signature",
      titre: "Before. After. The difference is our expertise.",
      texte:
        "Every project starts from the same point: understanding what the client wants to achieve. Then we build — a message, a set, a campaign — until the result sticks.",
      signe: "Signed KODÊ",
    },
  },

  contact: {
    meta: {
      titre: "Contact — tell us about your project",
      description:
        "Let’s talk about your project: phone and WhatsApp +236 70 08 50 53, groupekode@outlook.com. KODÊ, Avenue Benzvi, behind the CEMAC building, Bangui, Central African Republic. Reply within 24 hours.",
    },
    hero: {
      surtitre: "Contact",
      titre: "Let’s talk about your project.",
      texte:
        "A call, a WhatsApp message or the form below: choose whichever suits you. The first conversation and the quote are free, with no commitment.",
    },
    joindre: {
      surtitre: "Reach us",
      titre: "KODÊ in Bangui.",
      texte:
        "Our offices are on Avenue Benzvi, behind the CEMAC building. Let us know before you drop by: the team is often out on site.",
    },
    coordonnees: {
      telephone: "Phone",
      whatsapp: "WhatsApp",
      discuter: "Chat now",
      email: "Email",
      adresse: "Find us",
    },
    disponibilite: "Availability: Monday to Saturday, 8 am – 6 pm. Reply within 24 hours.",
    formulaire: {
      titre: "Tell us what you need.",
      texte:
        "Fill in these few fields, then choose to send via WhatsApp or by email. Your message is already drafted for you.",
    },
  },

  mentions: {
    meta: {
      titre: "Legal notice",
      description:
        "Legal notice for the KODÊ website: publisher, hosting, intellectual property and personal data.",
    },
    hero: {
      surtitre: "Legal information",
      titre: "Legal notice",
      texte: "Website publisher, hosting, intellectual property, personal data and liability.",
    },
    rubriques: [
      {
        titre: "Website publisher",
        paragraphes: [
          "KODÊ — Creative Agency, communication and event agency, Avenue Benzvi, behind the CEMAC building, Bangui, Central African Republic.",
          "Phone: +236 70 08 50 53 — Email: groupekode@outlook.com.",
          "Registration details (tax ID, trade register) are provided on written request and appear on the agency’s quotes and invoices.",
        ],
      },
      {
        titre: "Hosting",
        paragraphes: ["The website is hosted by Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA."],
      },
      {
        titre: "Intellectual property",
        paragraphes: [
          "All content on this website (text, structure, visual identity, illustrations) is protected by copyright. Any full or partial reproduction or representation without prior written permission is prohibited.",
          "The trademarks and logos of clients or partners mentioned remain the property of their respective owners.",
          "Illustrative photographs come from Unsplash and are used in accordance with its licence, which permits commercial use.",
        ],
      },
      {
        titre: "Personal data",
        paragraphes: [
          "Information sent via the contact form or WhatsApp is used solely to answer your request and, where applicable, to prepare a quote. It is never sold or used for any other purpose.",
          "You may request access to, correction or deletion of your information by writing to the contact address. Requests are handled as quickly as possible.",
          "This website sets no advertising cookies. No third-party analytics tool is enabled at present; if one were, your prior consent would be requested.",
        ],
      },
      {
        titre: "Liability",
        paragraphes: [
          "Published information is provided in good faith and may change. Any external links do not engage the publisher’s responsibility for their content.",
        ],
      },
    ],
  },
};
