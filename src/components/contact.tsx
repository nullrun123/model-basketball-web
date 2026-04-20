import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import { ScrollTrigger , SplitText} from 'gsap/all';
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger,SplitText);

 

function Contact() {


  return (
    <div className='w-screen h-screen bg-white flex flex-col'>
      
    <div className='w-screen h-[80%] bg-black mt-auto flex justify-around items-center gap-5 p-4' >
      <div className='w-[40%] h-full border-2 border-blue'>
         <img className='w-full h-full object-contain' src="bas-shadow.png" alt="bas-shadow" />
      </div>
      <div className='contact border-2 h-full w-full p-10 border-yellow flex justify-center  '>
        <div className='bg-red-100 w-full h-full rounded-2xl flex-top flex-col p-16 gap-5'>
            <div className='text-center'>
              <h1 className='text-5xl freshman'>CONTACT <br /> SPALDING</h1>
            </div>
            <p className='text-md'>Have a question about our basketballs, gear, or NBA products? Our team is ready to assist you </p>

            <div className='w-full h-[35px] flex-center gap-6'>
              <input className='p-4 w-full h-full bg-white rounded-md ' type="text" />

              <button className='w-1/2 h-full rounded-md bg-white hover:bg-gray-200'>Subsc</button>
            </div>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default Contact
