"use client"

import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/koza.png"
            alt="Koza Construction Logo"
            width={150}
            height={75}
            priority
            className="h-auto w-auto object-contain"
          />
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6 md:gap-8 text-gray-800 font-medium">
          <Link href="#about" className="hover:text-orange-500 transition">
            About
          </Link>

          <Link href="#services" className="hover:text-orange-500 transition">
            Services
          </Link>

          <Link href="#projects" className="hover:text-orange-500 transition">
            Projects
          </Link>

          <Link href="#contact" className="hover:text-orange-500 transition">
            Contact
          </Link>
        </div>

      </div>
    </nav>
  )
}