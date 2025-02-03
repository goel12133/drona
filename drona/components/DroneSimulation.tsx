'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import DroneModel from './DroneModel'

export default function DroneSimulation() {
  return (
    <section id="simulation" className="w-full pt-20 pb-0">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Meet Our Drone</h1>
        <div className="w-full h-96 relative mb-8">
          <Canvas>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <DroneModel position={[0, 0, 0]} scale={[0.5, 0.5, 0.5]} />
            <OrbitControls />
          </Canvas>
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl mb-4">
            Our state-of-the-art drone is designed for precision, efficiency, and adaptability. It's equipped with cutting-edge technology for real-time mapping and detection, making it perfect for water quality monitoring and environmental surveillance.
          </p>
          <p className="text-xl">
            Interact with the 3D model above to explore our drone's features. You can rotate, zoom, and pan to get a closer look at its innovative design.
          </p>
        </div>
      </div>
    </section>
  )
}

