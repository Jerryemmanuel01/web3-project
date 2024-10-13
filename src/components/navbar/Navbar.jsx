import { Link } from "react-scroll";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsGlobe } from "react-icons/bs";
import { IoClose, IoMenu } from "react-icons/io5";
import { useState } from "react";
import dabLogo from "../../assets/dab-token.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <section
      className={` w-full top-0 left-0 flex flex-col z-50 bg-secondary px-4 py-3 pb-10 mt-3 border-2 border-b-4 rounded-3xl fixed transition-all duration-700 ease-in-out overflow-hidden ${
        menu ? "max-h-screen" : "max-h-[70px] lg:max-h-[80px]"
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white flex justify-center items-center">
            <img
              src={dabLogo}
              alt="image"
              className="w-[24px] lg:w-[28px] hover:-rotate-45 duration-200"
            />
          </div>
          <h3 className="font-boldg text-xl lg:text-2xl font-dela ">
            DAB DADDY
          </h3>
        </div>

        <div className="flex items-center gap-5 md:gap-14">
          <div className="items-center gap-3 md:gap-8 hidden md:flex">
            <FaTelegramPlane className="text-xl lg:text-2xl on_hover" />
            <FaXTwitter className="text-xl lg:text-2xl on_hover" />
            <BsGlobe className="text-xl lg:text-2xl on_hover" />
          </div>
          <button
            className="outline-none duration-300 text-2xl on_hover  rounded-full p-1 bg-custom-gradient text-[#ffffff]"
            onClick={() => setMenu((prev) => !prev)}
          >
            {menu ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>

      <div
        className={`w-full flex flex-col justify-center items-center bg-white rounded-2xl mt-3 pt-10 md:pb-10 transition-all duration-700 ease-in-out relative ${
          menu ? " opacity-100" : " opacity-0"
        } overflow-hidden`}
      >
        <div className=" flex flex-col items-center gap-6 md:gap-14  font-dela md:text-xl">
          <p className="text-accent font-semibold on_hover">ABOUT</p>
          <p className="text-accent font-semibold on_hover">FEATURES</p>
          <p className="text-accent font-semibold on_hover">ROADMAP</p>
          <p className="text-accent font-semibold on_hover">HOW TO BUY</p>
        </div>
        <div className="flex md:hidden items-center justify-center gap-12 mt-10">
          <FaTelegramPlane className="text-xl lg:text-2xl on_hover" />
          <FaXTwitter className="text-xl lg:text-2xl on_hover" />
          <BsGlobe className="text-xl lg:text-2xl on_hover" />
        </div>
        <div
          style={{ backgroundImage: `url(${dabLogo})` }}
          className="w-28 h-24 md:w-48 md:h-48 lg:w-60 lg:h-60 md:absolute md:-rotate-12 -bottom-3 -right-0 bg-cover bg-no-repeat mt-9"
        />
      </div>
    </section>
  );
};

export default Navbar;
