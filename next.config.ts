import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      /* Images des réalisations saisies dans le back-office : toute adresse https. */
      { protocol: "https", hostname: "**" },
    ],
  },
  turbopack: {
    // Évite que Turbopack remonte jusqu'au dépôt du dossier personnel.
    root: process.cwd(),
    rules: {
      "*.css": { loaders: ["@tailwindcss/turbopack"], as: "*.css" },
    },
  },
};

export default nextConfig;
