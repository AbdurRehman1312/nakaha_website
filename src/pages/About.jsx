import React from "react";
import * as images from "../assets";
import Breadcrumb from "../components/Breadcrumb";
import { useTranslation } from "react-i18next";
const About = () => {
  const { t } = useTranslation("global");
  return (
    <>
      <Breadcrumb styles="bg_about" title={t("aboutUs.about")} />
      <section className="container m-auto px-2 my-10">
        <div className="flex gap-7 mt-16 flex-col md:flex-row">
          <div className="md:w-[50%] shrink-0">
            <img src={images.aboutus} alt="" className="rounded-3xl" />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-3xl font-poppins text-primary">
              {t("aboutUs.welc")}
            </p>
            <p className="text-lg text-justify text-gray-800">
              {t("aboutUs.welcome")} <br /> <br /> {t("aboutUs.focus")} <br />{" "}
              <br /> {t("aboutUs.add")} <br /> <br />
              {t("aboutUs.at")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
