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
      <div className='contact border-2 h-full w-full p-10 border-yellow flex justify-center'>
        <div className='bg-red-100 w-full h-full rounded-2xl flex-top p-2'>
            <div className=''>
              <h1 className='text-6xl freshman'>SPAIDING</h1>
            </div>
            <div ></div>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default Contact
