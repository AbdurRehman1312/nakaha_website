import React from "react";
import * as images from "../assets";

const Hero = () => {
  return (
    <section>
        <h1 className="text-secondary my-8 text-7xl text-center font-serif">Trust in our care</h1>
      <div className="grid lg:grid-cols-4 gap-8 my-12">
        <div className=" lg:col-span-2  relative w-full h-[220px]">
          <img
            src={images.hero1}
            alt=""
            className="w-full h-[100%] object-cover rounded-2xl"
          />
        </div>
        <div className="bg-[#e46069] text-gray-700 rounded-2xl p-3 ">
          <h3 className="font-bold text-5xl">49</h3>
          <p className="text-4xl">years in business</p>
        </div>
        <div className="lg:row-start-2 bg-[#aecddd] text-gray-700 rounded-2xl p-3 ">
          <h3 className="font-bold text-5xl">49</h3>
          <p className="text-4xl">years in business</p>
        </div>
        <div className="dark lg:col-span-2  relative w-full h-[220px]">
          <img
            src={images.hero3}
            alt=""
            className="w-full h-[100%] object-cover rounded-2xl object-center"
          />
        </div>
        <div className="lg:row-start-1 lg:row-span-2 lg:col-start-4">
          <img
            src={images.hero2}
            alt=""
            className="w-full h-[100%] object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
