import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import Link from "../buttons&links/Link";
import Icon from "../buttons&links/Icon";
import React from "react";

function Footer() {
  return (
    <div className="footer-container text-gray-300">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="-mb-1 w-full"
      >
        <path
          className="fill-blue-600"
          fillOpacity="1"
          d="M0,64L48,96C96,128,192,192,288,186.7C384,181,480,107,576,112C672,117,768,203,864,240C960,277,1056,267,1152,234.7C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <footer className="bg-blue-600 p-16 flex flex-col items-center">
        <h1 className="text-2xl font-bold">Like it? Share it!</h1>
        <ul className="social-icons flex gap-4 p-4 pb-8 text-2xl text-white">
          <li>
            <Link
              href="http://github.com/0me9a"
              target="_blank"
              rel="noopener"
              className="group"
            >
              <Icon icon={<FaGithub />} />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/baliram-kumar-0a9a0a214/"
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <Icon icon={<FaLinkedin />} />
            </Link>
          </li>
          <li>
            <Link
              href="https://twitter.com/omega86735940"
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <Icon icon={<FaTwitter />} />
            </Link>
          </li>
        </ul>
        <div className="text-center font-bold text-sm sm:text-lg">
          <p className="py-2">We do not store uploaded data anywhere.</p>
          <p className="text-gray-300">
            &copy; Copyright {new Date().getFullYear()} Compressy
            <span className="px-2">|</span>
            <Link
              href="/terms-privacy/"
              className="text-white hover:underline"
            >
              Terms and Privacy
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
