"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function About3() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [])

  return (
    <section className="bg-black py-28 px-8 overflow-hidden">
      <div
        ref={ref}
        className="max-w-6xl mx-auto bg-[#f3f3f3] rounded-md shadow-2xl p-12 grid md:grid-cols-2 gap-16 items-center"
      >
        {/* Image */}
        <div
          className={`flex justify-center transition-all duration-1000 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
          }`}
        >
          <Image
            src="/about3.png"
            alt="Group GM"
            width={420}
            height={520}
            className="object-contain"
          />
        </div>

        {/* Text */}
        <div
          className={`transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
          }`}
        >
          <p className="text-sm font-semibold tracking-widest text-[#b68a2c] uppercase mb-3">
            Meet the Group GM
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Reda Salem
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            At Optimized Holding, we are driven by a commitment to not only
            meet but exceed the highest standards of excellence, reflecting the
            values of Qatar’s dynamic business landscape. Embracing the spirit
            of Qatar’s National Vision 2030, for a diversified and innovative
            economy, we continuously push the boundaries of what is possible.
            Through a culture of perseverance, collaboration, creativity, and
            cutting-edge innovation, we aim to create lasting value for our
            stakeholders and contribute significantly to the growth of Qatar’s
            key industries.
          </p>

          
        </div>
      </div>
    </section>
  )
}