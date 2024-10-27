import React from 'react'

function Header(props) {

  const logoutFunc = ()=>{
    localStorage.setItem('loggedInUser', "")
    props.changeUser('')
  }
  return (
    <>
    <div className='text-[#f9f9f9] flex justify-between items-center'>
     <h1 className='text-4xl'>hello, <br /> <span> Member 👋🏼</span></h1>
     <button className='bg-red-500 px-10 py-2 text-xl rounded-lg' onClick={logoutFunc}>Logout</button>
    </div>
  </>
  )
}

export default Header
