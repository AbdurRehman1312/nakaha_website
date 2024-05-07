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

const Nutrition = () => {
    const {t} = useTranslation("global")
  return (
    <>
    <Breadcrumb styles="bg_service3" title={t("services.card3name")} />
    <section className="container m-auto px-2 my-10">
        <ServiceSection image={images.service3} paraH={t("services.parah3")} para2={t("services.card3desc")} />
        <ServiceForm serviceName={t("services.card3name")}  />
        <div className='pt-12 pb-16'>
            <div className='text-center font-serif'>
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-secondary">Frequently Asked Questions</h1>
            </div>
            <Accordion type="single" collapsible className='mt-16'>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Why is proper nutrition important during recovery?</AccordionTrigger>
                    <AccordionContent>
                    Proper nutrition plays a crucial role in recovery by providing essential nutrients that support healing, strengthen the immune system, and promote overall well-being.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>What can I expect from your nutrition experts?</AccordionTrigger>
                    <AccordionContent>
                    Our nutrition experts will assess your dietary needs, create a personalized nutrition plan, and provide guidance and support to ensure you receive the nutrients necessary for optimal healing and recovery.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>How do I access personalized nutrition guidance from your experts?</AccordionTrigger>
                    <AccordionContent>
                    Accessing personalized nutrition guidance is simple. Contact us to schedule a consultation with our nutrition experts, where they will assess your needs and create a tailored plan for you.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    </section>
</>
  )
}

export default Nutrition