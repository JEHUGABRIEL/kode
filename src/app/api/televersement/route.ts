import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { NextResponse } from "next/server";
import { estAdmin } from "@/lib/auth";

/**
 * Délivre au navigateur un jeton de téléversement Vercel Blob, pour les
 * photos des réalisations. Le fichier part directement du navigateur vers
 * le stockage (pas de limite de taille des actions serveur). Réservé à une
 * session du back-office.
 */
export async function POST(request: Request) {
  const corps = (await request.json()) as HandleUploadBody;

  try {
    const reponse = await handleUpload({
      body: corps,
      request,
      onBeforeGenerateToken: async () => {
        if (!(await estAdmin())) throw new Error("Non autorisé");
        return {
          allowedContentTypes: ["image/jpeg", "image/png", "image/webp", "image/avif"],
          maximumSizeInBytes: 12 * 1024 * 1024,
          addRandomSuffix: true,
        };
      },
    });
    return NextResponse.json(reponse);
  } catch (erreur) {
    return NextResponse.json({ erreur: (erreur as Error).message }, { status: 400 });
  }
}
