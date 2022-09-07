import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LogoImage from "../public/assets/newLogo.png";
import { navLinks } from "../constants";
import { menu, close } from "../public/assets";

function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="max-w-screen-xl mx-auto bg-primary text-dimWhite flex items-center justify-between p-3 sticky top-0 z-50 border-b-[1px] border-b-cyan-900">
      <Link href="/">
        <Image width={300} height={62} src={LogoImage} />
      </Link>

      <ul className="list-none hidden sm:flex">
        {navLinks.map((navLink, index) => (
          <li
            key={navLink.id}
            className={`text-dimWhite font-bodyFont font-semibold cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } hover:text-cyan-400 duration-300`}
          >
            {navLink.title}
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image
          src={toggle ? close : menu}
          onClick={() => setToggle((prev) => !prev)}
          className="cursor-pointer"
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((navLink, index) => (
              <li
                key={navLink.id}
                className={`font-poppins text-white font-normal cursor-pointer text-[16px] mb-4 hover:text-cyan-400 hover:border-b-[1px] border-cyan-400 duration-300 w-full text-center`}
              >
                <a href={navLink.href}>{navLink.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
