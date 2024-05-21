import React from 'react'
import ServiceSection from '../components/ServiceSection'
import Breadcrumb from "../components/Breadcrumb";
import * as images from "../assets";
import { useTranslation } from 'react-i18next';

const MedicationManagement = () => {
    const {t} = useTranslation("global");
  return (
    <>
    <Breadcrumb styles="bg_about" title={t("blogCard4.name")} />
    <section className="container m-auto px-2 my-10">
         <ServiceSection image={images.aboutus} paraH={t("blogCard4.head1")} para2={t("blogCard4.para1")}/>
         <div className=' lg:mx-36 mt-12'>
             <h1 className="text-3xl text-primary">{t("blogCard4.head2")}</h1>
             <p className='mt-6 text-2xl md:text-justify'>{t("blogCard4.para2")}</p>
             <ul className='list-disc mt-10 ml-5'>
                <li className='text-2xl'>{t("blogCard4.point1")}</li>
                <li className='text-2xl  my-4'>{t("blogCard4.point2")}</li>
                <li className='text-2xl  my-4'>{t("blogCard4.point3")}</li>
                <li className='text-2xl  my-4'>{t("blogCard4.point4")}</li>
                <li className='text-2xl'>{t("blogCard4.point5")}</li>
            </ul>
            <p className='mt-6 text-2xl md:text-justify'>{t("blogCard4.para3")}</p>
         </div>
         <div className='text-center font-serif mt-16'>
             <h1 className="text-xl md:text-2xl lg:text-3xl text-secondary">{t("blogCard4.head4")}</h1>
             <h1 className="text-4xl md:text-5xl lg:text-6xl text-secondary">{t("blogCard4.head5")}</h1>
         </div>
         <div className=' lg:mx-36 mt-12'>
             <h1 className="text-3xl text-primary">{t("blogCard4.head6")}</h1>
             <p className='mt-6 text-2xl md:text-justify'>{t("blogCard4.para6")}</p>
         </div>
         <div className=' lg:mx-36 mt-12'>
             <h1 className="text-3xl text-primary">{t("blogCard4.head7")}</h1>
             <p className='mt-7 text-2xl md:text-justify'>{t("blogCard4.para7")}</p>
         </div>
         <div className=' lg:mx-36 mt-12'>
             <h1 className="text-3xl text-primary">{t("blogCard4.head8")}</h1>
             <p className='mt-8 text-2xl md:text-justify'>{t("blogCard4.para8")}</p>
         </div>
  </section>
    </>
  )
}

export default MedicationManagement