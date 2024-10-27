import React, { createContext, useEffect, useState }  from 'react'
import {getLocalStorage , setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()
// localStorage.clear()

function AuthProvider({children}) {
  const [userdata, setUserData] = useState(null)
  const [admindata, setAdmindata] = useState(null)
  useEffect(() => {
    setLocalStorage()
    const {employeedata, managerdata} = getLocalStorage();
    setUserData(employeedata)
    setAdmindata(managerdata)
  }, [])

  return (
    <div>
      <AuthContext.Provider value={[userdata, setUserData, admindata, setAdmindata]}>
      {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
