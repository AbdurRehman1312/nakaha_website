import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const scrollToTop = () => {
  window.scrollTo({ top: 0 });
};

const TabServices = () => {
  const { t } = useTranslation("global");

  const tabsData = [
    {
      id: 1,
      name: t("tabServices.tab1Name"),
      content: t("tabServices.tab1desc"),
      link: "/home-visit",
    },
    {
      id: 2,
      name: t("tabServices.tab2Name"),
      content: t("tabServices.tab2desc"),
      link: "/nursing-care",
    },
    {
      id: 3,
      name: t("tabServices.tab3Name"),
      content: t("tabServices.tab3desc"),
      link: "/nutrition",
    },
    {
      id: 4,
      name: t("tabServices.tab4Name"),
      content: t("tabServices.tab4desc"),
      link: "/manage-medication",
    },
    {
      id: 5,
      name: t("tabServices.tab5Name"),
      content: t("tabServices.tab5desc"),
      link: "/bed-sores",
    },
  ];

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
            <Link
              to={tabsData.find((tab) => tab.id === activeTab)?.link}
              onClick={scrollToTop}
            >
              <Button
                name={t("tabServices.learn")}
                style="bg-third text-primary border-primary hover:bg-primary hover:text-white hover:border text-xl"
              />
            </Link>
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
              <Link
                to={tabsData.find((tab) => tab.id === activeTab)?.link}
                onClick={scrollToTop}
              >
                <Button
                  name={t("tabServices.learn")}
                  style="bg-third text-primary border-primary hover:bg-primary hover:text-white hover:border text-base"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabServices;
