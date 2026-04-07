"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function About2() {
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
    <section className="py-24 px-8 bg-[#f3f3f3] overflow-hidden">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Image */}
        <div className="relative flex justify-center">
          <Image
            src="/about2.png"
            alt="Chairman"
            width={650}
            height={800}
            className="object-contain mix-blend-multiply"
            priority
          />
        </div>

        {/* Text */}
        <div className="max-w-xl">
          <p className="text-sm font-semibold tracking-widest text-[#b68a2c] uppercase mb-3">
            Meet the Chairman
          </p>

          <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
            H.E. Sheikh Mohamed Bin Faisal Al-Thani
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Qatar’s unprecedented development during the last decade has motivated
            businessmen and entrepreneurs to pursue their business ambitions.
            Driven by the National Vision 2030, the country has transformed into
            a field of investment opportunities in multiple sectors. The Government
            has been committed to encouraging independence from Hydrocarbon
            resources by seeking more participation and partner support from
            private sector to diversify and develop the country’s economy. These
            factors, along with my passion for business triggered by being involved
            in the family business by my father’s side from a young age, have
            encouraged me to establish Optimized Holding; a company offering
            innovative products and services that caters to the evolving and
            increasingly sophisticated needs of the market.
          </p>

          <a
            href="#"
            className="text-[#b68a2c] font-semibold hover:underline"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  )
}