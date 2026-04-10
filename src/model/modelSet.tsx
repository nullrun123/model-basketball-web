import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import React, { useRef, useState } from 'react'
import { Model } from './model'
import { useFrame } from '@react-three/fiber';
import StudioLight from './StudioLight';

function ModelSet({scaleProps}:{scaleProps:Number}) {
    const cameraRef = useRef(null);

    

  return (
    <>
    <OrbitControls ref={cameraRef} autoRotate autoRotateSpeed={1.3} enableZoom={false}/>
     <PerspectiveCamera 
    ref={cameraRef}
    fov={85} 
    near={.1}  // ระยะใกล้สุดที่มองเห็น
    far={10000}  
    makeDefault 
    position={[0,2.5,3.6]}
  

    />
    <StudioLight/>
    {/* <Environment preset='city'/> */}
    <Model targetscale={scaleProps} props={undefined}/>
    <axesHelper args={[500]}/>
    </>
  )
}

export default ModelSet
