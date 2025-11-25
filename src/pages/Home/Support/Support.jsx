import React from 'react';
import safeDelivery from '../../../assets/safe-delivery.png';
import liveTracking from '../../../assets/live-tracking.png';





const Support = () => {
    const data = [
        {
            title: "Live Parcel Tracking",
            description: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
            image: liveTracking
        },
        {
            title: "100% Safe Delivery",
            description: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
            image: safeDelivery
        },
        {
            title: "24/7 Call Center Support",
            description: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
            image: safeDelivery
        },

    ]


    return (
        <div className='flex flex-col gap-10 px-9 py-12'>
            {
                data.map((item, index) =>
                    <div key={index} className="w-full bg-base-100 shadow-md rounded-2xl p-8 flex items-center gap-8">

                        {/* Left Illustration */}
                        <div className="w-30 flex justify-center">
                            <img
                                src={item.image}
                                alt="parcel tracking illustration"
                                className="w-full max-w-sm"
                            />
                        </div>

                        {/* Vertical Dashed Divider */}
                        <div className="h-40 border-l-2 border-dashed border-neutral/40"></div>

                        {/* Text Content */}
                        <div className="w-2/3 space-y-2">
                            <h2 className="text-xl font-semibold text-primary">
                                {item.title}
                            </h2>

                            <p className="text-neutral leading-relaxed">
                                {item.description}
                            </p>
                        </div>

                    </div>
                )
            }
          
        </div>
    );
};

export default Support;