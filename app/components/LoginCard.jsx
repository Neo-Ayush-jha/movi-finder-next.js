'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function LoginCard() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const route = useRouter();
    const hendelClick=async(e)=>{
        e.preventDefault();
        let data = await fetch("/api/user/login",{
            method:"POST",
            headers:{
              "content-type":"application/json"
            },
            body:JSON.stringify({email,password})
          })
          data=await data.json();
          route.push("/movie")
        
    }
  return (
    <>
        <div className="bg-slate-300 p-3 rounded w-6/12 mx-auto mt-3">
        <h1 className="flex xl:text-6xl md:text-3xl sm-text-1xl font-black font-bold">Before searching movie pleace login.</h1>
            <form method='post' className='flex flex-col' onSubmit={hendelClick}>
                <div className="mb-3 flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className="mb-3 flex flex-col">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <div className="mb-3 flex flex-col">
                    <input type="submit" value="Login" className="bg-teal-500 text-white px-3 py-2 rounded w-full" />
                </div>
                <div className="mb-6 flex flex-row gap-3 text-1xl font-black">
                    <label htmlFor="fore new resistration for create new account">Create new Account:</label>
                    <Link href="/register" className='hover:text-slate-100 text-sky-600 text-decoration-none'>Click...</Link>
                    </div>
            </form>
        </div>
    </>
  )
}

export default LoginCard