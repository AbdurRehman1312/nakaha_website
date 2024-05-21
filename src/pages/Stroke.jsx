import React from 'react'
import ServiceSection from '../components/ServiceSection'
import Breadcrumb from "../components/Breadcrumb";
import * as images from "../assets";
import { useTranslation } from 'react-i18next';

const Stroke = () => {
    const {t} = useTranslation("global");
    return (
      <>
      <Breadcrumb styles="bg_services" title={t("blogCard3.name")} />
      <section className="container m-auto px-2 my-10">
           <ServiceSection image={images.hero3} paraH={t("blogCard3.name")} para2={t("blogCard3.para1")}/>
           <div className=' mx-36 mt-12'>
               <h1 className="text-xl md:text-2xl lg:text-3xl text-primary">{t("blogCard3.head2")}</h1>
               <p className='mt-6 text-2xl text-justify'>{t("blogCard3.para2")}</p>
               <ul className='list-disc mt-10 ml-5'>
                  <li className='text-2xl'>{t("blogCard3.point1")}</li>
                  <li className='text-2xl  my-4'>{t("blogCard3.point2")}</li>
                  <li className='text-2xl  my-4'>{t("blogCard3.point3")}</li>
                  <li className='text-2xl  my-4'>{t("blogCard3.point4")}</li>
                  <li className='text-2xl my-4'>{t("blogCard3.point5")}</li>
                  <li className='text-2xl my-4'>{t("blogCard3.point6")}</li>
                  <li className='text-2xl'>{t("blogCard3.point7")}</li>
              </ul>

           </div>
           <div className=' mx-36 mt-12'>
               <h1 className="text-xl md:text-2xl lg:text-3xl text-primary">{t("blogCard3.head3")}</h1>
               <p className='mt-6 text-2xl text-justify'>{t("blogCard3.para3")}</p>
               <ul className='list-disc mt-10 ml-5'>
                  <li className='text-2xl  my-4'>{t("blogCard3.point8")}</li>
                  <li className='text-2xl  my-4'>{t("blogCard3.point9")}</li>
                  <li className='text-2xl  my-4'>{t("blogCard3.point10")}</li>
                  <li className='text-2xl  my-4'>{t("blogCard3.point11")}</li>
                  <li className='text-2xl  my-4'>{t("blogCard3.point12")}</li>
              </ul>

           </div>
           <div className='text-center font-serif mt-16'>
             <h1 className="text-4xl md:text-5xl lg:text-6xl text-secondary">{t("blogCard4.head4")}</h1>
         </div>
           <div className=' mx-36 mt-12'>
               <h1 className="text-xl md:text-2xl lg:text-3xl text-primary">{t("blogCard3.head5")}</h1>
               <p className='mt-6 text-2xl text-justify'>{t("blogCard3.para5")}</p>
               <ul className='list-disc mt-10 ml-5'>
                  <li className='text-2xl'>{t("blogCard3.point13")}</li>
                  <li className='text-2xl  my-4'>{t("blogCard3.point14")}</li>
                  <li className='text-2xl  my-4'>{t("blogCard3.point15")}</li>
                  <li className='text-2xl  my-4'>{t("blogCard3.point16")}</li>
                  <li className='text-2xl my-4'>{t("blogCard3.point17")}</li>
              </ul>

           </div>
           <div className=' mx-36 mt-12'>
            <h1 className="text-xl md:text-2xl lg:text-3xl text-primary">{t("blogCard4.head6")}</h1>
            <p className='mt-6 text-2xl text-justify'>{t("blogCard4.para6")}</p>
        </div>
    </section>
      </>
    )
}

export default Stroke