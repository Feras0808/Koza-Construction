import Link from "next/link"
import { Button } from "@/Components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex flex-col justify-center items-center text-center px-6 text-white">
      
    
      <Image
        src="/hero.jpg"
        alt="Construction site"
        fill
        className="object-cover -z-10"
        priority
      />

     
      <div className="absolute inset-0 bg-black/50 -z-10"></div>

      <h1 className="text-5xl font-bold max-w-3xl">
        Building the Future with Quality Construction
      </h1>

      <p className="mt-6 max-w-xl text-gray-200">
        Koza Construction delivers reliable construction solutions with
        innovative designs and exceptional craftsmanship.
      </p>

     <div className="flex gap-4 mt-6">
  <Link href="#projects">
    <Button className="bg-orange-500 hover:bg-orange-600">
      View Projects
    </Button>
  </Link>

        <Link href="#contact">
  <Button
    variant="outline"
    className="border-white text-black hover:text-black"
  >
    Contact Us
  </Button>
</Link>
      </div>
    </section>
  )
}