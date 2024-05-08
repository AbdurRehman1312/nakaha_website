import React from "react";
import * as images from "../assets";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation("global");

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };
  return (
    <section>
      <h1 className="text-secondary mt-8 lg:mt-20 lg:text-8xl text-5xl text-center font-serif">
        {t("hero.trust")}
      </h1>
      <div className="grid lg:grid-cols-4 gap-8 my-12 lg:my-20">
        <div className=" lg:col-span-2  relative w-full h-[220px]">
          <img
            src={images.hero1}
            alt=""
            className="w-full h-[100%] object-cover rounded-2xl"
          />
        </div>
        <div className="bg-[#e46069] text-gray-700 rounded-2xl p-3 flex flex-col justify-center items-center">
          <h3 className="font-bold md:text-7xl text-3xl">5</h3>
          <p className="text-xl">{t("hero.business")}</p>
        </div>
        <div className="lg:row-start-2 bg-[#aecddd] text-gray-700 rounded-2xl p-3 flex flex-col justify-center items-center">
          <h3 className="font-bold md:text-7xl text-3xl">3</h3>
          <p className="text-xl">{t("hero.location")}</p>
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
      <div className="flex md:flex-row flex-col items-center gap-2 my-32">
        <div className="md:w-[60%] ">
          <img src={images.herostyle} alt="" className="w-[100%]" />
        </div>
        <div className=" w-[100%] flex flex-col gap-8">
          <p className="text-slate-700 text-lg md:text-3xl lg:text-4xl font-sans">
            {t("hero.come")}
          </p>
          <Link to="about" onClick={scrollToTop}>
            {" "}
            <Button
              name={t("hero.learn")}
              style="bg-primary text-white hover:bg-third text-center hover:text-primary hover:border border-primary text-lg w-[50%] lg:w-[20%]"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
