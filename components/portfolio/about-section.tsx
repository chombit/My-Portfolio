"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Code2, Rocket, Users, Coffee, Zap, Globe } from "lucide-react"
import Image from "next/image"

const stats = [
  { value: "3+", label: "Years Experience", icon: Rocket },
  { value: "15+", label: "Projects Completed", icon: Code2 },
  { value: "10+", label: "Happy Clients", icon: Users },
  { value: "1000+", label: "Cups of Coffee", icon: Coffee },
]

const highlights = [
  {
    icon: Zap,
    title: "Fast & Efficient",
    description: "Building optimized, high-performance applications with modern best practices"
  },
  {
    icon: Globe,
    title: "Full-Stack Expertise",
    description: "From frontend interfaces to backend APIs, databases, and cloud deployment"
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "Working effectively with teams and clients to deliver exceptional results"
  }
]

export function AboutSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])

  return (
    <section className="py-24 relative overflow-hidden" ref={containerRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" 
      />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Turning Ideas Into Digital Reality
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            A passionate developer focused on creating impactful web solutions that combine 
            beautiful design with powerful functionality
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass-card rounded-2xl p-6 text-center group"
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="inline-flex p-3 rounded-xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors"
              >
                <stat.icon className="h-6 w-6 text-primary" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="text-3xl sm:text-4xl font-bold text-gradient mb-1"
              >
                {stat.value}
              </motion.div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl p-6 sm:p-8 group"
            >
              <motion.div
                whileHover={{ rotate: -10, scale: 1.1 }}
                className="inline-flex p-4 rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors"
              >
                <item.icon className="h-8 w-8 text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
