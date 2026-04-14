import React, { useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger , SplitText} from 'gsap/all';
import { useGSAP } from "@gsap/react";

function History() {
    const containerRef= useRef(null);

    useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:containerRef.current,
                start:"center center",
                end:"+=500%",
                scrub:1,
                pin:true,
                pinSpacing:true,
            },
            ease:"power3.out",
            duration:1,
        })

        // Setup
        gsap.set(".pic-bas-1",{visibility:"visible"});
        gsap.set(".pic-bas-2",{visibility:"hidden"});
        gsap.set(".pic-bas-3",{visibility:"hidden"});
        gsap.set(".pic-bas-4",{visibility:"hidden"});

        tl.to(".pic-bas-1",{
            x:"-20%",
            delay:2,
            opacity:0,
        
        })
        tl.to('.pic-bas-1',{
                    visibility:"hidden"
        })

        tl.fromTo('.pic-bas-2', {
            opacity: 0,
         
        }, {
            opacity: 1,
            
            duration: 1,
            visibility:"visible"
    
})

        tl.to(".pic-bas-2",{
            x:'-20%',
            delay:2,
            opacity:0,
        
        })
        tl.to('.pic-bas-2',{

            visibility:"hidden"
        })
    
        tl.fromTo('.pic-bas-3', {
            opacity: 0,
         
        }, {
            opacity: 1,
            duration: 1,
             visibility:"visible"
    
    })
    tl.to(".pic-bas-3",{
            x:'-20%',
            delay:2,
            opacity:0,
        
        })
        tl.to('.pic-bas-3',{

            visibility:"hidden"
        });
    
        tl.fromTo('.pic-bas-4', {
            opacity: 0,
         
        }, {
            opacity: 1,
            duration: 1,
            visibility:"visible"
    
}
)

        
    })
  return (
   <>
    <div ref={containerRef} className='min-h-screen w-screen flex-center'>

    <div className='history relative flex-center h-screen w-full'>
            <div className='pic-bas-1 abs-center'>
                <img src="sp1894-b.png" alt="sp1894-b" />
            </div>
            <div className='pic-bas-2 abs-center'>
                
                <img src="sp1972-b.png" alt="sp1972-b" />
            </div>
            <div className='pic-bas-3 abs-center'>
                <img src="sp1983-b.png" alt="sp1983-b" />
            </div>
            <div className='pic-bas-4 abs-center'>
                <img src="sp2025-b.png" alt="sp2025-b" />
            </div>
    </div>
        
    </div>
   </>
  )
}

export default History
