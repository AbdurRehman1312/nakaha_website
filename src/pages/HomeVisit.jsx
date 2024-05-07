import React from 'react'
import ServiceSection from '../components/ServiceSection'
import * as images from "../assets";
import ServiceForm from '../components/ServiceForm';
import Breadcrumb from "../components/Breadcrumb";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useTranslation } from 'react-i18next';

const HomeVisit = () => {
    const {t} = useTranslation("global")
    return (
        <>
            <Breadcrumb styles="bg_service1" title={t("tabServices.tab1Name")} />
            <section className="container m-auto px-2 my-10">
                <ServiceSection image={images.service1} paraH={t("services.parah")} para2={t("services.card1desc")} />
                <ServiceForm serviceName={t("tabServices.tab1Name")} />
                <div className='pt-12 pb-16'>
                    <div className='text-center font-serif'>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl text-secondary">Frequently Asked Questions</h1>
                    </div>
                    <Accordion type="single" collapsible className='mt-16'>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>What type of medical care can I receive at home?</AccordionTrigger>
                            <AccordionContent>
                            Our healthcare professionals provide a range of medical services, including routine check-ups, medication management, wound care, and more, all in the comfort of your home.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger> How do I schedule a home healthcare visit?</AccordionTrigger>
                            <AccordionContent>
                            Scheduling a visit is easy! Simply call our office or use our online booking system to choose a convenient date and time for our healthcare professionals to visit you at home.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger> Are your healthcare professionals qualified and licensed?</AccordionTrigger>
                            <AccordionContent>
                            Yes, all our healthcare professionals are highly qualified, licensed, and experienced in providing home healthcare services. You can trust in their expertise and dedication to your well-being.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>
        </>
    )
}

export default HomeVisit