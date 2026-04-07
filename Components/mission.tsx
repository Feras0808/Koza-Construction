"use client"

import { Card, CardContent } from "@/Components/ui/card"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"
import { useState, useEffect } from "react"

export default function Mission() {
  const stats = [
    { label: "Clients", value: 1000 },
    { label: "Projects Completed", value: 85 },
    { label: "Years of Experience", value: 10 },
  ]

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const [startCount, setStartCount] = useState(false)

  useEffect(() => {
    if (inView) setStartCount(true)
  }, [inView])

  return (
    <section
      id="mission"
      ref={ref}
      className="relative py-20 px-8 bg-gray-50"
      style={{
        backgroundImage: "url('/mission.jpg')", // your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-5xl mx-auto text-center mb-12 text-white">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-white/80">
          Our mission is to provide superior construction services by consistently improving the quality of our work, enhancing the skills of our team, and delivering projects that exceed our clients' expectations. We aim to forge lasting relationships with our clients through reliability, integrity, and exceptional performance.
        </p>
      </div>

      <div className="relative grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {stats.map((stat) => (
          <Card key={stat.label} className="text-center py-8 bg-white/10 backdrop-blur-md">
            <CardContent>
              <h3 className="text-4xl font-bold text-primary text-white/90">
                {startCount ? <CountUp end={stat.value} duration={4} /> : 0}+
              </h3>
              <p className="mt-2 text-white/90">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}