"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Send } from "lucide-react"
import Image from "next/image"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Our Location",
      details: "123 Business Avenue, Suite 500, San Francisco, CA 94107",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone Number",
      details: "+1 (555) 123-4567",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email Address",
      details: "info@consultpro.com",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top-right" />

      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="text-sm font-medium text-primary mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            CONTACT US
          </motion.h2>
          <motion.h3
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Get In Touch With Our Team
          </motion.h3>
          <motion.p
            className="text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Have questions or ready to start your consulting journey? Reach out to us and one of our experts will get
            back to you shortly.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-none shadow-xl bg-background relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/80 to-primary/20" />

              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>

              <CardContent>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-primary/10 p-6 rounded-lg text-center"
                  >
                    <h4 className="text-xl font-bold mb-2">Thank You!</h4>
                    <p>Your message has been sent successfully. We'll be in touch soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or inquiry..."
                        rows={4}
                        required
                        className="resize-none transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                      />
                    </div>

                    <Button type="submit" className="w-full group" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </Button>
                  </form>
                )}

                <div className="mt-8 pt-6 border-t grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">{item.icon}</div>
                      <div>
                        <h4 className="text-sm font-medium">{item.title}</h4>
                        <p className="text-xs text-muted-foreground">{item.details}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right side - Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-full min-h-[400px] lg:min-h-[600px] grid grid-cols-2 gap-4"
          >
            <div className="flex flex-col gap-4">
              <motion.div
                className="relative rounded-lg overflow-hidden h-64 shadow-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=500&auto=format&fit=crop"
                  alt="Office meeting"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                className="relative rounded-lg overflow-hidden h-48 shadow-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=500&auto=format&fit=crop"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
            <div className="flex flex-col gap-4 mt-8">
              <motion.div
                className="relative rounded-lg overflow-hidden h-48 shadow-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=500&auto=format&fit=crop"
                  alt="Business presentation"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                className="relative rounded-lg overflow-hidden h-64 shadow-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=500&auto=format&fit=crop"
                  alt="Office workspace"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

