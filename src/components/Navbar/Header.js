import React from 'react';
// import hdPhone from '../../images/icon/hdPhone.png';
// import envolope from '../../images/icon/envolope.png';
// import location from '../../images/icon/location.png';
// import logIn from '../../images/icon/loginIcon.png';
import logo from '../../images/icon/logo.png'
import whiteDArrow from '../../images/icon/whiteArrow.png'
import searchIcon from '../../images/icon/search.png'
import bellIcon from '../../images/icon/bell.png'
import tag from '../../images/icon/tag.png'
import heartIcon from '../../images/icon/heartIcon.png'
import userIcon from '../../images/icon/userIcon.png'
import cartIcon from '../../images/icon/cartIcon.png'
const Header = () => {
    return (
        <div className='header_top'>
            <header>
                <div className="py-4 shadow-sm bg-[#F7F7F7]">
                    <div className="container flex items-center justify-between">

                        {/* logo */}

                        <a href={"/home"}>
                            <img src={logo} alt="logo" className='w-32' />
                        </a>

                        {/* searchbar */}

                        <div className="w-full max-w-xl  flex">
                            <button className='flex items-center bg-primary font-openSans text-[14px] text-white font-semibold px-8 rounded-l-md hover:bg-[#ab50f2] transition'>
                                All
                                <img src={whiteDArrow} alt="Down Arrow" />
                            </button>
                            <input type="text" className='w-full border border-blue border-r-0 pl-12 py-3 rounded-l-md focus:outline-none' placeholder='Search Product' />
                            <button className='bg-primary px-8 rounded-r-md hover:bg-[#ab50f2] hover:text-primary transition'>
                                <img src={searchIcon} alt="" />
                            </button>
                        </div>

                        {/* icon */}

                        <div className="flex items-center space-x-4">
                            <a href={'/'} className='text-center'>
                                <img src={bellIcon} alt="" />
                            </a>
                            <a href={'/'} className='text-center'>
                                <img src={tag} alt="" />
                            </a>
                            <a href={'/'} className='text-center'>
                                <img src={heartIcon} alt="" />
                            </a>
                            <a href={'/'} className='text-center'>
                                <img src={userIcon} alt="" />
                            </a>
                            <a href={'/'} className='text-center p-2 bg-primary'>
                                <img src={cartIcon} alt="" />
                            </a>
                        </div>
                    </div>
                </div>


            </header>
        </div>
    );
};

export default Header;