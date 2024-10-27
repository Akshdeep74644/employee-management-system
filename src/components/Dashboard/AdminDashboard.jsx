import React from 'react'
import Header from '../Uicomponents/Header'
import Createtask from '../Uicomponents/Createtask'
import Credit from '../Uicomponents/Credit'
import Alltask from '../Uicomponents/Alltask'

function AdminDashboard(props) {
  return (
    <>
    <div className='h-screen w-full p-10'>
        <Header changeUser={props.changeUser} name="Akshdeep Singh" />
        <Createtask />
        <Alltask />
        <Credit panel="Admin Dashboard" />
    </div> 
    </>
  )
}

export default AdminDashboard
