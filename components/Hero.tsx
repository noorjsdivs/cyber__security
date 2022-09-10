import React from "react";
import { discount } from "../public/assets";
import RobotImg from "../public/assets/robot.png";
import Image from "next/image";
import GetStarted from "./GetStarted";

const Hero = () => (
  <div className="max-w-screen-xl md:flex items-center justify-between xl:px-0 sm:px-16 px-6 mt-[60px] mb-[10px]">
    <div className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6">
      <div className="flex flex-row max-w-[400px] items-center justify-center gap-2 py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <Image src={discount} alt="discountImage" />
        <p className="text-dimWhite font-titleFont text-[16px] font-semibold">
          Cyber Security is what we need for 100%
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-extrabold ss:text-[72px] text-[55px] text-white ss:leading-[100px] leading-[75px]">
          Learn more about <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Cyber Safety</span>
        </h1>
        <div className="hidden lg:flex mt-4">
          <GetStarted />
        </div>
      </div>
      <h1 className="font-bodyFont font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
        Through our contents.
      </h1>
      <p className="max-w-[470px] mt-5 text-dimWhite text-[16px] text-justify hover:text-white duration-300">
        Our team of writers uses a methodology to identify the current major
        threat on Cyber Safety and writing contents which can help you to
        understand the new era of technology in much better way. We are trying
        to make an awareness regarding the Online safety in a bigger view.
      </p>
    </div>
    <div className="flex-1 flex justify-center items-center md:my-0 my-10 relative">
      <div className="w-[100%] h-[100%] z-[5] brightness-90 hover:brightness-110 duration-200">
        <Image src={RobotImg} alt="robotImage" priority loading="eager" />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
        <div className="absolute z-[1] w-[80%] h-[40%] rounded-full bottom-20 white__gradient"></div>
        <div className="absolute z-[0] w-[50%] h-[80%] right-20 bottom-20 blue__gradient"></div>
      </div>
    </div>
  </div>
);

export default Hero;
