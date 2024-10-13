import { Link } from "react-scroll";
import { PiTelegramLogoLight } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { BsGlobe } from "react-icons/bs";

const Footer = () => {
  const links = [
    { name: "Home", link: "/" },
    { name: "About", link: "about" },
    { name: "Foundation", link: "foundation" },
    { name: "How to buy", link: "how-to-buy" },
  ];

  return (
    <div className=" bg-darkBg text-[white]" id="how-to-buy">
      <div className="-mt-3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#998ab5"
            fill-opacity="1"
            d="M0,128L20,154.7C40,181,80,235,120,234.7C160,235,200,181,240,154.7C280,128,320,128,360,128C400,128,440,128,480,122.7C520,117,560,107,600,133.3C640,160,680,224,720,240C760,256,800,224,840,202.7C880,181,920,171,960,144C1000,117,1040,75,1080,90.7C1120,107,1160,181,1200,176C1240,171,1280,85,1320,74.7C1360,64,1400,128,1420,160L1440,192L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"
          ></path>
        </svg>
      </div>
      <section className="">
        <h2 className="font-dela text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center">
          DAB DADDY
        </h2>
        <div className="flex justify-center w-full items-center mt-12">
          <ul className="grid grid-cols-2 md:grid-cols-5 gap-10 font-semibold text-xl">
            {links.map((link, i) => (
              <li key={i}>
                <Link
                  to={link.link}
                  smooth={true}
                  activeClass="active"
                  spy={true}
                  duration={1000}
                  className="hover:text-secondary cursor-pointer"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20 w-full flex justify-center ">
          <button className="bg-custom-gradient px-10 md:px-16 py-4 md:py-5 text-xl rounded-3xl font-medium animate-bounce">
            Buy now
          </button>
        </div>

        <div className="flex justify-center gap-6 mt-10">
          <PiTelegramLogoLight className="stroke-2 text-2xl" />
          <FaXTwitter className="text-2xl" />
          <BsGlobe className="text-2xl" />
        </div>

        <div className="flex justify-center items-center gap-1 mt-14 pb-6 text-sm">
          &copy; <span className="font-dela text-[10px]"> DAB DADDY, 2024</span>
        </div>
      </section>
    </div>
  );
};

export default Footer;
