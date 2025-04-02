/* eslint-disable no-unused-vars */
import { useState } from 'react'
import React from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {


  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image:assets.profile_pic,
    email:'jiping@gmail.com',
    phone: '+64 123-123-123',
    address:{
      line1:"111 Mount Eden Road",
      line2:"Mount Eden, Auckland"
    },
    gender:'Male',
    dob:'2024-02-02'
  })


  const [isEdit, setIsEdit] = useState(false)

  return (
    <div>
      
      <img src={assets.profile_pic} alt='' />
      
      {
        isEdit
        ? <input type='text' value={userData.name} onChange={e => setUserData(prev => ({...prev, name:e.target.value}))}/>
        : <p>{userData.name}</p>
      }

    </div>
  )
}

export default MyProfile
