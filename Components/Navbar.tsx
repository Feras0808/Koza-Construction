"use client"

import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="relative max-w-7xl mx-auto h-24 px-6">

        {/* Logo */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2">
          <Link href="/">
            <Image
              src="/koza.png"
              alt="Koza Construction Logo"
              width={140}
              height={70}
              priority
            />
          </Link>
        </div>

        {/* Centered Menu */}
        <div className="flex h-full items-center justify-center">
          <div className="flex gap-10 text-gray-800 font-medium">
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

      </div>
    </nav>
  )
}