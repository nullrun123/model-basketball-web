import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import { ScrollTrigger , SplitText} from 'gsap/all';
import { useGSAP } from "@gsap/react";

import { Historydetail } from '../utils/content';
gsap.registerPlugin(ScrollTrigger,SplitText);
function History() {
    const containerRef= useRef(null);
    useGSAP(()=>{

        const splits: SplitText[] = [];
        document.querySelectorAll(".hist-title").forEach((el) => {
            splits.push(new SplitText(el, { type: "lines" }));
        });
        document.querySelectorAll(".hist-about").forEach((el) => {
            splits.push(new SplitText(el, { type: "lines" }));
        });

       
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:containerRef.current,
                start:"center center",
                end:"+=450%",
                scrub:1,
                pin:true,
                pinSpacing:true,
            },
            // ease:"power3.out",
            duration:1,
        })

        gsap.set(".hist-1",{visibility:"visible"});
        gsap.set(".hist-2",{visibility:"visible"});
        gsap.set(".hist-3",{visibility:"visible"});
        gsap.set(".hist-4",{visibility:"visible"});


    tl.from(".hist-1 .hist-title ", { opacity: 0, y: 20, stagger: 0.3, duration: 1 })
      .from(".hist-1 .hist-about ", { opacity: 0, y: 20, stagger: 0.2, duration: 1 }, "-=0.5")
      .to(".hist-1 img", { x: "-20%", opacity: 0, duration: 1, delay: 2 })
      .to(".hist-1", { visibility: "hidden" })

      .fromTo(".hist-2 img", { opacity: 0 }, { opacity: 1, duration: 1, visibility: "visible" })
      .from(".hist-2 .hist-title ", { opacity: 0, y: 20, stagger: 0.3, duration: 1 })
      .from(".hist-2 .hist-about ", { opacity: 0, y: 20, stagger: 0.2, duration: 1 }, "-=0.5")
      .to(".hist-2 img", { x: "-20%", opacity: 0, duration: 1, delay: 2 })
      .to(".hist-2", { visibility: "hidden" })

      .fromTo(".hist-3 img", { opacity: 0 }, { opacity: 1, duration: 1, visibility: "visible" })
      .from(".hist-3 .hist-title ", { opacity: 0, y: 20, stagger: 0.3, duration: 1 })
      .from(".hist-3 .hist-about ", { opacity: 0, y: 20, stagger: 0.2, duration: 1 }, "-=0.5")
      .to(".hist-3 img", { x: "-20%", opacity: 0, duration: 1, delay: 2 })
      .to(".hist-3", { visibility: "hidden" })

      .fromTo(".hist-4 img", { opacity: 0 }, { opacity: 1, duration: 1, visibility: "visible" })
      .from(".hist-4 .hist-title ", { opacity: 0, y: 20, stagger: 0.3, duration: 1 })
      .from(".hist-4 .hist-about", { opacity: 0, y: 20, stagger: 0.2, duration: 1 }, "-=0.5")

    return () => splits.forEach(s => s.revert());
},{scope:containerRef})

  return (
   <>
    <div ref={containerRef} className='min-h-screen w-screen flex-center'>

    <div className=' relative flex-center h-screen w-full'>
            {
                Historydetail.map(({title,story,image},index)=>(
                <div key={index} className={`history hist-${index + 1} w-full h-full`}>
                    <div className='text-wrapper text-white'>
                        <h1 className='hist-title text-5xl abs-center top-20'>{title}</h1>
                        <p className='hist-about abs-center-bottom'>{story}</p>
                    </div>
                    <div className='image-section abs-center'>
                        <img src={image} alt={`history-${index + 1}`} />
                    </div>
                </div>
                ))
            }
    </div>
    </div>
   </>
  )
}

export default History
