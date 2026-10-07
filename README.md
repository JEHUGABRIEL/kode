# KODÊ — site vitrine (Next.js)

Site de **KODÊ — Agence Créative · Communication & Événementiel**, Bangui,
République Centrafricaine, **en français et en anglais** (voir « Langues »).

L'architecture (pages, composants, grille, animations) reprend à l'identique la
reproduction décrite dans **[`docs/reference-adjemson.md`](docs/reference-adjemson.md)**.
Les couleurs, les textes, les coordonnées et le logo viennent du site statique
KODÊ (`~/Bureau/kode`). Les photographies sont des visuels Unsplash de remplacement.

## Langues (FR / EN)

- Toutes les pages vivent sous `src/app/[lang]/` et sont générées en statique pour
  `fr` et `en` (`generateStaticParams` dans le layout).
- `src/proxy.ts` : le français reste **sans préfixe** (`/agence`, réécrit en interne vers
  `/fr/agence`), l'anglais est servi sous **`/en`** (`/en/agence`) ; `/fr/...` redirige
  (308) vers l'adresse sans préfixe.
- Textes : `src/i18n/dictionnaires/fr.ts` (référence) et `en.ts`, dont le type impose
  exactement la même structure. Les composants serveur lisent la langue avec
  `getLang()` / `getDictionnaire()` (`next/root-params`), les composants client reçoivent
  leur part du dictionnaire en propriété.
- Liens internes : toujours via `localiser(lang, "/chemin")` (`src/i18n/config.ts`).
- SEO : `<html lang>`, URL canonique et `hreflang` (fr-FR, en, x-default) par page,
  sitemap bilingue.
- Sélecteur : `src/components/LangSwitch.tsx`, menu déroulant qui renvoie vers la même
  page dans l'autre langue.

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Langage | TypeScript strict |
| Styles | Tailwind CSS 4 — jetons et animations dans `src/app/globals.css` |
| Polices | **Roboto Mono** (tous les titres), **Roboto** (texte), **DM Serif Display** (accent éditorial), via `next/font` |
| Images | Unsplash, optimisées par `next/image` |
| Rendu | 100 % statique (SSG) — 7 pages + 404 + sitemap + robots |

## Démarrer

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de production
npm start       # sert le build
npm run lint    # ESLint
```

## Pages

| Page | Adresse | Blocs |
|---|---|---|
| Accueil | `/` | Les 13 blocs du document, page longue à défilement continu |
| L'Agence | `/agence` | Histoire, valeurs, trois métiers, recrutement |
| Services | `/services` | Catalogue des 12 expertises, trois services, nos cibles |
| Événementiel | `/formations` | Pôle Events : formats d'événements, calendrier idéal |
| Réalisations | `/labo` | Carrousel de réalisations, sélection signée KODÊ, appel à témoignages |
| Contact | `/contact` | Coordonnées + formulaire (WhatsApp / e-mail) |
| Mentions légales | `/mentions-legales` | Éditeur, hébergement, données personnelles |

Navigation : **Accueil · L'Agence · Services · Événementiel · Réalisations** (5 entrées, comme
le document), plus le CTA permanent de l'en-tête et le bouton WhatsApp flottant.

## Structure

```
src/
├── app/
│   ├── layout.tsx          Layout racine : polices, en-tête, pied de page, JSON-LD
│   ├── page.tsx            Accueil — assemblage des 13 blocs
│   ├── {agence,services,formations,labo,contact,mentions-legales}/page.tsx
│   ├── not-found.tsx       404 en français
│   ├── icon.png            Favicon (symbole du logo officiel) + apple-icon.png
│   ├── globals.css         Système de design complet (§3 à §10 du document)
│   ├── robots.ts / sitemap.ts
├── components/
│   ├── Header.tsx          Barre transparente + en-tête collant blanc (§9.2)
│   ├── Footer.tsx          Signature, présentation, longue liste d'expertises (§5 bloc 13)
│   ├── WhatsAppFloat.tsx   Bouton fixe à 15 px des bords (§1, §9.7)
│   ├── PanneauContact.tsx  Panneau « Contactez-nous » du bouton 9 points (§5, pop-up 1493)
│   ├── Reveal.tsx          Animations d'entrée au défilement (§6)
│   ├── FlipBox.tsx         Flip box par balayage `clip-path` (§9.1)
│   ├── Accordion.tsx       Widget `toggle` — 9 en-têtes dans « Nos cibles » (§9.5)
│   ├── Carousel.tsx        Carrousels média et boucle (§9.4)
│   ├── ContactForm.tsx     Formulaire qui pré-remplit WhatsApp ou l'e-mail
│   ├── ui.tsx              Conteneur, section, espaceur, filet, titres, boutons, colonne collante
│   ├── icons.tsx           Icônes SVG en ligne
│   └── sections/           Les 12 sections de la page d'accueil + PageHero
└── lib/site.ts             Coordonnées, navigation, table des visuels
```

Le texte éditorial est écrit en français directement dans chaque section
(il n'y a plus de dictionnaire : le site n'a qu'une langue).

## Système de design

Tout vient de `src/app/globals.css`, section par section, en suivant le document.

### Palette KODÊ — couleurs du logo officiel

| Jeton | Valeur | Usage |
|---|---|---|
| `--color-accent` | `#FD850D` | Orange flamme, couleur d'accent |
| `--color-accent-chaud` | `#FB6A29` | Orange chaud |
| `--color-brun` | `#5B2904` | Brun signature (menu, bouton d'en-tête) |
| `--color-creme` | `#F6F4DD` | Crème du logo |
| `--color-gris-clair` | `#F3ECE0` | Fonds de section alternés (sable) |
| `--color-encre` | `#2A1A10` | Texte courant |
| `--color-noir-doux` | `#2A1201` | Fonds sombres (brun nuit) |
| `--color-bordure` | `#E6D9C7` | Bordures |
| `--color-filet` | `#F6F4DD29` | Filets sur fond sombre |
| `--color-attenue` / `--color-attenue-clair` | `#C9B49B` / `#F6F4DDCC` | Textes atténués |

Un seul dégradé est employé : les voiles sombres posés sur les photographies.

### Typographie (§3.2)

Classes utilitaires `t-h1` … `t-h6`, `t-display`, `t-label`, `t-label-sm`, `t-serif`.
Tous les titres sont en **Roboto Mono 700** ; l'échelle est très contrastée :

| Niveau | Mobile | Tablette (≥768) | Desktop (≥1024) |
|---|---|---|---|
| H1 | 31 px | 50 px | 70 px |
| H2 | 25 px | 35 px | 50 px |
| H3 | 22 px | 28 px | 44 px |
| H4 | 19 px | 24 px | 38 px |
| H5 | 17 px | 19 px | 24 px |
| H6 | 16 px | 17 px | 18 px |
| Display | 40 px | 70 px | 120 px |

Corps de texte : Roboto 400, 16 px. Sur-titres : Roboto Mono 700, 12–14 px.

### En-tête et héros — valeurs relevées sur le site de référence

L'en-tête et le héros ont été mesurés directement sur `adjemson.com`
(Chrome, viewport 1503 px) et reproduits à l'identique :

| Élément | Valeur relevée |
|---|---|
| Barre d'en-tête | 88 px de haut, fond blanc, filet bas `#E6E9EB` |
| Logo | vrai logo KODÊ, 66 px de haut à 30 px du bord gauche (`/img/kode-logo-clair.png`) |
| Menu | Roboto Mono 700, 14 px, lettrage +1 px, capitales, noir `#000` ; première entrée à 312 px |
| Entrée active | `#D1C236` + trait de 3 px au-dessus du libellé |
| CTA « Rendez-vous » | Roboto Mono 700, 13 px, lettrage +2 px, blanc sur `#2B2B2B`, 88 px de haut |
| Bouton carré (9 points) | 82 × 88 px sur `#C2C5C7` ; ouvre le panneau « Contactez-nous » au bureau, le tiroir de navigation sous 1024 px |
| Blanc du héros | 300 px de haut, filets verticaux `#E6E9EB`, 54 px d'espace puis la ligne « Bienvenue » |
| Sur-titre | barre oblique `#D1C236` + « Bienvenue » en DM Serif Display 18 px `#2B2B2B` |
| H1 | Roboto Mono **900**, 50 px / interligne 55 px, lettrage −1 px, capitales, noir, 750 px de large |
| Bandeau photo | 617 px de haut, plein cadre, zoom `out-in` de 20 % à 80 % |

### Animations et effets (§6 à §9)

| Effet du document | Implémentation |
|---|---|
| `fadeIn` 200 ms (majoritaire), 300/400/500 ms, `fadeInUp` | `<Reveal delai={200…500} variante="fondu\|haut">` — `IntersectionObserver` + classes CSS |
| Animations coupées sur tablette et mobile | Les règles d'animation sont dans `@media (min-width: 1024px)` |
| Flip box `clip-path` 570 ms, `direction-left` | `.flip-verso` → `inset(0 100% 0 0)` → `inset(0)`, `cubic-bezier(.62,.83,.34,.93)` |
| En-tête collant, apparition abrupte | `.entete-collant` + keyframe `vamtam-sticky-header-fadein` (invisible 90 % de la seconde) |
| Colonnes collantes 240 px / 258 px | `.colle` — `sticky` dès 768 px, jamais en mobile |
| Zoom de fond au défilement (out-in) | `.fx-zoom` — `animation-timeline: view()`, plage 20 % → 80 % (héros) |
| Rotation d'image (sens négatif, amplitude 30) | `.fx-rotation` — plage 31 % → 100 % (section « Nos cibles ») |
| Translation verticale (parallaxe) | `.fx-parallaxe` (section « Recrutement ») |
| Accordéon `toggle` | `.accordeon-panneau` — `grid-template-rows: 0fr → 1fr` |
| Carrousels Swiper | `Carousel.tsx` — défilement aimanté natif, flèches et pastilles, préchargeur `swiper-preloader-spin` |
| Soulignement animé au survol | `.souligne-lien` + keyframes `vamtam-underline-anim-*` |
| Durée de transition unique 300 ms | `.tr`, `.tr-couleur`, `.tr-surface` |
| Panneau « Contactez-nous » (pop-up 1493) | `.panneau-lateral` — `slideInRight` 0,6 s depuis la droite, ombre `2px 8px 23px 3px rgba(0,0,0,.2)`, voile `rgba(25,24,23,.4)` ; refermé par Échap, le voile ou la croix |

Le bouton carré de l'en-tête commande un seul état : le panneau au-dessus de
1024 px, le tiroir de navigation en dessous. C'est le CSS qui tranche, si bien que
le verrouillage du défilement correspond toujours à un panneau réellement affiché —
une version antérieure cachait le tiroir par `lg:hidden` tout en bloquant le
défilement, ce qui donnait une page figée sans rien à l'écran.
| Révélation par `clip-path` | `.revele-gauche/droite/haut/bas`, `vamtam-scale-out` |

Les keyframes `eicon-spin` et `fa-spin` du thème d'origine ne sont pas reprises :
elles servent une police d'icônes, ici remplacée par des SVG en ligne.

### Comportement responsive (§10)

| Aspect | Desktop | Tablette | Mobile |
|---|---|---|---|
| Échelle typographique | 70 px (H1) | 50 px | 31 px |
| Animations d'entrée | oui | non | non |
| Motion FX | oui | non | non |
| Colonnes collantes | oui | oui | non |
| Bouton WhatsApp | affiché | affiché | affiché |

## À faire avant mise en ligne

0. **Domaine** — `src/lib/site.ts` utilise `https://www.kode-rca.com` (repris du
   site KODÊ) : à confirmer, il alimente le JSON-LD, le sitemap et les balises canoniques.
1. **Coordonnées** — téléphone/WhatsApp `+236 70 08 50 53`, `groupekode@outlook.com`,
   Avenue Benzvi derrière la CEMAC, Facebook : déjà renseignés dans `src/lib/site.ts`.
2. **Signature** — `public/img/kode-logo-clair.png` (vrai logo, version fond clair, en-tête),
   `kode-logo.jpg` (logo officiel, image de partage) et `kode-motif.svg`. Les anciens
   fichiers `public/img/adjemson-*` ne sont plus utilisés.
3. **Photographies** — les visuels viennent d'Unsplash (licence libre, usage
   commercial autorisé, crédit apprécié) et tiennent la place des vraies photos.
   Elles sont listées dans `src/lib/site.ts` (`img`) : déposer les fichiers dans
   `public/img/` et pointer dessus.
4. **Contenus** — les textes viennent du site KODÊ. Aucun témoignage n'est inventé :
   le carrousel « Paroles de KODÊ » porte le manifeste en attendant de vrais retours.
5. **Formulaire** — il pré-remplit WhatsApp ou le client e-mail, donc il fonctionne
   sans serveur. Pour recevoir les demandes en base ou par e-mail, remplacer
   `envoyer` dans `src/components/ContactForm.tsx` par une Server Action.
6. **Données personnelles** — `src/app/mentions-legales/page.tsx` contient des
   rubriques génériques (éditeur, hébergeur, cookies) à compléter avec les mentions
   légales réelles de la structure.
7. **Mesure d'audience** — le site d'origine charge Google Site Kit avec un Consent
   Mode v2 refusé par défaut. Rien de tel ici : aucun script tiers, donc aucune
   bannière de consentement. À ajouter le jour où un outil de mesure est branché.

## Écarts assumés par rapport au document

Le document décrit un site WordPress/Elementor ; quelques détails matériels ne sont
pas transposables tels quels :

- **Nombre d'éléments animés** : 24 ici (le document en relève 17 chez l'original) —
  le comportement est identique, le nombre suit le contenu rédigé.
- **Swiper** est remplacé par le défilement aimanté natif (+ flèches, pastilles) :
  même usage, aucune dépendance supplémentaire.
- **Feuille de style** : une seule feuille compilée par Tailwind (~54 Ko) au lieu des
  ~843 Ko concaténés par LiteSpeed.
- **Bandeau cookies** : le site réel charge CookieYes avec un Consent Mode v2 refusé
  par défaut. Ici la carte ne fait qu'enregistrer le choix dans `localStorage`
  (aucun script tiers n'existe encore) ; tout outil de mesure devra être chargé
  uniquement depuis le chemin « accepté ». Le bouton WhatsApp reprend la forme du
  site (pastille verte « Une Question ? ») et le libellé du bouton d'en-tête
  (« Rendez-vous ») suit le site.
- **Images** : 31 visuels déclarés au lieu de 24, avec les déclinaisons gérées par
  `next/image` plutôt que par WordPress.

## Vérifications effectuées

- `npm run build` : build de production vert, 12 routes statiques.
- `npm run lint` : aucune erreur.
- En-tête et héros comparés au site de référence, valeur par valeur, sur un
  viewport de 1503 px : **19/19 conformes** (hauteur 88 px, fond blanc et filet
  `#E6E9EB`, logo 30,22 150 × 44, menu à 312 px en Roboto Mono 700 14 px / +1 px,
  entrée active `#D1C236` avec son trait, CTA 13 px / +2 px sur `#2B2B2B`, burger
  82 × 88 `#C2C5C7`, H1 Roboto Mono 900 50 px / 55 px / −1 px, bloc blanc de
  300 px, bandeau photo de 617 px, zoom `view()`).
- Carte de consentement (affichée, choix mémorisé dans `localStorage`, disparaît
  après le choix) et pastille WhatsApp « Une Question ? » vérifiés en navigateur ;
  aucune erreur console.
- Panneau « Contactez-nous » (pop-up 1493) comparé à celui du site de référence :
  panneau 570 × 900 à droite, blanc, ombre `2px 8px 23px 3px rgba(0,0,0,.2)`,
  `slideInRight` 0,6 s, veille `rgba(25,24,23,.4)`, motif 205 px, titre Roboto Mono
  700 / 38 px en capitales, paragraphe 12 px, bouton `Contact` de 456 × 68 px
  (→ `/contact`) et domaines liés à `/services` ; fermé par Échap, le voile et la
  croix, focus rendu au bouton de l'en-tête, défilement verrouillé seulement
  pendant l'ouverture, aucune erreur console.
- Contrôles en navigateur (Chrome headless, desktop 1440 / tablette 768 / mobile 390) :
  en-tête collant blanc à apparition abrupte, 24 éléments d'animation masqués puis
  révélés au défilement, flip box `inset(0 100% 0 0)` → `inset(0)` en
  570 ms `cubic-bezier(.62,.83,.34,.93)`, accordéon à 9 en-têtes, carrousels pilotés
  par les flèches, colonnes collantes actives à 240 px / 258 px et désactivées en
  mobile, Motion FX et animations d'entrée coupés sous 1024 px, H1 à 31 px en mobile,
  aucune erreur console, aucune régression de mise en page ni débordement horizontal
  sur les 7 pages aux 3 paliers.
