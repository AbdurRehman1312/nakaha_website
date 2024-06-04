import React from 'react';
import { useTranslation } from 'react-i18next';
import * as images from '../assets';

const Partners = () => {
    const { t } = useTranslation("global");
    return (
        <section className='my-20'>
            <div className='text-center font-serif'>
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-secondary">{t("partners.our")}</h1>
            </div>
            <div className='flex flex-col md:flex-row justify-evenly mt-10'>
                <div className='w-full md:w-[30%] p-3 bg-slate-200 flex justify-center items-center rounded-[25px] md:mx-2'>
                    <img src={images.partner1} alt="" className='max-w-full h-auto' />
                </div>
                <div className='w-full md:w-[30%] p-3 bg-slate-200 flex justify-center items-center rounded-[25px] md:mx-2 mt-5 md:mt-0'>
                    <img src={images.partner2} alt="" className='max-w-full h-auto' />
                </div>
                <div className='w-full md:w-[30%] p-3 bg-slate-200 flex justify-center items-center rounded-[25px] md:mx-2 mt-5 md:mt-0'>
                    <img src={images.partner3} alt="" className='max-w-full h-auto' />
                </div>
            </div>
        </section>
    );
};

export default Partners;
