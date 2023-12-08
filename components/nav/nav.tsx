"use client";
import { FaGithub, FaMoon } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
import { MdSunny } from "react-icons/md";
import { RootState } from "@/RTK/store";

import ThemeButton from "../buttons&links/ThemeButton";
import LinkButton from "../buttons&links/LinkButton";
import Button from "../buttons&links/Button";
import Link from "../buttons&links/Link";
import Icon from "../buttons&links/Icon";
import Sidebar from "./sidebar";
import Image from "next/image";

function Nav() {
  const { dark } = useSelector((state: RootState) => state.theme);
  const [isSidebar, setSidebar] = useState<boolean>(false);
  const url = usePathname();

  useEffect(() => {
    setSidebar(false);
  }, [url]);

  return (
    <>
      <div className="w-full h-60 fixed top-0 left-0 bg-gradient-to-t from-red-800/0 to-orange-500 via-orange-400/50 dark:from-red-950/0 dark:via-orange-900/40 dark:to-orange-800"></div>
      <div className="bg-orange-400/50 dark:bg-orange-900/50 z-50 sticky top-0 backdrop-blur-sm">
        <nav className="relative flex justify-between items-center p-2 py-4 container mx-auto ">
          <div className="flex items-center justify-center gap-2">
            <Image
              src={"/logos/logo.png"}
              alt={"brand logo"}
              width={32}
              height={32}
              className=""
            />
            <Link href={"/"} className="font-bold text-xl">
              Compressy
            </Link>
          </div>
          <ul className="hidden md:flex items-center justify-center gap-6">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/faq"}>FAQ</Link>
            </li>
            <li>
              <Link href={"/terms-privacy"}>Terms & privacy</Link>
            </li>
            <li className="w-[2px] h-6 bg-gray-500/20"></li>
            <li>
              <ThemeButton className="bg-transparent border-none !p-2 rounded-lg">
                {!dark ? (
                  <FaMoon className={"group-hover:scale-125"} />
                ) : (
                  <MdSunny className={"group-hover:scale-125"} />
                )}
              </ThemeButton>
            </li>
            <li>
              <LinkButton
                rel="noreferrer"
                href={"https://github.com/0ME9A/compressy"}
                target="_blank"
                className=""
              >
                <FaGithub />
                GitHub
              </LinkButton>
            </li>
          </ul>
          <Button
            className="border-none bg-transparent text-2xl !px-1 md:hidden"
            onClick={() => setSidebar(!isSidebar)}
          >
            {isSidebar ? (
              <Icon icon={<IoClose />} />
            ) : (
              <Icon icon={<HiMenuAlt3 />} />
            )}
          </Button>
        </nav>
      </div>

      <Sidebar
        className={`fixed ${isSidebar ? "right-0" : "-right-full"}`}
        setSidebar={setSidebar}
      />
    </>
  );
}

export default Nav;
