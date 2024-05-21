import React from "react";

const ServiceSection = ({image, paraH, para2, para3}) => {
  return (
    <>
      
      <section className="container m-auto px-2 my-10">
        <div className="flex items-center gap-7 mt-16 flex-col md:flex-row">
          <div className="md:w-[50%] shrink-0">
            <img src={image} alt="" className="rounded-3xl" />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-4xl font-poppins text-primary">
              {paraH}
            </p>
            <p className="text-2xl text-justify text-gray-800">
              {para2} 
            </p>
            <p className="text-2xl text-justify text-gray-800">
              {para3} 
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSection;
