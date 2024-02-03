'use client'
import { Button, Rating } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import Swipe from './Swipe';


function Feedback() {
  const [submited,isSubmited] = useState(false);


  function onFormSubmition(e){
    

 e.preventDefault();
 isSubmited(true);
  }



  return (
<div className='bg-gradient-to-r from-orange-300 via-red-500 to-yellow-500 h-[100vh] pt-16 items-center justify-center flex '>
{!submited ? (
        <div className="w-full max-w-md mx-auto py-10 bg-gray-300 p-10 ">
            <h2 className="text-4xl font-bold text-center py-0 mb-8 sm:text-4xl underline  cursor-default">Feedback</h2>
            <form  id='feedbackForm' onSubmit={onFormSubmition}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-lg font-semibold hover:underline ">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your Name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-gray-400 focus:border-[2px] sm:text-sm" required/>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-lg font-semibold hover:underline">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your Email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-gray-400 focus:border-[2px] sm:text-sm" required/>
                </div>
                <div className="mb-4">
                    <label  className="block text-lg font-semibold hover:underline">Rating</label>
             <div >

                <Rating  className='text-yellow-400 w-6 h-6 flex' value={4}/>
             </div>

                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-lg font-semibold hover:underline">Message</label>
                    <textarea id="message" name="message" rows="4" placeholder="Your Message" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-gray-400 focus:border-[2px] sm:text-sm" required></textarea>
                </div>
                <div >
          <Button type='submit' className='bg-yellow-400 text-lg text-black w-20'>submit</Button>
          </div>
            </form>
        </div>
       
):(

<Swipe/>
)

}
</div>
)

}

export default Feedback