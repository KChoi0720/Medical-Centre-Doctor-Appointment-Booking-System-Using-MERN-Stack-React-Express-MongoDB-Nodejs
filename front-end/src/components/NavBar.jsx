import React from 'react'
import logo from '../assets/logo1.png';
import { NavLink } from 'react-router-dom'


const NavBar = () => {
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img className='w-18 cursor-pointer' src={logo} alt="" />
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
            <li className='py-1'>HOME</li>
            <hr className='bordern-none outline-none h-0.5 bg-blue-500   w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/doctors'>
            <li className='py-1'>DOCTORS</li>
            <hr className='bordern-none outline-none h-0.5 bg-blue-500 w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/about'>
            <li className='py-1'>ABOUT</li>
            <hr className='bordern-none outline-none h-0.5 bg-blue-500 w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/contact'>
            <li className='py-1'>CONTACT</li>
            <hr className='bordern-none outline-none h-0.5 bg-blue-500 w-3/5 m-auto hidden' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        <button className='bg-blue-500 text-white px-8 py-3 rounded-3xl font-light hidden md:block' >Create Account</button>
      </div>
    </div>
  )
}

export default NavBar
