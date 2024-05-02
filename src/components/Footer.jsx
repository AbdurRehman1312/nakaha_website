import React from "react";
import * as images from "../assets";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-[#5d81ad] rounded-tl-[50px] lg:rounded-tl-[80px]">
      <div className=" container flex flex-wrap gap-10 m-auto p-2 py-10">
        <div className="lg:w-[25%] md:w-[50%] w-full flex flex-col gap-3 flex-1">
          <img src={images.logo} alt="" className="w-[50%]" />
          <h2 className="text-slate-100 text-[14px]">898-0908-983</h2>
          <Link to="/" className="text-slate-100 text-[14px]">
            Book An Appointment
          </Link>
          <Link to="/" className="text-slate-100 text-[14px]">
            Contact Us
          </Link>
        </div>
        <div className="lg:w-[25%] md:w-[50%] w-full flex flex-col gap-3">
          <h2 className="text-2xl text-slate-100 font-bold">Primary Services</h2>
          <Link to="/" className="text-slate-100 text-[14px]">
            Home Visits
          </Link>
          <Link to="/" className="text-slate-100 text-[14px]">
            Nursing Care at Home
          </Link>
          <Link to="/" className="text-slate-100 text-[14px]">
            Nutrition
          </Link>
          <Link to="/" className="text-slate-100 text-[14px]">
            Managing medication
          </Link>
          <Link to="/" className="text-slate-100 text-[14px]">
            Bed Sores
          </Link>
          <Link to="/" className="text-slate-100 text-[14px]">
            Physiotherapy
          </Link>
          <Link to="/" className="text-slate-100 text-[14px]">
            Telemedicine
          </Link>
          <Link to="/" className="text-slate-100 text-[14px]">
            Vascular Access (CVL/EJC/PC)
          </Link>
          <Link to="/" className="text-slate-100 text-[14px]">
            Urinary Catheter Insertion/Removal
          </Link>
          <Link to="/" className="text-slate-100 text-[14px]">
            Radiology
          </Link>
        </div>
        <div className="lg:w-[25%] md:w-[50%] w-full flex flex-col gap-3">
          <h2 className="text-2xl text-slate-100 font-bold">
            Holistic Care Packages
          </h2>
          <Link to="/" className="text-slate-100 text-[14px]">
            Oncology Care
          </Link>
          <Link to="/" className="text-slate-100 text-[14px]">
            Tracheostomy Care
          </Link>
          <Link to="/" className="text-slate-100 text-[14px]">
            Post-Hospitalization Care
          </Link>
          <Link to="/" className="text-slate-100 text-[14px]">
            Managing medication
          </Link>
          <Link to="/" className="text-slate-100 text-[14px]">
            Stroke Care
          </Link>
          <Link to="/" className="text-slate-100 text-[14px]">
            Swallowing and Speech Rehabilitation
          </Link>
        </div>
        <div className="lg:w-[25%] md:w-[50%] w-full flex flex-col gap-3">
          <h2 className="text-2xl text-slate-100 font-bold">Blogs</h2>
          <Link to="/" className="text-slate-100 text-[14px]">
            Hospital-acquired muscle weakness
          </Link>
          <Link to="/" className="text-slate-100 text-[14px]">
            Healthy Nutrition post discharge
          </Link>
          <Link to="/" className="text-slate-100 text-[14px]">
            Concept of medication management
          </Link>
          <Link to="/" className="text-slate-100 text-[14px]">
            Stroke care
          </Link>
          <Link to="/" className="text-slate-100 text-[14px]">
            Oncology care
          </Link>
          <Link to="/" className="text-slate-100 text-[14px]">
            Nursing at home
          </Link>
          <Link to="/" className="text-slate-100 text-[14px]">
            Red Flags
          </Link>
        </div>
      </div>
      <div className="border-t border-white mx-4">

      </div>
    </footer>
  );
};

export default Footer;
