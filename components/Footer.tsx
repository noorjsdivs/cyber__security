import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoImage from "../public/assets/newLogo.png";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <div className="flex justify-center items-center flex-col px-4 md:px-0 pb-6 border-t-[1px] border-t-cyan-900 py-4">
      <div className={`flex justify-start md:flex-row flex-col mb-8 w-full`}>
        <div className="mr-20 flex-col justify-start items-center text-left">
          <Link href="/">
            <Image
              height={80}
              width={300}
              src={LogoImage}
              objectFit="contain"
              className="cursor-pointer hover:brightness-125 duration-1000"
            />
          </Link>
          <p className="text-dimWhite hover:text-white duration-300 w-96">
            Cyber awareness refers to the level of awareness and understanding
            end users have about cybersecurity best practices and the cyber
            threats that their networks or organizations face everyday.
          </p>
        </div>
        <div className="flex-[1.5] w-full flex flex-rq justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink, i) => (
            <div key={i} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
              <h4 className="font-titleFont font-medium text-[20px] leading-[27px] text-white border-b-[1px] border-b-cyan-700">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((link, index) => (
                  <Link href={link.link}>
                    <li
                      key={link.name}
                      className={`font-bodyFont font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary duration-200 cursor-pointer ${
                        index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                      }`}
                    >
                      {link.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-cyan-900">
        <p className="font-poppins font-medium text-[18px] leading-[27px] text-white text-center">
          2022 Noor_Mohammad. All Rights Reserved.
        </p>

        <div className="flex flex-row items-center">
          {socialMedia.map((social, index) => (
            <Link href={social.link}>
              <a target="_blank">
                <Image
                  width={30}
                  key={social.id}
                  src={social.icon}
                  className={`brightness-75 hover:brightness-125 duration-300 cursor-pointer ${
                    index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                  }`}
                />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
