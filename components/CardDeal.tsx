import Image from "next/image";
import { card } from "../public/assets";
import Button from "./Button";

const CardDeal = () => (
  <div className="flex h-screen md:flex-row flex-col sm:py-16 py-6 px-4 md:px-0">
    <div className="flex-1 flex justify-center items-start flex-col">
      <h2 className="font-bodyFont font-semibold xs:text-[48px] text-[44px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
        Find the best topic related <br className="sm:block hidden" /> your
        Online transections.
      </h2>
      <p className="font-poppins font-normal text-dimWhite hover:text-white duration-300 text-[18px] leading-[30.8px] max-w-[470px] mt-5 mb-6">
        Your online payment Credential can be much more vulnerable if you have
        no proper knowledge about how to use it safely. Our Cyber Security based
        articles can help you to sharpen your skills and increase your overall
        perticipation on it with full safety. Don't missed to read...
      </p>
      <Button />
    </div>

    <div className="flex-1 flex brightness-90 hover:brightness-125 duration-200 justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative">
      <Image src={card} alt="cardImage" />
    </div>
  </div>
);
export default CardDeal;
