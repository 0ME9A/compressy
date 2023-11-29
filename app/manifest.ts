import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "compressy",
    short_name: "compressy",
    description:
      "Compress jpg, jpeg, and png images files in just a few seconds. Reduce your images' size as you want.",
    start_url: ".",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "./logos/logo16.png",
        sizes: "16x16",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "./logos/logo32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "./logos/logo48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "./logos/logo72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        src: "./logos/logo96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "./logos/logo144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        src: "./logos/logo168.png",
        sizes: "168x168",
        type: "image/png",
      },
      {
        src: "./logos/logo192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "./logos/logo512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
