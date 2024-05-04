import React, { useState } from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";

const tabsData = [
  {
    id: 1,
    name: "Home Visits",
    content:
      "Experience the convenience of receiving medical care in the comfort of your own home. Our healthcare professionals will come to you, ensuring you get the attention and support you need without the need to travel.",
  },
  {
    id: 2,
    name: "Nursing Care at Home",
    content:
      "Rest assured knowing that you or your loved one will receive attentive and compassionate nursing care right at home. Our skilled nurses provide round-the-clock support, ensuring your health and well-being are prioritized at all times.",
  },
  {
    id: 3,
    name: "Nutrition",
    content:
      "Proper nutrition is vital for overall health and well-being, especially during recovery. Our nutrition experts will assess your dietary needs and provide personalized guidance and support to ensure you receive the nutrients necessary for optimal healing and recovery.",
  },
  {
    id: 4,
    name: "Long-term Care",
    content:
      "Comprehensive long-term care options for prolonged healthcare needs.",
  },
  {
    id: 5,
    name: "Managing medication",
    content:
      "Involves a thorough process of ensuring individuals use their medications safely, effectively, and appropriately. This encompasses a range of tasks, such as assessing medication needs, monitoring, and educating. The objective of medication management is to maximize the benefits of medication while minimizing potential risks. Through approaches like medication reconciliation and technological solutions, medication management strives to prevent medication errors, improve patient safety, and encourage medication adherence for improved health results",
  }
];

const TabServices = () => {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);

  return (
    <>
     <div className=" gap-5 mt-14 hidden md:flex">
      <div className="flex flex-col items-start text-primary font-sans font-semibold gap-8 p-2 ">
        {tabsData.map((tab) => (
          <button
            key={tab.id}
            className={`md:text-2xl lg:text-3xl py-3 px-5 rounded-2xl ${
              activeTab === tab.id
                ? "bg-blue-100"
                : "hover:bg-white hover:transition-all hover:ease-out hover:duration-300"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="px-9 py-3 flex-1">
        <p className="text-slate-700 md:text-2xl lg:text-3xl custom_text">
          {tabsData.find((tab) => tab.id === activeTab)?.content}
        </p>
        <div className="inline-flex mt-6">
          <NavLink>
            <Button
              name="Learn More"
              style="bg-third text-primary border-primary hover:bg-primary hover:text-white hover:border text-xl"
            />
          </NavLink>
         
        </div>
        <div>
            <img src="" alt="" />
          </div>
      </div>
    </div>
    <div className="block md:hidden mt-5 p-4">
        <div className="flex flex-col gap-4">
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              className={`text-xl text-primary font-sans font-semibold  py-2 px-3 rounded-lg ${
                activeTab === tab.id
                  ? "bg-blue-100"
                  : " hover:bg-white transition-all ease-out duration-300"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.name}
            </button>
          ))}
          <div className="mt-2">
            <p className="text-lg text-gray-800 custom_text">
              {tabsData.find((tab) => tab.id === activeTab)?.content}
            </p>
            <div className="inline-flex mt-6">
          <NavLink>
            <Button
              name="Learn More"
              style="bg-third text-primary border-primary hover:bg-primary hover:text-white hover:border text-base"
            />
          </NavLink>
         
        </div>
          </div>
        </div>
      </div>
    </>
   
  );
};

export default TabServices;
