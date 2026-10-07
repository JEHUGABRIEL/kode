import { waLink } from "@/lib/site";
import { WhatsApp } from "./icons";

/**
 * Bouton WhatsApp flottant (§1, §9.7) — fixe, en bas à droite, à 15 px
 * des bords. Sur le site réel, ce n'est pas un cercle mais une pastille
 * verte libellée « Une Question ? ».
 *
 * La classe `.ctc-flottant` (globals.css) porte le positionnement et les
 * animations du plugin Click-to-Chat : rebond permanent (`ctcBounce`) et
 * halo qui pulse (`ht_ctc_anim_corner`).
 */
export default function WhatsAppFloat() {
  return (
    <a
      href={waLink("Bonjour KODÊ, je souhaite parler de mon projet.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discuter avec KODÊ sur WhatsApp"
      className="ctc-flottant tr flex items-center gap-2.5 rounded-full bg-whatsapp px-4 py-3.5 text-white shadow-[0_12px_32px_-12px_rgba(37,211,102,.95)]"
    >
      <WhatsApp className="h-[22px] w-[22px] shrink-0" />
      <span className="whitespace-nowrap text-[14px] font-medium leading-none">
        Une Question&nbsp;?
      </span>
    </a>
  );
}
