import React from 'react'
import * as images from "../assets";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';


const scrollToTop = () => {
  window.scrollTo({ top: 0 });
};

const ServiceCard = ({image, name, content, link}) => {
  const {t} = useTranslation("global")
  return (
    <div className="h-[380px] w-full md:w-[45%] lg:w-[23%] rounded-lg border border-gray-300 relative">
      <div className="flex flex-col gap-3 ">
        <div className="h-[150px]">
          <img
            src={images[image]}
            alt=""
            className="w-full h-[100%] object-cover rounded-t-lg"
          />
        </div>
        <div className="p-2">
          <h2 className="text-primary text-xl mb-2 font-semibold">
            {name}
          </h2>
          <p className="text-slate-900 text-base text-justify custom_text">
            {content}
          </p>
        </div>
        <Link to={link} className=" mt-1 px-2 absolute bottom-2 w-full" onClick={scrollToTop}>
          <Button
            name={t("blogHome.readmore")}
            style="bg-primary text-white hover:bg-third text-center hover:text-primary hover:border border-primary text-lg"
          />
        </Link>
      </div>
    </div>
  )
}

export default ServiceCard