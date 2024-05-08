import React from 'react'
import Button from "../components/Button";
import Breadcrumb from "../components/Breadcrumb";
import { useTranslation } from "react-i18next";

const BooknowForm = () => {
    const {t} = useTranslation("global")
  return (
    <>
    <Breadcrumb styles="bg_services" title={t("header.booknow")} />
    <section className="py-16">
      <div className="text-center font-serif">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-secondary">
          {t("booknow.heading")}
        </h1>
      </div>
      <div className="w-[90%] md:w-[70%] lg:w-[50%] m-auto mt-14">
        <form>
          <div className="flex flex-col md:flex-row  w-full md:gap-10">
            <div className="w-full">
              <label
                htmlFor="name"
                className="block text-2xl font-medium text-gray-700 ml-2 mt-8"
              >
                {t("booknow.fname")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-2 w-full px-5 py-5 border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:ring-primary focus:border-primary  "
                placeholder={t("booknow.fname")}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="name"
                className="block text-2xl font-medium text-gray-700 ml-2 mt-8"
              >
                {t("booknow.lname")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-2 w-full px-5 py-5 border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:ring-primary focus:border-primary  "
                placeholder={t("booknow.lname")}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="mobile"
              className="block text-2xl font-medium text-gray-700 ml-2 mt-8"
            >
              {t("booknow.email")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              pattern="\d{10}"
              className="mt-2 block w-full px-5 py-5 border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:ring-primary focus:border-primary  "
              placeholder={t("booknow.email")}
            />
          </div>

          <div>
            <label
              htmlFor="mobile"
              className="block text-2xl font-medium text-gray-700 ml-2 mt-8"
            >
              {t("booknow.no")}
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              required
              pattern="\d{10}"
              className="mt-2 block w-full px-5 py-5 border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:ring-primary focus:border-primary  "
              placeholder={t("booknow.no")}
            />
          </div>

          <div>
            <label
              htmlFor="location"
              className="block text-2xl font-medium text-gray-700 ml-2 mt-8"
            >
              {t("booknow.location")}
            </label>
            <select
              id="location"
              name="location"
              required
              className="mt-2  w-full px-5 py-5 text-lg shadow-sm border-gray-400  focus:outline-none focus:ring-primary focus:border-primary rounded-3xl appearance-none"
            >
              <option>{t("booknow.slocation")}</option>
              <option value="location1">{t("booknow.location1")}</option>
              <option value="location2">{t("booknow.location2")}</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="mobile"
              className="block text-2xl font-medium text-gray-700 ml-2 mt-8"
            >
              {t("booknow.date")}
            </label>
            <input
              type="date"
              id="date"
              name="date"
              required
              className="mt-2 block w-full px-5 py-5 border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:ring-primary focus:border-primary  "
            />
          </div>
          <div>
            <label
              htmlFor="service"
              className="block text-2xl font-medium text-gray-700 ml-2 mt-8"
            >
              {t("booknow.sreq")}
            </label>
            <input
              type="text"
              id="service"
              name="service"
              className="mt-2 block w-full px-5 py-5 border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:ring-primary focus:border-primary  "
              placeholder={t("booknow.splace")}
            />
          </div>
          <div className="mt-10 flex justify-center md:w-[30%] mx-auto">
            <Button
              name={t("contactUs.submit")}
              style="bg-primary text-white hover:bg-third text-center hover:text-primary hover:border border-primary text-2xl"
            />
          </div>
        </form>
      </div>
    </section>
  </>
  )
}

export default BooknowForm