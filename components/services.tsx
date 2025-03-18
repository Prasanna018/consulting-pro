"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { BarChart3, Lightbulb, TrendingUp, Users, Laptop, Briefcase } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: <BarChart3 className="h-10 w-10" />,
    title: "Strategic Planning",
    description: "Develop comprehensive business strategies to achieve your long-term goals and objectives.",
  },
  {
    icon: <TrendingUp className="h-10 w-10" />,
    title: "Growth Consulting",
    description: "Identify and capitalize on opportunities to accelerate your business growth and market expansion.",
  },
  {
    icon: <Lightbulb className="h-10 w-10" />,
    title: "Innovation Management",
    description: "Foster a culture of innovation and implement processes to bring new ideas to market.",
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "Organizational Development",
    description: "Optimize your organizational structure and develop leadership capabilities at all levels.",
  },
  {
    icon: <Laptop className="h-10 w-10" />,
    title: "Digital Transformation",
    description: "Leverage technology to transform your business operations and customer experiences.",
  },
  {
    icon: <Briefcase className="h-10 w-10" />,
    title: "Financial Advisory",
    description:
      "Improve financial performance through strategic planning, cost optimization, and investment decisions.",
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, type: "spring", stiffness: 100 },
    },
  }

  return (
    <section id="services" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="text-sm font-medium text-primary mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            OUR SERVICES
          </motion.h2>
          <motion.h3
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Comprehensive Consulting Solutions
          </motion.h3>
          <motion.p
            className="text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We offer a wide range of consulting services designed to help your business overcome challenges, seize
            opportunities, and achieve sustainable growth.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ y: -10 }}>
              <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group overflow-hidden">
                <CardHeader>
                  <motion.div
                    className="text-primary"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {service.icon}
                  </motion.div>
                  <CardTitle className="mt-4 relative">
                    {service.title}
                    <motion.div
                      className="absolute -bottom-2 left-0 h-0.5 w-0 bg-primary"
                      initial={{ width: 0 }}
                      whileInView={{ width: "30%" }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                      viewport={{ once: true }}
                    />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

