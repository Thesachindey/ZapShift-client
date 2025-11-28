import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../../assets/banner/banner1.png';
import banner2 from '../../../assets/banner/banner2.png';
import banner3 from '../../../assets/banner/banner3.png';
import { Link } from 'react-router';
import { FaArrowUp } from 'react-icons/fa';







const Banner = () => {
    return (
        <div className=' mb-9'>
            <Carousel showArrows={false} infiniteLoop={true} showThumbs={false} showStatus={false} autoPlay={true} >
                <div className='relative'>
                    <img className='absolute top-0 bottom-0 left-0 right-0' src={banner1} />

                    <div className="absolute z-20
                      top-100 left-60  hidden xl:block ">
                        {/* btn  */}
                        <Link className='btn mr-3 px-5 border-0 rounded-full text-center btn-outline hover:text-primary  hover:bg-transparent text-secondary outline-secondary outline-1 relative'>Be A Rider</Link>
                        {/* btn  */}
                        <Link className='btn px-5 border-0 rounded-lg text-center btn-primary text-secondary relative'>Track Your Parcel<span className=' absolute -right-11 rotate-45 p-3 bg-secondary rounded-full text-primary text-xl'><FaArrowUp /></span></Link>
                    </div>

                </div>
                <div>
                    <img src={banner2} />

                </div>
                <div>
                    <img src={banner3} />

                </div>
            </Carousel>
        </div>
    );
};

export default Banner;