import React from 'react'
import Image from 'next/image'

interface CombinedDronaLogoProps {
  className?: string
}

const CombinedDronaLogo: React.FC<CombinedDronaLogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="flex items-center justify-center">
        <div className="relative w-24 h-24 -mr-3 mb-5">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-04%20at%2012.46.09%E2%80%AFAM-MPdmxUXlfMMeYGdyQXhUSoAsydtI59.png"
            alt="DronaLogo"
            width={96}
            height={96}
            className="brightness-0 invert"
            style={{ 
              filter: 'brightness(0) invert(25.5%) sepia(96.5%) saturate(1972.5%) hue-rotate(212deg) brightness(95.5%) contrast(98%) drop-shadow(0 0 10px rgba(34.5,92,218,0.5))',
            }}
          />
        </div>
        <span className="relative text-7xl font-bold" style={{ color: '#0065FA', textShadow: '0 0 30px rgba(0,101,250,0.5)' }}>
          rona
        </span>
      </div>
    </div>
  )
}

export default CombinedDronaLogo

