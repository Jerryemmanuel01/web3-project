import React from "react";
import dab1 from "../../assets/dab-token.png";
import dab2 from "../../assets/dab-blue.png";

const Foundation = () => {
  return (
    <div className="bg-varient text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,224L40,240C80,256,160,288,240,261.3C320,235,400,149,480,144C560,139,640,213,720,240C800,267,880,245,960,197.3C1040,149,1120,75,1200,74.7C1280,75,1360,149,1400,186.7L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>

      <section className=" px-5 md:px-8 lg:px-14 xl:px-24 ">
        <div className="w-full flex flex-col items-center text-seceondary ">
          <h4 className="font-semibold text-lg">We got really a</h4>
          <h2 className="font-dela text-xl md:text-2xl lg:text-3xl">
            STRONG FOUNDATION
          </h2>
        </div>

        <div className="w-full flex  justify-center py-10">
          <div className=" lg:max-w-none w-full mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 ">
            <div className="flex flex-col gap-3">
              <div className="h-72 flex items-center justify-center bg-white rounded-t-full">
                <img src={dab1} alt="" className="w-[200px]" />
              </div>

              <div className="">
                <h1 className="font-dela text-lg md:text-xl lg:text-2xl">
                  Strategic Partnerships
                </h1>
                <p className="font-medium text-sm md:text-base text-justify mt-1">
                  Dab Daddy has forged strategic partnerships with leading
                  players in the cryptocurrency industry, as well as with key
                  influencers and platforms in the meme community
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="w-[] h-72 flex items-center justify-center bg-white rounded-t-full">
                <img src={dab2} alt="" className="w-[340px]" />
              </div>

              <div className="">
                <h1 className="font-dela text-lg md:text-xl lg:text-2xl">
                  Community Support
                </h1>
                <p className="font-medium text-sm md:text-base text-justify mt-1">
                  Through active engagement, open communication, and
                  collaborative initiatives, Dab Daddy fosters a strong sense of
                  community spirit among its members.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="w-[] h-72 flex items-center justify-center bg-white rounded-t-full">
                <img src={dab1} alt="" className="w-[200px]" />
              </div>

              <div className="">
                <h1 className="font-dela text-lg md:text-xl lg:text-2xl">
                  Growing Ecosystem
                </h1>
                <p className="font-medium text-sm md:text-base text-justify mt-1">
                  With a growing network of users, developers, and investors,
                  Dab Daddy offers unparalleled opportunities for collaboration,
                  networking, and mutual support.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="w-[] h-72 flex items-center justify-center bg-white rounded-t-full">
                <img src={dab2} alt="" className="w-[340px]" />
              </div>

              <div className="">
                <h1 className="font-dela text-lg md:text-xl lg:text-2xl">
                  Dab Daddy is Giving Back
                </h1>
                <p className="font-medium text-sm md:text-base text-justify mt-1">
                  We're not just about laughs, parts of the foundation treasury
                  profits will go towards supporting animal charities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Foundation;
