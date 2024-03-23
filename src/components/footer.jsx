
import { Footer } from 'flowbite-react';
import { SiCodewars } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { Tooltip } from 'flowbite-react';
import { BackToTop } from '../functions/scrollToTop';

import { tailwindText } from '../features/themeSlice';
import { useSelector } from 'react-redux';


export const Foot = () => {

    const tailwindTString = useSelector(tailwindText);

    return (
        <Footer className={`${tailwindTString.purple} relative bg-gray-900 h-fit w-screen flex items-center justify-center p-10 rounded-none`}>

            <BackToTop />


            <section className='h-fit w-[27rem] flex flex-col items-center text-center'>
         
                <h3 className='font-bold text-[2rem] text-gray-400 mobile:text-[1rem]'>
                    
                    Foolish Developer</h3>
                   
          
          
                
                <h5 className='text-gray-400 italic mobile:text-[.7rem]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore consequatur minus exercitationem doloribus quam labore, nesciunt recusandae obcaecati odit doloremque.</h5>
          
               
           
                
                <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                    <Tooltip content="Codewars" animation="duration-500">
                        <a href="https://www.codewars.com/users/Realxnogga">
                            <SiCodewars className='text-gray-400 text-2xl hover:text-orange-400' />
                        </a>
                    </Tooltip>

                    <Tooltip content="Facebook" animation="duration-500">
                        <a href="https://www.facebook.com/alupihang.dagat.142/">
                            <FaFacebookSquare className='text-gray-400 text-2xl hover:text-blue-600' />
                        </a>
                    </Tooltip>

                    <Tooltip content="Frontend Mentor" animation="duration-500">
                        <a href="https://www.frontendmentor.io/profile/unknownhatdog">
                            <SiFrontendmentor className='text-gray-400 text-2xl hover:text-green-300' />
                        </a>
                    </Tooltip>

                    <Tooltip content="GitHub" animation="duration-500">
                        <a href="https://github.com/unknownhatdog">
                            <FaGithub className='text-gray-400 text-2xl hover:text-black' />
                        </a>
                    </Tooltip>
                </div>
               
            
            </section>

        </Footer>
    );
}
