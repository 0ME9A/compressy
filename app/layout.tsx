import { ClientLayout } from "./ClientLayout";
import { Inter } from "next/font/google";

import type { Metadata } from "next";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Compressy - Image Compression and Resizing",
  description:
    "Compressy is a tool created by Baliram Singh, also known as OMEGA. It allows you to compress images from high to low quality and resize them according to your needs.",
  keywords: [
    "Compressy",
    "image compression",
    "image resizing",
    "OMEGA",
    "Baliram Singh",
  ],
  authors: [{ name: "Baliram Singh", url: "https://ome9a.com" }],
  openGraph: {
    title: "Compressy - Image Compression and Resizing",
    description:
      "Compressy is a tool created by Baliram Singh, also known as OMEGA. It allows you to compress images from high to low quality and resize them according to your needs.",
    images: "./twitter.png",
    url: "https://compressy.ome9a.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compressy - Image Compression and Resizing",
    description:
      "Compressy is a tool created by Baliram Singh, also known as OMEGA. It allows you to compress images from high to low quality and resize them according to your needs.",
    images: "./twitter.png",
    creator: "@omegaStrikes",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-gray-100 dark:bg-gray-900 text-black dark:text-white  ${inter.className}`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
