
import { Carousel } from 'flowbite-react';
import { Button } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
import { Fade, Slide } from "react-awesome-reveal";

import { ChangeText } from '../functions/changetext';

export const Hero = () => {

  const textValue = {
    Text1: 'Warren',
    Text2: 'Learner',
    Text3: 'Student',
  }

  return (
    <div className='h-[40rem] w-[full] bg-gray-800 p-5 flex flex-row tablet:h-[30rem] mobile:h-[25rem] tablet:flex-col'>
       
      <section className='h-full w-full flex items-center justify-center'>
        <div className="bg-blue-500 h-[17rem] w-[17rem] tablet:h-[13rem] tablet:w-[13rem]  mobile:h-[10rem] mobile:w-[10rem] rounded-[50%]">

          <Carousel className='rounded-[50%]' leftControl={'<'} rightControl={'>'} indicators={false}>
            <img src={`${require('../assets/userImage/userProfile4.jpg')}`} alt="" />
            <img src={`${require('../assets/userImage/userProfile2.jpg')}`} alt="" />
            <img src={`${require('../assets/userImage/userProfile1.jpg')}`} alt="" />
          </Carousel>
        </div>



      </section>
      <section className='h-full w-full flex items-center justify-center'>

        <p className='text-gray-400 font-semibold text-[4rem] tablet:text-center tablet:text-[2.5rem] mobile:text-lg'>
          <p>
            
              I'm <span className='mobile:text-[3rem] font-bold text-[4rem] text-purple-700 '>
                <ChangeText {...textValue} /> </span>
            
          </p>
          <p>        
              a third year BSIT student         
          </p>
          <div className='w-full mt-5 flex tablet:justify-center'>
            <NavLink to={'/contactme'}>
              <Button className='bg-green-500' outline gradientDuoTone="purpleToBlue"> Contact Me </Button>
            </NavLink>
          </div>
        </p>

      </section>
     
    </div>
  )
}