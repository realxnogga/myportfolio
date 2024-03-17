import { NavLink } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { FiMenu } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { GoBook } from "react-icons/go";

export const Header = () => {
    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const [hamburgerIsClick, setHamburgerIsClick] = useState(false);

    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
    const [temp, setTemp] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            prevScrollPos > currentScrollPos ? setTemp('top-0') : setTemp('top-[-5rem]');

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    console.log(temp)

    useEffect(() => {
        const handleResize = () => {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const phoneWidth = screenSize.width;

    

   
    const showDropdown = () => {
        setHamburgerIsClick(!hamburgerIsClick);
    }

    const leaveDropdown = () => {
        setHamburgerIsClick(false);
    }

    var tempVar = "";
    if (hamburgerIsClick)  tempVar = "h-[18rem] p-8";   

    if (!hamburgerIsClick) tempVar = "h-0";
    
    if (phoneWidth > 550) tempVar = "h-0";
    console.log(phoneWidth)
   

    return (
        <p>
            <nav className={`${temp} sticky bg-black bg-opacity-75 backdrop-blur-lg z-10 h-[5rem] w-screen flex flex-row justify-between items-center px-10`}>

                <div>
                    <img className="animate-spin spin h-[3rem] w-[3rem] mobile:h-[2rem] mobile:w-[2rem]" src={`${require('../assets/icons/logo192.png')}`} alt="" />
                </div>
                {
                    phoneWidth >= 550 ?
                        (
                            <div className='text-2xl text-gray-400 flex flex-row gap-x-10 font-thin '>

                                <NavLink to={'/'}>
                                    <p className='hover:text-purple-700'>Home</p>
                                </NavLink>

                                <NavLink to={'/about'}>
                                    <p className='hover:text-purple-700'>About</p>
                                </NavLink>

                                <NavLink to={'/education'}>
                                    <p className='hover:text-purple-700'>Education</p>
                                </NavLink>

                            </div>
                        )
                        :
                        (
                            <FiMenu className='text-gray-400 hover:text-purple-700 text-[2rem]'
                                onClick={showDropdown}
                            />

                            
                        )
                }

            </nav>
            <div className={`bg-black bg-opacity-50 backdrop-blur-md h-[0rem] z-10 w-screen duration-500 absolute ${tempVar}
             flex flex-col justify-between text-gray-400 text-[2rem] overflow-hidden
            `} onClick={leaveDropdown}>
              
                    <NavLink to={'/'} className={'flex items-center gap-x-4'}>
                    <IoHomeOutline />
                        <p className='hover:text-purple-700'>Home</p>
                    </NavLink>
                    <hr className=' border-gray-400' />
                    <NavLink to={'/about'} className={'flex items-center gap-x-4'}>
                    <IoPersonOutline />
                        <p className='hover:text-purple-700'>About</p>
                    </NavLink>
                    <hr className=' border-gray-400' />
                    <NavLink to={'/education'} className={'flex items-center gap-x-4'}>
                    <GoBook />
                        <p className='hover:text-purple-700'>Education</p>
                    </NavLink>              
            </div>
        </p>
    )
}