import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger , SplitText} from 'gsap/all';
import { useGSAP } from "@gsap/react";
function Hero() {

    useGSAP(()=>{
        SplitText.create('.t h1',{
            type:'chars',
            onSplit(self){
                gsap.from(self.chars,{
                    scale:1.25,
                    opacity:0,
                    y:'-40px',
                    duration:1,

                    stagger:{
                        each: 0.1,
                        amount:0.45,
                        from:'center',
                        
                    },


                })
            }
        })
        gsap.from('.t p',{
            opacity:0,
            delay:1.5,
            duration:1,
        
        })
        
    })
  return (
    <>  
    <div className='inner-container border-7 border-amber-50 h-[100vh] flex-center '>
        <div className='t absolute top-30 text-center text-white space-y-2'> 
            <h1 className='text-8xl '>SPALDING</h1>
            <p className='text-2xl'>Basketball all time</p>
        </div>
    </div>
    </>
  )
}

export default Hero
