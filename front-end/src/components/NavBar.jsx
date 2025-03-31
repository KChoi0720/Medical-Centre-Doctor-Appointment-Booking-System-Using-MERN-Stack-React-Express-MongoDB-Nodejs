/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import logo from '../assets/logo1.png';
import profile_pic from "../assets/profile_pic.png";
import dropdown_icon from "../assets/dropdown_icon.svg";
import { NavLink, useNavigate } from 'react-router-dom'


const NavBar = () => {

    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false)
    const [token, setToken] = useState(true)

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img className='w-14 h-14  rounded-t-2xl cursor-pointer' src={logo} alt="" />
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
        {
            token ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                <img className='w-8 rounded-full' src={profile_pic} alt='' />
                <img className='w-2.5' src={dropdown_icon} alt='' />
                <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                    <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                        <p onClick={()=>navigate('my-profile')} className='hover:text-blue-900 cursor-pointer'>My Profile</p>
                        <p onClick={()=>navigate('my-appointments')} className='hover:text-blue-900 cursor-pointer'>My Appointments</p>
                        <p onClick={()=>setToken(false)} className='hover:text-blue-900 cursor-pointer'>Logout</p>
                    </div>
                </div>
            </div>
            :<button onClick={()=>navigate('/login')} className='bg-blue-900 text-white px-8 py-3 rounded-full font-light hidden md:block' >Create Account</button>
        }
      </div>
    </div>
  )
}

export default NavBar
