import Image from "next/image";
import { arrowUp } from "../public/assets";

const GetStarted = () => (
  <div className="w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer">
    <div className=" bg-primary w-full h-full rounded-full flex-col items-center text-center justify-center pt-10">
      <div className="flex items-center justify-center">
        <p className=" font-medium text-[18px] leading-[23px] mr-2">
          <span className="text-gradient">Get</span>
        </p>
        <Image src={arrowUp} />
      </div>
      <div>
        <p className="font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  </div>
);

export default GetStarted;