'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import DroneModel from './DroneModel'

const portfolioItems = [
  {
    title: 'Water Quality Monitoring',
    description: 'Our drone efficiently monitors water quality in urban areas, providing real-time data on contamination levels.',
  },
  {
    title: 'Environmental Surveillance',
    description: 'Drona drones conduct comprehensive environmental surveys, helping to identify and address ecological concerns.',
  },
  {
    title: 'Disaster Response',
    description: 'In emergency situations, our drones assist in rapid assessment and response, aiding in disaster management efforts.',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="w-full pt-0 pb-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Drone in Action</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-full h-64 mb-4 relative">
                <Canvas>
                  <ambientLight intensity={0.5} />
                  <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                  <pointLight position={[-10, -10, -10]} />
                  <DroneModel position={[0, 0, 0]} scale={[0.3, 0.3, 0.3]} />
                  <OrbitControls enableZoom={false} enablePan={false} />
                </Canvas>
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

