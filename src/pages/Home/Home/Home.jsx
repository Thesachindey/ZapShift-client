import React, { Suspense } from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import Services from '../OurServices/Services';
import Brands from '../Brand/Brands';
import Support from '../Support/Support';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    const reviewsPromise = fetch('/reviews.json').then(res => res.json());

    return (
        <div>
            <header>
                <Banner />
                <HowItWorks />
                <Services />
                <Brands />
                {/*divider */}
                <div className="border-t-2 border-dashed border-secondary/40 mb-15"></div>

                <Support />

                {/*divider */}
                <div className="border-t-2 border-dashed border-secondary/40 mt-15"></div>
                <Suspense fallback={<div>Loading reviews...</div>}>
                    <Reviews reviewsPromise={reviewsPromise} />
                </Suspense>
            </header>
        </div>
    );
};

export default Home;