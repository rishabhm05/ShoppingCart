import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../App.css";
const Banner = () => {
  return (
    <div>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        interval={2000}
      >
        <div className="flex relative  bg">
          {/* <img
            loading="lazy"
            src="https://preview.colorlib.com/theme/malefashion/img/hero/hero-1.jpg.webp"
            alt="Audiable"
          /> */}
          <div className="mx-w-md">
            <h6 className="text-black font-bold uppercase text-sm md:text-3xl absolute  top-[20%] md:left-[5%] left-[3%]">
              Winter Collection
            </h6>
            <p className="absolute top-[33%] md:left-[5%] text-left  text-[5px] md:text-[10px] lg:text-xl left-[3%]">
              A specialist label creating luxury essentials. Ethically crafted
              <br></br>
              with an unwavering commitment to exceptional quality.
            </p>
            <button className="absolute top-[48%] md:left-[5%] bg-black px-1 py-1 text-xs  text-white font-bold md:py-4 md:px-4 rounded left-[3%]">
              SHOP NOW
            </button>
          </div>
        </div>

        <div className="bg-3">
          <img
            loading="lazy"
            src="https://preview.colorlib.com/theme/malefashion/img/hero/hero-2.jpg.webp"
            alt="Audiable"
          />
          <div className="mx-w-md">
            <h6 className="text-black font-bold uppercase text-sm md:text-3xl absolute  top-[20%] md:left-[5%] left-[3%]">
              Winter Collection
            </h6>
            <p className="absolute top-[33%] md:left-[5%] text-left  text-[5px] md:text-[10px] lg:text-xl left-[3%]">
              A specialist label creating luxury essentials. Ethically crafted
              <br></br>
              with an unwavering commitment to exceptional quality.
            </p>
            <button className="absolute top-[48%] md:left-[5%] bg-black px-1 py-1 text-xs  text-white font-bold md:py-4 md:px-4 rounded left-[3%]">
              SHOP NOW
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
