import React from 'react'
import ServiceSection from '../components/ServiceSection'
import Breadcrumb from "../components/Breadcrumb";
import * as images from "../assets";
import { useTranslation } from 'react-i18next';

const Malnutrition = () => {
    const {t} = useTranslation("global");
    return (
      <>
      <Breadcrumb styles="bg_blog" title={t("blogCard2.name")} />
      <section className="container m-auto px-2 my-10">
           <ServiceSection image={images.hero1} paraH={t("blogCard2.name")} para2={t("blogCard2.para1")}/>
           <div className=' lg:mx-36 mt-12'>
               <h1 className="text-xl md:text-2xl lg:text-3xl text-primary">{t("blogCard2.head2")}</h1>
               <p className='mt-6 text-2xl text-justify'>{t("blogCard2.para2")}</p>
               <p className='mt-6 text-2xl text-justify'>{t("blogCard2.para3")}</p>
               <ul className='list-disc mt-10 ml-5'>
                  <li className='text-2xl'>{t("blogCard2.point1")}</li>
                  <li className='text-2xl  my-4'>{t("blogCard2.point2")}</li>
                  <li className='text-2xl  my-4'>{t("blogCard2.point3")}</li>
                  <li className='text-2xl  my-4'>{t("blogCard2.point4")}</li>
                  <li className='text-2xl my-4'>{t("blogCard2.point5")}</li>
                  <li className='text-2xl'>{t("blogCard2.point6")}</li>
              </ul>

           </div>
           <div className=' lg:mx-36 mt-12'>
               <h1 className="text-xl md:text-2xl lg:text-3xl text-primary">{t("blogCard2.head4")}</h1>
               <p className='mt-6 text-2xl text-justify'>{t("blogCard2.para4")}</p>
               <ul className='list-disc mt-10 ml-5'>
                  <li className='text-2xl  my-4'>{t("blogCard2.point7")}</li>
                  <li className='text-2xl  my-4'>{t("blogCard2.point8")}</li>
                  <li className='text-2xl  my-4'>{t("blogCard2.point9")}</li>
              </ul>

           </div>
           <div className=' lg:mx-36 mt-12'>
               <h1 className="text-xl md:text-2xl lg:text-3xl text-primary">{t("blogCard2.head5")}</h1>
               <ul className='list-disc mt-10 ml-5'>
                  <li className='text-2xl'>{t("blogCard2.point10")}</li>
                  <li className='text-2xl  my-4'>{t("blogCard2.point11")}</li>
                  <li className='text-2xl  my-4'>{t("blogCard2.point12")}</li>
                  <li className='text-2xl  my-4'>{t("blogCard2.point13")}</li>
                  <li className='text-2xl my-4'>{t("blogCard2.point14")}</li>
              </ul>

           </div>
          
    </section>
      </>
    )
}

export default Malnutrition