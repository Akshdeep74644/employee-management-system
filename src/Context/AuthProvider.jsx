import React, { createContext, useEffect, useState }  from 'react'
import {getLocalStorage , setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()
// localStorage.clear()

function AuthProvider({children}) {
  const [userdata, setUserData] = useState(null)
  useEffect(() => {
    setLocalStorage()
    const {employeedata} = getLocalStorage();
    setUserData(employeedata)
  }, [])

  return (
    <div>
      <AuthContext.Provider value={[userdata, setUserData]}>
      {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
