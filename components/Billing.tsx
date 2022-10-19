import Image from "next/image";
import { apple, bill, google } from "../public/assets";

const Billing = () => (
  <div id="product" className={`flex flex-col-reverse lg:flex-row py-20 px-6`}>
    <div className="flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative brightness-75 hover:brightness-100 duration-150">
      <Image
        src={bill}
        alt="BillImage"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"></div>
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"></div>
    </div>
    <div className="flex-1 flex justify-center items-start flex-col">
      <h2 className="font-bodyFont font-semibold w-full text-center lg:text-left text-white text-3xl md:text-4xl leading-[40px] md:leading-[50px]">
        Easily control your <br /> billing & invoicing.
      </h2>
      <p
        className={`font-bodyFont font-normal text-dimWhite text-[16px] md:text-[18px] mt-4 hover:text-white text-center lg:text-left duration-300 md:max-w-[470px] mx-auto lg:mx-0`}
      >
        You must keep track of your online bills and invoices becuase it may
        need in any moment at anytime. Be sure to save it properly and safely in
        secure folder of your system. Our Apps can help you to track those in
        professional way. find our apps on...
      </p>
      <div className="mt-10 w-full flex flex-row justify-center lg:justify-start items-center gap-4">
        <Image
          alt="appleStore"
          src={apple}
          className="w-[128px] h-[42px] object-contain cursor-pointer mr-5 brightness-75 hover:brightness-105 duration-300"
        />
        <Image
          alt="googlePlaystore"
          src={google}
          className="w-[128px] h-[42px] object-contain cursor-pointer brightness-75 hover:brightness-105 duration-300"
        />
      </div>
    </div>
  </div>
);

export default Billing;
