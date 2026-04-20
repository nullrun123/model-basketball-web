import React from 'react'

function About() {
  return (
    <>
    <div className='h-[100vh] border-2 border-amber-700 text-white flex bg-bg'>
      <div className='w-screen h-screen border-2 border-yellow-100 '></div>
      <div className='flex-center flex-col p-6 gap-7'>
      <h1 className='text-7xl uppercase'>The True <span className='gold'>Legend</span></h1>
     <p className='text-xl text-gray-300'>
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
