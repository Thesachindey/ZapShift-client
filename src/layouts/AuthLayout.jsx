import React from 'react';
import Logo from '../components/Logo/Logo';
import { Outlet } from 'react-router';
import authImg from '../assets/authImage.png'

const AuthLayout = () => {
    return (
        <div className="">
            <div className="max-w-7xl mx-auto  min-h-screen bg-white ">
                <div className="flex flex-col md:flex-row min-h-screen">

                    {/* Left */}
                    <div className="flex-1 flex  flex-col">
                        <div className="p-4">
                            <Logo />
                        </div>
                        {/* outlet  */}
                        <Outlet />
                    </div>

                    {/* Right */}
                    <div className="flex-1 bg-primary/10 flex items-center justify-center mt-5 md:mt-0">
                        <div className="w-full h-full flex items-center object-cover rounded-r-2xl ">
                            <img
                                src={authImg}
                                alt=""
                                className=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
