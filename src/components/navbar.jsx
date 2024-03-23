import { NavLink } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { FiMenu } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { GoBook } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";

import { toggle } from '../features/themeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { actualState } from '../features/themeSlice';
import { tailwindText } from '../features/themeSlice';

import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

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

            prevScrollPos > currentScrollPos ? setTemp('top-0') : setTemp('top-[-4rem]');

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);


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
    if (hamburgerIsClick) tempVar = "h-[18rem] p-8";

    if (!hamburgerIsClick || temp != 'top-0' || phoneWidth > 550) tempVar = "h-0";

    const dispatch = useDispatch();

    const toggleTheme = () => {
        dispatch(toggle());
    }

    const themestate = useSelector(actualState);

    const tailwindTString = useSelector(tailwindText);

    console.log(temp)

    return (
        <div className={`${temp} sticky z-10`}>
            <nav className={`${tailwindTString.purple} relative bg-gray-900 h-[4rem] w-screen flex flex-row justify-between items-center px-10`}>

                <div>
                    {
                        themestate ?
                            (
                                <FaSun onClick={toggleTheme} className='text-[1.8rem] mobile:text-[1.4rem] text-yellow-500' />
                            )
                            :
                            (
                                <FaMoon onClick={toggleTheme} className='text-[1.8rem] mobile:text-[1.4rem] text-gray-200' />
                            )
                    }
                </div>
                {
                    phoneWidth >= 550 ?
                        (
                            <div className='text-2xl text-gray-400 flex flex-row gap-x-10'>

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
                            <>
                                {
                                    !hamburgerIsClick ?
                                        (
                                            <FiMenu className='text-gray-400 hover:text-purple-700 text-[2rem]'
                                                onClick={showDropdown}
                                            />
                                        )
                                        :
                                        (
                                            <RxCross2 className='text-gray-400 hover:text-purple-700 text-[2rem]'  onClick={showDropdown}/>
                                        )
                                }

                            </>


                        )
                }

            </nav>
            <div className={`${themestate ? tailwindTString.purpledropdown : tailwindTString.darkdropdown} h-[0rem] z-10 w-screen duration-500 absolute ${tempVar}
             flex flex-col justify-between text-white text-[2rem] overflow-hidden
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
        </div>
    )
}