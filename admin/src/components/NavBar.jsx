import { useNavigate } from 'react-router-dom'
import React, { useContext } from 'react'
// import { assets } from '../assets/assets'
import admin_logo1 from '../assets/admin_logo1.png'
import { AdminContext } from '../context/AdminContext'

const NavBar = () => {

    const {aToken,setAToken} = useContext (AdminContext)

    const navigate = useNavigate()
    
    const logout = () => {
        navigate('/')
        aToken && setAToken('')
        aToken && localStorage.removeItem('aToken')
    }

  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
      <div className='flex items-center gap-2 text-xs'>
        <img className=' w-14 h-14 rounded-t-2xl cursor-pointer' src={admin_logo1} />
        <p className='font-bold text-blue-900 text-lg'>Medical Center</p>
        <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600'>{aToken ? 'Admin': 'Doctor'}</p>
      </div>
      <button onClick={logout} className='bg-blue-900 text-white text-sm px-10 py-2 rounded-full'>Logout</button>
    </div>
  )
}

export default NavBar
