'use client'
import Link from 'next/link'
import React, { useState } from 'react'



const LoginPage = () => {
    const [credentials, setCredentials] = useState({
        firstName: "", 
        lastName: "",
        email: "", 
        password: ""
    })  
    return(
    <div className='flex min-h-screen flex-col items-center justify-center py-24 px-3'>

        <form className='flex flex-col justify-center items-center gap-2 py-4 w-full max-w-md'>
            <h2 className='relative text-white text-2xl font-semibold my-2 mb-8 before:content-[""] before:w-7 before:h-[2.6px] before:bg-[#63c34e] before:absolute before:top-[110%] before:left-0 before:right-0 before:mx-auto before:my-1 before:rounded'>Sign Up</h2>

            <div className='flex flex-col gap-2 w-full px-2 text-black sm:px-4 placeholder:text-slate-950'>
            <input 
                onChange={(e)=>setCredentials({...credentials, "email":e.target.value})}
                value={credentials.email} 
                className='rounded w-full py-[12px] px-2 text-base placeholder:text-slate-500' 
                type="email" 
                required 
                placeholder='Email' 
            />
            <input 
                onChange={(e)=>setCredentials({...credentials, "firstName":e.target.value})}
                value={credentials.firstName} 
                className='rounded w-full py-[12px] px-2 text-base placeholder:text-slate-500' 
                type="text" 
                required 
                placeholder='First Name' 
            />
            <input 
                onChange={(e)=>setCredentials({...credentials, "lastName":e.target.value})}
                value={credentials.lastName} 
                className='rounded w-full py-[12px] px-2 text-base placeholder:text-slate-500' 
                type="text" 
                required 
                placeholder='Last Name' 
            />
            <input 
                onChange={(e)=>setCredentials({...credentials, "password":e.target.value})}
                value={credentials.password} 
                className='rounded w-full py-[12px] px-2 text-base placeholder:text-slate-500' 
                type="password" 
                required 
                placeholder='Password' 
            />
            </div>

            <div className='flex flex-col sm:flex-row items-center justify-center text-sm gap-[2px] sm:gap-1 mt-3 px-2'>
                Already have an account ?
                <Link className=' font-semibold text-[#63c34e]' href="/login">Login</Link>
            </div>
            <button className='border my-3 mt-5 p-[8px_20px] bg-transparent text-white border-white rounded hover:bg-[#63c34e] hover:text-black hover:border-transparent focus:border-transparent focus:bg-[#63c34e] focus:text-black transition' >Sign Up</button>
        </form>


    </div>
)
}

export default LoginPage