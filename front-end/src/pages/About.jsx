import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>About <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt='' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to medical centre. Your trusted partner in managing your healthcare conveniently and efficiently. At medical centre, we understood
            the importance of providing exceptional healthcare services to our patients. 
          </p>
          <p>Medical center is commited to excellence in healthcare technology. We continuously strive to enhance our platform, integrating hte latest advancements to improve
            user experience and deliver superior service. Whether you're booking your first appintment or managing ongoing care, we are here to support you every step of the way.
          </p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision at medical center is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you
            to access the care you need, when you need it.
          </p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>


      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-900 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiently:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-900 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convinience:</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-900 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization:</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>

      </div>


    </div>
  )
}

export default About
