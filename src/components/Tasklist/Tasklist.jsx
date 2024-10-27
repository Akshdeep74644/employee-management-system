import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

function Tasklist({employeeTaskListData}) {
  return (
    <>
    <div className='h-[50%] w-full flex flex-nowrap gap-4 overflow-x-auto py-10 bg-transparent mt-5 rounded-lg'>
       {employeeTaskListData.tasks.map((item, index)=>{
            if(item.active){
                return <AcceptTask key={index} taskData={item} />
            }   
            
            if(item.newTask){
                return <NewTask key={index} taskData={item} />
            } 
            
            if(item.completed){
                return <CompleteTask key={index} taskData={item} />
            } 
            
            if(item.failed){
                return <FailedTask key={index} taskData={item} />
            } 
       })}
    </div>  
    </>
  )
}

export default Tasklist
