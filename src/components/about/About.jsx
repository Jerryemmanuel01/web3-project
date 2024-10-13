import React from "react";
import ticker from "../../assets/ticker.jfif";
import rocket from "../../assets/rocket-coin.png";

const About = () => {
  return (
    <div className="w-full relative">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#dedcff"
          fill-opacity="1"
          d="M0,64L24,58.7C48,53,96,43,144,69.3C192,96,240,160,288,181.3C336,203,384,181,432,197.3C480,213,528,267,576,266.7C624,267,672,213,720,165.3C768,117,816,75,864,58.7C912,43,960,53,1008,96C1056,139,1104,213,1152,224C1200,235,1248,181,1296,176C1344,171,1392,213,1416,234.7L1440,256L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
        ></path>
      </svg>
      <section className="w-full bg-secondary -mt-2 pb-12 px-10 md:px-8 lg:px-14 xl:px-24 ">
        <h3 className="font-dela text-xl md:text-2xl text-center pt-3">
          WHAT IS THIS ABOUT?
        </h3>

        <div className="md:flex w-full gap-4 bg-primary/5 items-center border-2 border-r-4 border-b-4 rounded-3xl pt-2 pb-8 mt-4 px-4 text-sm md:text-base hover:scale-[1.02] duration-300">
          <div className="text-justify w-full font-medium md:text-base text-sm ">
            <p className="mt-3">
              Dab Daddy is a meme token inspired by a popular cartoon piglet
              character from Hong Kong, created by cartoonist Alice Mak and
              writer Brian Tse.
            </p>
            <p className="mt-3">
              Dab Daddy is endearing because of his innocence and his humorous
              yet touching adventures, often revolving around his dreams and
              aspirations despite his many shortcomings.
            </p>
            <p className="mt-3">
              He embodies a sense of perseverance and contentment with life's
              small joys, making him a beloved figure who resonates with
              audiences for his relatable, heartfelt, and comedic traits.
            </p>
            <p className="mt-3">
              Disclaimer: This token and character are entirely original
              creations and are in no way affiliated with, endorsed by, or
              related to the existing Dab Daddy animated series.
            </p>
          </div>
          <div className=" md:flex w-full mt-10">
            <img src={ticker} alt="" className="w-full rounded-2xl" />
          </div>
        </div>
        <div className=" top-0 left-0 absolute w-full animate_ping">
          <img src={rocket} alt="" className="" />
        </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#dedcff"
          fill-opacity="1"
          d="M0,64L16,74.7C32,85,64,107,96,138.7C128,171,160,213,192,218.7C224,224,256,192,288,197.3C320,203,352,245,384,229.3C416,213,448,139,480,128C512,117,544,171,576,176C608,181,640,139,672,133.3C704,128,736,160,768,154.7C800,149,832,107,864,128C896,149,928,235,960,250.7C992,267,1024,213,1056,170.7C1088,128,1120,96,1152,74.7C1184,53,1216,43,1248,74.7C1280,107,1312,181,1344,181.3C1376,181,1408,107,1424,69.3L1440,32L1440,0L1424,0C1408,0,1376,0,1344,0C1312,0,1280,0,1248,0C1216,0,1184,0,1152,0C1120,0,1088,0,1056,0C1024,0,992,0,960,0C928,0,896,0,864,0C832,0,800,0,768,0C736,0,704,0,672,0C640,0,608,0,576,0C544,0,512,0,480,0C448,0,416,0,384,0C352,0,320,0,288,0C256,0,224,0,192,0C160,0,128,0,96,0C64,0,32,0,16,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

export default About;
