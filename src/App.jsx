import React, {useContext, useEffect, useState} from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './Context/AuthProvider'

function App() {

  const [user, setUser] = useState(null)
  const [loggedInuserData, setLoggedInuserData] = useState(null)
  const [userdata, setUserData] = useContext(AuthContext);
  
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
    if (email == "admin@123.com" && password == "123") {
      console.log("welcom admin")
      setUser('admin')
      localStorage.setItem("loggedInUser", JSON.stringify({role: "admin"}))
    }else if(userdata){
      const employee = userdata.find((e)=>e.email == email && e.password == password)
      if(employee){
        console.log("welcom employee")
        setUser('employee')
        setLoggedInuserData(employee)
        localStorage.setItem("loggedInUser", JSON.stringify({role: "employee", data:employee}))
      }
    }else{
      alert("Invalid user!")
    }
  }

  
  return (
    <>
    {!user ? <Login handlerlogin={handleLogin} />: ''}
    {user == "admin" ?  <AdminDashboard changeUser={setUser} /> : (user == "employee"? <EmployeeDashboard changeUser={setUser} employeedata={loggedInuserData} />: null) } 
    </> 
  )
}

export default App
