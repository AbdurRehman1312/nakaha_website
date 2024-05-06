import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import ServiceCard from "../components/ServiceCard";
import { useTranslation } from "react-i18next";
const Services = () => {
  const { t } = useTranslation("global");
  const tabsData = [
    {
      image: "service1",
      name: t("services.card1name"),
      content:  t("services.card1desc")
    },
    {
      image: "service2",
      name: t("services.card2name"),
      content:  t("services.card2desc")
    },
    {
      image: "service3",
      name: t("services.card3name"),
      content:  t("services.card3desc")
    },
    {
      image: "service4",
      name: t("services.card4name"),
      content:  t("services.card4desc")
    },
    {
      image: "service5",
      name: t("services.card5name"),
      content:  t("services.card5desc")
    },
    {
      image: "service6",
      name: t("services.card6name"),
      content:  t("services.card6desc")
    },
    {
      image: "service7",
      name: t("services.card7name"),
      content:  t("services.card7desc")
    },
    {
      image: "service8",
      name: t("services.card8name"),
      content:  t("services.card8desc")
    },
    {
      image: "service9",
      name: t("services.card9name"),
      content:  t("services.card9desc")
    },
    {
      image: "service10",
      name: t("services.card10name"),
      content:  t("services.card10desc")
    },
    {
      image: "service11",
      name: t("services.card11name"),
      content:  t("services.card11desc")
    },
  ];
  return (
    <>
      <Breadcrumb styles="bg_services" title={t("services.heading")} />
      <section className="container px-2 m-auto my-14">
        <div className="flex  justify-center flex-wrap gap-10">
          {tabsData.map((tab) => (
            <ServiceCard
              image={tab.image}
              name={tab.name}
              content={tab.content}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
