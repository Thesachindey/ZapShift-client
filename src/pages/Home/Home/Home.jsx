import React, { Suspense, useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import Services from '../OurServices/Services';
import Brands from '../Brand/Brands';
import Support from '../Support/Support';
import Reviews from '../Reviews/Reviews';
import FAQ from '../FAQ/FAQ';
import BeMerchant from '../BecomeMerchant/BeMerchant';
import LoadingPage from '../../Shared/Loading/LoadingPage';
import useAuth from '../../../Hooks/useAuth';

const Home = () => {
    const reviewsPromise = fetch('/reviews.json').then(res => res.json());

//loading animation
    const { loading } = useAuth();
    if (loading) return <LoadingPage />;


    return (
        <div>
            <header>
                <Banner />
                <HowItWorks />
                <Services />
                <Brands />
                <div className="px-9">
                    {/*divider */}
                    <div className="border-t-2 border-dashed border-secondary/40 mb-15"></div>
                </div>

                <Support />

                <div className="px-9">
                    {/*divider */}
                    <div className="border-t-2 border-dashed border-secondary/40 my-15"></div>
                </div>

                <BeMerchant />

                <Suspense fallback={<div>Loading reviews...</div>}>
                    <Reviews reviewsPromise={reviewsPromise} />
                </Suspense>

                <FAQ />

            </header>
        </div>
    );
};

export default Home;