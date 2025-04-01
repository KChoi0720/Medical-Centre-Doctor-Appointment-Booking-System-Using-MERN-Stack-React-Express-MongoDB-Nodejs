import React from 'react'
import logo1 from '../assets/logo1.png'

const Footer = () => {
    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                {/* ------------ Left Section ---------- */}
                <div>
                    <img className='w-14 h-14  rounded-t-2xl cursor-pointer mb-5' src={logo1} alt="" />
                    <p className='w-full md:w-2/3 text-gray-600 leading-6'>We believe that the best medical care is achieved through an ongoing relationship with your own GP.</p>
                </div>

                {/* ------------ Center Section ---------- */}
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>


                {/* ------------ Right Section ---------- */}
                <div >
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>+64 000 000 000</li>
                        <li>mounteden@medicalcenter.co.nz</li>
                    </ul>
                </div>
            </div>
            {/* ------------- Copyright Text ------------- */}
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>© 2023 Medical Center. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
