"use client"

import { Card, CardContent } from "@/Components/ui/card"
import { useRef, useEffect, useState } from "react"

export default function Projects() {
  const projects = [
    { name: "Office Tower", image: "/pr2.jpg" },
    { name: "Luxury Villa", image: "/pr3.jpg" },
    { name: "Shopping Mall", image: "/pr.jpg" },
    { name: "Hotel Resort", image: "/hotel.jpg" }, // fixed image path
    { name: "Chemical Industry", image: "/pr6.jpg" },
    { name: "Cafes & Resturants", image: "/pr8.jpg" },
  ]

  const scrollRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const scrollSpeed = 1.5 // pixels per frame

  // Detect if section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  // Auto-scroll infinite (duplicate internally)
  useEffect(() => {
    let animationFrame: number

    const animate = () => {
      if (scrollRef.current && inView && !isPaused) {
        scrollRef.current.scrollLeft += scrollSpeed
        const scrollWidth = scrollRef.current.scrollWidth / 2
        if (scrollRef.current.scrollLeft >= scrollWidth) {
          scrollRef.current.scrollLeft -= scrollWidth
        }
      }
      animationFrame = requestAnimationFrame(animate)
    }

    animate()
    return () => cancelAnimationFrame(animationFrame)
  }, [inView, isPaused])

  // Use duplicate only for scrolling logic
  const carouselItems = isPaused ? projects : [...projects, ...projects]

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-8 bg-black relative">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#d4af37]">
        Recent Projects
      </h2>

      <div
        ref={scrollRef}
        className="flex space-x-8 overflow-x-auto scrollbar-hide py-4 cursor-grab"
      >
        {carouselItems.map((project, index) => (
          <Card
            key={index}
            onClick={() => setIsPaused(true)}
            className="flex-shrink-0 w-80 bg-gradient-to-br from-[#0a0a0a] to-[#1c1c1c] text-white rounded-3xl shadow-2xl transform hover:-translate-y-6 hover:scale-105 transition-all duration-500 cursor-pointer"
          >
            <CardContent className="p-4">
              <img
                src={project.image}
                alt={project.name}
                className="h-48 w-full object-cover rounded-2xl mb-4"
              />
              <h3 className="font-bold text-xl text-[#d4af37]">{project.name}</h3>
              <p className="text-gray-300 mt-2">
                Description of {project.name} goes here. Replace with real content.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}