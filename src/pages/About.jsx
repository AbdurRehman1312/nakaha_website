import React from "react";
import * as images from "../assets";
import Breadcrumb from "../components/Breadcrumb";
const About = () => {
  return (
    <>
      <Breadcrumb styles="bg_about" title="About Us" />
      <section className="container m-auto px-2 my-10">
        <div className="flex gap-7 mt-16 flex-col md:flex-row">
          <div className="md:w-[50%] shrink-0">
            <img src={images.aboutus} alt="" className="rounded-3xl" />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-3xl font-poppins text-primary">
              Welcome to Nakaha, where your health is our priority.
            </p>
            <p className="text-lg text-justify text-gray-800">
              Welcome to Nakaha Clinic. Our clinic offers a diverse range of
              services tailored to meet your individual needs, ensuring
              comprehensive support throughout your healthcare journey. <br />{" "}
              <br /> Our focus on post-acute care emphasizes a seamless
              transition from hospital to home, ensuring optimal recovery and
              comfort for our patients. we offer a complete continuum of primary
              services like home visits, nursing care at home, nutrition
              consultation, physiotherapy, telemedicine. <br /> <br /> In
              addition to primary services, we also provide holistic care
              packages such as oncology care, tracheostomy care, and stroke
              rehabilitation. <br /> <br /> At Nakaha, we understand that each
              patient is unique, which is why we prioritize personalized care
              plans tailored to your specific needs and preferences. Whether
              you're managing a chronic illness, recovering from surgery, or
              seeking rehabilitation services, our team is here to support you
              every step of the way. Our goal is to provide comprehensive
              support under one roof, making healthcare more accessible and
              convenient for you.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
