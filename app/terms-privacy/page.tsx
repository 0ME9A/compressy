import { FaArrowLeft } from "react-icons/fa";
import { Metadata } from "next";

import LinkButton from "@/components/buttons&links/LinkButton";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Terms and Privacy - Compressy",
    description:
      "Understand the terms and privacy policy of Compressy, the tool for compressing and resizing images.",
    keywords: [
      "Terms and Privacy",
      "Compressy",
      "Baliram Singh",
      "OMEGA",
      "privacy policy",
      "image compression",
      "image resizing",
    ],
  };
}

function Page() {
  return (
    <section className="max-w-screen-lg w-full p-2 sm:p-10 md:p-50 mx-auto relative">
      <h1 className="text-2xl md:text-3xl font-bold">Terms And Privacy</h1>
      <p className="mt-4">
        This agreement describes the conditions and rules under which Compressy
        offers you its services at compressy.ome9a.com. This agreement will be
        governed by the laws of The Republic of India, without reference to
        conflict of laws principles. You agree that any litigation relating to
        this agreement may only be brought in, and shall be subject to the
        jurisdiction of, any Court of India.
      </p>
      <strong className="inline-block pt-4">Terms</strong>
      <br />
      <p className="mt-2">
        By using the services of compressy.ome9a.com, you agree to observe all
        of the following conditions and rules:
      </p>
      <ol className="pl-8 list-decimal">
        <li>Use of the compressy.ome9a.com service is at your own risk.</li>
        <li>
          You bear full responsibility for any data transmitted to
          compressy.ome9a.com servers.
        </li>
        <li>
          You agree not to use the compressy.ome9a.com service to upload any
          illegal materials.
        </li>
        <li>
          You agree not to integrate the compressy.ome9a.com service into your
          own or 3rd party applications.
        </li>
        <li>
          You may use the compressy.ome9a.com service for any purpose, personal
          or commercial.
        </li>
        <li>
          We reserve the right to change or cease any of services at
          compressy.ome9a.com, at any time.
        </li>
        <li>
          We reserve the right to change the terms of this agreement without
          notice.
        </li>
        <li>
          The compressy.ome9a.com service does not provide any guarantees.
        </li>
      </ol>
      <strong className="inline-block pt-4">Privacy</strong>
      <br />
      <ol className="pl-8 list-decimal">
        <li>Submitted data and the generated files do not go to any server.</li>
        <li>
          Submitted data and the generated files will not be shared or accessed
          by our company.
        </li>
        <li>
          In order to improve the quality of the compressy.ome9a.com service,
          you can give us feedback at{" "}
          <a href="mailto:heyome9a@gmail.com" className="text-blue-500">
            heyome9a@gmail.com
          </a>
        </li>
        <li>
          Google collects data and uses cookies for ad personalization and
          measurement for this site. Learn how Google collects and uses data.
          You can turn off ad personalization at any time in your Google account
          settings. Also, we use cookies for statistical purposes. By using this
          site, you consent to our use of cookies.
        </li>
      </ol>
      <pre className="p-4 pl-8 text-blue-600">
        Compressy <br />
        Hyderabad, India
      </pre>
      <LinkButton href="/" className="w-fit float-right mt-5">
        <FaArrowLeft />
        Home
      </LinkButton>
    </section>
  );
}

export default Page;
