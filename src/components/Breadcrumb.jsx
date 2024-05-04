import React from "react";

const Breadcrumb = ({title, styles}) => {
  return (
    <div className={`${styles} flex justify-start items-center h-[50vh]`}>
      <h1 className="text-white lg:text-8xl text-4xl font-poppins container m-auto px-2">
        {title}
      </h1>
    </div>
  );
};

export default Breadcrumb;
