
import { Carousel } from 'flowbite-react';
import { Button } from 'flowbite-react';
import { NavLink } from 'react-router-dom';

import { ChangeText } from '../functions/changetext';

import { tailwindText } from '../features/themeSlice';
import { useSelector } from 'react-redux';

export const Hero = () => {

  const tailwindTString = useSelector(tailwindText);

  const textValue = {
    Text1: 'Warren',
    Text2: 'Learner',
    Text3: 'Student',
  }

  return (


    <div className={`${tailwindTString.whitebg} h-[40rem] w-screen bg-cover bg-center p-5 flex flex-row tablet:h-[30rem] mobile:h-[25rem] tablet:flex-col`}
    style={{ backgroundImage: `url(${require('../assets/bgimage/bg.svg')})` }}
    >

      <section className='h-full w-full flex items-center justify-center'>

        <div className=" tablet:h-[13rem] tablet:w-[13rem] mobile:w-[10rem] mobile:h-[10rem] w-[20rem] h-[20rem] bg-center bg-cover rounded-[50%]" style={{ backgroundImage: `url(${require('../assets/userImage/userProfile4.jpg')})` }}>
        </div>

      </section>
      <section className='h-full w-full flex items-center justify-center'>


        <p className={`${tailwindTString.blacktext} text-gray-400 font-semibold text-[4rem] tablet:text-center tablet:text-[2.5rem] mobile:text-lg`}>
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