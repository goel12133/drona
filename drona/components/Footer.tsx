import { Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-[#4A90E2] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2025 Drona. All Rights Reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/drone_a_official/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200"><Instagram /></a>
            <a href="#" className="hover:text-gray-200"><Linkedin /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

