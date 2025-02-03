"use client"

import { useState, useEffect } from "react"

export default function VideoComponent() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null // or a loading spinner
  }

  return (
    <div className="w-full max-w-4xl aspect-video">
      <iframe
        src="https://drive.google.com/file/d/1dpxqjpqd1FYFzjfESYYU21AOWSzSO21I/preview"
        allow="autoplay"
        className="w-full h-full"
      ></iframe>
    </div>
  )
}

