"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className="bg-muted py-12">
      <motion.div
        className="container px-4 mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div variants={itemVariants} className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold">
              Consult<span className="text-primary">Pro</span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              Professional consulting services to help your business grow and succeed.
            </p>
            <div className="flex space-x-4 mt-6">
              {[
                { icon: <Facebook className="h-5 w-5" />, href: "#" },
                { icon: <Twitter className="h-5 w-5" />, href: "#" },
                { icon: <Instagram className="h-5 w-5" />, href: "#" },
                { icon: <Linkedin className="h-5 w-5" />, href: "#" },
              ].map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link href={social.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {social.icon}
                    <span className="sr-only">Social media link</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="md:col-span-3 grid sm:grid-cols-3 gap-8">
            <motion.div variants={itemVariants}>
              <h4 className="font-bold text-lg mb-4">Services</h4>
              <ul className="space-y-2">
                {[
                  "Strategic Planning",
                  "Growth Consulting",
                  "Innovation Management",
                  "Organizational Development",
                  "Digital Transformation",
                ].map((item, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-2">
                {["About Us", "Our Team", "Careers", "Blog", "Contact"].map((item, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="font-bold text-lg mb-4">Legal</h4>
              <ul className="space-y-2">
                {["Terms of Service", "Privacy Policy", "Cookie Policy", "GDPR"].map((item, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        <motion.div
          variants={itemVariants}
          className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} ConsultPro. All rights reserved.</p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">Designed and developed with ❤️</p>
        </motion.div>
      </motion.div>
    </footer>
  )
}

