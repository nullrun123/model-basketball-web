import { useRef } from 'react'
import Marquee from './marquee'
import gsap from 'gsap';
import { ScrollTrigger , SplitText} from 'gsap/all';
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger,SplitText);
function SignatureBlock() {
  const containerRef = useRef(null);
  useGSAP(()=>{
    const tl =gsap.timeline({
      scrollTrigger:{
        trigger:containerRef.current,
        start:"top +70%",
        end:"top",
        // markers:true,
        scrub:2,
      }
    })

    tl.from("#h1-anim1",{
      clipPath: "inset(0 100% 0 0)",
      duration: 1.8, 
      ease: "power3.inOut"
    })

    tl.from("#h1-anim2",{
      clipPath: "inset(0 0 0 100%)",
      duration: 1.8, 
      ease: "power3.inOut"
    })
  })
  return (
     <div ref={containerRef} className='w-screen h-screen bg-white'>
      
    <div className='w-screen h-[100%] bg-red mt-auto flex flex-col gap-50'>
        <Marquee isLeft={true} title="• SPAIDING • #SpaldingThailand • #TrustSpalding • " goldText={<span className='gold'>One ball Infinite possibilities </span>  } />
        <div className='freshman space-y-1.5'>
           <h1 id="h1-anim1" className=' text-5xl tracking-wide md:text-7xl text-center uppercase'>Born on the court. </h1>
            <h1 id="h1-anim2" className=' text-5xl tracking-wide md:text-7xl text-center uppercase font-bold'>Built for <span>champions.</span> </h1>
        </div>
     
        <Marquee isLeft={false} title={" | Official NBA Basketball | Precision Performance SPALDING | Play Like A Pro with "} goldText={<span className='outline-gold font-bold'> SPALDING </span>} />
    </div>
  
    </div>
  )
}

export default SignatureBlock
