"use client";

/** Bouton d'envoi qui demande confirmation avant une action destructive. */
export default function BoutonConfirmer({
  message,
  className,
  children,
}: {
  message: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="submit"
      className={className}
      onClick={(evenement) => {
        if (!window.confirm(message)) evenement.preventDefault();
      }}
    >
      {children}
    </button>
  );
}
