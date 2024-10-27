import React, { useContext } from 'react'
import {AuthContext} from '../../Context/AuthProvider'

function Alltask() {
    const [userdata, setUserData] = useContext(AuthContext)
  return (
    <>
    
    <div className='text-[#f9f9f9] flex  flex-col gap-5 items-center  p-5  mt-5 mb-10 bg-[#1c1c1c] w-full h-[30vh]'>
    <div className='w-[90%] flex justify-between py-4 px-5 rounded-xl bg-[#333] items-center'>
            <h2>Employee</h2>
            <h2>New Task</h2>
            <h2>Accept Task</h2>
            <h2>Complete Task</h2>
            <h2>Failed Task</h2>
        </div>
        <div className='overflow-auto w-[100%] flex flex-col items-center gap-4'>
        {
            userdata.map((item, index)=>{
              return  <div key={index} className='w-[90%] flex justify-between py-4 px-5  rounded-xl bg-[#333] items-center'>
            <h2>{item.name}</h2>
            <h2>{item.taskcount.newTask}</h2>
            <h2>{item.taskcount.active}</h2>
            <h2>{item.taskcount.completed}</h2>
            <h2>{item.taskcount.failed}</h2>
        </div>
            })
        }
        </div>
    </div> 
    </>
  )
}

export default Alltask
