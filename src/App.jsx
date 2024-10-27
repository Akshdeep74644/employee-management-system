import React, {useContext, useEffect, useState} from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './Context/AuthProvider'

function App() {

  const [user, setUser] = useState(null)
  const [loggedInuserData, setLoggedInuserData] = useState(null)
  const [userdata, setUserData, admindata, setAdmindata] = useContext(AuthContext);
   useEffect(() => {
     const loggedInUser = localStorage.getItem('loggedInUser')
     if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
       setLoggedInuserData(userData.data)
       console.log(userData)
    }
  }, [])
  
  

  const handleLogin = (email, password)=>{
    if (admindata) {
      const admin = admindata.find((e)=>e.email == email && e.password == password)
      if(admin){
        console.log("welcom admin")
        setUser('admin')
        setLoggedInuserData(admin)
        localStorage.setItem("loggedInUser", JSON.stringify({role: "admin", data:admin}))
      }
    }
    
    if(userdata){
      const employee = userdata.find((e)=>e.email == email && e.password == password)
      if(employee){
        console.log("welcom employee")
        setUser('employee')
        setLoggedInuserData(employee)
        localStorage.setItem("loggedInUser", JSON.stringify({role: "employee", data:employee}))
      }
    }
  }

  
  return (
    <>
    {!user ? <Login handlerlogin={handleLogin} />: ''}
    {user == "admin" ?  <AdminDashboard  changeUser={setUser} admindata={loggedInuserData} /> : (user == "employee"? <EmployeeDashboard changeUser={setUser} employeedata={loggedInuserData} />: null) } 
    </> 
  )
}

export default App
