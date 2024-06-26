import React from "react";
import TabServices from "./TabServices";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const WhatWeOffer = () => {
  const { t } = useTranslation("global");
  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };
  return (
    <section className="my-20">
      <div className="text-center font-serif">
        <h1 className="text-xl md:text-2xl lg:text-3xl text-secondary">
          {t("offer.our")}
        </h1>
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-secondary">
          {t("offer.what")}
        </h1>
      </div>
      <TabServices />
      <div className="flex justify-center mt-10">
        <NavLink to={"/services"} onClick={scrollToTop}>
          <Button
            name={t("offer.see")}
            style="hover:bg-third hover:text-primary hover:border-primary bg-primary text-white border text-xl"
          />
        </NavLink>
      </div>
    </section>
  );
};

export default WhatWeOffer;
