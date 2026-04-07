import Link from "next/link"
import { Phone, Mail, Globe, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-8 border-t text-center text-muted-foreground">

      {/* Icons */}
      <div className="flex justify-center gap-8 mb-6">
        <a href="tel:+97444223868" className="hover:text-orange-500 transition">
          <Phone size={24} />
        </a>

        <a href="mailto:mood.youssef@optimizedholding.com.qa" className="hover:text-orange-500 transition">
          <Mail size={24} />
        </a>

        <a
          href="https://optimizedholding.com.qa/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-500 transition"
        >
          <Globe size={24} />
        </a>

        <a
          href="https://maps.google.com/?q=City Tower Omar Al Mukhtar St Doha"
          target="_blank"
          className="hover:text-orange-500 transition"
        >
          <MapPin size={24} />
        </a>
      </div>

      {/* Logo */}
      <div className="mb-4">
        <a href="/" className="inline-block">
          <img
            src="/Koza.png"
            alt="Koza Construction Logo"
            className="mx-auto h-40 w-auto"
          />
        </a>
      </div>

      {/* Ownership */}
      <p className="text-sm mb-2">
        A company owned by{" "}
        <a
          href="https://optimizedholding.com.qa/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold hover:text-orange-500 transition"
        >
          Optimized Holding
        </a>
      </p>

      {/* Copyright */}
      <p className="text-sm">
        © {new Date().getFullYear()} Koza Construction. All rights reserved.
      </p>

    </footer>
  )
}