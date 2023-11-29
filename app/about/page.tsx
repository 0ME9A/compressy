import { FaArrowLeft } from "react-icons/fa";
import { Metadata } from "next";

import LinkButton from "@/components/buttons&links/LinkButton";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About Us - Compressy",
    description:
      "Learn more about Compressy, the tool for compressing and resizing images.",
    keywords: [
      "About Us",
      "Compressy",
      "Baliram Singh",
      "OMEGA",
      "image compression",
      "image resizing",
    ],
  };
}

function About() {
  return (
    <section className="max-w-screen-lg w-full mx-auto p-2 sm:p-10 relative">
      <h1 className="text-3xl  font-bold mb-6">About Us</h1>
      <p className="leading-7 mb-4">
        Welcome to Compressy, your trusted solution for image compression. Our
        platform is designed to make image optimization easy, fast, and
        effective. Whether you are a web developer, designer, or someone looking
        to reduce image file sizes for faster loading websites, Compressy has
        you covered.
      </p>
      <p className="leading-7 mb-4">
        At Compressy, we prioritize the following principles:
      </p>
      <ul className="list-disc pl-8 mb-4">
        <li>
          <span className="font-semibold">Efficiency:</span> Our compression
          algorithms ensure that your images are optimized for web performance
          without compromising quality.
        </li>
        <li>
          <span className="font-semibold">User-Friendly:</span> We strive to
          provide a simple and intuitive user experience. Just upload your
          images, and we&lsquo;ll take care of the rest.
        </li>
        <li>
          <span className="font-semibold">Accessibility:</span> Compressy is
          accessible to both casual users and professionals, offering a range of
          features for various needs.
        </li>
      </ul>
      <p className="leading-7 mb-4">
        Our dedicated team is passionate about web performance and understands
        the impact of optimized images on user experience. We continually update
        and enhance our platform to meet evolving industry standards.
      </p>
      <p className="leading-7 mb-4">
        If you have any questions, suggestions, or feedback, please feel free to
        reach out to us at{" "}
        <a href="mailto:heyome9a@gmail.com" className="text-blue-500">
          heyome9a@gmail.com
        </a>
        . Your input helps us improve and provide a better service to our users.
      </p>
      <p className="leading-7">
        Thank you for choosing Compressy to elevate your website&lsquo;s
        performance by optimizing your images!
      </p>
      <LinkButton href="/" className="w-fit float-right mt-5">
        <FaArrowLeft />
        Home
      </LinkButton>
    </section>
  );
}

export default About;
