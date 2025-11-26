import React from 'react';
import pageNotFound from '../../assets/404.png'
import { Link } from 'react-router';
import { FaArrowUp } from 'react-icons/fa';
const NotFound = () => {
    return (
        <div>
            <div className="p-20 bg-base-100 rounded-3xl flex flex-col items-center justify-center">
                <div className="w-60">
                <img src={pageNotFound} alt="" />
                </div>
                <Link to={'/'} className='btn px-5 border-0 rounded-lg text-center btn-primary text-secondary relative'>Go Home <span className=' absolute -right-11 rotate-45 p-3 bg-secondary rounded-full text-primary text-xl'><FaArrowUp /></span></Link>
            </div>
        </div>
    );
};

export default NotFound;