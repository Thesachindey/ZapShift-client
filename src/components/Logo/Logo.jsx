import React from 'react';
import logoImg from '../../assets/logo.png'
const Logo = () => {
    return (
        <div className='flex items-end '>
            <img src={logoImg} alt="Logo" />
            <h3 className="text-2xl font-black -ms-2.5">ZapShift</h3> 
        </div>
    );
};

export default Logo;