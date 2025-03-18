"use client"

import { useRef, useEffect } from "react"
import { motion, useAnimation, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const backgroundImage =
    "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Parallax effect for background
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  // Animated particles
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 10 + 5,
    duration: Math.random() * 20 + 10,
  }))

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    })
  }, [controls])

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div className="absolute inset-0 w-full h-full" style={{ y: backgroundY }}>
        <Image
          src={backgroundImage || "/placeholder.svg"}
          alt="Business consulting background"
          fill
          priority
          className="object-cover"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background"
          style={{ opacity }}
        />
      </motion.div>

      {/* Animated particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/20 backdrop-blur-sm"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            x: [Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50],
            y: [Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}

      <div className="container relative z-10 px-4 mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={controls} className="max-w-3xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="inline-block"
              animate={{
                color: ["hsl(var(--foreground))", "hsl(var(--primary))", "hsl(var(--foreground))"],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
            >
              Transform
            </motion.span>{" "}
            Your Business With Expert Consulting
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We help businesses achieve their goals through strategic planning, operational excellence, and innovative
            solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="group relative overflow-hidden">
              <motion.span
                className="absolute inset-0 bg-primary/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10">Get Started</span>
              <ArrowRight className="relative z-10 ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="relative overflow-hidden">
              <motion.span
                className="absolute inset-0 bg-primary/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10">Learn More</span>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1.2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <button
          onClick={() => {
            const aboutSection = document.querySelector("#about")
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: "smooth" })
            }
          }}
          className="flex flex-col items-center text-sm font-medium"
        >
          <span className="mb-2">Scroll Down</span>
          <ArrowRight className="h-5 w-5 rotate-90" />
        </button>
      </motion.div>
    </section>
  )
}

