import { useRef } from "react";
import gsap from 'gsap';
import {  SplitText} from 'gsap/all';
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(SplitText);
function About() {
  const containerRef = useRef(null);
    const titleRef = useRef(null);

    useGSAP(()=>{
      const tl = gsap.timeline({
        scrollTrigger:{
          trigger:containerRef.current,
          start:"top center",
        }
      })


    const split = SplitText.create(titleRef.current, { type: "chars" });

    tl.from(split.chars, {
        opacity: 0.1, scale: 0.8, filter: "blur(4px)",
        stagger: { each: 0.06, from: "center" },
        duration: 0.4, ease: "power2.out"
    });

    const split1 = SplitText.create(".details", { type: "words" });

    tl.from(split1.words, {
      opacity: 0, y: 15,
      stagger: 0.06, duration: 0.25,
      ease: "power2.out"
    });
    })


  return (
    <>
    <div ref={containerRef} className='h-[100vh] = text-white flex bg-bg relative'>
      <div className='w-2/4 h-screen hidden md:block'></div>
    <div className=' md:w-2/4  flex-center flex-col p-6 gap-6  '>
      <h1 ref={titleRef} className='text-6xl lg:text-9xl uppercase font-extrabold'>The True <span className='gold'>Legend</span></h1>
        <p className='details text-md lg:text-2xl text-gray-300'>
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
