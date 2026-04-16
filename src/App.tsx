import React, { Suspense, useEffect, useRef, useState } from 'react'
import ReactLenis from 'lenis/react'
import Hero from './components/Hero'
import About from './components/About'
import { Html, useProgress } from '@react-three/drei'
import gsap from  'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from '@gsap/react'
import History from './components/History'
const LoadPage = ()=>{

  
  const { progress } = useProgress();

  return(
    <Html center>
      <div className='text-white text-2xl'>
      <p>{progress.toFixed(0)}%</p>
        </div> 

    </Html>
  )
}


function App() {
  const basRef = useRef(null);
  const containerRef = useRef(null);
  const [scaleBas, setScaleBas] = useState<Number>(1.8);
  
  useGSAP(()=>{

    gsap.set(basRef.current, { 
    y: 280, 
    x: 0 
  });
     const tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.main-box',
        start:"top top",
        end: "bottom bottom",
        markers:true,
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate:(self)=>{
          const progress = self.progress;
          // console.log(progress)
          if(progress > 0.3 && progress <= 0.8){
          setScaleBas(1.3);
          }else if(progress >= 0.8){
            setScaleBas(2);
          }else{
            setScaleBas(1.8);
          }
          
        }
      }
     })
     
     

     tl.to(basRef.current,{
      x:'-30%',
      y:()=> window.innerHeight*0.04,
      duration:1,
      
     })
      tl.to(basRef.current,{
      x:'40%',
      y: ()=> window.innerHeight*0.001,
      duration:1,
    
  })

 

   },{scope:containerRef}
  )

  
  useEffect(()=>{
     const handleResize = () => {
      ScrollTrigger.refresh();  // 👈 คำนวณใหม่ทุกครั้งที่ resize
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  },[])

   
  return (
   <ReactLenis root >
    {/* <TextAnim/> */}
    <div ref={containerRef} className='main-box relative h-full w-full'>
      
       <Hero/>
    {/* <div ref={basRef}  className='fixed top-0 left-0 w-screen border-2 border-l-pink-200 h-screen'>
      <Canvas>
        <Suspense fallback={<LoadPage/>}>
              <ModelSet scaleProps={scaleBas}/>
        </Suspense>
      
      </Canvas>
    </div> */}
    <About/>
    <div className='h-[100vh] w-screen border-2 border-blue-400'></div>
    </div>
    <History/>
   
   </ReactLenis>
  )
}

export default App
