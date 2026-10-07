import Image from "next/image";
import { assets } from "@/lib/site";

/**
 * Écran de chargement du back-office, affiché dans la zone de contenu
 * pendant qu'une page du panneau se prépare (le menu latéral reste en
 * place). Le vrai logo « respire », une flamme scintille dessous, et une
 * barre orange glisse — inspiré des chargeurs de Royal Beach (logo + barre)
 * et de la FECAM (barres animées dans la couleur d'accent).
 */
export default function Chargeur({ libelle = "Chargement" }: { libelle?: string }) {
  return (
    <div className="chargeur-bo" role="status" aria-live="polite">
      <div className="chargeur-bo__marque">
        <Image
          src={assets.logo}
          alt=""
          width={832}
          height={588}
          priority
          className="chargeur-bo__logo"
        />

        <div className="chargeur-bo__flammes" aria-hidden>
          {[0.55, 0.9, 0.65, 1, 0.7, 0.85, 0.5].map((hauteur, i) => (
            <span key={i} style={{ height: `${hauteur * 100}%`, animationDelay: `${i * 0.12}s` }} />
          ))}
        </div>

        <span className="chargeur-bo__barre" aria-hidden>
          <span />
        </span>

        <p className="chargeur-bo__libelle">{libelle}…</p>
      </div>
    </div>
  );
}
