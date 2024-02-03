
import { useRouter } from 'next/navigation'
import React from 'react'

const Footer = () => {
    const router=useRouter()
  return (
    <footer className='text-white '>
        <div className='p-[70px] flex justify-between 
            bg-[#1f1f1f] '>
            <div className='flex flex-col gap-6'>
            <h1 className='font-extrabold text-2xl'>SuperLama.ai</h1>
            <div className='flex justify-between items-center  '>
                <h2>insta</h2>
                <h2>twitter</h2>
                <h2>face</h2>
            </div>
            <h1 className='font-extrabold text-2xl text-yellow-200 hover:underline' onClick={()=>router.push('feedbackform')}>Give Feedback</h1>
            <h1 className='text-xs text-gray-400'>© Superlama 2024</h1>
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='text-xl font-bold'>Contact Us</h1>
                <p className='font-light '>BGS College of Engineering And Technology 
                    <br></br>
                Mahalakshmi Layout 
                <br></br>
                Banglore
                <br></br>
                +91 9876543210
                <br></br>
                +91 1234567890
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer