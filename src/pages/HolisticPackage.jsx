import React from 'react'
import Breadcrumb from "../components/Breadcrumb";
import ServiceCard from "../components/ServiceCard";
import { useTranslation } from "react-i18next";

const HolisticPackage = () => {
    const { t } = useTranslation("global");
    const tabsData = [
      {
        image: "service1",
        name: t("holisticServices.card1name"),
        content:  t("holisticServices.card1desc"),
        link: "/oncology-care"
      },
      {
        image: "service2",
        name: t("holisticServices.card2name"),
        content:  t("holisticServices.card2desc"),
        link: "/tracheostomy-care"
      },
      {
        image: "service3",
        name: t("holisticServices.card3name"),
        content:  t("holisticServices.card3desc"),
        link:"/post-hospitalization-care"
      },
      {
        image: "service4",
        name: t("holisticServices.card4name"),
        content:  t("holisticServices.card4desc"),
        link:"/stroke-care"
      },
      {
        image: "service5",
        name: t("holisticServices.card5name"),
        content:  t("holisticServices.card5desc"),
        link:"/swallowing-speech-rehabilitation"
      }
    ];
    return (
      <>
        <Breadcrumb styles="bg_services" title={t("holisticServices.heading")} />
        <section className="container px-2 m-auto my-14">
          <div className="flex  justify-start flex-wrap gap-10">
            {tabsData.map((tab) => (
              <ServiceCard
                image={tab.image}
                name={tab.name}
                content={tab.content}
                link = {tab.link}
              />
            ))}
          </div>
        </section>
      </>
    );
}

export default HolisticPackage