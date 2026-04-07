"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/Components/ui/button"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 py-2 md:py-3 backdrop-blur-md bg-white/30 border-b border-white/20 shadow-sm">


      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/koza.png"
          alt="Koza Construction Logo"
          width={120}
          height={60}
          priority
        />
      </Link>

     
      <div className="flex flex-wrap gap-4 md:gap-6 text-gray-800 font-medium">
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

      {/* CTA Button */}
      <Button className="transition-shadow duration-300 hover:shadow-lg hover:shadow-orange-400/50">
        Get Quote
      </Button>

    </nav>
  )
}