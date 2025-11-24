import React from 'react';
import { BsCashCoin } from 'react-icons/bs';
import { CiDeliveryTruck } from 'react-icons/ci';
import { LuFactory } from 'react-icons/lu';
import { MdCorporateFare } from 'react-icons/md';

const HowItWorks = () => {
    const data = [
        { id: 1, icon: <CiDeliveryTruck />, title: "Booking Pick & Drop", description: "From personal packages to business shipments — we deliver on time, every time." }
        , { id: 2, icon: <BsCashCoin />, title: "Cash On Delivery", description: "From personal packages to business shipments — we deliver on time, every time." }
        , { id: 3, icon: <LuFactory />, title: "Delivery Hub", description: "From personal packages to business shipments — we deliver on time, every time." }
        , { id: 4, icon: <MdCorporateFare />, title: "Booking SME & Corporate", description: "From personal packages to business shipments — we deliver on time, every time." }
    ]

    return (
        <div className='px-9 py-12'>
            <h1 className='text-2xl text-secondary font-bold mb-6'>How It Works</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 '>
            {/* card */}
            {
                data.map(item => 
                    <div className="w-full h-full  cursor-pointer rounded-xl bg-base-100 space-y-3 p-6 text-start shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 " key={item.id}>
                        <span className=' text-secondary text-3xl '>{item.icon}</span>
                        <h1 className='text-xl mt-4 text-secondary font-bold'>{item.title}</h1>
                        <p className='text-md text-base-200 '>{item.description}</p>
                    </div>
                )
            }
            </div>
        </div>
    );
};

export default HowItWorks;