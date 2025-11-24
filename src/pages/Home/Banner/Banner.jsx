import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../../assets/banner/banner1.png';
import banner2 from '../../../assets/banner/banner2.png';
import banner3 from '../../../assets/banner/banner3.png';






const Banner = () => {
    return (
        <div className=' mb-9'>
            <Carousel  showArrows={false} infiniteLoop={true} showThumbs={false} showStatus={false} autoPlay={true} >
                <div>
                    <img src={banner1} />

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