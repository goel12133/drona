'use client'

import * as React from 'react'
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Group } from 'three'

interface DroneModelProps {
  position: [number, number, number]
  scale: [number, number, number]
}

export default function DroneModel({ position, scale }: DroneModelProps) {
  const groupRef = useRef<Group>(null!)
  const { scene } = useGLTF('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ImageToStl.com_drone-EcgQ9bifQeHcXuSt9JphpS576BQ5tF.glb')

  return (
    <group ref={groupRef} position={position} scale={scale}>
      <primitive object={scene} />
    </group>
  )
}

useGLTF.preload('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ImageToStl.com_drone-EcgQ9bifQeHcXuSt9JphpS576BQ5tF.glb')

