'use client'
import { redirect, useRouter } from 'next/navigation'
import React from 'react'

const Header = () => {
  const router=useRouter();
  return (
    <header className='inset-0 backdrop-filter backdrop-blur-lg h-[100px] z-10 py-8 fixed w-full font-semibold  mx-auto px-9 shadow-2xl'>
        <nav className='flex justify-between items-center '>
        <a className=' text-white font-bold text-2xl hover:cursor-pointer' onClick={()=>router.push("/")}>SuperLama.ai</a>
        
        <ul className='flex-1 flex justify-center gap-16  text-white font-semibold 
        '>
            <li className='cursor-pointer hover:bg-blue-500 rounded-3xl p-2 ' ><a href='http://localhost:3001' target='black'>Create bot</a></li>
            <li className=' hover:bg-blue-500  p-2 cursor-pointer rounded-3xl' ><a>Pricing</a></li>
            <li className=' hover:bg-blue-500 rounded-3xl p-2 cursor-pointer'><a>About us</a></li>
            <li className=' hover:bg-blue-500 rounded-3xl p-2 cursor-pointer' onClick={()=>router.push("faq")}><a>How to Use</a></li>
            <li className=' hover:bg-blue-500 rounded-3xl p-2 cursor-pointer ' onClick={()=>router.push("feedback")}><a>Testimonials</a></li>
            
        </ul>
        <div className='mr-6 flex gap-5  text-white justify-between items-center'>
        <button >Sign in</button>
        <button className='border-cyan-50 border-2 p-1 rounded'>Signup</button>
        </div>
        </nav>
        </header>
  )
}

export default Header