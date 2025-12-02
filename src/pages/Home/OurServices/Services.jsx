import { Banknote, MapPinHouse, MonitorCloud, TruckElectric, Undo2, Vote } from 'lucide-react';
import React from 'react';

const Services = () => {
    const data = [
        { id: 1, icon: <TruckElectric />, title: "Express  & Standard Delivery", description: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off." }
        , { id: 2, icon: <MapPinHouse />, title: "Nationwide Delivery", description: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours." }
        , { id: 3, icon: <Vote />, title: "Fulfillment Solution", description: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support." }
        , { id: 4, icon: <Banknote />, title: "Cash on Home Delivery", description: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product." }
        , { id: 5, icon: <MonitorCloud />, title: "Corporate Service / Contract In Logistics", description: "Customized corporate services which includes warehouse and inventory management support." }
        , { id: 6, icon: <Undo2 />, title: "Parcel Return", description: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants." }
    ]


    return (
        <div className='py-12'>
            <div className='bg-secondary rounded-3xl p-15'>
                <div className='text-center '>
                    <h1 className='text-4xl text-base-100 font-bold mb-6'>Our Services</h1>
                    <p className='text-gray-500'>Enjoy fast, reliable parcel delivery with <br /> real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
                </div>

                <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 py-10 '>
                    {/* card */}
                    {
                        data.map(item =>
                            <div
                                className="w-full h-full cursor-pointer rounded-xl bg-base-100 space-y-3 p-6 flex flex-col items-center justify-center text-center shadow-lg hover:bg-primary transform transition duration-300 hover:scale-105 "
                                key={item.id}
                            >
                                {/* icon  */}
                                <div className="relative w-15 h-15 flex items-center justify-center">
                                    {/* Gradient Circle Background */}
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-b from-indigo-100 to-transparent"></div>

                                    {/* Your Icon */}
                                    <span className="relative text-4xl text-blue-500">
                                        {item.icon}
                                    </span>
                                </div>

                                <h1 className="text-xl mt-4 text-secondary font-bold">{item.title}</h1>
                                <p className="text-md text-secondary/40">{item.description}</p>
                            </div>

                        )
                    }
                </div>



            </div>
        </div>
    );
};

export default Services;