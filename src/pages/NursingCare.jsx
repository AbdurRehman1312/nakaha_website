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
const NursingCare = () => {
  return (
    <>
    <Breadcrumb styles="bg_service2" title="Nursing Care" />
    <section className="container m-auto px-2 my-10">
        <ServiceSection image={images.service2} paraH="Nursing Care at Home for Your Peace of Mind" para2="Rest assured knowing that you or your loved one will receive attentive and compassionate nursing care right at home. Our skilled nurses provide round-the-clock support, ensuring your health and well-being are prioritized at all times." />
        <ServiceForm serviceName="Nursing Care"  />
        <div className='pt-12 pb-16'>
            <div className='text-center font-serif'>
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-secondary">Frequently Asked Questions</h1>
            </div>
            <Accordion type="single" collapsible className='mt-16'>
                <AccordionItem value="item-1">
                    <AccordionTrigger>What type of nursing care do you provide at home?</AccordionTrigger>
                    <AccordionContent>
                    Our skilled nurses provide round-the-clock nursing care, including medication administration, wound care, monitoring vital signs, and offering emotional support to ensure your well-being.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger> How do I access round-the-clock nursing care at home?</AccordionTrigger>
                    <AccordionContent>
                    Accessing our round-the-clock nursing care is easy. Simply contact us to discuss your needs, and we will arrange for skilled nurses to provide continuous support in the comfort of your home.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger> What qualifications do your nurses have?</AccordionTrigger>
                    <AccordionContent>
                    Our nurses are highly qualified, licensed, and experienced in providing compassionate care. They undergo rigorous training to ensure they meet the highest standards of nursing practice.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    </section>
</>
  )
}

export default NursingCare