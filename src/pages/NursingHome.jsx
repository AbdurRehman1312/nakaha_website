import React from 'react'
import ServiceSection from '../components/ServiceSection'
import Breadcrumb from "../components/Breadcrumb";
import * as images from "../assets";
import { useTranslation } from 'react-i18next';

const NursingHome = () => {
    const {t} = useTranslation("global");
  return (
   <>
   <Breadcrumb styles="bg_about" title={t("blogCard6.name")} />
   <section className="container m-auto px-2 my-10">
        <ServiceSection image={images.aboutus} paraH={t("blogCard6.name")} para2={t("blogCard6.para1")}/>
        <div className='text-center font-serif mt-16'>
            <h1 className="text-xl md:text-2xl lg:text-3xl text-secondary">{t("blogCard6.head1")}</h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-secondary">{t("blogCard6.head2")}</h1>
            <p className='mt-6 text-2xl '>{t("blogCard6.para2")}</p>
        </div>
        <div className=' lg:mx-36 mt-12'>
            <h1 className="text-3xl text-primary">{t("blogCard6.head3")}</h1>
            <p className='mt-6 text-2xl md:text-justify'>{t("blogCard6.para3")}</p>
        </div>
        <div className=' lg:mx-36 mt-12'>
            <h1 className="text-3xl text-primary">{t("blogCard6.head4")}</h1>
            <p className='mt-6 text-2xl md:text-justify'>{t("blogCard6.para4")}</p>
        </div>
        <div className=' lg:mx-36 mt-12'>
            <h1 className="text-3xl text-primary">{t("blogCard6.head5")}</h1>
            <p className='mt-6 text-2xl md:text-justify'>{t("blogCard6.para5")}</p>
        </div>
        <div className=' lg:mx-36 mt-12'>
            <h1 className="text-3xl text-primary">{t("blogCard6.head6")}</h1>
            <p className='mt-6 text-2xl md:text-justify'>{t("blogCard6.para6")}</p>
        </div>
        <div className=' lg:mx-36 mt-12'>
            <h1 className="text-3xl text-primary">{t("blogCard6.head7")}</h1>
            <p className='mt-6 text-2xl md:text-justify'>{t("blogCard6.para7")}</p>
        </div>
        <div className=' lg:mx-36 mt-12'>
            <h1 className="text-3xl text-primary">{t("blogCard6.head8")}</h1>
            <p className='mt-6 text-2xl md:text-justify'>{t("blogCard6.para8")}</p>
        </div>
        <div className=' lg:mx-36 mt-12'>
            <h1 className="text-3xl text-primary">{t("blogCard6.head9")}</h1>
            <p className='mt-6 text-2xl md:text-justify'>{t("blogCard6.para9")}</p>
        </div>
        <div className=' lg:mx-36 mt-12'>
            <h1 className="text-3xl text-primary">{t("blogCard6.head10")}</h1>
            <p className='mt-6 text-2xl md:text-justify'>{t("blogCard6.para10")}</p>
        </div>
        <div className='text-center font-serif mt-16'>
            <h1 className="text-xl md:text-2xl lg:text-3xl text-secondary">{t("blogCard6.head11")}</h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-secondary">{t("blogCard6.head12")}</h1>
        </div>
        <div className=' lg:mx-36 mt-12'>
            <h1 className="text-3xl text-primary">{t("blogCard6.head13")}</h1>
            <p className='mt-6 text-2xl md:text-justify'>{t("blogCard6.para13")}</p>
        </div>
        <div className=' lg:mx-36 mt-12'>
            <h1 className="text-3xl text-primary">{t("blogCard6.head14")}</h1>
            <p className='mt-6 text-2xl md:text-justify'>{t("blogCard6.para14")}</p>
        </div>
 </section>
   </>
  )
}

export default NursingHome