import { Environment, Lightformer } from '@react-three/drei'
import React from 'react'

function StudioLight() {
  return (
    <group name="light">
        {/* resolution ความละเอียดสภาพแวดฃ้อม */}
        <Environment resolution={256}>
            <group>
                <Lightformer 
                form="rect"
                intensity={10}
                position={[-10,5,-5]}
                scale={10}
                rotation-y={Math.PI/2}/>

                 <Lightformer 
                form="rect"
                intensity={10}
                position={[10,0,1]}
                scale={10}
                rotation-y={Math.PI/2}/>
            </group>
        </Environment>

{/* แสดง spot ขึ้นมา */}
        <spotLight 
        // position ทิศมทางแสงอยู่
        position={[-2,10,55]}
            angle={0.15}
            decay={0}
            intensity={Math.PI*0.3}></spotLight>
            <spotLight 
        position={[0,-25,10]}
            angle={0.15}
            decay={0}
            intensity={Math.PI*0.2}></spotLight>
           
    </group>
  )
}

export default StudioLight
