'use client'

import * as React from 'react'
import { useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Video } from 'lucide-react'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import ProcessSteps from './ProcessSteps'
import DroneImageSequence from './DroneImageSequence'

const AnimatedSection = ({ children, id, className }: { children: React.ReactNode, id: string, className?: string }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  React.useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.section
      id={id}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
      className={`w-full flex flex-col items-center justify-start py-12 ${className || ''}`}
    >
      {children}
    </motion.section>
  )
}

export default function MeetOurDrone() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div 
      ref={containerRef}
      className="w-full"
    >
      <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover filter blur-sm"
        >
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dronavid-z0GwSZmVbNzvQzmJt28cszBuMbZDQP.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-7xl font-bold mb-8 tracking-tight text-white [text-shadow:_0_0_30px_rgba(0,0,0,0.7),_0_0_60px_rgba(0,0,0,0.4)]">
            Meet our Drone
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white [text-shadow:_0_0_15px_rgba(0,0,0,0.7),_0_0_30px_rgba(0,0,0,0.4)]">
            Real-time PFAS detection, powered by Drona.
          </p>
          <div className="flex flex-col items-center space-y-4">
            <a href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dronavid-z0GwSZmVbNzvQzmJt28cszBuMbZDQP.mp4" target="_blank" rel="noopener noreferrer" className="flex items-center text-white hover:text-gray-200 transition-colors [text-shadow:_0_0_10px_rgba(0,0,0,0.5)]">
              <span className="mr-2">Watch the full animated simulation</span>
              <Video size={16} />
            </a>
            <Link href="/store" className="px-6 py-2 bg-white text-[#2563EB] rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl">
              Buy
            </Link>
          </div>
        </div>
      </div>

      <AnimatedSection id="process">
        <ProcessSteps />
      </AnimatedSection>

      <AnimatedSection id="model" className="bg-[#C6C7C6] py-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1A365D] text-center mb-8 shadow-text">Take a closer look</h2>
        <DroneImageSequence />
        <div className="mt-8 text-center">
          <p className="text-xl md:text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-[#1A365D] via-[#2B6CB0] to-[#4299E1] [text-shadow:_0_0_15px_rgba(30,64,175,0.5),_0_0_30px_rgba(30,64,175,0.3)]">
            Forever chemicals, gone forever.
          </p>
        </div>
      </AnimatedSection>
    </div>
  )
}

