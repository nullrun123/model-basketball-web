
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import { ScrollTrigger , SplitText} from 'gsap/all';
import { useGSAP } from "@gsap/react";
function Marquee({isLeft}) {
  const tickerRef = useRef<HTMLDivElement>(null);
  const animationsRef = useRef<gsap.core.Tween[]>([]);

    useGSAP(()=>{
        if(!tickerRef.current) return;

        const inner = tickerRef.current.querySelector(".ticker-wrap")
        const content = tickerRef.current.querySelector(".ticker-text")
        
        if(!content || !inner) return;

        // clone text มา loop ก่อนจะวนกลับ
        const clone = content.cloneNode(true);
        inner?.appendChild(clone);

        const textEle = inner?.querySelectorAll(".ticker-text");    
        textEle.forEach((ele)=>{
            const anima =  (isLeft ? gsap.to : gsap.from)(ele,{
                 x:"-=100%",
                duration:20,
                ease:'linear',
                repeat:-1,
            })
           
            animationsRef.current.push(anima);
        })
    },{scope:tickerRef})

    const handleOnstopMarquee = ()=>{
        animationsRef.current.forEach(text => text.pause())
    }

    const handleOnPlayMarquee = ()=>{
        animationsRef.current.forEach(text => text.play())
    }
  return (
    <div ref={tickerRef} className='scale-120 p-2 text-nowrap bg-black'
    onMouseEnter={handleOnstopMarquee} onMouseLeave={handleOnPlayMarquee}>
        <div  className='ticker-wrap flex whitespace-nowrap text-white font-extrabold'>
            <div className='flex ticker-text text-5xl gap-10 uppercase '>
                •  SPAIDING • #SpaldingThailand • #TrustSpalding • <span className='gold'>One ball Infinite possibilities </span>  
            </div>
        </div>
      
    </div>
  )
}

export default Marquee
