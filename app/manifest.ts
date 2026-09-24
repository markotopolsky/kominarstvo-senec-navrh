import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kominárstvo Senec",
    short_name: "Kominárstvo Senec",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#12151c",
    icons: [
      {
        src: "/logo-all/favicon_io/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo-all/favicon_io/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
