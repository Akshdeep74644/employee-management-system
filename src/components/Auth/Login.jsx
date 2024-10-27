import React, { useState } from "react";

function login({handlerlogin}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const SubmitHandler = (e)=>{
        e.preventDefault();
        handlerlogin(email, password)
        setEmail("")
        setPassword("")
    }

  return (
    <>
      <div className="flex h-screen w-full bg-zinc-950 justify-center items-center">
       <form onSubmit={(e)=>{
           SubmitHandler(e)
        }} className="flex items-center gap-6  shadow hover:shadow-lg border-2  border-white-300 bg-[#edecec] flex-col p-10 rounded-2xl ">
           <h1 className="text-2xl">Welcome Back</h1>
        <input className="rounded-lg py-2 px-5 outline-none text-2xl text-[#333]" type="email" required placeholder="username" value={email} onChange={(item)=>{setEmail(item.target.value)}} />
        <input className="rounded-lg py-2 px-5 outline-none text-2xl text-[#333]" type="password" required placeholder="password" value={password} onChange={(item)=>{setPassword(item.target.value)}} />
        <button className="bg-[#333] text-[#f9f9f9] px-10 py-1 rounded-xl cursor-pointer">Login</button>
       </form>
        </div>
    </>
  );
}

export default login;
