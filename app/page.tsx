"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { motion, useScroll, useSpring } from "framer-motion"

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Smooth scroll to section when URL has hash
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1)
      const element = document.getElementById(id)
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: "smooth",
          })
        }, 100)
      }
    }
  }, [])

  return (
    <main className="min-h-screen">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left" style={{ scaleX }} />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

