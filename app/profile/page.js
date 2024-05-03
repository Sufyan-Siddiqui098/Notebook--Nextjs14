'use client'
import React, { useState } from 'react'

const UserProfile = () => {
    const [credentials, setCredentials] = useState({
        email:"",
        firstName: "",
        lastName: "",
        oldPassword: "",
        newPassword: "",
        confirmNewPassword: ""
    })

  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-16 px-3'>
        {/* User name first letter */}
        <div className='w-16 h-16 border flex justify-center items-center rounded-full mb-3 bg-[#121212]'>
            S
        </div>
        <div className='text-gray-400 sm:text-lg mb-4'>
           username
        </div>

        {/* Update  */}
        <form className='flex flex-col justify-center items-center gap-2 py-4 w-full max-w-md'>
            <h2 className='relative text-white text-2xl font-semibold my-2 mb-8 before:content-[""] before:w-7 before:h-[2.6px] before:bg-[#63c34e] before:absolute before:top-[110%] before:left-0 before:right-0 before:mx-auto before:my-1 before:rounded'>Update Profile</h2>

            <div className='flex flex-col gap-2 w-full px-2 text-black sm:px-4 '>
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
                onChange={(e)=>setCredentials({...credentials, "oldPassword":e.target.value})}
                value={credentials.oldPassword} 
                className='rounded w-full py-[12px] px-2 text-base placeholder:text-slate-500' 
                type="password" 
                required 
                placeholder='Old Password' 
            />
            <input 
                onChange={(e)=>setCredentials({...credentials, "newPassword":e.target.value})}
                value={credentials.newPassword} 
                className='rounded w-full py-[12px] px-2 text-base placeholder:text-slate-500' 
                type="password" 
                required 
                placeholder='New Password' 
            />
            <input 
                onChange={(e)=>setCredentials({...credentials, "confirmNewPassword":e.target.value})}
                value={credentials.confirmNewPassword} 
                className='rounded w-full py-[12px] px-2 text-base placeholder:text-slate-500' 
                type="password" 
                required 
                placeholder='Confirm New Password' 
            />
            </div>

           
            <button className='border my-3 mt-5 p-[8px_20px] bg-transparent text-white border-white rounded hover:bg-[#63c34e] hover:text-black hover:border-transparent focus:border-transparent focus:bg-[#63c34e] focus:text-black transition' >Update</button>
        </form>

    </div>
  )
}

export default UserProfile