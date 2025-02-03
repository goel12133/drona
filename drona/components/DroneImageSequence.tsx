'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const images = [
  { number: 12, url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0012-iQYUTlR8Nu42GSo4uWlnfSiGdWNVXB.png" },
  { number: 24, url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0024-MtwIP6Hy43c9wUGK9qcRBSzde08Aba.png" },
  { number: 36, url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0036-SgEDbJY36lyTsLHMk0mSD4rn8BvpBP.png" },
  { number: 48, url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0048-bGhlDE6FQDPENUaPlwoKaSq6smLs2r.png" },
  { number: 60, url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0060-DZApHYf7bGEU7gbWF7u0aJKsBBTh46.png" },
  { number: 72, url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0072-tc6vIEcDokfildxm9dfG8HphQDyJAx.png" },
  { number: 84, url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0084-FKo5Qj7oyllnuugx3oxib5u2szmD54.png" },
  { number: 96, url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0096-3gRz8ciElqsS58EXFpNkeU5Z4bCA4J.png" },
  { number: 108, url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0108-SzLj8xt7jJ5hC8Zm8bOjPRCQJLejkm.png" },
]

export default function DroneImageSequence() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[600px] max-w-6xl mx-auto bg-[#C6C7C6]">
      {images.map((image, index) => (
        <div
          key={image.number}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image.url}
            alt={`Drone view ${image.number}`}
            fill
            className="object-contain"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  )
}

