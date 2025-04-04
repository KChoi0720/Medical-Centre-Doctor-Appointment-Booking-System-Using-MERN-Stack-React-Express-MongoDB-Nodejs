import React, { useContext } from 'react'
import Login from './pages/Login'
// google react toastify 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppContext } from './context/AppContext'
import { AdminContext } from './context/AdminContext'
import NavBar from './components/NavBar';



const App = () => {


  const { aToken } = useContext(AdminContext)


  return aToken ? (
    <div className='bg-[#f8f9fd]'>
      <ToastContainer />
      <NavBar />
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  )
}

export default App
