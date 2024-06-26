import React from "react";
import * as images from "../assets";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation("global");
  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };
  const socialLinks = [
    // {
    //   link: "https://twitter.com",
    //   icon: images.twitter, // Assuming images.twitter is the correct path for the Twitter logo.
    // },
    {
      link: "https://web.facebook.com/NakahaClinic",
      icon: images.fb, // Adjust accordingly if the property names in the images object are different.
    },
    {
      link: "https://www.linkedin.com/company/nakaha/",
      icon: images.linkedin,
    },
    {
      link: "https://www.youtube.com/@Nakaha-fl8um",
      icon: images.yt,
    },
    // {
    //   link: "https://tiktok.com",
    //   icon: images.tiktok,
    // },
    // {
    //   link: "https://glassdoor.com",
    //   icon: images.glassdoor,
    // },
  ];
  return (
    <footer className="bg-[#5d81ad] rounded-tl-[50px] lg:rounded-tl-[80px]">
      <div className=" container flex flex-wrap gap-10 m-auto px-2 py-10">
        <div className="lg:w-[25%] md:w-[50%] w-full flex flex-col gap-3 flex-1">
          <img src={images.logo} alt="" className="w-[50%]" />
          <h2 className="text-slate-100 text-[14px]">+201141153153 <br />+201141171517</h2>
          <Link to="/book-now" className="text-slate-100 text-[14px]" onClick={scrollToTop}>
            {t("footer.col1.book")}
          </Link>
          <Link
            to="https://calendly.com/abdurrehmansaifi784"
            className="text-slate-100 text-[14px]"
          >
            {t("header.contactus")}
          </Link>
        </div>
        <div className="lg:w-[25%] md:w-[50%] w-full flex flex-col gap-3">
          <h2 className="text-2xl text-slate-100 font-bold">
            {t("footer.col2.services")}
          </h2>
          <Link
            to="/home-visit"
            className="text-slate-100 text-[14px]"
            onClick={scrollToTop}
          >
            {t("footer.col2.service1")}
          </Link>
          <Link
            to="/nursing-care"
            className="text-slate-100 text-[14px]"
            onClick={scrollToTop}
          >
            {t("footer.col2.service2")}
          </Link>
          <Link
            to="/nutrition"
            className="text-slate-100 text-[14px]"
            onClick={scrollToTop}
          >
            {t("footer.col2.service10")}
          </Link>
          <Link
            to="/manage-medication"
            className="text-slate-100 text-[14px]"
            onClick={scrollToTop}
          >
            {t("footer.col2.service3")}
          </Link>
          <Link
            to="/bed-sores"
            className="text-slate-100 text-[14px]"
            onClick={scrollToTop}
          >
            {t("footer.col2.service4")}
          </Link>
          <Link
            to="/physiotherapy"
            className="text-slate-100 text-[14px]"
            onClick={scrollToTop}
          >
            {t("footer.col2.service5")}
          </Link>
          <Link
            to="/telemedicine"
            className="text-slate-100 text-[14px]"
            onClick={scrollToTop}
          >
            {t("footer.col2.service6")}
          </Link>
          <Link
            to="/vascular"
            className="text-slate-100 text-[14px]"
            onClick={scrollToTop}
          >
            {t("footer.col2.service7")}
          </Link>
          <Link
            to="/urinary"
            className="text-slate-100 text-[14px]"
            onClick={scrollToTop}
          >
            {t("footer.col2.service8")}
          </Link>
          <Link
            to="/radiology"
            className="text-slate-100 text-[14px]"
            onClick={scrollToTop}
          >
            {t("footer.col2.service9")}
          </Link>
        </div>
        <div className="lg:w-[25%] md:w-[50%] w-full flex flex-col gap-3">
          <h2 className="text-2xl text-slate-100 font-bold">
            {t("footer.col3.package")}
          </h2>
          <Link to="/oncology-care" className="text-slate-100 text-[14px]"onClick={scrollToTop}>
            {t("footer.col3.package1")}
          </Link>
          <Link to="/tracheostomy-care" className="text-slate-100 text-[14px]"onClick={scrollToTop}>
            {t("footer.col3.package2")}
          </Link>
          <Link to="/post-hospitalization-care" className="text-slate-100 text-[14px]"onClick={scrollToTop}>
            {t("footer.col3.package3")}
          </Link>
          <Link to="/stroke-care" className="text-slate-100 text-[14px]"onClick={scrollToTop}>
            {t("footer.col3.package5")}
          </Link>
          <Link to="/swallowing-speech-rehabilitation" className="text-slate-100 text-[14px]"onClick={scrollToTop}>
            {t("footer.col3.package6")}
          </Link>
        </div>
        <div className="lg:w-[25%] md:w-[50%] w-full flex flex-col gap-3">
          <h2 className="text-2xl text-slate-100 font-bold">
            {t("footer.col4.blogs")}
          </h2>
          <Link to="/hospital-acquired-muscle-weakness" className="text-slate-100 text-[14px]" onClick={scrollToTop}>
            {t("footer.col4.blog1")}
          </Link>
          <Link to="/malnutrition" className="text-slate-100 text-[14px]" onClick={scrollToTop}>
            {t("blogCard2.name")}
          </Link>
          <Link to="/medication-management" className="text-slate-100 text-[14px]" onClick={scrollToTop}>
            {t("footer.col4.blog3")}
          </Link>
          <Link to="/stroke-care-blog" className="text-slate-100 text-[14px]" onClick={scrollToTop}>
            {t("footer.col4.blog4")}
          </Link>
          <Link to="/oncology-blog" className="text-slate-100 text-[14px]" onClick={scrollToTop}>
            {t("footer.col4.blog5")}
          </Link>
          <Link to="/nursing-at-home" className="text-slate-100 text-[14px]" onClick={scrollToTop}>
            {t("footer.col4.blog6")}
          </Link>
          <Link to="/redflag" className="text-slate-100 text-[14px]" onClick={scrollToTop}>
            {t("footer.col4.blog7")}
          </Link>
        </div>
      </div>
      <div className="border-t container m-auto border-slate-100 pt-10 pb-2">
        <div className="lg:w-[60%] m-auto flex justify-center gap-3 md:gap-10 flex-wrap">
          {socialLinks.map((link) => (
            <a
              key={link.link}
              href={link.link}
              className="w-[40px] h-[40px] rounded-full border border-white flex justify-center items-center hover:opacity-70"
              target="_blank"
            >
              <img src={link.icon} alt={link.icon} className="w-[50%]" />
            </a>
          ))}
        </div>
        <h2 className="text-slate-100 text-base text-center mt-8">
          {t("footer.copyright")}
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
