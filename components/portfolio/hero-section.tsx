"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, Download, Github, Linkedin, Mail, Code2, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRef } from "react"

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Animated Background Image */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/hero-pattern.jpg"
          alt=""
          fill
          className="object-cover opacity-20"
          priority
        />
      </motion.div>
      
      {/* Gradient Orbs with Animation */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" 
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" 
      />
      
      {/* Floating Code Icons */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-[15%] hidden lg:block"
      >
        <div className="p-4 rounded-2xl glass emerald-glow-sm">
          <Code2 className="h-8 w-8 text-primary" />
        </div>
      </motion.div>
      
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-1/3 right-[15%] hidden lg:block"
      >
        <div className="p-4 rounded-2xl glass emerald-glow-sm">
          <Sparkles className="h-8 w-8 text-primary" />
        </div>
      </motion.div>
      
      <motion.div style={{ opacity }} className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Text Content - Left Side */}
            <div className="lg:col-span-3 text-center lg:text-left">
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <span className="text-sm text-muted-foreground">Available for opportunities</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
              >
                <span className="text-foreground">{"Hi, I'm "}</span>
                <br />
                <span className="text-gradient">Nahom Worku</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl sm:text-2xl text-muted-foreground mb-4"
              >
                Full-Stack Web Developer
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base sm:text-lg text-muted-foreground/80 max-w-xl mb-10 leading-relaxed"
              >
                I build accessible, pixel-perfect digital experiences with modern technologies.
                Passionate about creating scalable web applications that make a real impact.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-8"
              >
                <Button
                  asChild
                  size="lg"
                  className="magnetic-btn bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-medium rounded-full"
                >
                  <a href="#projects">
                    View My Work
                    <ArrowDown className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="magnetic-btn border-border hover:border-primary hover:text-primary px-8 py-6 text-base font-medium rounded-full bg-transparent"
                >
                  <a href="/cv.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </a>
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center justify-center lg:justify-start gap-4"
              >
                {[
                  { icon: Github, href: "https://github.com/nahomworku", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com/in/nahomworku", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:nahomworku@285gmail.com", label: "Email" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary/10 transition-colors group"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
            
            {/* Profile Image - Right Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
              className="lg:col-span-2 flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Decorative rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 rounded-full border border-primary/20"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-8 rounded-full border border-primary/10"
                />
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-[60px]" />
                
                {/* Profile image container */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-primary/30 emerald-glow"
                >
                  <Image
                    src="/profile.jpg"
                    alt="Nahom Worku - Full-Stack Developer"
                    fill
                    className="object-cover"
                    priority
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                </motion.div>
                
                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute -bottom-4 -right-4 px-4 py-2 rounded-full glass emerald-glow-sm"
                >
                  <span className="text-sm font-medium text-primary">3+ Years Exp</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
            <ArrowDown className="h-4 w-4 text-primary" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
