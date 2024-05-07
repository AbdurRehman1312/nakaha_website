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

const Radiology = () => {
    const {t} = useTranslation("global")
  return (
    <>
    <Breadcrumb styles="bg_service10" title={t("services.card10name")} />
    <section className="container m-auto px-2 my-10">
        <ServiceSection image={images.service10} paraH={t("services.parah10")} para2={t("services.card10desc")} />
        <ServiceForm serviceName={t("services.card10name")}  />
        <div className='pt-12 pb-16'>
            <div className='text-center font-serif'>
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-secondary">Frequently Asked Questions</h1>
            </div>
            <Accordion type="single" collapsible className='mt-16'>
                <AccordionItem value="item-1">
                    <AccordionTrigger>What are imaging services in healthcare?</AccordionTrigger>
                    <AccordionContent>
                    Imaging services in healthcare refer to the use of various technologies to create visual representations of internal body structures, organs, and tissues. These images are used for diagnostic purposes and treatment planning.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>What types of imaging technologies are considered state-of-the-art?</AccordionTrigger>
                    <AccordionContent>
                    State-of-the-art imaging technologies include magnetic resonance imaging (MRI), computed tomography (CT), ultrasound, positron emission tomography (PET), and digital X-rays. These technologies offer detailed and accurate images for diagnostic evaluations.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>What are the benefits of state-of-the-art imaging services?</AccordionTrigger>
                    <AccordionContent>
                    The benefits include enhanced diagnostic accuracy, early detection of medical conditions, precise treatment planning, minimally invasive procedures, reduced patient discomfort, and improved patient outcomes.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    </section>
</>
  )
}

export default Radiology