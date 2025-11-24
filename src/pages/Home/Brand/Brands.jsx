import React from 'react';
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import amazon from '../../../assets/brands/amazon.png';
import amazonVector from '../../../assets/brands/amazon_vector.png';
import casio from '../../../assets/brands/casio.png';
import moonstar from '../../../assets/brands/moonstar.png';
import randstand from '../../../assets/brands/randstad.png';
import star from '../../../assets/brands/star.png';
import starPeople from '../../../assets/brands/start_people.png';

const Brands = () => {
    const brandLogos = [amazon, amazonVector, casio, moonstar, randstand, star, starPeople];



    return (
        <Swiper
            loop={true}
            slidesPerView={4}
            centeredSlides={true}
            spaceBetween={30}
            grabCursor={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
        >
            {/* Swiper slides go here */}
            {
                brandLogos.map((logo, index) => (
                    <SwiperSlide key={index}>
                        <img src={logo} alt={`Brand ${index + 1}`} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
};

export default Brands;