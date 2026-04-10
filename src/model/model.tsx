import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'

export function Model({props,scale=1.8,targetscale}) {
  const { nodes, materials } = useGLTF('model/basketball.glb')
  const modelRef= useRef(null);


  useGSAP(()=>{
      gsap.to(modelRef.current.scale,{
        x:targetscale,
        y:targetscale,
        z:targetscale,
         duration: 1,
      })
  },[targetscale])
  return (
    <group ref={modelRef} scale={scale} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2,0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial.geometry}
          material={materials.None}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('model/basketball.glb')