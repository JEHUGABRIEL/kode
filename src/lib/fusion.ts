/**
 * Fusion des textes modifiés dans le back-office avec le dictionnaire du
 * code. La structure du code fait foi : seules les chaînes qui existent
 * dans le dictionnaire de référence peuvent être remplacées (ni clé ni
 * élément de liste ajouté), et tout ce qui n'est pas une chaîne (index,
 * nombres) reste celui du code.
 */
export function fusionner<T>(reference: T, surcharge: unknown): T {
  if (typeof reference === "string") {
    return (typeof surcharge === "string" ? surcharge : reference) as T;
  }
  if (Array.isArray(reference)) {
    const liste = Array.isArray(surcharge) ? surcharge : [];
    return reference.map((element, i) => fusionner(element, liste[i])) as T;
  }
  if (reference && typeof reference === "object") {
    const objet = surcharge && typeof surcharge === "object" && !Array.isArray(surcharge) ? surcharge : {};
    return Object.fromEntries(
      Object.entries(reference).map(([cle, valeur]) => [
        cle,
        fusionner(valeur, (objet as Record<string, unknown>)[cle]),
      ]),
    ) as T;
  }
  return reference;
}

/** Écrit une valeur dans un objet à partir d'un chemin « a.b.0.c ». */
export function ecrireChemin(cible: unknown, chemin: string, valeur: string) {
  const segments = chemin.split(".");
  let noeud = cible as Record<string, unknown>;
  for (const segment of segments.slice(0, -1)) {
    const suivant = noeud?.[segment];
    if (!suivant || typeof suivant !== "object") return false;
    noeud = suivant as Record<string, unknown>;
  }
  const derniere = segments[segments.length - 1];
  if (typeof noeud?.[derniere] !== "string") return false;
  noeud[derniere] = valeur;
  return true;
}
