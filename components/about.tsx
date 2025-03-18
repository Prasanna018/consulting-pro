"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, type: "spring", stiffness: 100 },
    },
  }

  return (
    <section id="about" className="py-20 bg-muted/30 relative">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute top-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-1 h-16 bg-primary/20 rounded-full mx-auto relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 right-0 h-1/2 bg-primary"
            animate={{
              y: [0, 32, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
      <div className="container px-4 mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-lg" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-lg" />
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                alt="About our consulting company"
                width={600}
                height={600}
                className="w-full h-auto object-cover rounded-lg shadow-xl"
              />
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <h2 className="text-sm font-medium text-primary mb-2">ABOUT US</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">We Help Businesses Reach Their Full Potential</h3>
            </motion.div>

            <motion.p variants={itemVariants} className="text-muted-foreground">
              With over 15 years of experience, our team of expert consultants has helped hundreds of businesses across
              various industries achieve sustainable growth and operational excellence.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-4">
              {[
                "Strategic business planning and execution",
                "Operational efficiency and process optimization",
                "Digital transformation and technology integration",
                "Leadership development and organizational change",
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <p>{item}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { number: "500+", label: "Clients" },
                  { number: "15+", label: "Years" },
                  { number: "98%", label: "Satisfaction" },
                ].map((stat, index) => (
                  <div key={index} className="p-4 rounded-lg bg-background">
                    <h4 className="text-2xl md:text-3xl font-bold text-primary">{stat.number}</h4>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

