import Image from "next/image";
import { card } from "../public/assets";
import Button from "./Button";

const CardDeal = () => (
  <div className="flex flex-col lgl:flex-row py-10 xl:py-20 gap-8 lgl:gap-1 px-6">
    <div className="flex-1 flex justify-center items-start flex-col">
      <h2 className="max-w-[500px] lgl:w-full font-bodyFont font-semibold text-xl md:text-4xl md:leading-[50px] lgl:leading-[50px] xl:leading-[55px] lgl:text-3xl xl:text-4xl text-white ">
        Find the best topic related your Online transections.
      </h2>
      <p className="font-poppins font-normal text-dimWhite hover:text-white duration-300 text-[16px] md:text-[18px] w-full mdl:max-w-[520px] lgl:max-w-[470px] mt-5 mb-6">
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
