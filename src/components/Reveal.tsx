"use client";

import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";

/**
 * Animation d'entrée au défilement (§6).
 *
 * Le site de référence retire la classe `elementor-invisible` dès que
 * l'élément entre dans le viewport. Ici : on observe l'élément et on
 * ajoute `anime-vu`. Le masquage et l'animation sont définis en CSS et
 * ne s'appliquent **qu'à partir de 1024 px** — sur tablette et mobile,
 * les animations d'entrée sont désactivées (choix assumé du site).
 */
export default function Reveal({
  children,
  delai = 200,
  variante = "fondu",
  as,
  className = "",
}: {
  children: ReactNode;
  /** Délais relevés sur le site : 200 ms (majoritaire), 300, 400, 500 ms. */
  delai?: 200 | 300 | 400 | 500;
  variante?: "fondu" | "haut";
  as?: ElementType;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [vu, setVu] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      /* Environnement sans observateur : on révèle l'élément au prochain
         rafraîchissement plutôt que de le laisser masqué. */
      const frame = requestAnimationFrame(() => setVu(true));
      return () => cancelAnimationFrame(frame);
    }

    const observateur = new IntersectionObserver(
      (entrees) => {
        for (const entree of entrees) {
          if (entree.isIntersecting) {
            setVu(true);
            observateur.disconnect();
          }
        }
      },
      { threshold: 0.01, rootMargin: "0px 0px -8% 0px" },
    );

    observateur.observe(el);
    return () => observateur.disconnect();
  }, []);

  const Tag = (as ?? "div") as ElementType;

  return (
    <Tag
      ref={ref}
      className={`anime ${variante === "haut" ? "anime-haut" : ""} ${vu ? "anime-vu" : ""} ${className}`}
      style={{ "--delai": `${delai}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
