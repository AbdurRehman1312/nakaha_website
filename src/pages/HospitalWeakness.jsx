import React from 'react'
import ServiceSection from '../components/ServiceSection'
import Breadcrumb from "../components/Breadcrumb";
import * as images from "../assets";
import { useTranslation } from 'react-i18next';


const HospitalWeakness = () => {
    const {t} = useTranslation("global");
  return (
    <>
    <Breadcrumb styles="bg_service5" title={t("blogCard1.name")} />
    <section className="container m-auto px-2 my-10">
        <ServiceSection image={images.service5} paraH={t("blogCard1.name")} para2={t("blogCard1.para1")} para3={t("blogCard1.para2")}/>
        <div className=' lg:mx-36 mt-12'>
            <h1 className="text-xl md:text-2xl lg:text-3xl text-primary">{t("blogCard1.head3")}</h1>
            <p className='mt-6 text-2xl text-justify'>{t("blogCard1.para3")}</p>
            <p className='mt-6 text-2xl text-justify'>{t("blogCard1.para4")}</p>
        </div>
        <div className=' lg:mx-36 mt-12'>
            <h1 className="text-xl md:text-2xl lg:text-3xl text-primary">{t("blogCard1.head5")}</h1>
            <p className='mt-6 text-2xl text-justify'>{t("blogCard1.para5")}</p>
        </div>
        <div className=' lg:mx-36 mt-12'>
            <p className='mt-6 text-2xl'>{t("blogCard1.para6")}</p>
            <ul className='list-disc mt-10 ml-5'>
                <li className='text-2xl'>{t("blogCard1.point1")}</li>
                <li className='text-2xl  my-4'>{t("blogCard1.point2")}</li>
                <li className='text-2xl'>{t("blogCard1.point3")}</li>
            </ul>
        </div>
    </section>
    </>
  )
}

export default HospitalWeakness