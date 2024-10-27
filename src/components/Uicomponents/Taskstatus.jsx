import React from 'react'

function Taskstatus({employeeTaskStatusData}) {
  return (
    <>
    <div className='flex justify-between gap-5 flex-wrap mt-5'>
        <div className='py-7 px-10 w-[49%] flex items-start justify-center flex-col text-white rounded-lg bg-orange-500'>
        <h1 className='text-5xl font-bold'>{employeeTaskStatusData.taskcount.newTask}</h1>    
        <h2 className='text-3xl font-bold'>New task</h2>    
        </div>     
        <div className='py-7 px-10 w-[49%] flex items-start justify-center flex-col text-white rounded-lg bg-blue-500'>
        <h1 className='text-5xl font-bold'>{employeeTaskStatusData.taskcount.completed}</h1>    
        <h2 className='text-3xl font-bold'>Completed</h2>    
        </div>     
        <div className='py-7 px-10 w-[49%] flex items-start justify-center flex-col text-white rounded-lg bg-green-500'>
        <h1 className='text-5xl font-bold'>{employeeTaskStatusData.taskcount.failed}</h1>    
        <h2 className='text-3xl font-bold'>Accepted</h2>    
        </div>     
        <div className='py-7 px-10 w-[49%] flex items-start justify-center flex-col text-white rounded-lg bg-gray-500'>
        <h1 className='text-5xl font-bold'>{employeeTaskStatusData.taskcount.newTask}</h1>    
        <h2 className='text-3xl font-bold'>Failed</h2>    
        </div>     
            
    </div> 
    </>
  )
}

export default Taskstatus
