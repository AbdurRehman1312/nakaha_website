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
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-secondary">{t("eachService.faq")}</h1>
            </div>
            <Accordion type="single" collapsible className='mt-16'>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>{t("eachService.managingMedication.faq1")}</AccordionTrigger>
                            <AccordionContent>
                            {t("eachService.managingMedication.ans1")}
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>{t("eachService.managingMedication.faq2")}</AccordionTrigger>
                            <AccordionContent>
                            {t("eachService.managingMedication.ans2")}
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>{t("eachService.managingMedication.faq3")}</AccordionTrigger>
                            <AccordionContent>
                            {t("eachService.managingMedication.ans3")}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
        </div>
    </section>
</>
  )
}

export default ManageMedication