import { FaArrowLeft, FaChevronDown } from "react-icons/fa";

import Link from "../buttons&links/Link";
import LinkButton from "../buttons&links/LinkButton";
import React, { useEffect } from "react";

function Faq() {
  useEffect(() => {
    const details = document.querySelectorAll("details");

    // Add the onclick listeners.
    details.forEach((targetDetail) => {
      targetDetail.addEventListener("click", () => {
        // Close all the details that are not targetDetail.
        details.forEach((detail) => {
          if (detail !== targetDetail) {
            detail.removeAttribute("open");
          }
        });
      });
    });

  }, []);

  return (
    <section className="max-w-screen-lg w-full mx-auto p-2 sm:p-10 relative">
      <h1 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
      <details className="my-4">
        <summary className="list-none border-b p-4 flex flex-nowrap justify-between">
          <strong className="">Can I compress multiple images at once?</strong>
          <FaChevronDown className="inline" />
        </summary>
        <p className="p-4">
          This feature is currently under development. Check out the related issue for updates on implementing bulk image compression.
        </p>
      </details>
      <details className="my-4">
        <summary className="list-none border-b p-4 flex flex-nowrap justify-between">
          <strong>Can I contribute to the development of Compressy?</strong>
          <FaChevronDown className="inline" />
        </summary>
        <p className="p-4">
          Yes. Compressy is an open source project. You can contribute to the development of Compressy by opening a pull request to the <a href="https://github.com/0ME9A/compressy" className="text-blue-500">0ME9A/compressy</a>GitHub repository.
        </p>
      </details>
      <details className="my-4">
        <summary className="list-none border-b p-4 flex flex-nowrap justify-between">
          <strong>How secure is the compression process?</strong>
          <FaChevronDown className="inline" />
        </summary>
        <p className="p-4">
          Compressy employs client-side processing, ensuring that your files are compressed locally without being sent to a server. This approach prioritizes user privacy and data security.
        </p>
      </details>
      <details className="my-4">
        <summary className="list-none border-b p-4 flex flex-nowrap justify-between">
          <strong>Where are the files submitted for compression saved?</strong>
          <FaChevronDown className="inline" />
        </summary>
        <p className="p-4">
          The files you upload and the compressed versions are stored temporarily in your browser&apos;s memory and are not saved on any server. All compression occurs directly within your browser.
        </p>
      </details>
      <details className="my-4">
        <summary className="list-none border-b p-4 flex flex-nowrap justify-between">
          <strong>What kind of data does Compressy collect?</strong>
          <FaChevronDown className="inline" />
        </summary>
        <p className="pt-4">
        Compressy uses cookies for statistical and ad personalization purposes. Refer the <Link href={"/terms-privacy"} className="text-blue-500">Terms & Privacy</Link> to know more. 
        </p>
      </details>
    </section>
  );
}

export default Faq;
