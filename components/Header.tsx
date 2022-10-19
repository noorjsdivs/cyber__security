import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import LogoImage from "../public/assets/newLogo.png";
import { navLinks } from "../constants";
import { menu, close } from "../public/assets";

function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="max-w-screen-xl mx-auto bg-primary text-dimWhite flex items-center justify-between p-3 px-4 xl:px-0 sticky top-0 z-10 border-b-[1px] border-b-cyan-900">
      <Link href="/" passHref>
        <motion.div
          initial={{ x: -500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
          }}
        >
          <Image
            alt="LogoImage"
            width={300}
            height={62}
            src={LogoImage}
            className="cursor-pointer hover:brightness-125 duration-1000"
          />
        </motion.div>
      </Link>

      <motion.div
        initial={{ x: 500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1.5,
        }}
      >
        <ul className="list-none hidden mdl:flex">
          {navLinks.map((navLink, index) => (
            <li
              key={navLink.id}
              className={`text-dimWhite uppercase font-bodyFont font-semibold cursor-pointer text-[16px] ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              } hover:text-cyan-400 duration-300`}
            >
              <Link href={navLink.href} passHref>
                {navLink.title}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
        }}
        className="mdl:hidden flex flex-1 justify-end items-center"
      >
        <Image
          alt="toggle Icons"
          width={30}
          height={30}
          src={toggle ? close : menu}
          onClick={() => setToggle((prev) => !prev)}
          className="cursor-pointer "
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((navLink) => (
              <li
                key={navLink.id}
                className={`font-poppins uppercase text-white font-normal cursor-pointer text-[16px] mb-4 hover:text-cyan-400 hover:border-b-[1px] border-cyan-400 duration-300 w-full text-center`}
              >
                <Link href={navLink.href} passHref>
                  {navLink.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </header>
  );
}

export default Header;
