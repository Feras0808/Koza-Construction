import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b">
      <h1 className="text-xl font-bold">KOZA</h1>

      <div className="hidden md:flex gap-6">
        <Link href="#about">About</Link>
        <Link href="#services">Services</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
      </div>

      <Button>Get Quote</Button>
    </nav>
  )
}