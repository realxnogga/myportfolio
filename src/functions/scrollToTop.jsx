import React, { useState } from 'react';
import { FaArrowUp } from "react-icons/fa";

export const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);



    const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        if (scrollTop > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
            <FaArrowUp onClick={scrollToTop} className='absolute bottom-10 right-10 text-2xl text-white hover:text-purple-700' />   
    )
}