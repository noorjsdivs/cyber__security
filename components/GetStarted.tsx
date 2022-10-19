import Image from "next/image";
import { arrowUp } from "../public/assets";

const GetStarted = () => (
  <div className="w-[80px] h-[80px] xl:w-[120px] xl:h-[120px] rounded-full bg-transparent border-2 border-gray-300 p-[2px] cursor-pointer brightness-75 hover:brightness-100 duration-300 animate-pulse">
    <div className=" bg-primary w-full h-full rounded-full flex-col items-center text-center justify-center pt-3 xl:pt-8">
      <div className="flex items-center justify-center">
        <p className=" font-medium text-[14px] xl:text-[18px] leading-[23px] mr-0 md:mr-2">
          <span className="text-gradient">Get</span>
        </p>
        <div className="inline-flex">
          <Image src={arrowUp} alt="ArrowUp" />
        </div>
      </div>
      <div>
        <p className="font-medium text-[14px] xl:text-[18px] leading-[23px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  </div>
);

export default GetStarted;
