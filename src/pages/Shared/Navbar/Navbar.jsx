import React from 'react';
import Logo from '../../../components/Logo/Logo';
import { Link, NavLink } from 'react-router';
import { FaArrowUp } from 'react-icons/fa';

const Navbar = () => {

    // nav links 
    const Links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about_us">About Us</NavLink></li>
        <li><NavLink to="/coverage">Coverage</NavLink></li>
    </>

    return (
        <div className='py-5'>
            <div className="navbar bg-base-100 rounded-lg px-4 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {Links}
                        </ul>
                    </div>
                    <a className="text-xl"><Logo /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Links}
                    </ul>
                </div>
                <div className="navbar-end  pr-10 ">
                    {/* btn  */}
                    <Link className='btn mr-3 px-5 border-0 rounded-full text-center btn-outline hover:text-primary/50  hover:bg-transparent text-primary outline-primary outline-1 relative'>Sign In</Link>
                    {/* btn  */}
                    <Link className='btn px-5 border-0 rounded-lg text-center btn-primary text-secondary relative'>Be a rider <span className=' absolute -right-11 rotate-45 p-3 bg-secondary rounded-full text-primary text-xl'><FaArrowUp /></span></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;