import React, { use } from 'react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import packs from '../../../assets/location-merchant.png';
import ReviewCard from './ReviewCard';

const Reviews = ({ reviewsPromise }) => {

    // 🔥 unwrap the promise here
    const reviews = use(reviewsPromise);

    return (
        <div>
            <div className='flex flex-col items-center justify-center gap-6 mb-12 mt-6'>
                <img className='w-80' src={packs} alt="Location Merchant" />
                <div className='text-center'>
                    <h1 className='text-4xl text-secondary font-bold mb-6'>Our Services</h1>
                    <p className='text-base-200'>
                        Enjoy fast, reliable parcel delivery with <br />
                        real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                    </p>
                </div>
            </div>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {reviews.map((review1, index) => (
                    <SwiperSlide key={index}>
                        <ReviewCard review1={review1} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Reviews;
