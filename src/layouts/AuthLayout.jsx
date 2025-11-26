import React from 'react';
import Logo from '../components/Logo/Logo';
import { Outlet } from 'react-router';
import authImg from '../assets/authImage.png'
const AuthLayout = () => {
    return (
        <div className=' max-w-7xl mx-auto px-6 min-h-screen bg-white '>
            <div className="py-4 ">
            <Logo />
            </div>
            <div className="flex">
                <div className="flex-1">
                    <Outlet></Outlet>
                </div>
                <div className="flex-1">
                    <img src={authImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;