/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";
import { doctors } from "../assets/assets";

export const AppContext = createContext()

const AppContextProvider = (props) => {

    
  const value ={
    doctors
  }

  return (
    <AppContext.Provider value={value} >
        {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
