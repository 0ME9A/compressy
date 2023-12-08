import { FaArrowLeft } from "react-icons/fa";
import { Metadata } from "next";

import LinkButton from "@/components/buttons&links/LinkButton";
import React from "react";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Frequently Asked Questions - Compressy",
    description:
      "Learn more about Compressy, the tool for compressing and resizing images.",
    keywords: [
      "Frequently Asked Questions",
      "FAQ",
      "Compressy",
      "Baliram Singh",
      "OMEGA",
      "image compression",
      "image resizing",
    ],
  };
}

function Faq() {
  return (
    <section className="max-w-screen-lg w-full mx-auto p-2 sm:p-10 relative">
      <h1 className="text-3xl  font-bold mb-6">Frequently Asked Questions</h1>
      <strong className="inline-block pt-4">Can I compress multiple images at once?</strong>
      <br />
      <p className="mt-2">
        This feature is currently under development. Check out the related issue for updates on implementing bulk image compression.
      </p>
      <strong className="inline-block pt-4">Can I contribute to the development of Compressy?</strong>
      <br />
      <p className="mt-2">
        Yes. Compressy is an open source project. You can contribute to the development of Compressy by opening a pull request to the <a href="https://github.com/0ME9A/compressy" className="text-blue-500">0ME9A/compressy</a>GitHub repository.
      </p>
      <strong className="inline-block pt-4">How secure is the compression process?</strong>
      <br />
      <p className="mt-2">
        Compressy employs client-side processing, ensuring that your files are compressed locally without being sent to a server. This approach prioritizes user privacy and data security.
      </p>
      <strong className="inline-block pt-4">Where are the files submitted for compression saved?</strong>
      <br />
      <p className="mt-2">
        The files you upload and the compressed versions are stored temporarily in your browser's memory and are not saved on any server. All compression occurs directly within your browser.
      </p>
      <strong className="inline-block pt-4">What kind of data does Compressy collect?</strong>
      <br />
      <p className="mt-2">
        Compressy uses cookies for statistical and ad personalization purposes. Refer the <Link href={"/terms-privacy"} className="text-blue-500">Terms & Privacy</Link> to know more. 
      </p>
      <LinkButton href="/" className="w-fit float-right mt-5">
        <FaArrowLeft />
        Home
      </LinkButton>
    </section>
  );
}

export default Faq;
