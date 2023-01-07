import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import menuBarIcon from '../../images/icon/menuBar.png';
import rightArrow from '../../images/icon/black-right-arrow.png'
import downArrow from '../../images/icon/whiteDownArrow.png'
import './css/style.css'

import './css/style.css'
const Navbar = () => {
    return (
        <div className='navSection'>
            <Header></Header>
            <nav className="bg-primary">
                <div className="container flex">

                    {/* All Category */}

                    <div className='px-8 py-4 flex items-center cursor-pointer bg-[#F8E21B] relative group'>
                        <img src={menuBarIcon} alt="Menu Bar Icon" />
                        <span className='capitalize ml-2 text-[#161616] font-openSans font-bold text-[16px]'>All Categories</span>

                        {/* side menu dropdown */}

                        <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divided-gray-300 opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
                            <Link to='/' className='flex items-center px-6 py-3 text-black font-openSans font-medium hover:bg-gray-100 transition'>Categories 1</Link>

                            <div className='flex items-center cursor-pointer relative parent-submenu'>
                                <span className='flex items-center w-full hover:bg-gray-100  transition'>
                                    <Link to='/' className='flex items-center px-6 py-3 text-black font-openSans font-medium hover:bg-gray-100 transition'>Categories 2</Link>
                                    <img src={rightArrow} alt="" />

                                    <div className="absolute w-full left-[12.5rem] top-0 shadow-md py-3 divide-y divide-gray-300 submenu transition duration-300">
                                    <Link to='/' className='flex items-center px-6 py-3 text-black font-openSans font-medium hover:bg-gray-100 transition'>submenu</Link>
                                    <Link to='/' className='flex items-center px-6 py-3 text-black font-openSans font-medium hover:bg-gray-100 transition'>submenu</Link>
                                    <Link to='/' className='flex items-center px-6 py-3 text-black font-openSans font-medium hover:bg-gray-100 transition'>submenu</Link>
                                    <Link to='/' className='flex items-center px-6 py-3 text-black font-openSans font-medium hover:bg-gray-100 transition'>submenu</Link>
                                    <Link to='/' className='flex items-center px-6 py-3 text-black font-openSans font-medium hover:bg-gray-100 transition'>submenu</Link>
                                </div>
                                </span>

                                {/* inner Drop down menu */}
                                


                                {/* inner Drop down menu end */}


                            </div>
                            <Link to='/' className='flex items-center px-6 py-3 text-black font-openSans font-medium hover:bg-gray-100 transition'>Categories 3</Link>
                            <Link to='/' className='flex items-center px-6 py-3 text-black font-openSans font-medium hover:bg-gray-100 transition'>Categories 4</Link>
                            <Link to='/' className='flex items-center px-6 py-3 text-black font-openSans font-medium hover:bg-gray-100 transition'>Categories 5</Link>
                            <Link to='/' className='flex items-center px-6 py-3 text-black font-openSans font-medium hover:bg-gray-100 transition'>Categories 6</Link>
                            <Link to='/' className='flex items-center px-6 py-3 text-black font-openSans font-medium hover:bg-gray-100 transition'>Categories 7</Link>
                        </div>


                        {/* side menu dropdown end*/}

                    </div>

                    {/* All Category End */}

                    {/* navbar links */}

                    <div className="lg:flex items-center justify-between flex-grow pl-12 hidden">
                        <div className="flex items-center space-x-6 capitalize">
                            <Link to='/' className='font-openSans font-medium text-white hover:text-gray-200 transition'>Home</Link>
                            <span className="flex justify-between space-x-2 items-center">
                                <Link to='/' className='font-openSans font-medium text-white hover:text-gray-200 transition'>Shop</Link>
                                <img src={downArrow} alt="white down Arrow" />
                            </span>
                            <Link to='/' className='font-openSans font-medium text-white hover:text-gray-200 transition'>Best Sellers</Link>
                            <Link to='/' className='font-openSans font-medium text-white hover:text-gray-200 transition'>Blog</Link>
                            <Link to='/' className='font-openSans font-medium text-white hover:text-gray-200 transition'>Contact Us</Link>
                        </div>
                        <Link to='/' className='font-openSans font-medium text-white hover:text-gray-200 transition'>Login/Register</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;