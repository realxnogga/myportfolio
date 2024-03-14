
import { Footer } from 'flowbite-react';
import { SiCodewars } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { Button, Tooltip } from 'flowbite-react';
import { BackToTop } from '../functions/scrollToTop';


export const Foot = () => {

    return (
        <Footer className="relative bg-gray-900 h-fit w-screen flex items-center justify-center p-10 rounded-none">

          <BackToTop/>
          
            <section className='h-fit w-[27rem] flex flex-col items-center text-center'>
                <h3 className='font-bold text-[2rem] text-gray-400 mobile:text-[1rem]'>Foolish <span className='text-purple-700'>Developer</span> </h3>

                <h5 className='text-gray-400 italic mobile:text-[.7rem]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore consequatur minus exercitationem doloribus quam labore, nesciunt recusandae obcaecati odit doloremque.</h5>
                <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                    <Tooltip content="Codewars" animation="duration-500">
                        <SiCodewars className='text-gray-400 text-2xl hover:text-orange-400' />
                    </Tooltip>

                    <Tooltip content="Facebook" animation="duration-500">
                        <FaFacebookSquare className='text-gray-400 text-2xl hover:text-blue-600' />
                    </Tooltip>

                    <Tooltip content="Frontend Mentor" animation="duration-500">
                        <SiFrontendmentor className='text-gray-400 text-2xl hover:text-green-300' />
                    </Tooltip>

                    <Tooltip content="GitHub" animation="duration-500">
                        <FaGithub className='text-gray-400 text-2xl hover:text-black' />
                    </Tooltip>
                </div>
            </section>

        </Footer>
    );
}
