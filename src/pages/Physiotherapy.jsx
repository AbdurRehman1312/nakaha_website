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

const Physiotherapy = () => {
  return (
    <>
    <Breadcrumb styles="bg_about" title="Physiotherapy" />
    <section className="container m-auto px-2 my-10">
        <ServiceSection image={images.aboutus} paraH="Restoring Mobility and Enhancing Quality of Life" para2="Regain mobility, strength, and function with our expert physiotherapy sessions. Our skilled therapists will create personalized treatment plans tailored to your specific needs, helping you achieve your rehabilitation goals and improve your overall quality of life." />
        <ServiceForm serviceName="Physiotherapy"  />
        <div className='pt-12 pb-16'>
            <div className='text-center font-serif'>
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-secondary">Frequently Asked Questions</h1>
            </div>
            <Accordion type="single" collapsible className='mt-16'>
                <AccordionItem value="item-1">
                    <AccordionTrigger>What are the benefits of physiotherapy for rehabilitation?</AccordionTrigger>
                    <AccordionContent>
                    Physiotherapy offers numerous benefits, including regaining mobility, strength, and function, reducing pain, preventing further injury, and improving overall quality of life.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>How do your skilled therapists approach physiotherapy sessions?</AccordionTrigger>
                    <AccordionContent>
                    Our skilled therapists create personalized treatment plans tailored to each individual's specific needs. They use a variety of techniques and exercises to address mobility, strength, flexibility, and pain management.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>What types of conditions or injuries can physiotherapy help with?</AccordionTrigger>
                    <AccordionContent>
                    Physiotherapy can help with a wide range of conditions and injuries, including musculoskeletal injuries, post-surgical rehabilitation, neurological conditions, sports injuries, and chronic pain management.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    </section>
</>
  )
}

export default Physiotherapy