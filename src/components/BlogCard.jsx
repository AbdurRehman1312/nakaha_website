import React from "react";
import * as images from "../assets";
import Button from "./Button";
import { Link } from "react-router-dom";
const BlogCard = ({img, name, desc, date, link}) => {
  return (
    <div className="h-[370px] w-[100%] rounded-lg border border-gray-300 relative">
      <div className="flex flex-col gap-3 ">
        <div className="h-[150px]">
          <img
            src={images[img]}
            alt=""
            className="w-full h-[100%] object-cover rounded-t-lg"
          />
        </div>
        <div className="p-2">
          <h2 className="text-primary text-xl mb-2 font-semibold">
            {name}
          </h2>
          <p className="text-slate-900 text-base text-justify custom_text">
            {desc}
          </p>
        </div>
        <div className="flex items-center gap-1 px-2">
          <img src={images.clock} alt="" className="w-6 h-6" />
          <p className="text-secondary font-semibold font-mono">
            {date}
          </p>
        </div>
        <Link to={link} className=" mt-1 px-2 absolute bottom-2 w-full">
          <Button
            name="Read More"
            style="bg-primary text-white hover:bg-third text-center hover:text-primary hover:border border-primary text-lg"
          />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
