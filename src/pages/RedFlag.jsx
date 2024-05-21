import React from 'react'
import ServiceSection from '../components/ServiceSection'
import Breadcrumb from "../components/Breadcrumb";
import * as images from "../assets";
import { useTranslation } from 'react-i18next';

const RedFlag = () => {
    const { t } = useTranslation("global");
    return (
        <>
            <Breadcrumb styles="bg_service1" title={t("blogCard7.name")} />
            <section className="container m-auto px-2 my-10">
                <ServiceSection image={images.service1} paraH={t("blogCard7.head1")} para2={t("blogCard7.para1")} />
                <div className=' lg:mx-36 mt-12'>
                    <h1 className="text-xl md:text-2xl lg:text-3xl text-primary">{t("blogCard7.head2")}</h1>
                    <p className='mt-6 text-2xl text-justify'>{t("blogCard7.para2")}</p>
                    <ul className='list-disc mt-10 ml-5'>
                        <li className='text-2xl'>{t("blogCard7.point1")}</li>
                        <li className='text-2xl  my-4'>{t("blogCard7.point2")}</li>
                        <li className='text-2xl  my-4'>{t("blogCard7.point3")}</li>
                    </ul>

                </div>
                <div className=' lg:mx-36 mt-12'>
                    <h1 className="text-xl md:text-2xl lg:text-3xl text-primary">{t("blogCard7.head3")}</h1>
                    <p className='mt-6 text-2xl text-justify'>{t("blogCard7.para3")}</p>
                </div>
                <div className=' lg:mx-36 mt-12'>
                    <h1 className="text-xl md:text-2xl lg:text-3xl text-primary">{t("blogCard7.head4")}</h1>
                    <p className='mt-6 text-2xl text-justify'>{t("blogCard7.para4")}</p>
                </div>
                <div className=' lg:mx-36 mt-12'>
                    <h1 className="text-xl md:text-2xl lg:text-3xl text-primary">{t("blogCard7.head5")}</h1>
                    <p className='mt-6 text-2xl text-justify'>{t("blogCard7.para5")}</p>
                    <ul className='list-disc mt-10 ml-5'>
                        <li className='text-2xl  my-4'>{t("blogCard7.point4")}</li>
                        <li className='text-2xl my-4'>{t("blogCard7.point5")}</li>
                        <li className='text-2xl'>{t("blogCard7.point6")}</li>
                        <li className='text-2xl  my-4'>{t("blogCard7.point7")}</li>
                        <li className='text-2xl  my-4'>{t("blogCard7.point8")}</li>
                        <li className='text-2xl  my-4'>{t("blogCard7.point9")}</li>
                        <li className='text-2xl  my-4'>{t("blogCard7.point10")}</li>
                    </ul>

                </div>
                <div className=' lg:mx-36 mt-12'>
                    <h1 className="text-xl md:text-2xl lg:text-3xl text-primary">{t("blogCard7.head6")}</h1>
                    <p className='mt-6 text-2xl text-justify'>{t("blogCard7.para6")}</p>
                </div>
                <div className=' lg:mx-36 mt-12'>
                    <h1 className="text-xl md:text-2xl lg:text-3xl text-primary">{t("blogCard7.head7")}</h1>
                    <p className='mt-6 text-2xl text-justify'>{t("blogCard7.para7")}</p>
                </div>
                <div className=' lg:mx-36 mt-12'>
                    <h1 className="text-xl md:text-2xl lg:text-3xl text-primary">{t("blogCard7.head8")}</h1>
                    <p className='mt-6 text-2xl text-justify'>{t("blogCard7.para8")}</p>
                    <p className='mt-6 text-2xl text-justify'>{t("blogCard7.para9")}</p>
                </div>
                <div className=' lg:mx-36 mt-12'>
                    <h1 className="text-xl md:text-2xl lg:text-3xl text-primary">{t("blogCard7.head10")}</h1>
                    <p className='mt-6 text-2xl text-justify'>{t("blogCard7.para10")}</p>
                </div>
                <div className=' lg:mx-36 mt-12'>
                    <h1 className="text-xl md:text-2xl lg:text-3xl text-primary">{t("blogCard7.head11")}</h1>
                    <p className='mt-6 text-2xl text-justify'>{t("blogCard7.para11")}</p>
                </div>
                <div className=' lg:mx-36 mt-12'>
                    <h1 className="text-xl md:text-2xl lg:text-3xl text-primary">{t("blogCard7.head12")}</h1>
                    <p className='mt-6 text-2xl text-justify'>{t("blogCard7.para12")}</p>
                    <p className='mt-6 text-2xl text-justify'>{t("blogCard7.para13")}</p>
                </div>
                <div className=' lg:mx-36 mt-12'>
                    <h1 className="text-xl md:text-2xl lg:text-3xl text-primary">{t("blogCard7.head14")}</h1>
                    <p className='mt-6 text-2xl text-justify'>{t("blogCard7.para14")}</p>
                </div>
            </section>
        </>
    )
}

export default RedFlag