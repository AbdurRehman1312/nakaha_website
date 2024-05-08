import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import * as images from "../assets";
import Button from "./Button";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [t, i18n] = useTranslation("global");

  const handleLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
    setToggle(false);
  };
  const [toggle, setToggle] = useState(false);
  let links = [
    { name: t("header.home"), link: "/" },
    { name: t("header.aboutus"), link: "/about" },
    { name: t("header.services"), link: "/services" },
    { name: t("header.blog"), link: "/blogs" },
    { name: t("header.contactus"), link: "https://calendly.com/abdurrehmansaifi784" },
  ];

  return (
    <>
      <div className="bg-primary py-4 text-xl">
        <div className="container m-auto px-2 flex flex-col md:flex-row gap-4 items-center justify-evenly">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <h1 className="text-white">{t("header.appointment")}</h1>
            <Link to={"/book-now"}>
            <Button
                name={t("header.booknow")}
                style="hover:bg-third hover:text-primary hover:border-primary text-white"
              />
            </Link>
          </div>
          <div className="flex items-center justify-self-end gap-3">
            <img src={images.phone} alt="" className="w-8 h-8" />
            <p className="text-white">898-0908-983</p>
          </div>
        </div>
      </div>
      <header className="shadow px-2 py-3 sticky top-[0px] bg-third z-50">
        <div className="container m-auto">
          <div className="flex justify-between items-center">
            <div className="w-1/3 sm:w-auto">
              <NavLink to={"/"} onClick={scrollToTop}>
                <img
                  src={images.logo2}
                  alt=""
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
                />
              </NavLink>
            </div>
            <div className="hidden lg:block">
              <ul className="flex gap-7">
                {links.map((link) => (
                  <li key={link.name}>
                    <NavLink to={link.link} onClick={scrollToTop}>
                      <Button
                        name={link.name}
                        style="bg-third text-primary border-primary hover:bg-primary hover:text-white hover:border text-lg"
                      />
                    </NavLink>
                  </li>
                ))}
                <li>
                  <select
                    name=""
                    id=""
                    className="py-3 text-primary border border-primary px-4 focus:outline-none bg-transparent appearance-auto rounded-full"
                    onChange={(e) => handleLang(e.target.value)}
                  >
                    <option value="en" selected>
                      English
                    </option>
                    <option value="ar">{t("header.arabic")}</option>
                  </select>
                </li>
              </ul>
            </div>
            <div className="lg:hidden flex justify-end items-center">
              <img
                src={toggle ? images.close : images.menu}
                alt="menu"
                className="w-[28px] h-[28px] object-contain"
                onClick={() => setToggle((prev) => !prev)}
              />
            </div>

            {/* FOR MOBILE SCREEN MENU  */}

            {toggle && (
              <div className="lg:hidden absolute top-[14.5vh] md:top-[17vh] right-0 w-full">
                <div className="p-6 bg_sidebar shadow-2xl z-[100] mx-4 my-2 rounded-xl sidebar">
                  <ul className="list-none flex flex-col gap-3 items-center">
                    {links.map((link) => (
                      <li key={link.name}>
                        <NavLink to={link.link} onClick={scrollToTop}>
                          <Button
                            name={link.name}
                            style="bg-primary text-white border-primary hover:bg-primary hover:text-white hover:border text-lg"
                          />
                        </NavLink>
                      </li>
                    ))}
                    <li>
                      <select
                        name=""
                        id=""
                        className="py-3 text-gray-600 border border-gray-600 px-4 focus:outline-none bg-transparent appearance-auto rounded-full"
                        onChange={(e) => handleLang(e.target.value)}
                      >
                        <option value="en" selected>
                          English
                        </option>
                        <option value="ar">Arabic</option>
                      </select>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
