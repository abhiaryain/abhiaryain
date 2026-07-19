import type { MetadataRoute } from "next";
import { PERSONAL } from "@/data/personal";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: PERSONAL.nickname,
    short_name: PERSONAL.nickname.split(" ")[0],
    description: PERSONAL.summary,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
