import  {  useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger , SplitText} from 'gsap/all';
import { useGSAP } from "@gsap/react";

import { Historydetail } from '../utils/content';

gsap.registerPlugin(ScrollTrigger,SplitText);
function History() {
    const containerRef= useRef(null);
    const circleRef = useRef(null);
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
                end:"+=700%",
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
      .to(".hist-1 .hist-title ", { opacity: 0, y: 20, stagger: 0.3, duration: 1 })
      .to(".hist-1 .hist-about ", { opacity: 0, y: 20, stagger: 0.2, duration: 1 }, "-=0.5")      
      .to(".hist-1", { visibility: "hidden" })

      .fromTo(".hist-2 img", { opacity: 0 }, { opacity: 1, duration: 1, visibility: "visible" })
      .from(".hist-2 .hist-title ", { opacity: 0, y: 20, stagger: 0.3, duration: 1 })
      .from(".hist-2 .hist-about ", { opacity: 0, y: 20, stagger: 0.2, duration: 1 }, "-=0.5")
      .to(".hist-2 img", { x: "-20%", opacity: 0, duration: 1, delay: 2 })
      .to(".hist-2 .hist-title ", { opacity: 0, y: 20, stagger: 0.3, duration: 1 })
      .to(".hist-2 .hist-about ", { opacity: 0, y: 20, stagger: 0.2, duration: 1 }, "-=0.5")
      .to(".hist-2", { visibility: "hidden" })

      .fromTo(".hist-3 img", { opacity: 0 }, { opacity: 1, duration: 1, visibility: "visible" })
      .from(".hist-3 .hist-title ", { opacity: 0, y: 20, stagger: 0.3, duration: 1 })
      .from(".hist-3 .hist-about ", { opacity: 0, y: 20, stagger: 0.2, duration: 1 }, "-=0.5")
      .to(".hist-3 img", { x: "-20%", opacity: 0, duration: 1, delay: 2 })
      .to(".hist-3 .hist-title ", { opacity: 0, y: 20, stagger: 0.3, duration: 1 })
      .to(".hist-3 .hist-about ", { opacity: 0, y: 20, stagger: 0.2, duration: 1 }, "-=0.5")
      .to(".hist-3", { visibility: "hidden" })

      .fromTo(".hist-4 img", { opacity: 0 }, { opacity: 1, duration: 1, visibility: "visible" })
      .from(".hist-4 .hist-title ", { opacity: 0, y: 20, stagger: 0.3, duration: 1 })
      .from(".hist-4 .hist-about", { opacity: 0, y: 20, stagger: 0.2, duration: 1 }, "-=0.5")

    
    .to({},
        {
            duration:1,
        }
    )


    gsap.set(circleRef.current,{
      clipPath:"circle(6% at 50% 50%)",
    })

    tl.from(circleRef.current,{
      y:"100%",
      duration:2,
    })
    tl.to(circleRef.current,{
       clipPath:"circle(100% at 50% 50%)",
      duration:2,
    })


    return () => splits.forEach(s => s.revert());
},{scope:containerRef})

  return (
   <>
    <div ref={containerRef} className='min-h-screen w-screen flex-center bg-bg'>

    <div className=' relative flex-center h-screen w-full p-6'>
            {
                Historydetail.map(({title,story,image},index)=>(
                <div key={index} className={`history hist-${index + 1} w-full h-full`}>
                    <div className='text-wrapper text-white'>
                        <h1 className='w-screen flex-center hist-title text-3xl md:text-5xl abs-center top-15 text-center '>{title}</h1>
                        <div className='image-section abs-center flex-center w-full'>
                            <img className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto' src={image} alt={`history-${index + 1}`} />
                        </div>
                        <p className='hist-about abs-center-bottom w-full flex-center p-5'>{story}</p>
                    </div>
                    

                </div>
                ))
            }
    </div>
    
          <div ref={circleRef} className='abs-center z-100 h-screen w-screen bg-white'></div>
    </div>
   </>
  )
}

export default History
