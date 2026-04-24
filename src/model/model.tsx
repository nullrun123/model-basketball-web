import {  useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { Group } from 'three';
interface ModelProps {
  props?: any;
  scale?: number;
  targetscale: number;
}
export function Model({props,scale=1.8,targetscale}:ModelProps) {
  const { nodes, materials } = useGLTF('model/basketball.glb')
  // Group ใน Three.js คือ container สำหรับรวม object 3D หลายๆ ชิ้นเข้าด้วยกัน
  const modelRef = useRef<Group>(null);    // → type: MutableRefObject<Group | null>


  useGSAP(()=>{
    if (!modelRef.current) return; 
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
          geometry={(nodes.defaultMaterial as any).geometry}
          material={materials.None}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('model/basketball.glb')