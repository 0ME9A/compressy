"use client";

import { useDispatch, useSelector } from "react-redux";
import { FaGithub, FaMoon } from "react-icons/fa";
import { Dispatch, SetStateAction } from "react";
import { IoClose } from "react-icons/io5";
import { MdSunny } from "react-icons/md";
import { RootState } from "@/RTK/store";

import ThemeButton from "../buttons&links/ThemeButton";
import LinkButton from "../buttons&links/LinkButton";
import Button from "../buttons&links/Button";
import Link from "../buttons&links/Link";
import Icon from "../buttons&links/Icon";

interface sidebarFace {
  className?: string;
  setSidebar: Dispatch<SetStateAction<boolean>>;
}

function Sidebar({ className, setSidebar: setMenu }: sidebarFace) {
  const { dark } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  return (
    <section
      className={`w-full max-w-md h-screen bg-gray-200 dark:bg-gray-800 p-3 top-0 md:hidden z-50 ${className}`}
      role="navigation"
    >
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-between pt-1">
          <h2 className="font-bold">Compressy</h2>
          <Button className="w-fit !p-2" onClick={() => setMenu(false)}>
            <Icon icon={<IoClose />} />
          </Button>
        </div>
        <ul className="grid grid-cols-4 gap-4 pt-10">
          <li className="col-span-4">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="col-span-4">
            <Link href={"/about"}>About</Link>
          </li>
          <li className="col-span-4">
            <Link href={"/terms-privacy"}>Terms & privacy</Link>
          </li>
        </ul>
        <div className="grow"></div>
        <ul className="space-y-2">
          <li>
            <ThemeButton className=" !p-2 flex w-full items-center justify-center gap-2">
              {dark ? (
                <>
                  Light
                  <MdSunny className={"group-hover:scale-125"} />
                </>
              ) : (
                <>
                  Dark
                  <FaMoon className={"group-hover:scale-125"} />
                </>
              )}
            </ThemeButton>
          </li>
          <li className="col-span-2">
            <LinkButton
              rel="noreferrer"
              href={"https://github.com/0ME9A/compressy"}
              target="_blank"
              className="py-2"
            >
              <FaGithub />
              GitHub
            </LinkButton>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Sidebar;
