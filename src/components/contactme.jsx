
import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import { SiCodewars } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { Tooltip } from 'flowbite-react';
import { FloatingLabel } from 'flowbite-react';

export const ContactMe = () => {

    return (
        <div className="bg-gray-800 h-fit w-screen flex items-center justify-center">
            
          
            <div className='bg-gray-900 h-fit my-12 w-[50rem] max-w-[90%] flex flex-row justify-center flex-wrap'>
            

                <form className=' h-full w-[25rem] p-10 flex flex-col justify-center gap-y-10' action="">
                    <FloatingLabel className='text-gray-400' variant="standard" label="Full Name" />
                    <FloatingLabel className='text-gray-400' variant="standard" label="Email" />
                    <FloatingLabel className='text-gray-400' variant="standard" label="Message" />
                    <Button className='w-fit' outline gradientDuoTone="purpleToBlue">
                        Contact Me
                    </Button>
                </form>
                <div className=' h-full w-[25rem] flex flex-col justify-start gap-y-10 p-10 text-gray-400'>
                    <section>
                        <h3 className='text-purple-700 text-2xl font-semibold'>Contact</h3>
                        <p>warrernlarios@gmail.com</p>
                    </section>
                    <section>
                        <h3 className='text-purple-700 text-2xl font-semibold'>Leave in</h3>
                        <p>lorem ipsum dfsdfksdf <br /> fgdfgjuhvdsf</p>
                    </section>
                    <section className=' flex flex-row flex-wrap gap-x-5'>
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
                    </section>
                </div>
              


            </div>
        

        </div>
    )
}