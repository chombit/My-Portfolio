"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, Download, Github, Linkedin, Mail, Code2, Sparkles, CheckCircle, Globe, Terminal, Braces, Command } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRef, useState, useEffect } from "react"

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)
  const [isDownloading, setIsDownloading] = useState(false)
  const [downloadComplete, setDownloadComplete] = useState(false)
  const [mounted, setMounted] = useState(false)
  
  // Generate stable particle positions only on client
  const [particles, setParticles] = useState<Array<{id: number, left: number, top: number}>>([])
  
  useEffect(() => {
    setMounted(true)
    // Generate particles only on client side
    const generatedParticles = [...Array(20)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
    }))
    setParticles(generatedParticles)
  }, [])
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const handleDownloadCV = async () => {
    setIsDownloading(true)
    setDownloadComplete(false)
    
    try {
      // Create a link element and trigger download
      const link = document.createElement('a')
      link.href = '/Nahom_Worku_CV.pdf'
      link.download = 'Nahom_Worku_CV.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      // Simulate completion for better UX
      await new Promise(resolve => setTimeout(resolve, 1500))
      setDownloadComplete(true)
      
      // Reset after showing success state
      setTimeout(() => {
        setDownloadComplete(false)
        setIsDownloading(false)
      }, 2000)
    } catch (error) {
      console.error('Download failed:', error)
      setIsDownloading(false)
    }
  }

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

      {/* Creative Particles Background - Only render on client */}
      {mounted && particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-primary/30 rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* 3D Rotating Cube */}
      <motion.div
        className="absolute top-1/4 right-[20%] hidden lg:block"
        style={{ perspective: "1000px" }}
      >
        <motion.div
          animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 relative"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="absolute inset-0 border-2 border-primary/30 rounded-lg" />
          <div className="absolute inset-0 border-2 border-primary/30 rounded-lg" style={{ transform: "rotateY(90deg)" }} />
          <div className="absolute inset-0 border-2 border-primary/30 rounded-lg" style={{ transform: "rotateX(90deg)" }} />
        </motion.div>
      </motion.div>

      {/* Floating Code Snippets */}
      <motion.div
        animate={{ y: [0, -15, 0], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[10%] hidden lg:block font-mono text-xs text-primary/60"
      >
        {`const dev = {
  skills: ["React", "Node.js"],
  passion: "Full-Stack"
}`}
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[25%] right-[10%] hidden lg:block font-mono text-xs text-primary/60"
      >
        {`function create() {
  return "Amazing";
}`}
      </motion.div>

      {/* Interactive Geometric Shapes */}
      <motion.div
        animate={{ rotate: 45, scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[60%] left-[5%] hidden lg:block w-20 h-20 border-2 border-primary/20 rotate-45"
      />
      
      <motion.div
        animate={{ rotate: -45, scale: [1.2, 1, 1.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[30%] right-[5%] hidden lg:block w-16 h-16 border-2 border-primary/20 rounded-full"
      />
      
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
                  variant="outline"
                  size="lg"
                  onClick={handleDownloadCV}
                  disabled={isDownloading}
                  className={`magnetic-btn border-border hover:border-primary hover:text-primary px-8 py-6 text-base font-medium rounded-full bg-transparent transition-all duration-300 ${
                    downloadComplete 
                      ? 'border-green-500 text-green-500 bg-green-500/10' 
                      : isDownloading 
                      ? 'border-primary/50 text-primary/70' 
                      : ''
                  }`}
                >
                  <motion.div
                    animate={isDownloading ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 1, repeat: isDownloading ? Infinity : 0, ease: "linear" }}
                    className="mr-2"
                  >
                    {downloadComplete ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <Download className="h-4 w-4" />
                    )}
                  </motion.div>
                  {downloadComplete 
                    ? 'Downloaded!' 
                    : isDownloading 
                    ? 'Downloading...' 
                    : 'Download CV'
                  }
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
            
            {/* Modern Visual Element - Right Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
              className="lg:col-span-2 flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Animated Code/Design Element */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="relative w-80 h-80 sm:w-96 sm:h-96"
                >
                  {/* Central Terminal Window */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 glass-card rounded-2xl border border-primary/20 p-6 backdrop-blur-xl"
                  >
                    {/* Terminal Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-2">
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            className="w-3 h-3 rounded-full bg-red-500 cursor-pointer"
                          />
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            className="w-3 h-3 rounded-full bg-yellow-500 cursor-pointer"
                          />
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            className="w-3 h-3 rounded-full bg-green-500 cursor-pointer"
                          />
                        </div>
                        <span className="text-xs text-muted-foreground ml-2">portfolio-terminal</span>
                      </div>
                      <motion.div
                        animate={{ rotate: [0, 180, 360] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      >
                        <Terminal className="h-4 w-4 text-primary/60" />
                      </motion.div>
                    </div>
                    
                    {/* Terminal Content with Enhanced Animation */}
                    <div className="space-y-3 font-mono text-sm">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-green-400 flex items-center gap-2"
                      >
                        <span className="text-primary">$</span>
                        <span className="typing-animation">npm create portfolio@latest</span>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 }}
                        className="text-blue-400 flex items-center gap-2"
                      >
                        <Command className="h-3 w-3" />
                        <span>✨ Creating modern portfolio...</span>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.5 }}
                        className="text-purple-400 flex items-center gap-2"
                      >
                        <Braces className="h-3 w-3" />
                        <span>🚀 Deploying to production...</span>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 2 }}
                        className="text-emerald-400 flex items-center gap-2"
                      >
                        <span className="text-green-500">✓</span>
                        <span>Portfolio ready! 🎉</span>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 2.5 }}
                        className="flex items-center gap-2"
                      >
                        <span className="text-primary">$</span>
                        <motion.span
                          animate={{ opacity: [1, 0.5, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="text-foreground"
                        >
                          <span className="inline-block w-2 h-4 bg-primary current-color"></span>
                        </motion.span>
                      </motion.div>
                    </div>
                    
                    {/* Progress Bar */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 3, delay: 0.5 }}
                      className="mt-4 h-1 bg-muted rounded-full overflow-hidden"
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 3, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-primary to-emerald-500 rounded-full"
                      />
                    </motion.div>
                  </motion.div>
                  
                  {/* Floating Tech Icons */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-4 -left-4 w-16 h-16"
                  >
                    <div className="w-full h-full rounded-full bg-primary/10 backdrop-blur-sm flex items-center justify-center">
                      <Code2 className="h-8 w-8 text-primary" />
                    </div>
                  </motion.div>
                  
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-4 -right-4 w-16 h-16"
                  >
                    <div className="w-full h-full rounded-full bg-primary/10 backdrop-blur-sm flex items-center justify-center">
                      <Sparkles className="h-8 w-8 text-primary" />
                    </div>
                  </motion.div>
                  
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 -left-8 w-12 h-12"
                  >
                    <div className="w-full h-full rounded-full bg-primary/10 backdrop-blur-sm flex items-center justify-center">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Glow Effects */}
                <div className="absolute inset-0 rounded-full bg-primary/10 blur-[80px]" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/10 to-blue-500/10 blur-[100px]" />
                
                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute -bottom-6 -right-6 px-4 py-2 rounded-full glass emerald-glow-sm"
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
