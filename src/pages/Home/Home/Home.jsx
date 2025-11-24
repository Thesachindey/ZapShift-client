import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import Services from '../OurServices/Services';
import Brands from '../Brand/Brands';

const Home = () => {
    return (
        <div>
            <header>
                <Banner />
                <HowItWorks />
                <Services/>
                <Brands/>
            </header>
        </div>
    );
};

export default Home;