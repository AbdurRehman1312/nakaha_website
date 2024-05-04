import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import ServiceCard from "../components/ServiceCard";
const Services = () => {
  const tabsData = [
    {
      image: "service1",
      name: "Home Visits",
      content:
        "Experience the convenience of receiving medical care in the comfort of your own home. Our healthcare professionals will come to you, ensuring you get the attention and support you need without the need to travel.",
    },
    {
      image: "service2",
      name: "Nursing Care at Home",
      content:
        "Rest assured knowing that you or your loved one will receive attentive and compassionate nursing care right at home. Our skilled nurses provide round-the-clock support, ensuring your health and well-being are prioritized at all times.",
    },
    {
      image: "service3",
      name: "Nutrition",
      content:
        "Proper nutrition is vital for overall health and well-being, especially during recovery. Our nutrition experts will assess your dietary needs and provide personalized guidance and support to ensure you receive the nutrients necessary for optimal healing and recovery.",
    },
    {
      image: "service4",
      name: "Long-term Care",
      content:
        "Comprehensive long-term care options for prolonged healthcare needs.",
    },
    {
      image: "service5",
      name: "Managing medication",
      content:
        "Involves a thorough process of ensuring individuals use their medications safely, effectively, and appropriately. This encompasses a range of tasks, such as assessing medication needs, monitoring, and educating. The objective of medication management is to maximize the benefits of medication while minimizing potential risks. Through approaches like medication reconciliation and technological solutions, medication management strives to prevent medication errors, improve patient safety, and encourage medication adherence for improved health results",
    },
    {
      image: "service6",
      name: "Bed Sores",
      content:
        "Preventing and managing bed sores is essential for overall well-being. Our wound care specialists provide personalized wound care services, focusing on prevention, treatment, and healing to ensure your comfort and health.",
    },
    {
      image: "service7",
      name: "Physiotherapy",
      content:
        "Regain mobility, strength, and function with our expert physiotherapy sessions. Our skilled therapists will create personalized treatment plans tailored to your specific needs, helping you achieve your rehabilitation goals and improve your overall quality of life.",
    },
    {
      image: "service8",
      name: "Telemedicine",
      content:
        "Embrace the future of healthcare with our telemedicine services. Access medical consultations and support remotely, allowing you to connect with healthcare professionals from wherever you are, at a time that suits you best.",
    },
    {
      image: "service9",
      name: "Vascular Access (CVL/EJC/PC)",
      content:
        "Expert insertion and management of vascular access devices, ensuring safe and effective delivery of medical treatments and therapies.",
    },
    {
      image: "service10",
      name: "Urinary Catheter Insertion/Removal",
      content:
        "Skilled assistance with urinary catheter insertion or removal, prioritizing your comfort and safety throughout the process.",
    },
    {
      image: "service11",
      name: "Radiology",
      content:
        "State-of-the-art imaging services for comprehensive diagnostic evaluations and treatment planning.",
    },
  ];
  return (
    <>
      <Breadcrumb styles="bg_services" title="Our Services" />
      <section className="container px-2 m-auto my-14">
        <div className="flex justify-center flex-wrap gap-10">
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
