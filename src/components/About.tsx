import React from 'react'

function About() {
  return (
    <>
    <div className='h-[100vh] = text-white flex bg-bg'>
      <div className='w-2/4 h-screen hidden md:block border-2 border-amber-400'></div>
    <div className=' md:w-2/4  flex-center flex-col p-6 gap-6  '>
      <h1 className='text-5xl lg:text-9xl uppercase font-extrabold'>The True <span className='gold'>Legend</span></h1>
        <p className='text-xl lg:text-2xl text-gray-300'>
          Engineered for the highest level of play, <span className='font-extrabold italic '>Spalding</span> offers unmatched 
          durability and a classic feel. From the driveway to the hardwood, 
          play with the ball that defined the game.
      
        </p>
     </div>
    </div>
    </>
  )
}

export default About
