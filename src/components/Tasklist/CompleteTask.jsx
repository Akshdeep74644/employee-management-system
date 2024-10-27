import React from 'react'

function CompleteTask({taskData}) {
  return (
    <div  className='h-full w-[400px] p-8 flex-shrink-0 bg-green-800 rounded-2xl'>
    <div className='flex justify-between items-center text-[hsl(0,0%,98%)]'>
        <h3 className='px-4 text-xl rounded-md py-1 bg-green-600'>{taskData.category}</h3>
        <h4 className='text-sm'>{taskData.date}</h4>
    </div>
    <div className='mt-5 flex flex-col gap-5 text-[#f9f9f9]'>
        <h2 className='text-3xl'>{taskData.title}</h2>
        <p className='text-sm'>{taskData.description}</p>
    </div>
    <div className='mt-5 flex justify-start text-[#f9f9f9]'>
        <button className='px-5 py-1 w-full bg-zinc-800 rounded-lg'>Completed</button>
    </div>
</div>
  )
}

export default CompleteTask
