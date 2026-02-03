"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Github, Linkedin, Mail, Heart, ArrowUp, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const socialLinks = [
    { icon: Github, href: "https://github.com/nahomworku", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/nahomworku", label: "LinkedIn" },
    { icon: Mail, href: "mailto:nahomworku@285gmail.com", label: "Email" },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer ref={ref} className="py-16 border-t border-border relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="p-3 rounded-xl bg-primary/10 mb-4"
          >
            <Code2 className="h-8 w-8 text-primary" />
          </motion.div>
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            {"Let's Build Something Amazing"}
          </h3>
          <p className="text-muted-foreground max-w-md">
            Ready to turn your ideas into reality? Get in touch and let's create something extraordinary together.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="p-4 rounded-xl glass hover:bg-primary/10 transition-colors group"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.label}
            >
              <social.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.a>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-px bg-border mb-8"
        />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-2 text-sm text-muted-foreground"
          >
            <span>&copy; {currentYear} Nahom Worku. All rights reserved.</span>
            <span className="hidden sm:inline">|</span>
            <span className="flex items-center gap-1">
              Built with <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }}><Heart className="h-4 w-4 text-primary fill-primary" /></motion.span> using Next.js
            </span>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-6"
          >
            {["About", "Skills", "Projects", "Contact"].map((link, index) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ y: -2 }}
              >
                {link}
              </motion.a>
            ))}
          </motion.div>

          {/* Back to Top */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="rounded-full border-border hover:border-primary hover:bg-primary/10 bg-transparent"
            >
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowUp className="h-4 w-4" />
              </motion.div>
              <span className="sr-only">Back to top</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
