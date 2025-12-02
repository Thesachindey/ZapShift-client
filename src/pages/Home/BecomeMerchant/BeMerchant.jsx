import React from 'react';
import vectorImg from '../../../assets/be-a-merchant-bg.png'
import boxImg from '../../../assets/location-merchant.png'
import { Link } from 'react-router';



const BeMerchant = () => {
    return (
        <div className='px-9 py-12'>
            <div className='bg-secondary  relative rounded-3xl md:h-100  p-15'>
                <img className='absolute top-0 left-0 ' src={vectorImg} alt="" />
                <img className='absolute right-0 w-md hidden md:block ' src={boxImg} alt="" />
                <div className='text-center md:text-start z-10 md:absolute lg:w-1/2 flex flex-col md:items-start justify-center '>
                    <h1 className='text-4xl text-base-100 font-bold mb-6'>Merchant and Customer Satisfaction is Our First Priority</h1>
                    <p className='text-gray-500'>
                        We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
                    </p>
                    <div className="btns my-4 flex flex-wrap items-center justify-center gap-6">
                        {/* btn  */}
                        <Link className='btn px-5 border-0 rounded-full text-center btn-primary text-secondary relative'>Become a Merchant</Link>
                        {/* btn  */}
                        <Link className='btn px-5 border-0 rounded-full text-center btn-outline hover:text-primary/50  hover:bg-transparent text-primary outline-primary outline-1 relative'>Earn with ZapShift Courier</Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BeMerchant;