import React from "react";
import { discount } from "../public/assets";
import RobotImg from "../public/assets/robot.png";
import Image from "next/image";
import GetStarted from "./GetStarted";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="max-w-screen-xl flex flex-col lg:flex-row items-center justify-between xl:px-0 px-6 gap-6 xl:gap-0 mt-[60px] mb-[10px]">
      <div className="flex-1 flex justify-center items-start flex-col xl:px-0">
        <div className="flex flex-row max-w-[400px] items-center justify-center gap-2 py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <div className=" mdl:inline-flex">
            <Image src={discount} alt="discountImage" />
          </div>
          <div>
            <p className="text-dimWhite font-titleFont text-xs sml:text-[16px] w-full font-semibold">
              Cyber Security is what we need for 100%
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between py-2 items-center w-full relative">
          <div>
            <h1 className="font-poppins font-extrabold text-2xl leading-[30px] md:leading-[65px] md:text-[55px] lgl:text-[50px] xl:text-[55px] text-white">
              Learn more about <br />
              <span className="text-gradient text-3xl md:text-[55px]">
                Cyber Safety
              </span>
            </h1>
          </div>
          <Link href="post/login" passHref>
            <div className="flex mt-4 md:absolute right-6 mdl:right-36 -bottom-2 xl:inline-flex lgl:right-0 xl:bottom-0 xl:right-0">
              <GetStarted />
            </div>
          </Link>
        </div>
        <h2 className="font-bodyFont font-semibold text-2xl underline underline-offset-4 md:no-underline leading-[40px] md:leading-[75px] lg:leading-[50px] xl:leading-[75px] md:text-[40px] mdl:text-[55px] lgl:text-[35px] xl:text-[55px] text-white w-full">
          Through our contents.
        </h2>
        <p className="max-w-[470px] mt-5 text-dimWhite text-[16px] text-justify hover:text-white duration-300">
          Our team of writers uses a methodology to identify the current major
          threat on Cyber Safety and writing contents which can help you to
          understand the new era of technology in much better way. We are trying
          to make an awareness regarding the Online safety in a bigger view.
        </p>

        <div className="pt-5 flex flex-row gap-2">
          <Link href="https://my-blog-delta-eight.vercel.app/">
            <a target="_blank">
              <button className="heroButton">Reactjs</button>
            </a>
          </Link>

          <Link href="https://noormohmmad.com/">
            <a target="_blank">
              <button className="heroButton">Portfolio</button>
            </a>
          </Link>
        </div>
      </div>
      {/*======================= Hero Image start here ======================*/}
      <div className="flex-1 flex justify-center items-center md:my-0 my-10 relative">
        <div className="w-[80%] lgl:w-[100%] h-[100%] z-[5] brightness-90 hover:brightness-110 duration-200">
          <Image src={RobotImg} alt="robotImage" priority loading="eager" />

          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
          <div className="absolute z-[1] w-[80%] h-[40%] rounded-full bottom-20 white__gradient"></div>
          <div className="absolute z-[0] w-[50%] h-[80%] right-20 bottom-20 blue__gradient"></div>
        </div>
      </div>
      {/*======================= Hero Image end here ======================*/}
    </div>
  );
};

export default Hero;
