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

const Telemedicine = () => {
  return (
    <>
    <Breadcrumb styles="bg_about" title="Telemedicine" />
    <section className="container m-auto px-2 my-10">
        <ServiceSection image={images.aboutus} paraH="Embracing Telemedicine for Remote Consultations" para2="Embrace the future of healthcare with our telemedicine services. Access medical consultations and support remotely, allowing you to connect with healthcare professionals from wherever you are, at a time that suits you best." />
        <ServiceForm serviceName="Telemedicine"  />
        <div className='pt-12 pb-16'>
            <div className='text-center font-serif'>
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-secondary">Frequently Asked Questions</h1>
            </div>
            <Accordion type="single" collapsible className='mt-16'>
                <AccordionItem value="item-1">
                    <AccordionTrigger>What are telemedicine services?</AccordionTrigger>
                    <AccordionContent>
                    Telemedicine services allow individuals to access medical consultations and support remotely, connecting with healthcare professionals through virtual platforms rather than in-person visits.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>What are the benefits of using telemedicine?</AccordionTrigger>
                    <AccordionContent>
                    The benefits of telemedicine include convenience, accessibility from anywhere, reduced travel time and costs, timely access to healthcare professionals, and the ability to connect at a time that suits the individual best.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>How does telemedicine work?</AccordionTrigger>
                    <AccordionContent>
                    Telemedicine utilizes technology such as video calls, phone consultations, and secure messaging platforms to facilitate communication between patients and healthcare professionals. It allows for virtual assessments, diagnoses, and treatment recommendations.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    </section>
</>
  )
}

export default Telemedicine