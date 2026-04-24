

function Contact() {


  return (
    <div className='w-screen h-screen bg-white flex flex-col'>
      
    <div className='w-screen h-[80%] bg-[#151515] mt-auto flex justify-around items-center gap-5' >

      <div className='hidden md:flex w-[60%] h-[70%] flex flex-col items-center justify-center'>
         <img className=' w-full h-full object-contain' src="bas-shadow.png" alt="bas-shadow" />
         <p className='text-center text-contact font-bold '>OFFICIAL GAME BALL</p>
      </div>

      <div className='contact h-full w-full  bg-[#2E2E2E] flex justify-center  '>
        <div className='bg-transparent w-full h-full rounded-2xl flex-top flex-col p-10 gap-5 text-white'>

            <div className='text-center'>
              <h1 className='text-5xl freshman'>SPALDING <br />
                <span className='text-contact'>INSIDER</span></h1>
            </div>

            <p className='text-base text-gray-400'>Get the latest drops, NBA game ball updates, exclusive deals, and insider access — straight to your inbox.</p>

            <div className='w-full h-[40px] flex-center gap-2'>
              <input 
              placeholder='Enter your email address'
              className='p-5 w-full h-full bg-white rounded-2xl text-black text-sm' type="text" />
              <button 
              
              type="button" className="text-bold text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 box-border border border-transparent shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 inline-flex items-center justify-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 rounded-2xl w-1/3 h-full text-center">
                Subscribe            </button>
            </div>
            <p className='text-sm text-gray-400 '>By subscribing, you agree to our  <a  href="" className='text-contact hover:underline'>Privacy Policy.</a></p>
           <div className='w-full h-[2px] bg-[#4A4A4A]'></div>

           <div className='w-full h-full flex justify-around items-center p-5'>
            <div className='min-h-full flex flex-col space-y-1.5'>
              <h1 className='text-xl md:text-2xl mb-2'>About us</h1>
              <a href='' className='text-gray-400 text-sm'>Available Products</a>
              <a href='' className='text-gray-400 text-sm'>History</a>
              <a href='' className='text-gray-400 text-sm'>Our Team</a>
            </div>

             <div className='min-h-full flex flex-col  space-y-1.5'>
              <h1 className='text-xl md:text-2xl mb-2'>Helps</h1>
              <a href='' className='text-gray-400 text-sm'>FAQ</a>
              <a href='' className='text-gray-400 text-sm'>Location</a>
              <a href='' className='text-gray-400 text-sm'>Blog</a>
              <a href='' className='text-gray-400 text-sm'>Achievements</a>
            </div>

             <div className='min-h-full flex flex-col space-y-1.5'>
              <h1 className='text-xl md:text-2xl mb-2'>Follow us</h1>
              <a href='' className='text-gray-400 text-sm'>Facebook</a>
              <a href='' className='text-gray-400 text-sm'>Instagram</a>
              <a href='' className='text-gray-400 text-sm'>X</a>
              <a href='' className='text-gray-400 text-sm'>YouTube</a>
            </div>
           </div>
        </div>
       
      </div>
    </div>
    </div>
    
  )
}

export default Contact
