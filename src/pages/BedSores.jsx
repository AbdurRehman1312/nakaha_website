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

const BedSores = () => {
    const {t} = useTranslation("global");
  return (
    <>
    <Breadcrumb styles="bg_service5" title={t("services.card5name")} />
    <section className="container m-auto px-2 my-10">
        <ServiceSection image={images.service5} paraH={t("services.parah5")} para2={t("services.card5desc")} />
        <ServiceForm serviceName={t("services.card5name")}  />
        <div className='pt-12 pb-16'>
            <div className='text-center font-serif'>
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-secondary">Frequently Asked Questions</h1>
            </div>
            <Accordion type="single" collapsible className='mt-16'>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Why is preventing and managing bed sores important?</AccordionTrigger>
                    <AccordionContent>
                    Preventing and managing bed sores is crucial for overall well-being as they can lead to complications and discomfort. Proper wound care helps prevent infections and promotes healing.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>What services do your wound care specialists provide?</AccordionTrigger>
                    <AccordionContent>
                    Our wound care specialists offer personalized services focused on prevention, treatment, and healing of bed sores. They assess the wound, provide appropriate treatment, and offer guidance on preventing future occurrences.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>How does personalized wound care benefit patients?</AccordionTrigger>
                    <AccordionContent>
                    Personalized wound care ensures patients receive tailored treatment that addresses their specific needs, leading to faster healing, reduced risk of complications, and improved comfort and quality of life.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    </section>
</>
  )
}

export default BedSores