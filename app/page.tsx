import Navbar from "@/Components/Navbar"
import Hero from "@/Components/hero"
import About from "@/Components/about"
import Services from "@/Components/services"
import Projects from "@/Components/projects"
import CTA from "@/Components/cta"
import Contact from "@/Components/contact"
import Footer from "@/Components/footer"
import Mission from "@/Components/mission"
import BackToTop from "@/Components/Backtotop"
import About2 from "@/Components/about2"
import About3 from "@/Components/about3"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <About2 />
      <Mission />
      <About3 />
      <Services />
      <Projects />
      <CTA />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  )
}