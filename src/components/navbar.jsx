
import { NavLink } from 'react-router-dom';
import { Tooltip } from 'flowbite-react';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';

export const Header = () => {

  return (
    <Navbar fluid className='bg-gray-900 w-screen backdrop-blur backdrop-brightness-75 px-10'>
      <Navbar.Brand>
        <img className="animate-spin spin h-[3rem] w-[3rem] mobile:h-[2rem] mobile:w-[2rem]" src={`${require('../assets/icons/logo192.png')}`} alt="" />
      </Navbar.Brand>

      <Tooltip content={'Menu'}>
      <Navbar.Toggle className='hover:bg-purple-700' />

      </Tooltip>

      <Navbar.Collapse className='text-white'>
  
        <NavLink to={'/'}>
          <Navbar.Link className='text-white hover:bg-purple-800'>Home</Navbar.Link>
        </NavLink>

        <NavLink to={'/about'}>
          <Navbar.Link className='text-white hover:bg-purple-800'>About</Navbar.Link>
        </NavLink>

        <NavLink to={'/education'}>
          <Navbar.Link className='text-white hover:bg-purple-800'>Education</Navbar.Link>
        </NavLink>

      </Navbar.Collapse>
    </Navbar>
  );
}
