import React from 'react'
import ServiceSection from '../components/ServiceSection'
import Breadcrumb from "../components/Breadcrumb";
import * as images from "../assets";
import { useTranslation } from 'react-i18next';

const Oncology = () => {
    const {t} = useTranslation("global");
  return (
    <>
    <Breadcrumb styles="bg_service3" title={t("blogCard5.name")} />
    <section className="container m-auto px-2 my-10">
        <ServiceSection image={images.service3} paraH={t("blogCard5.name")} para2={t("blogCard5.para1")} para3={t("blogCard5.para2")}/>
        <div className=' lg:mx-36 mt-12'>
            <h1 className="text-3xl text-primary">{t("blogCard5.head3")}</h1>
            <p className='mt-6 text-2xl md:text-justify'>{t("blogCard5.para3")}</p>
        </div>
        <div className=' lg:mx-36 mt-12'>
            <h1 className="text-3xl text-primary">{t("blogCard5.head4")}</h1>
            <p className='mt-6 text-2xl md:text-justify'>{t("blogCard5.para4")}</p>
        </div>
        <div className=' lg:mx-36 mt-12'>
            <h1 className="text-3xl text-primary">{t("blogCard5.head5")}</h1>
            <p className='mt-6 text-2xl md:text-justify'>{t("blogCard5.para5")}</p>
            <p className='mt-6 text-2xl md:text-justify'>{t("blogCard5.para6")}</p>
        </div>
    </section>
    </>
  )
}

export default Oncology