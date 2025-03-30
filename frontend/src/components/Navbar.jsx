import React, {useState} from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import logo from '../assets/logo1.png';
// import assets from '../assets/assets';



const Navbar = () => {

    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);


    return (
        <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-300'>
            <img className='w-22 cursor-pointer' src={logo} alt="Logo" />
            <ul className='hidden md:flex items-start gap-5 font-medium'>
                <NavLink to='/'>
                    <li className='py-1'>HOME </li>
                    {/* <hr /> is for adding underline below HOME */}
                    <hr className='border-none outline-none h-0.5 bg-primary  w-3/5 m-auto hidden group-hover:block group-[.active]:block' />
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
                {
                    token? <div>
                        {/* <img className='w-12 h-12 rounded-full' src={assets.profile_pic} alt="" /> */}
                        
                    </div>
                    :<button onClick={() => navigate('/login')} className='bg-blue-600 hover:bg-yellow-500 text-white px-8 py-3 rounded-full font-light hidden  md:block' >CREATE ACCOUNT</button>
                }
            </div>
        </div>
    )
}

export default Navbar




