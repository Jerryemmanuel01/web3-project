import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tradingview from ".././assets/tv.png";
import benzinga from ".././assets/bz.png";
import coinmarketcap from ".././assets/CoinMarketCap.png";
import businessinsider from ".././assets/bi.png";
import markerwatch from ".././assets/mw.png";

const SeenIn = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          speed: 3000,
        },
      },
    ],
  };
  return (
    <div className=" px-5 md:px-8 lg:px-14 xl:px-24 ">
      <h2 className="font-dela text-xl md:text-2xl">SEEN IN</h2>

      <div className="slider-container mt-3">
        <Slider {...settings} className="h-20 overflow-hidden">
          <div className="slide-ele border-2 border-b-4 border-r-4 w-60 h-20 rounded-2xl ">
            <img loading="lazy" src={tradingview} alt="" className="w-[85%]" />
          </div>
          <div className="slide-ele border-2 border-b-4 border-r-4 w-60 h-20 rounded-2xl ">
            <img loading="lazy" src={benzinga} alt="" className="w-[85%]" />
          </div>
          <div className="slide-ele border-2 border-b-4 border-r-4 w-60 h-20 rounded-2xl ">
            <img loading="lazy" src={coinmarketcap} alt="" className="w-[85%]" />
          </div>
          <div className="slide-ele border-2 border-b-4 border-r-4 w-60 h-20 rounded-2xl ">
            <img loading="lazy" src={businessinsider} alt="" className="w-[85%]" />
          </div>
          <div className="slide-ele border-2 border-b-4 border-r-4 w-60 h-20 rounded-2xl ">
            <img loading="lazy" src={markerwatch} alt="" className="w-[85%]" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SeenIn;
