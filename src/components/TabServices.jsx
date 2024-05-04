import React, { useState } from 'react';
import Button from './Button';
import { NavLink } from "react-router-dom";

const tabsData = [
    { id: 1, name: 'Home Visits', content: 'Experience the convenience of receiving medical care in the comfort of your own home. Our healthcare professionals will come to you, ensuring you get the attention and support you need without the need to travel.' },
    { id: 2, name: 'Nursing Care at Home', content: 'Rest assured knowing that you or your loved one will receive attentive and compassionate nursing care right at home. Our skilled nurses provide round-the-clock support, ensuring your health and well-being are prioritized at all times.' },
    { id: 3, name: 'Nutrition', content: 'Proper nutrition is vital for overall health and well-being, especially during recovery. Our nutrition experts will assess your dietary needs and provide personalized guidance and support to ensure you receive the nutrients necessary for optimal healing and recovery.' },
    { id: 4, name: 'Long-term Care', content: 'Comprehensive long-term care options for prolonged healthcare needs.' },
    { id: 5, name: 'Managing medication', content: 'involves a thorough process of ensuring individuals use their medications safely, effectively, and appropriately. This encompasses a range of tasks, such as assessing medication needs, monitoring, and educating. The objective of medication management is to maximize the benefits of medication while minimizing potential risks. Through approaches like medication reconciliation and technological solutions, medication management strives to prevent medication errors, improve patient safety, and encourage medication adherence for improved health results' },
    { id: 6, name: 'Bed Sores', content: 'Preventing and managing bed sores is essential for overall well-being. Our wound care specialists provide personalized wound care services, focusing on prevention, treatment, and healing to ensure your comfort and health.' },
    { id: 7, name: 'Physiotherapy', content: 'Regain mobility, strength, and function with our expert physiotherapy sessions. Our skilled therapists will create personalized treatment plans tailored to your specific needs, helping you achieve your rehabilitation goals and improve your overall quality of life.' },
    { id: 8, name: 'Telemedicine', content: 'Embrace the future of healthcare with our telemedicine services. Access medical consultations and support remotely, allowing you to connect with healthcare professionals from wherever you are, at a time that suits you best.' },
    { id: 9, name: 'Vascular Access (CVL/EJC/PC)', content: 'Expert insertion and management of vascular access devices, ensuring safe and effective delivery of medical treatments and therapies.' },
    { id: 10, name: 'Urinary Catheter Insertion/Removal', content: 'Skilled assistance with urinary catheter insertion or removal, prioritizing your comfort and safety throughout the process.' },
    { id: 11, name: 'Radiology', content: 'State-of-the-art imaging services for comprehensive diagnostic evaluations and treatment planning.' },
  ];

const TabServices = () => {

    const [activeTab, setActiveTab] = useState(tabsData[0].id);

  return (
     <div className="flex  mt-14">
      <div className="flex flex-col items-start text-secondary gap-8 p-2 overflow-y-auto h-[61vh] tabs">
        {tabsData.map(tab => (
          <button
            key={tab.id}  
            className={`text-3xl py-3 px-5 rounded-2xl ${activeTab === tab.id ? 'bg-blue-100' : 'hover:bg-white hover:transition-all hover:ease-out hover:duration-300'}`}
            onClick={() => setActiveTab(tab.id)}
          >
           {tab.id}. {tab.name}
          </button>
        ))}
      </div>
      <div className=" flex-1">
        <p className='text-slate-700 text-3xl '>{tabsData.find(tab => tab.id === activeTab)?.content}</p>
        <div className='inline-flex mt-6'>
        <NavLink>
        <Button name='Learn More' style='bg-third text-primary border-primary hover:bg-primary hover:text-white hover:border text-2xl'/>
        </NavLink>
        <div>
        <img src="" alt="" />
        </div>
        </div>
       
      </div>
    </div>
  )
}

export default TabServices