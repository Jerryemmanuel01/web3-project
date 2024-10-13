import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import yooDabo from "../../assets/yooo-dab.png";

const Home = () => {
  return (
    <div className="w-full h-[80vh] lg:h-[70vh] flex flex-col justify-center relative" id="/">
      <div className="text-center w-full flex flex-col justify-center items-center md:mt-16 lg:mt-40">
        <h3 className="text-accent text-lg font-semibold">INTRODUCING</h3>
        <h1 className="text-primary font-dela text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-2">
          DAB DADDY
        </h1>
        <p className="text-varient font-semibold mt-5">
          The only meme token you will HODL
        </p>
        <p className="font-bold font- text-sm md:text-base lg:text-lg mt-3">CA: C4XE2X23NJXLJFRF234K42O75N5XSD</p>
      </div>

      <div className="mt-10 flex flex-col items-center gap-4">
        <button className="text-secondary font-bold rounded-3xl outline-dashed border-2 border-b-[3px] bg-custom-gradient py-2.5 px-5 md:py-3 md:px-7 md:text-lg duration-200 hover:scale-[1.1] z-10 animate-bounce">
          Buy Now
        </button>
        <button className="flex items-center gap-2 text-sm font-semibold font-inter">
          Learn More
          <FaArrowRight />
        </button>
      </div>
      <div
        style={{ backgroundImage: `url(${yooDabo})` }}
        className="w-40 h-44 md:w-60 md:h-60 lg:w-80 lg:h-80 absolute bottom-0 right-4 bg-cover bg-no-repeat mt-9 -z-50 animate-pulse"
      />
    </div>
  );
};

export default Home;
