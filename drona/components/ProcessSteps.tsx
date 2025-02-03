'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface Step {
  title: string
  components: string
  description: string
  mediaUrl: string
  mediaType: 'image' | 'video'
  loop?: boolean
}

const steps: Step[] = [
  {
    title: "Solar-Powered Energy Collection",
    components: "Lightweight solar panels, lithium-polymer battery pack, charge controller.",
    description: "The drone is equipped with high-efficiency solar panels that harness sunlight to generate power. This energy is stored in a lithium-polymer battery pack via a charge controller, ensuring a steady power supply for the drone's operations. This renewable energy system allows the drone to remain operational for extended periods without external charging.",
    mediaUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-08%20at%201.06.26%E2%80%AFAM-nF0FFfkZiTQ70LmiNnjA5DtF2l5OWb.png",
    mediaType: 'image'
  },
  {
    title: "Navigation and Mobility",
    components: "GPS module, motor kit with propeller, servo motor, buoyant frame.",
    description: "The GPS module provides precise location data, allowing the drone to navigate water bodies effectively. The motor kit propels the drone, while the servo motor adjusts the direction for optimal movement. The buoyant frame ensures the drone remains stable on the water's surface, even in fluctuating conditions.",
    mediaUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-e5JLjWREIzgEVJNAvVC3ob9ES3yhqV.mov",
    mediaType: 'video',
    loop: true
  },
  {
    title: "PFAS Detection",
    components: "Enzymatic biofuel cells, miniaturized processing unit.",
    description: "The enzymatic biofuel cells detect PFOS and related PFAS compounds at environmentally relevant concentrations. When the biofuel cell interacts with PFAS in the water, it generates a measurable electrical signal. This data is processed and transmitted in real-time for analysis.",
    mediaUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-QmbfxzO19NM2NDf21PWCWY7By6KRCw.mov",
    mediaType: 'video',
    loop: false
  },
  {
    title: "Data Transmission and Mapping",
    components: "ESP32 microcontroller, LoRa communication modules, mesh network, control station.",
    description: "The processed data from the biofuel cells is sent wirelessly via LoRa modules to a mesh network of drones. The swarm relays the information to a centralized control station, where it is compiled into detailed spatial maps of PFAS contamination. The mesh network ensures efficient communication between drones, enabling real-time updates.",
    mediaUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/40-UNk6MmUn5MyBMIpqGMaLQvwDOfEc40.mov",
    mediaType: 'video',
    loop: true
  },
  {
    title: "PFAS Treatment",
    components: "Biochar module.",
    description: "The drone is equipped with biochar, a sustainable sorbent designed to adsorb PFAS directly from the water. The biochar module captures up to 90% of PFAS in targeted samples, reducing contamination levels as the drones continue their detection and mapping.",
    mediaUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.5-ZQ4ZGs2CBwA9TGX5HTVnzrwl99Nm9b.mov",
    mediaType: 'video',
    loop: false
  },
  {
    title: "Iterative Optimization and Feedback",
    components: "Modular design for upgrades, cloud-based data analytics platform.",
    description: "After deployment, the data collected by the drones is analyzed to refine their movement patterns, energy usage, and detection accuracy. The modular design allows for easy integration of improved components, ensuring the drones remain cutting-edge.",
    mediaUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-ixuS7tLTU0plTObxGdP6wUgzrXTkGR.mov",
    mediaType: 'video',
    loop: true
  }
]

export default function ProcessSteps() {
  const [selectedStep, setSelectedStep] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setSelectedStep(0)
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play()
    }
  }, [selectedStep])

  return (
    <div className="min-h-screen w-full">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <h2 className="text-3xl md:text-5xl font-bold text-[#2563EB] text-center mb-16 shadow-text">
          The Process
        </h2>

        <div className="flex justify-center mb-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <button
                key={index}
                className="text-center group relative px-4 focus:outline-none"
                onClick={() => setSelectedStep(index)}
              >
                <div 
                  className={`pb-2 border-b-2 transition-all duration-300 ${
                    selectedStep === index ? 'border-[#2563EB]' : 'border-gray-200'
                  }`}
                >
                  <h3 
                    className={`text-2xl transition-all duration-300 ${
                      selectedStep === index ? 'text-[#2563EB]' : 'text-gray-500'
                    }`}
                  >
                    Step {index + 1}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            key={`${selectedStep}-media`}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[4/3] rounded-2xl shadow-xl overflow-hidden"
          >
            {steps[selectedStep].mediaType === 'video' ? (
              <video
                ref={videoRef}
                src={steps[selectedStep].mediaUrl}
                autoPlay
                muted
                playsInline
                loop={steps[selectedStep].loop}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <Image
                src={steps[selectedStep].mediaUrl}
                alt={steps[selectedStep].title}
                fill
                className="object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent p-8">
              <h3 className="text-4xl font-bold text-white [text-shadow:_0_0_30px_rgba(255,255,255,0.5)] mb-8">
                {steps[selectedStep].title}
              </h3>
            </div>
          </motion.div>

          <motion.div
            key={`${selectedStep}-description`}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-between"
          >
            <div>
              <h4 className="text-2xl font-bold mb-4 text-[#2563EB] [text-shadow:_0_0_10px_rgba(37,99,235,0.5)]">Components Used</h4>
              <p className="text-gray-700 text-lg mb-6">{steps[selectedStep].components}</p>
            </div>

            <div>
              <h4 className="text-2xl font-bold mb-4 text-[#2563EB] [text-shadow:_0_0_10px_rgba(37,99,235,0.5)]">How It Works</h4>
              <p className="text-gray-700 text-lg">{steps[selectedStep].description}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

