/* eslint-disable no-unused-vars */

import { useParams } from 'next/navigation'
import { useContext } from 'react'
import React from 'react'
import { AppContext } from '../context/AppContext'

const Appointments = () => {

  const {docId} = useParams
  const {doctors} = useContext(AppContext)
  const [docInfo, setDocInfo] = React.useState(null)

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId)
  }



  
  return (
    <div>
      
    </div>
  )
}

export default Appointments
