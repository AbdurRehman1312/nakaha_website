import React from 'react'
import Button from "../components/Button";
const ServiceForm = ({serviceName}) => {
  return (
    <section className='py-20'>
    <div className='text-center font-serif'>
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-secondary">Begin your pain relief journey today!</h1>
    </div>
    <div className="w-[90%] md:w-[70%] lg:w-[50%] m-auto mt-14">
        <form >
            <div className='flex flex-col md:flex-row  w-full md:gap-10' >
                <div className='w-full'>
                    <label htmlFor="name" className="block text-2xl font-medium text-gray-700 ml-2 mt-8">First Name</label>
                    <input type="text" id="name" name="name" required
                        className="mt-2 w-full px-5 py-5 border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:ring-primary focus:border-primary  "
                        placeholder="Enter First Name" />
                </div>
                <div className='w-full'>
                    <label htmlFor="name" className="block text-2xl font-medium text-gray-700 ml-2 mt-8">Last Name</label>
                    <input type="text" id="name" name="name" required
                        className="mt-2 w-full px-5 py-5 border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:ring-primary focus:border-primary  "
                        placeholder="Enter Last Name" />
                </div>
            </div>

            <div>
                <label htmlFor="mobile" className="block text-2xl font-medium text-gray-700 ml-2 mt-8">Email</label>
                <input type="email" id="email" name="email" required pattern="\d{10}"
                    className="mt-2 block w-full px-5 py-5 border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:ring-primary focus:border-primary  "
                    placeholder="Enter Email" />
            </div>



            <div>
                <label htmlFor="mobile" className="block text-2xl font-medium text-gray-700 ml-2 mt-8">Mobile Number</label>
                <input type="tel" id="mobile" name="mobile" required pattern="\d{10}"
                    className="mt-2 block w-full px-5 py-5 border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:ring-primary focus:border-primary  "
                    placeholder="Enter Mobile Number" />
            </div>

            <div>
                <label htmlFor="location" className="block text-2xl font-medium text-gray-700 ml-2 mt-8">Location</label>
                <select id="location" name="location" required
                    className="mt-2  w-full px-5 py-5 text-lg shadow-sm border-gray-400 focus:outline-none focus:ring-primary focus:border-primary rounded-3xl">
                    <option>Select location</option>
                    <option value="location1">Location 1</option>
                    <option value="location2">Location 2</option>
                </select>

            </div>

            <div>
                <label htmlFor="service" className="block text-2xl font-medium text-gray-700 ml-2 mt-8">Service Required</label>
                <input type="text" id="service" name="service"
                    className="mt-2 block w-full px-5 py-5 border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:ring-primary focus:border-primary  "
                    placeholder={serviceName} />
            </div>
            <div className='mt-10 flex justify-center '>
                <Button name="GET STARTED" style="bg-primary text-white hover:bg-third text-center hover:text-primary hover:border border-primary text-2xl" />
            </div>
        </form>
    </div>


</section>
  )
}

export default ServiceForm