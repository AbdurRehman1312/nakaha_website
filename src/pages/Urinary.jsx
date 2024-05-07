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

const Urinary = () => {
  return (
    <>
    <Breadcrumb styles="bg_service9" title="Urinary Catheter Insertion/Removal" />
    <section className="container m-auto px-2 my-10">
        <ServiceSection image={images.service9} paraH="Skilled Insertion and Removal Assistance" para2="Skilled assistance with urinary catheter insertion or removal, prioritizing your comfort and safety throughout the process." />
        <ServiceForm serviceName="Urinary Catheter Insertion/Removal"  />
        <div className='pt-12 pb-16'>
            <div className='text-center font-serif'>
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-secondary">Frequently Asked Questions</h1>
            </div>
            <Accordion type="single" collapsible className='mt-16'>
                <AccordionItem value="item-1">
                    <AccordionTrigger>What is urinary catheter insertion and removal?</AccordionTrigger>
                    <AccordionContent>
                    Urinary catheter insertion involves placing a flexible tube into the bladder through the urethra to drain urine, while removal involves taking out the catheter once it's no longer needed. These procedures are common in healthcare settings to manage urinary issues.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Why is skilled assistance important for urinary catheter insertion and removal?</AccordionTrigger>
                    <AccordionContent>
                    Skilled assistance is crucial for urinary catheter procedures to ensure they are done safely, hygienically, and with minimal discomfort for the patient. Proper technique reduces the risk of complications and promotes patient well-being.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Who provides skilled assistance with urinary catheter insertion and removal?</AccordionTrigger>
                    <AccordionContent>
                    Skilled assistance with urinary catheter procedures is typically provided by healthcare professionals trained in catheterization, such as nurses, nurse practitioners, or urologists. These professionals have the expertise to perform the procedures effectively and safely.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    </section>
</>
  )
}

export default Urinary