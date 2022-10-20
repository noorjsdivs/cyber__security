import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoImage from "../public/assets/newLogo.png";
import { footerLinks, socialMedia } from "../constants";

const FooterExtra = () => {
  return (
    <div className="max-w-7xl mx-auto flex justify-center items-center flex-col px-6 xl:px-0 pb-6 border-t-[1px] border-t-cyan-900 py-4">
      <div className={`flex justify-start md:flex-row flex-col mb-8 w-full`}>
        <div className="lg:mr-20 flex-col justify-start items-center text-left">
          <Link href="/" passHref>
            <Image
              alt="LogoImage"
              height={80}
              width={300}
              src={LogoImage}
              objectFit="contain"
              className="cursor-pointer hover:brightness-125 duration-1000"
            />
          </Link>
          <p className="text-primary hover:text-white duration-300 w-full md:max-w-[500px] lg:w-96">
            Cyber awareness refers to the level of awareness and understanding
            end users have about cybersecurity best practices and the cyber
            threats that their networks or organizations face everyday.
          </p>
        </div>
        <div className="flex-[1.5] w-full flex flex-rq justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink, i) => (
            <div key={i} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
              <h4 className="font-titleFont font-medium text-[20px] leading-[27px] text-primary border-b-[1px] border-b-cyan-700">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((link, index) => (
                  <li
                    key={index}
                    className={`font-bodyFont font-normal text-[16px] leading-[24px] text-primary hover:text-secondary duration-200 cursor-pointer ${
                      index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    <Link href={link.link} passHref>
                      <a target="_blank">{link.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-cyan-900">
        <p className="font-poppins font-medium text-[18px] leading-[27px] text-primary text-center">
          2022 Noor_Mohammad. All Rights Reserved.
        </p>

        <div className="flex flex-row items-center">
          {socialMedia.map((social, index) => (
            <div key={social.id}>
              <Link href={social.link} passHref>
                <a target="_blank">
                  <Image
                    alt="Social Icon"
                    width={30}
                    src={social.icon}
                    className={`brightness-0 hover:brightness-50 text-primary duration-300 cursor-pointer ${
                      index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                    }`}
                  />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterExtra;
