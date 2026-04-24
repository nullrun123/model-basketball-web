import { Suspense, useEffect, useRef, useState } from 'react'
import ReactLenis from 'lenis/react'
import Hero from './components/Hero'
import About from './components/About'
import { Html, useProgress } from '@react-three/drei'
import gsap from  'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from '@gsap/react'
import History from './components/History'
import Contact from './components/contact'
import SignatureBlock from './components/SignatureBlock'
import { Canvas } from '@react-three/fiber'
import ModelSet from './model/modelSet'
import { useMediaQuery } from 'react-responsive'
import VideoBas from './components/VideoBas'
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
  const isMoblie = useMediaQuery({maxWidth:768})
  const basRef = useRef(null);
  const containerRef = useRef(null);
  const [scaleBas, setScaleBas] = useState<number>(1.8);


  useGSAP(()=>{
    gsap.set(basRef.current, { 
    y: (isMoblie ? 140 : 280), 
    x: 0 
  });
   if(isMoblie) return;
     const tl = gsap.timeline({
      scrollTrigger:{
        trigger:containerRef.current,
        start:"top top",
        end: "+=70% center",
        // markers:true,
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate:(self)=>{
          const progress = self.progress;
         
          if(progress > 0.7){
          setScaleBas(1.4);
          }else{
            setScaleBas(isMoblie ? 1.2 : 1.8);
          }
          
        }
      }
     })
     
     

     tl.to(basRef.current,{
      x:'-28%',
      y:'100%',
      duration:5,
     })

 
   return () => {
    tl.kill(); // ทำความสะอาด timeline เก่า
  };
  }, { scope: containerRef ,dependencies: [isMoblie]}); 


  
  useEffect(()=>{


      if(isMoblie){
      setScaleBas(1.15);
      }else{
        setScaleBas(1.75);
      }

     const handleResize = () => {
      ScrollTrigger.refresh(); // คำนวณ resize
    };
    if (!sessionStorage.getItem('refreshed')) {
          sessionStorage.setItem('refreshed', 'true');
          window.location.reload();
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  },[isMoblie])

   
  return (
   <ReactLenis root className='flex flex-col h-full w-full' >
      {/* <div ref={containerRef} className='body main-box relative h-full w-full '>
       <Hero/>
    <div ref={basRef}  className='absolute z-22 top-0 left-0 h-screen w-screen flex-center'>
      <Canvas >
        <Suspense fallback={<LoadPage/>}>
              <ModelSet scaleProps={scaleBas}/>
        </Suspense>
      </Canvas>
    </div>
    <About/>
    </div>

      <History/> */}
      <VideoBas/>
      <SignatureBlock/>
      <Contact/>
   </ReactLenis>
  )
}

export default App
