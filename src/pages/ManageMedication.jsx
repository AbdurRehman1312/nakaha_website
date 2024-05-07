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

const ManageMedication = () => {
    const {t} = useTranslation("global")
  return (
    <>
    <Breadcrumb styles="bg_service4" title={t("services.card4name")} />
    <section className="container m-auto px-2 my-10">
        <ServiceSection image={images.service4} paraH={t("services.parah4")} para2={t("services.card4desc")} />
        <ServiceForm serviceName="Managing Medication"  />
        <div className='pt-12 pb-16'>
            <div className='text-center font-serif'>
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-secondary">Frequently Asked Questions</h1>
            </div>
            <Accordion type="single" collapsible className='mt-16'>
                <AccordionItem value="item-1">
                    <AccordionTrigger>What does medication management entail?</AccordionTrigger>
                    <AccordionContent>
                    Medication management involves ensuring individuals use their medications safely, effectively, and appropriately. It includes tasks such as assessing medication needs, monitoring usage, and providing education on medication use.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>What is the objective of medication management?</AccordionTrigger>
                    <AccordionContent>
                    The objective of medication management is to maximize the benefits of medication while minimizing potential risks. This is achieved through careful assessment, monitoring, and education to ensure safe and effective medication use.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>How does medication management improve patient safety?</AccordionTrigger>
                    <AccordionContent>
                    Medication management improves patient safety by implementing approaches like medication reconciliation to prevent errors, utilizing technological solutions for accurate dosage tracking, and providing education to encourage medication adherence.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    </section>
</>
  )
}

export default ManageMedication