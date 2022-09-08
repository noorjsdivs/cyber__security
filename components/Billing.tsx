import Image from "next/image";
import { apple, bill, google } from "../public/assets";

const Billing = () => (
  <div
    id="product"
    className={`flex md:flex-row flex-col-reverse sm:py-16 py-6 px-4 md:px-0`}
  >
    <div className="flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative">
      <Image src={bill} className="w-[100%] h-[100%] relative z-[5]" />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"></div>
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"></div>
    </div>
    <div className="flex-1 flex justify-center items-start flex-col">
      <h2 className="font-bodyFont font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing.
      </h2>
      <p
        className={`font-bodyFont font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5`}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, rem harum
        aspernatur impedit expedita repellendus officia! Suscipit ducimus
        debitis accusamus.
      </p>
      <div className="flex flex-row flex-wrap mt-10 sm:mt-10">
        <Image
          src={apple}
          className="w-[128px] h-[42px] object-contain cursor-pointer mr-5 brightness-75 hover:brightness-105 duration-300"
        />
        <Image
          src={google}
          className="w-[128px] h-[42px] object-contain cursor-pointer brightness-75 hover:brightness-105 duration-300"
        />
      </div>
    </div>
  </div>
);

export default Billing;
