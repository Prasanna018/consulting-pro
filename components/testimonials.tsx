"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote:
      "Working with ConsultPro transformed our business. Their strategic insights and practical recommendations helped us increase revenue by 35% in just one year.",
    author: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
  },
  {
    quote:
      "The team at ConsultPro provided invaluable guidance during our digital transformation journey. Their expertise and hands-on approach made all the difference.",
    author: "Michael Chen",
    position: "CTO, Global Solutions",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
  },
  {
    quote:
      "ConsultPro's organizational development program helped us build a stronger leadership team and improve employee engagement across the company.",
    author: "Emily Rodriguez",
    position: "HR Director, Innovate Group",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=100&auto=format&fit=crop",
  },
  {
    quote:
      "Their financial advisory services helped us optimize our cost structure and make smarter investment decisions, resulting in improved profitability.",
    author: "David Wilson",
    position: "CFO, Enterprise Systems",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  useEffect(() => {
    if (autoplay) {
      timeoutRef.current = setTimeout(() => {
        nextTestimonial()
      }, 5000)
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [current, autoplay])

  const handleMouseEnter = () => setAutoplay(false)
  const handleMouseLeave = () => setAutoplay(true)

  return (
    <section id="testimonials" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary" />
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-primary" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-primary" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-medium text-primary mb-2">TESTIMONIALS</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h3>
          <p className="text-muted-foreground">
            Don't just take our word for it. Here's what our clients have to say about their experience working with our
            consulting team.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="absolute -top-10 -left-10 text-primary/10">
            <Quote size={80} />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
              className="relative"
            >
              <Card className="border-none shadow-lg bg-background">
                <CardContent className="p-8">
                  <motion.p
                    className="text-lg md:text-xl mb-6 italic"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    "{testimonials[current].quote}"
                  </motion.p>
                  <motion.div
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <Avatar className="h-12 w-12 mr-4 border-2 border-primary/20">
                      <AvatarImage src={testimonials[current].avatar} alt={testimonials[current].author} />
                      <AvatarFallback>
                        {testimonials[current].author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold">{testimonials[current].author}</h4>
                      <p className="text-sm text-muted-foreground">{testimonials[current].position}</p>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  current === index ? "bg-primary w-6" : "bg-primary/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12">
            <Button
              size="icon"
              variant="ghost"
              onClick={prevTestimonial}
              className="rounded-full bg-background shadow-md hover:bg-primary/10"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12">
            <Button
              size="icon"
              variant="ghost"
              onClick={nextTestimonial}
              className="rounded-full bg-background shadow-md hover:bg-primary/10"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

