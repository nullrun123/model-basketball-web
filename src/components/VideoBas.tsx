import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import { ScrollTrigger , SplitText} from 'gsap/all';
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger,SplitText);
function VideoBas() {

  const containerRef = useRef(null);
  const boxArrowRef = useRef(null);
  const videoRef = useRef(null);
  const basketballRef = useRef(null);

 useEffect(() => {
  if (!boxArrowRef.current) return;

  const arrows = gsap.utils.toArray(
    boxArrowRef.current.querySelectorAll(".path-arrow")
  );

  arrows.forEach((path) => {
    const len = path.getTotalLength(); 
    gsap.set(path, { 
      strokeDasharray: len,
      strokeDashoffset: len, 
    });
  });

}, []);


  useGSAP(()=>{

    
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:containerRef.current,
        start:"top top",
        end:"+=500%",
        pin:true,
        scrub:2,
        anticipatePin:1,
 
      }
    })

    tl.set(videoRef.current,{
      visibility:"hidden",
    })


      tl.to(".arrow-1",{
          strokeDashoffset:0,
            duration:1.5,
            ease:"power1.inOut"
        })

      tl.to(".arrow-1",{
            fill:'#0d1927',
            duration:0.3,
            
      },"<+=0.4")

      const split_title1 = SplitText.create(".title-1", { type: "chars" });

      tl.from(split_title1.chars, {
          rotationX: -90, transformOrigin: "50% 0%",
          opacity: 0,
          stagger: { each: 0.1, from: "start" },
          duration: 0.3, ease: "power2.out"
        });

   
    const split = SplitText.create(".details-1", { type: "words" });
    tl.from(split.words, {
      opacity: 0, y: 15,
      stagger: 0.06, duration: 0.5,
      ease: "power2.out"
    });
   

    
    // 2 
      tl.to(".arrow-3",{
          strokeDashoffset:0,
            duration:1.5,
            ease:"power1.inOut"
        })

      tl.to(".arrow-3",{
            fill:'#0d1927',
            duration:0.3,
            
      },"<+=0.4")

      const split_title2 = SplitText.create(".title-3", { type: "chars" });

      tl.from(split_title2.chars, {
          rotationX: -90, transformOrigin: "50% 0%",
          opacity: 0,
          stagger: { each: 0.1, from: "start" },
          duration: 0.3, ease: "power2.out"
        });

   
    const split2 = SplitText.create(".details-3", { type: "words" });
    tl.from(split2.words, {
      opacity: 0, y: 15,
      stagger: 0.06, duration: 0.5,
      ease: "power2.out"
    });


    // 3
       tl.to(".arrow-2",{
          strokeDashoffset:0,
            duration:1.5,
            ease:"power1.inOut"
        })

      tl.to(".arrow-2",{
            fill:'#0d1927',
            duration:0.3,
            
      },"<+=0.4")

      const split_title3 = SplitText.create(".title-2", { type: "chars" });

      tl.from(split_title3.chars, {
          rotationX: -90, transformOrigin: "50% 0%",
          opacity: 0,
          stagger: { each: 0.1, from: "start" },
          duration: 0.3, ease: "power2.out"
        });

   
    const split3 = SplitText.create(".details-2", { type: "words" });
    tl.from(split3.words, {
      opacity: 0, y: 15,
      stagger: 0.06, duration: 0.5,
      ease: "power2.out"
    });



    // 4
  

       tl.to(".arrow-4",{
          strokeDashoffset:0,
            duration:1.5,
            ease:"power1.inOut"
        })

      tl.to(".arrow-4",{
            fill:'#0d1927',
            duration:0.3,
            
      },"<+=0.4")

      const split_title4 = SplitText.create(".title-4", { type: "chars" });

      tl.from(split_title4.chars, {
          rotationX: -90, transformOrigin: "50% 0%",
          opacity: 0,
          stagger: { each: 0.1, from: "start" },
          duration: 0.3, ease: "power2.out"
        });

   
    const split4 = SplitText.create(".details-4", { type: "words" });
    tl.from(split4.words, {
      opacity: 0, y: 15,
      stagger: 0.06, duration: 0.5,
      ease: "power2.out"
    });

    
    tl.to({},{
      duration:3
    })


    tl.to([split_title1.chars,split_title2.chars,split_title3.chars,split_title4.chars],{
      opacity:0,
      duration:0.5,
    })


    tl.to([split_title1.chars,split_title2.chars,split_title3.chars,split_title4.chars],{
      opacity:0,
      duration:0.5,
    })
     tl.to([split.words,split2.words,split3.words,split4.words],{
      opacity:0,
      duration:0.5,
    })
      tl.to(".path-arrow",{
      opacity:0,
      duration:0.5,
    })

    tl.to(basketballRef.current,{
      x:'50%',
      y:'10%',
      rotate:'-25deg',
      scale:1.9,
      duration:2,
      ease:"power1.inOut"
    })

    tl.to({},{
      duration:1
    })


        tl.to(basketballRef.current,{
      opacity:0,
      duration:1.5,
      ease:"power1.out",
    })
  
  tl.to(videoRef.current,{
    visibility:"visible",
    opacity:1,
    onStart:()=>{
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    },
     onComplete: () => {
        videoRef.current.play();
  },
    duration:0.4,
}, "<-=0.3")

  tl.then(() => {
  const video = videoRef.current;
  if (!video) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        video.play();
      } else {
        video.pause();
        video.currentTime = 0;
      }
    },
      { threshold: 0.4 } 
  );

  observer.observe(video);
});

        tl.to({},{
      duration:10
    })
    

  return () => tl.kill();
  })
  return (
<div ref={containerRef} className='w-screen h-screen bg-white flex items-center justify-center relative overflow-visible p-8'>
  

  <div className='relative w-[90vw] h-[100vh] border-4 border-black overflow-hidden'>
 
  <div ref={boxArrowRef} className='abs-center w-[800px] h-[800px] scale-80'>
    
      <img ref={basketballRef}  className='abs-center w-[450px] h-auto block' src="Excel-bas.png" alt="" />
 

         {/* TOP */}
            <svg viewBox="-20 -15 150 150"
            className=' abs-center w-screen h-full'
            width="100%" 
            height="100%"
            preserveAspectRatio="xMidYMid meet">
            <path
            className='path-arrow arrow-1'
            d="M26.7492 26.1684c.034.0339.0566.0792.0792.1244l1.7762 4.831c.0453.1132.0114.2602-.0791.3507s-.2376.1245-.3508.0792l-4.8196-1.7649c-.1018-.034-.1923-.1245-.215-.2376s.0113-.2376.0905-.3168l3.0661-3.066c.0791-.0792.2036-.1131.3167-.0906.0453.0226.1018.0566.1358.0906Zm.9617 4.4915L26.3872 27.0056 24.0566 29.3362l3.6543 1.3237Zm-3.5182-2.3846Q11.6512 15.7328 10.4 14.4q-0-1.6 1.6-1.6L25.4142 27.2318"
            stroke="#000"
            strokeWidth="0.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            />
            </svg>
            <h1 className='title title-1 absolute top-5 right-150 text-4xl font-extrabold w-60'>Deep Channels</h1>

             <p className="details-1 absolute top-15 right-150 text-xl text-gray-500 w-60" >
              Deep black seams between panels , improving passing and dribbling.
            </p>



            <svg viewBox="-145 -15 150 150"
            className='abs-center  w-screen h-full'
            width="100%" 
            height="100%"
            preserveAspectRatio="xMidYMid meet">
            <path
            className='path-arrow arrow-2'
            d="M-32.7105 33.4365c-.0424.0425-.099.0707-.1555.099l-6.0387 2.2203c-.1415.0566-.3252.0143-.4384-.0989s-.1556-.297-.099-.4385l2.2061-6.0245c.0425-.1273.1556-.2404.297-.2687s.297.0141.396.1131l3.8325 3.8326c.099.0989.1414.2545.1132.3959-.0283.0566-.0708.1273-.1132.1697Zm-5.6144 1.2021L-33.757 32.984-36.6703 30.0707l-1.6546 4.5679Zm2.9808-4.3978Q-19.666 14.564-18 13q2 0 2 2L-34.0398 31.7678"
            stroke="#000"
            strokeWidth="0.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            />
             
            </svg> 
            <h1 className='title title-2 absolute top-8 left-150 text-4xl font-extrabold w-65'>Pebbled Surface</h1>

             <p className="details-2 absolute top-19 left-150 text-xl text-gray-500 w-65" >
              Fine raised bumps enhance grip and ball control.
            </p>



        {/* BOTTOM */}
           <svg viewBox="-135 -130 150 150"
            className='abs-center  w-screen h-full'
            width="100%" 
            height="100%"
            preserveAspectRatio="xMidYMid meet">
            <path
            className='path-arrow arrow-3'
            d="M-26.7492-26.1684c-.034-.0339-.0566-.0792-.0792-.1244l-1.7762-4.831c-.0453-.1132-.0114-.2602.0791-.3507s.2376-.1245.3508-.0792l4.8196 1.7649c.1018.034.1923.1245.215.2376s-.0113.2376-.0905.3168l-3.0661 3.066c-.0791.0792-.2036.1131-.3167.0906-.0453-.0226-.1018-.0566-.1358-.0906Zm-.9617-4.4915L-26.3872-27.0056-24.0566-29.3362l-3.6543-1.3237Zm3.5182 2.3846Q-11.6512-15.7328-10.4-14.4q0 1.6-1.6 1.6L-25.4142-27.2318"
            stroke="#000"
            strokeWidth="0.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            />
           
        </svg>
         <h1 className='title title-3 absolute bottom-30 left-155 text-4xl font-extrabold w-65'> Butyl Bladder</h1>

             <p className="details-3 absolute bottom-15 left-155 text-xl text-gray-500 w-60" >
              Inner butyl rubber bladder retains air pressure longer.
            </p>
        

            <svg viewBox="-12 -125 150 150"
            className='abs-center  w-screen h-full'
            width="100%" 
            height="100%"
            
            preserveAspectRatio="xMidYMid meet">
            <path
            className='path-arrow arrow-4'
            d="M26.2-26.7C26.2-26.7 26.3-26.8 26.3-26.8L31.1-28.6C31.2-28.6 31.4-28.6 31.5-28.5S31.6-28.3 31.6-28.1L29.8-23.3C29.8-23.2 29.7-23.1 29.6-23.1S29.4-23.1 29.3-23.2L26.2-26.3C26.1-26.4 26.1-26.5 26.1-26.6 26.1-26.6 26.2-26.7 26.2-26.7ZM30.7-27.7 27-26.4 29.3-24.1 30.6-27.8ZM28.3-24.2Q15.7-11.7 14.4-10.4 12.8-10.4 12.8-12L27.2-25.4"
             stroke="#000"
            strokeWidth="0.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            />
   
            </svg>

            <h1 className='title title-4 absolute bottom-30 right-140 text-4xl font-extrabold w-65'>Nylon Wounds</h1>

             <p className="details-4 absolute bottom-8 right-143 text-xl text-gray-500 w-60" >
              Multi-layer nylon winding maintains a perfect round shape.
            </p>
      
    </div>
  </div>
  <div  className='abs-center  h-auto w-[70%] z-10'>
    <video ref={videoRef} className='w-full h-full ' muted playsInline src="video/video-sp.mp4"></video>
  </div>
  
</div>
  )
}

export default VideoBas
