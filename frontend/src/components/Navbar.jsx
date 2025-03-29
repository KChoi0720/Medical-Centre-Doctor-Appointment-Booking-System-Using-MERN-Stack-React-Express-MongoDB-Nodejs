import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo1.png';





const Navbar = () => {
    return (
        <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
            <img src={logo} alt="Logo" className='w-22 h-auto cursor-pointer' />
            <ul className='hidden md:flex items-start gap-5 font-medium'>
                <NavLink to='/'>
                    <li className='py-1'>HOME </li>
                    {/* <hr /> is for adding underline below HOME */}
                    <hr className='border-none outline-none h-0.5 bg-[#1A5F7A] w-3/5 m-auto hidden group-hover:block group-[.active]:block' />
                </NavLink>

                <NavLink to='/doctors'>
                    <li className='py-1'>DOCTORS </li>
                    <hr className='border-none outline-none h-0.5 bg-[#1A5F7A] w-3/5 m-auto hidden group-hover:block group-[.active]:block' />
                </NavLink>

                <NavLink to='/about'>
                    <li className='py-1'>ABOUT </li>
                    <hr className='border-none outline-none h-0.5 bg-[#1A5F7A] w-3/5 m-auto hidden group-hover:block group-[.active]:block' />
                </NavLink>

                <NavLink to='/contact'>
                    <li className='py-1'>CONTACT </li>
                    <hr className='border-none outline-none h-0.5 bg-[#1A5F7A] w-3/5 m-auto hidden group-hover:block group-[.active]:block' />
                </NavLink>

            </ul>

            <div className='flex items-center gap-4'>
                <button className='bg-[#1A5F7A] text-white px-8 py-3 rounded-full font-light  md:block' >CREATE ACCOUNT</button>
            </div>

        </div>
    )
}

export default Navbar
