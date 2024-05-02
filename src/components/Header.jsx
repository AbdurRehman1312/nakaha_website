import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import * as images from "../assets";
import Button from "./Button";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  let links = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Blog", link: "/blog" },
  ];

  const closeMobileMenu = () => {
    setToggle(false);
  };

  return (
    <>
      <div className="bg-primary py-4 text-xl">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <h1 className="text-white">Want to make an appointment?</h1>
          <Link>
            <Button
              name="Book Now"
              style="hover:bg-white hover:text-primary hover:border-primary text-white"
            />
          </Link>
        </div>
      </div>
      <header className="shadow-lg px-2 py-3 sticky top-[0px] bg-white z-50">
        <div className="container m-auto lg:px-28">
          <div className="flex justify-between items-center">
            <div className="w-1/3 sm:w-auto">
              <NavLink to={"/"} onClick={closeMobileMenu}>
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
                    <NavLink to={link.link}>
                      <Button
                        name={link.name}
                        style="bg-white text-primary border-primary hover:bg-primary hover:text-white hover:border text-lg"
                      />
                    </NavLink>
                  </li>
                ))}
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
                        <NavLink to={link.link} onClick={closeMobileMenu}>
                          <Button
                            name={link.name}
                            style="bg-primary text-white border-primary hover:bg-primary hover:text-white hover:border text-lg"
                          />
                        </NavLink>
                      </li>
                    ))}
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
