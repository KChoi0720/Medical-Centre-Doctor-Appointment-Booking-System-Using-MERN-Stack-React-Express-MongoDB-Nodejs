import React, { useContext } from 'react'
import Login from './pages/Login'
// google react toastify 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppContext } from './context/AppContext'
import { AdminContext } from './context/AdminContext'
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import { Routes, Route } from 'react-router-dom';
import DoctorList from './pages/Admin/DoctorList';
import Dashboard from './pages/Admin/Dashboard';
import AddDoctor from './pages/Admin/AddDoctor';
import AllAppointments from './pages/Admin/AllAppointments';



const App = () => {


  const { aToken } = useContext(AdminContext)


  return aToken ? (
    <div className='bg-[#f8f9fd]'>
      <ToastContainer />
      <NavBar />
      <div className='flex items-start'>
        <SideBar />
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/admin-dashboard' element={<Dashboard />} />
          <Route path='/add-doctor' element={<AddDoctor />} />
          <Route path='/all-appointments' element={<AllAppointments />} />
          <Route path='/doctor-list' element={<DoctorList />} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  )
}

export default App
