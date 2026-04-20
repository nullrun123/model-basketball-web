import React from 'react'
import Marquee from './marquee'

function SignatureBlock() {
  return (
     <div className='w-screen h-screen bg-white border-2 border-b-emerald-600'>
      
    <div className='w-screen h-[100%] bg-red mt-auto flex flex-col gap-50'>
        <Marquee/>
      <h1 className='text-5xl tracking-wide md:text-7xl text-center uppercase space-3 '>Born on the court. <br/> <span className='font-bold'>Built for champions.</span> </h1>
        <Marquee/>
    </div>
    </div>
  )
}

export default SignatureBlock
