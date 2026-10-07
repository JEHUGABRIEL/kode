# Analyse de référence — adjemson.com

> Relevé technique de la page d'accueil d'**Adjemson & Consulting** (agence de
> communication et marketing, Yaoundé / Douala, Cameroun).
> Établi le 7 octobre 2026 à partir du HTML servi et de la feuille de style
> compilée (`litespeed/css/f7f720243bd2d8a7e7cf9ca009c5af08.css`, ~843 Ko).
>
> Document d'analyse : il décrit **comment le site est construit et animé**.
> Les textes et les visuels du site restent la propriété de leur auteur.

---

## 1. Fiche d'identité

| | |
|---|---|
| Objet | Agence de communication et marketing 360° |
| Marché | Cameroun — Yaoundé et Douala |
| Langue | Français uniquement (`lang="fr-FR"`) |
| Navigation | 5 entrées : Accueil · L'Agence · Services · Formations · Labo |
| CTA permanent | Bouton dans l'en-tête + bouton WhatsApp flottant |
| Longueur page d'accueil | ~13 blocs, page longue à défilement continu |

## 2. Stack détectée

- **WordPress** + **Elementor Pro**
- **Thème Vamtam** (tous les utilitaires sont préfixés `vamtam-`)
- **Swiper.js** pour les carrousels (`swiper-preloader-spin` présent)
- **LiteSpeed Cache** — toute la CSS est concaténée en un seul fichier
- **Google Site Kit** + Consent Mode v2 (script inline en base64, refus par
  défaut pour les régions UE)
- Plugin **Click-to-Chat** (`ht_ctc`) pour le bouton WhatsApp fixe
- Polices Google : **Roboto Mono**, **Roboto**, **DM Serif Display**

### Widgets Elementor utilisés

`theme-site-logo`, `nav-menu`, `button`, `heading`, `text-editor`, `divider`,
`spacer`, `icon-list`, `image`, `flip-box`, `call-to-action`, `toggle`,
`media-carousel`, `loop-carousel`, `template`, `theme-post-content`

---

## 3. Design system

### 3.1 Palette

Variables globales déclarées dans la feuille de style :

| Jeton | Valeur | Rôle observé |
|---|---|---|
| `vamtam_accent_1` | `#D1C236` | **Unique couleur d'accent** — jaune-olive désaturé |
| `vamtam_accent_2` | `#F7F7F7` | Gris quasi blanc — fonds de section alternés |
| `vamtam_accent_3` | `#2B2B2B` | Gris très foncé — texte courant |
| `vamtam_accent_4` | `#191817` | Presque noir — fonds de sections sombres |
| `vamtam_accent_5` | `#FFFFFF` | Blanc |
| `vamtam_accent_6` | `#000000` | Noir pur |
| `vamtam_accent_7` | `#E6E9EB` | Gris clair — bordures |
| `vamtam_accent_8` | `#E6E9EB4D` | Le même à 30 % — filets et séparateurs |
| `sticky_header_bg` | `#FFFFFF` | Fond de l'en-tête une fois collé |
| secondaires | `#C2C5C7`, `#FFFFFFCC` | Textes atténués |

**Lecture :** palette quasi monochrome (noir → blanc → gris) avec **une seule
couleur d'accent**, peu saturée. Aucun dégradé dans le système de base.
C'est le choix structurant du site : la sobriété chromatique fait le sérieux.

### 3.2 Typographie

**Parti pris fort : tous les titres sont en chasse fixe (Roboto Mono, 700).**

| Niveau | Mobile | Tablette | Desktop | Graisse |
|---|---|---|---|---|
| H1 | 31 px | 50 px | **70 px** | 700 |
| H2 | 25 px | 35 px | 50 px | bold |
| H3 | 22 px | 28 px | 44 px | 700 |
| H4 | 19 px | 24 px | 38 px | 700 |
| H5 | 17 px | 19 px | 24 px | 700 |
| H6 | 16 px | 17 px | 18 px | 700 |
| Display | 40 px | 70 px | **120 px** | 700 |

- **Texte courant** : Roboto 400, 16 px
- **Sur-titres / labels** : Roboto Mono 700, 12–14 px
- **DM Serif Display** : usage ponctuel (15 déclarations) — accents éditoriaux
- Échelle très contrastée : **rapport ≈ 4,4×** entre le corps (16 px) et le H1
  (70 px), et jusqu'à 7,5× avec le style display à 120 px.

---

## 4. Grille et mise en page

- Système de colonnes Elementor : **100 %**, **50/50**, **33/33/33**
- Alternance stricte : bloc pleine largeur → bloc deux colonnes → …
- Les 4 blocs « projets » reprennent **exactement le même gabarit 50/50**
  (texte + bouton d'un côté, image de l'autre), répété sans variation
- Espacement géré par des widgets `spacer` explicites entre blocs

---

## 5. Structure de la page d'accueil, bloc par bloc

| # | Bloc | Colonnes | Composition |
|---|---|---|---|
| 1 | **En-tête** | — | logo · menu · bouton CTA |
| 2 | **Héros** | 1 | divider → spacer → icon-list → H1 → bouton → spacer → texte |
| 3 | **Accroche + promesse** | 3 | « Besoin d'aide ? » / « Notoriété & Chiffre d'affaires » |
| 4 | **Trois métiers** | 3 flip-box | Agence Digitale / Agence ATL / Agence BTL — verso : icon-list + titre + bouton |
| 5 | **Trois services** | 2 | 3 blocs `call-to-action` avec image : réseaux sociaux, site web, publicité digitale |
| 6 | **Section services** | 1 | titre + texte + bouton |
| 7 | **Nos cibles** | 50/50 | image à gauche · **accordéon** (`toggle`) + bouton à droite |
| 8 | **Récents Projets** | 1 puis 4×50/50 | intro, puis 4 études de cas au même gabarit (OAPI, MINDEF, Diool, LGP EXPO) |
| 9 | **Témoignages** | 50/50 | titre + texte + divider · `media-carousel` + `loop-carousel` |
| 10 | **Formations** | — | cartes de formations certifiantes |
| 11 | **Contenus** | — | articles de blog en `loop-carousel` |
| 12 | **Recrutement** | — | « Voulez-vous intégrer notre équipe ? » |
| 13 | **Pied de page** | multi | logo blanc, texte de présentation, **longue liste d'expertises séparées par des `|`**, mentions légales |
| — | **WhatsApp flottant** | — | fixe, bas-droite, 15 px des bords |

---

## 6. Animations à l'apparition (scroll reveal)

**17 éléments** portent une animation d'entrée (classe `elementor-invisible`
retirée au passage dans le viewport).

| Animation | Occurrences | Délais utilisés |
|---|---|---|
| `fadeIn` | 15 | **200 ms** (majoritaire), 300, 400, 500 ms |
| `fadeInUp` | 1 | 300 ms |

Définitions :

```css
@keyframes fadeIn   { from { opacity: 0 } to { opacity: 1 } }
@keyframes fadeInUp { from { opacity: 0; transform: translate3d(0,100%,0) }
                      to   { opacity: 1; transform: none } }
```

**Point important :** toutes les animations d'entrée sont **désactivées sur
tablette et mobile** (`_animation_tablet: "none"`). Choix de performance et de
confort assumé.

Les éléments animés sont presque exclusivement des **titres** (`heading`) —
le corps de texte, lui, n'est quasiment pas animé. Un seul `text-editor` est
animé, avec un délai de 500 ms.

---

## 7. Effets liés au défilement (Motion FX)

Trois effets seulement, tous **desktop uniquement** (`motion_fx_devices: ["desktop"]`) :

1. **Zoom de fond de section**
   `background_motion_fx_scale_effect` — direction `out-in`, vitesse 1 ou 2,
   plage d'action 20 % → 80 % du défilement de la section.
   L'image de fond grossit puis revient.

2. **Rotation d'une image**
   `rotateZ` en direction négative, amplitude 30, plage 31 % → 100 %.
   Une image pivote lentement pendant qu'on descend.

3. **Translation verticale**
   `translateY` vitesse 1 — parallaxe léger sur un élément.

---

## 8. Transitions au survol

Relevé par fréquence dans la feuille de style :

| Occurrences | Transition |
|---|---|
| 40× | `background .3s, border .3s, border-radius .3s, box-shadow .3s` |
| 40× | `background .3s, border-radius .3s, opacity .3s` |
| 26× | `color .3s` |
| 13× | `fill .3s` (icônes SVG) |
| 5× | `all .2s` |
| 4× | `all 275ms` |
| 3× | `all .4s` |

**La durée de référence est 300 ms**, sans courbe particulière dans la majorité
des cas. Les effets au survol sont volontairement discrets.

### Courbes d'accélération employées

| Occurrences | Courbe | Usage |
|---|---|---|
| 6× | `cubic-bezier(.62,.83,.34,.93)` | **courbe signature du thème** (flip box) |
| 1× | `cubic-bezier(.19,1,.22,1)` | sortie très amortie |
| 1× | `cubic-bezier(.25,.8,.25,1)` | standard material |
| 1× | `cubic-bezier(.58,.3,.005,1)` | départ lent, fin nette |
| 1× | `cubic-bezier(0,.33,.07,1.03)` | léger dépassement |
| 1× | `cubic-bezier(.25,1,.5,1)` | ease-out prononcé |

---

## 9. Composants interactifs en détail

### 9.1 Flip box — ce n'est pas un retournement 3D

Classe : `elementor-flip-box--effect-vamtam-slide-bg` + `--direction-left`.

Le verso **balaie** le recto au lieu de pivoter :

```css
/* état au repos : le verso est entièrement rogné */
.elementor-flip-box__back { clip-path: inset(0 100% 0 0); }

/* au survol : le rognage s'ouvre */
.elementor-flip-box__back { clip-path: inset(0); }

transition: clip-path 0.57s cubic-bezier(.62,.83,.34,.93);
```

- **Durée : 570 ms** — nettement plus lent qu'une transition de survol classique
- Variantes de direction disponibles : `left`, `right`, `up`, `down`
  (`inset(0 0 0 100%)`, `inset(100% 0 0 0)`, `inset(0 0 100% 0)`)
- Le site utilise `direction-left` sur les trois cartes métiers

### 9.2 En-tête collant

```css
.vamtam-sticky-header {
  position: fixed;
  z-index: 100;
  top: calc(var(--vamtam-sticky-offset, 0px) + var(--wp-admin--admin-bar--height, 0px));
  transition: opacity .15s, top .15s linear, transform .15s linear !important;
  will-change: transform, opacity;
}
```

Et une apparition retardée volontairement abrupte :

```css
@keyframes vamtam-sticky-header-fadein {
  0%   { opacity: 0 }
  90%  { opacity: 0 }   /* reste invisible 90 % du temps */
  99%  { opacity: 1 }
  100% { opacity: 1 }
}
/* appliquée sur 1s ease forwards */
```

L'en-tête ne fond donc pas progressivement : il reste invisible puis apparaît
d'un coup en fin de course. Variante transparente : ajoute
`background-color .35s ease`.

Décalages configurés : `0` (en-tête), `40 px`, `240 px` — avec des valeurs
distinctes par palier (tablette 258 px, mobile 200 / 400 px).

### 9.3 Colonnes collantes

Trois colonnes en `sticky: top`, `sticky_parent: yes`, offset **240 px**,
actives sur **desktop et tablette seulement**. C'est ce qui produit l'effet
« le texte de gauche reste fixe pendant que les cartes de droite défilent ».

### 9.4 Carrousels

- 1 `media-carousel` (témoignages) + 3 `loop-carousel` (projets, contenus)
- Moteur Swiper, avec `@keyframes swiper-preloader-spin`
- Transitions `clip-path .1s linear` sur certains éléments de slide

### 9.5 Accordéon

Widget `toggle` — **9 en-têtes** (`elementor-tab-title`), 22 occurrences de
classe. Utilisé pour la section « Nos cibles » : chaque profil de client ouvre
sa liste de solutions.

### 9.6 Soulignement animé

```css
@keyframes vamtam-underline-anim-left  { 0% { transform: scaleX(0)  } 100% { transform: scale(1) } }
@keyframes vamtam-underline-anim-right { 0% { transform: scaleX(.8) } ... }
```

Le trait se déploie depuis un bord au survol des liens et boutons.

### 9.7 Autres keyframes du thème (22 au total)

| Keyframe | Effet |
|---|---|
| `vamtam-grow-left/right/top/bottom` | révélation par `clip-path: inset(…)` → `inset(0)` |
| `vamtam-scale-out` | `scale(1.4)` → `scale(1)` — zoom arrière à l'apparition d'image |
| `vamtam-fadein` / `vamtam-fadeout` | fondus génériques |
| `slideInRight` | entrée latérale |
| `hide-scroll` | blocage du défilement (menu mobile ouvert) |
| `ctcBounce`, `ht_ctc_anim_corner`, `ht_ctc_cta_stick` | animations du bouton WhatsApp |
| `eicon-spin`, `fa-spin`, `swiper-preloader-spin` | indicateurs de chargement |

**À noter :** le thème privilégie partout la révélation par `clip-path` plutôt
que par `transform` ou `opacity`. C'est sa signature technique.

---

## 10. Comportement responsive

| Aspect | Desktop | Tablette | Mobile |
|---|---|---|---|
| Échelle typo | 70 px (H1) | 50 px | 31 px |
| Animations d'entrée | oui | **non** | **non** |
| Motion FX (parallaxe, zoom) | oui | **non** | **non** |
| Colonnes collantes | oui | oui | non |
| Offset sticky | 240 px | 258 px | 200 / 400 px |
| Bouton WhatsApp | affiché | affiché | affiché |

---

## 11. Performance et chargement

- Feuille de style unique concaténée par LiteSpeed (~843 Ko)
- Consent Mode v2 injecté inline en base64, **refus par défaut** sur 32 pays UE,
  `wait_for_update: 500 ms`
- 24 images, formats mixtes `.jpg` / `.png` / `.webp`
- Déclinaisons de tailles WordPress (`-1024x576`, `-1024x512`, `-scaled`)
- Les animations d'entrée coupées hors desktop allègent sensiblement le mobile

---

## 12. Lecture : ce qui produit l'effet « agence sérieuse »

Les choix structurants, transposables à n'importe quelle identité :

1. **Une seule couleur d'accent** posée sur un fond quasi monochrome.
   Pas de dégradé, pas de seconde couleur vive.
2. **Titres en chasse fixe** — parti pris typographique rare et très
   identifiant, qui évite immédiatement l'air « template ».
3. **Échelle typographique très contrastée** : 16 px pour le corps, 70 px pour
   le H1, 120 px pour les chiffres. Le contraste fait la hiérarchie.
4. **Animations minimales** : un seul `fadeIn` de 200 ms, rien d'autre, et
   coupé sur mobile. La retenue fait le sérieux.
5. **Révélation par `clip-path`** plutôt que par rotation 3D — plus net, plus
   moderne, moins « effet de démo ».
6. **Colonnes collantes** : densité d'information sans surcharge visuelle.
7. **Alternance stricte** pleine largeur / 50-50, sans exception.
8. **Répétition assumée du même gabarit** pour les 4 études de cas — aucune
   variation décorative.
9. **Durée de transition unique** (300 ms) sur tout le site.
10. **Pied de page dense** avec une longue énumération d'expertises séparées par
    des barres verticales — bon pour le référencement, et donne une impression
    d'étendue de l'offre.

---

## 13. Équivalents pour la mise en œuvre Next.js / Tailwind

| Effet du site | Équivalent |
|---|---|
| `fadeIn` 200 ms au scroll | `IntersectionObserver` + classe, ou `animation-timeline: view()` |
| Flip box `clip-path` 570 ms | `clip-path: inset(0 100% 0 0)` → `inset(0)` au `group-hover` |
| Courbe signature | `cubic-bezier(.62,.83,.34,.93)` |
| En-tête collant | `position: sticky` + état au scroll |
| Colonnes collantes | `lg:sticky lg:top-[240px] lg:self-start` |
| Carrousels Swiper | `scroll-snap` natif, ou Embla |
| Accordéon `toggle` | `grid-template-rows: 0fr → 1fr` |
| Zoom de fond au scroll | `animation-timeline: view()` + `scale()` |
| Coupure mobile des animations | `@media (min-width: 1024px)` sur les règles d'animation |
