"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import DronaLogo from "./DronaLogo"

const navItems = {
  home: {
    name: "Home",
    href: "/",
    columns: [
      {
        title: "Explore Drona",
        links: [
          { name: "Welcome to Drona", href: "/#welcome" },
          { name: "About Us", href: "/#about" },
          { name: "Meet the team", href: "/#team" },
          { name: "Our story and vision", href: "/#vision" },
        ],
      },
    ],
  },
  meetDrone: {
    name: "Meet Our Drone",
    href: "/meet-our-drone",
    columns: [
      {
        title: "Our Drone",
        links: [
          { name: "Model", href: "/meet-our-drone#model" },
          { name: "The Process", href: "/meet-our-drone#process" },
        ],
      },
    ],
  },
  store: {
    name: "Store",
    href: "/store",
    columns: [
      {
        title: "Our Services",
        links: [
          { name: "Subscriptions", href: "/store#subscriptions" },
          { name: "Maintenance", href: "/store#maintenance" },
          { name: "DronaData", href: "/store#dronadata" },
        ],
      },
    ],
  },
  video: {
    name: "Video",
    href: "/video",
    columns: [],
  },
  support: {
    name: "Support",
    href: "/support",
    columns: [],
  },
}

export default function Navigation() {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null)
  const navRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = (menuId: string) => {
    if (navItems[menuId as keyof typeof navItems].columns.length > 0) {
      setExpandedMenu(menuId)
    }
  }

  const handleMouseLeave = () => {
    setExpandedMenu(null)
  }

  return (
    <div
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 bg-white transition-all duration-300 ease-in-out ${
        expandedMenu ? "shadow-xl" : "shadow-sm"
      }`}
      onMouseLeave={handleMouseLeave}
    >
      <nav className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center">
              <DronaLogo className="w-12 h-12" />
            </Link>
            <ul className="flex space-x-8">
              {Object.entries(navItems).map(([id, item]) => (
                <li key={id} className="relative nav-item" onMouseEnter={() => handleMouseEnter(id)}>
                  <Link
                    href={item.href}
                    className={`hover:text-[#2563EB] px-3 py-2 rounded-md transition duration-300 ease-in-out hover:bg-gray-50 ${
                      expandedMenu === id ? "text-[#2563EB]" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Expanded Menu */}
        {expandedMenu && navItems[expandedMenu as keyof typeof navItems].columns.length > 0 && (
          <div className="w-full bg-white">
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-4 gap-8">
                {navItems[expandedMenu as keyof typeof navItems].columns.map((column, idx) => (
                  <div key={idx} className="space-y-4">
                    <h3 className="font-bold text-gray-900 text-sm">{column.title}</h3>
                    <ul className="space-y-2">
                      {column.links.map((link, linkIdx) => (
                        <li key={linkIdx}>
                          <Link
                            href={link.href}
                            className="text-gray-600 hover:text-[#4A90E2] text-sm transition duration-300"
                            onClick={(e) => {
                              e.preventDefault()
                              setExpandedMenu(null)
                              const [path, hash] = link.href.split("#")
                              if (hash) {
                                if (path === "/" || path === "") {
                                  // If it's the home page, scroll immediately
                                  setTimeout(() => {
                                    const element = document.getElementById(hash)
                                    if (element) {
                                      element.scrollIntoView({ behavior: "smooth", block: "start" })
                                    }
                                  }, 100)
                                } else {
                                  // If it's another page, navigate and then scroll
                                  window.location.href = link.href
                                }
                              } else {
                                window.location.href = link.href
                              }
                            }}
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}

