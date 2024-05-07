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

const Vascular = () => {
    const {t} = useTranslation("global")
  return (
    <>
    <Breadcrumb styles="bg_service8" title={t("services.card8name")} />
    <section className="container m-auto px-2 my-10">
        <ServiceSection image={images.service8} paraH={t("services.parah8")} para2={t("services.card8desc")} />
        <ServiceForm serviceName={t("services.card8name")}  />
        <div className='pt-12 pb-16'>
            <div className='text-center font-serif'>
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-secondary">Frequently Asked Questions</h1>
            </div>
            <Accordion type="single" collapsible className='mt-16'>
                <AccordionItem value="item-1">
                    <AccordionTrigger>What is vascular access and why is it important?</AccordionTrigger>
                    <AccordionContent>
                    Vascular access refers to the insertion of devices into blood vessels to facilitate the delivery of medical treatments and therapies, such as medications, fluids, and blood products. It is crucial for patients who require long-term or frequent medical interventions.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>What does expert insertion and management of vascular access devices involve?</AccordionTrigger>
                    <AccordionContent>
                    Expert insertion and management of vascular access devices involve skilled procedures for inserting devices like central venous catheters, peripherally inserted central catheters (PICC lines), and arteriovenous fistulas. It also includes ongoing monitoring, care, and maintenance of these devices to ensure their safety and effectiveness.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Who provides expert vascular access care?</AccordionTrigger>
                    <AccordionContent>
                    Expert vascular access care is typically provided by healthcare professionals trained in vascular access, such as vascular access nurses, interventional radiologists, and vascular surgeons. These specialists have the knowledge and skills to perform procedures and manage vascular access devices effectively.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    </section>
</>
  )
}

export default Vascular