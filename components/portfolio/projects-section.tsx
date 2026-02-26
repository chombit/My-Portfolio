"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, Smartphone, Globe, Users, Building2, ArrowUpRight, Plane } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const projects = [
  {
    title: "Job Portal Web Application",
    description:
      "A comprehensive job portal platform enabling employers to post jobs and candidates to apply seamlessly. Features include advanced search, application tracking, and real-time notifications.",
    icon: Globe,
    tags: ["React.js", "Node.js", "PostgreSQL", "Prisma", "TypeScript"],
    image: "/projects/job-portal.jpg",
    github: "https://github.com/chombit/job-portal",
    demo: "https://job-portal-demo.vercel.app",
    featured: true,
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Kefko Travel Agency",
    description:
      "A modern travel booking platform for Kefko Travel Agency, featuring flight search, hotel reservations, tour packages, and payment integration. Includes admin dashboard for managing bookings and inventory.",
    icon: Plane,
    tags: ["Next.js", "TypeScript", "Stripe", "MongoDB", "Tailwind CSS", "API Integration"],
    image: "/projects/kefko-travel.jpg",
    github: "https://github.com/chombit/kefko-travel",
    demo: "https://kefko-travel.vercel.app",
    featured: true,
    badge: "Client Project",
    color: "from-sky-500/20 to-blue-500/20",
  },
  {
    title: "Android Healthcare System",
    description:
      "A mobile healthcare application developed during internship, providing patients with appointment booking, health records management, and telemedicine features.",
    icon: Smartphone,
    tags: ["Android", "Kotlin", "Firebase", "Room DB", "Material Design"],
    image: "/projects/healthcare.jpg",
    github: "https://github.com/chombit/healthcare-app",
    demo: null,
    featured: true,
    badge: "Internship Project",
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Employee Management System",
    description:
      "Full-stack employee management solution with features for attendance tracking, leave management, performance reviews, and comprehensive HR analytics dashboard.",
    icon: Users,
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind"],
    image: "/projects/employee.jpg",
    github: "https://github.com/chombit/employee-management",
    demo: "https://employee-mgmt-demo.vercel.app",
    featured: false,
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    title: "NGO Website & E-commerce",
    description:
      "A modern website for a non-profit organization with integrated e-commerce functionality for donations and merchandise, featuring a custom CMS for content management.",
    icon: Building2,
    tags: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS", "Sanity CMS"],
    image: "/projects/ngo.jpg",
    github: "https://github.com/chombit/ngo-website",
    demo: "https://ngo-site-demo.vercel.app",
    featured: false,
    color: "from-amber-500/20 to-orange-500/20",
  },
]

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [isHovered, setIsHovered] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [techHovered, setTechHovered] = useState<string | null>(null)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setTechHovered(null)
      }}
      className={`group relative rounded-2xl glass-card overflow-hidden transition-all duration-500 ${
        isHovered ? "shadow-2xl shadow-primary/20 scale-[1.02]" : ""
      }`}
    >
      {/* Project Image with Enhanced Effects */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <motion.div
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute inset-0"
        >
          {imageError ? (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <project.icon className="h-16 w-16 text-primary/50" />
            </div>
          ) : (
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
              onError={() => setImageError(true)}
            />
          )}
        </motion.div>
        
        {/* Enhanced Image Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t ${project.color} to-background/80 opacity-60 transition-opacity duration-300 ${
          isHovered ? "opacity-40" : ""
        }`} />
        
        {/* Animated Badge */}
        {project.badge && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.15 + 0.3 }}
            whileHover={{ scale: 1.1 }}
            className="absolute top-4 left-4"
          >
            <Badge className="bg-primary/90 text-primary-foreground border-0 backdrop-blur-sm px-3 py-1 text-xs font-semibold">
              {project.badge}
            </Badge>
          </motion.div>
        )}
        
        {/* Enhanced Quick Action Buttons */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-4 right-4 flex gap-2"
            >
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-background/90 backdrop-blur-sm hover:bg-primary transition-all duration-300 border border-primary/20"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="h-5 w-5 text-foreground group-hover:text-primary-foreground transition-colors" />
                </motion.a>
              )}
              {project.demo && (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary hover:bg-primary/80 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`View ${project.title} live demo`}
                >
                  <ArrowUpRight className="h-5 w-5 text-primary-foreground" />
                </motion.a>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Tech Indicator */}
        <motion.div
          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.15 + 0.5 }}
        >
          <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs text-muted-foreground">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>Live</span>
          </div>
        </motion.div>
      </div>
      
      {/* Enhanced Card Content */}
      <div className="p-6 sm:p-8 flex flex-col">
        {/* Header with Animated Icon */}
        <div className="flex items-center gap-3 mb-4">
          <motion.div 
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ duration: 0.2 }}
            className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300"
          >
            <project.icon className="h-5 w-5 text-primary" />
          </motion.div>
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              {project.featured && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.15 + 0.4 }}
                >
                  <span className="text-xs text-primary font-medium">⭐ Featured</span>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Description with Read More */}
        <div className="flex-grow mb-6">
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>
          <motion.button
            whileHover={{ x: 5 }}
            className="text-primary text-sm font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            Explore more →
          </motion.button>
        </div>

        {/* Enhanced Tags with Hover Effects */}
        <motion.div 
          className="flex flex-wrap gap-2"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.05,
                delayChildren: index * 0.15 + 0.2
              }
            }
          }}
        >
          {project.tags.map((tag) => (
            <motion.span
              key={tag}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgba(16, 185, 129, 0.1)",
                color: "rgb(16, 185, 129)"
              }}
              onHoverStart={() => setTechHovered(tag)}
              onHoverEnd={() => setTechHovered(null)}
              className="px-3 py-1 text-xs font-medium rounded-full bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-pointer border border-transparent hover:border-primary/30"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* Tech Hover Tooltip */}
        <AnimatePresence>
          {techHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-background border border-border rounded-lg shadow-lg z-50"
            >
              <p className="text-xs text-muted-foreground">Built with {techHovered}</p>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-background rotate-45 border-r border-b border-border" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Enhanced Animated Border */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background: "linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.3), transparent)",
          backgroundSize: "200% 100%",
        }}
      />
    </motion.div>
  )
}

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [filter, setFilter] = useState("all")
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  const filteredProjects = projects.filter(project => {
    if (filter === "all") return true
    if (filter === "featured") return project.featured
    if (filter === "client") return project.badge === "Client Project"
    if (filter === "internship") return project.badge === "Internship Project"
    return true
  })

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-[80px]" />
      
      {/* Floating Code Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 hidden lg:block"
      >
        <div className="p-2 rounded-lg glass text-xs text-primary">
          {"<code />"}
        </div>
      </motion.div>

      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary text-sm font-medium uppercase tracking-widest mb-4 inline-block"
          >
            Portfolio Showcase
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            <span className="text-gradient">Featured Projects</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            A curated collection of my best work — from client projects to experimental builds
          </motion.p>

          {/* Interactive Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {[
              { id: "all", label: "All Projects", count: projects.length },
              { id: "featured", label: "Featured", count: projects.filter(p => p.featured).length },
              { id: "client", label: "Client Work", count: projects.filter(p => p.badge === "Client Project").length },
              { id: "internship", label: "Internship", count: projects.filter(p => p.badge === "Internship Project").length },
            ].map((filterOption) => (
              <motion.button
                key={filterOption.id}
                onClick={() => setFilter(filterOption.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === filterOption.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground border border-transparent hover:border-border"
                }`}
              >
                {filterOption.label}
                <span className="ml-2 px-2 py-0.5 rounded-full bg-background/20 text-xs">
                  {filterOption.count}
                </span>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid with Enhanced Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto"
        >
          {/* Pair 1: Job Portal & Kefko Travel (Featured Projects) */}
          <div className="space-y-8">
            {filteredProjects.slice(0, 2).map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
          
          {/* Pair 2: Healthcare & Employee Management */}
          <div className="space-y-8">
            {filteredProjects.slice(2, 4).map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index + 2} />
            ))}
          </div>
          
          {/* Pair 3: NGO Website (Centered) */}
          {filteredProjects.length > 4 && (
            <div className="md:col-span-2 flex justify-center">
              <div className="w-full md:w-1/2">
                <ProjectCard key={filteredProjects[4].title} project={filteredProjects[4]} index={4} />
              </div>
            </div>
          )}
        </motion.div>

        {/* Enhanced View More Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="magnetic-btn border-border hover:border-primary hover:text-primary rounded-full bg-transparent group"
            >
              <a
                href="https://github.com/chombit"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                View More on GitHub
              </a>
            </Button>
            
            <motion.div
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="text-sm text-muted-foreground"
            >
              <span className="inline-flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>Available for freelance work</span>
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { number: "5+", label: "Projects", icon: "🚀" },
            { number: "3+", label: "Years Exp", icon: "💼" },
            { number: "10+", label: "Tech Stack", icon: "⚡" },
            { number: "100%", label: "Passion", icon: "❤️" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1 }}
              className="text-center p-4 rounded-xl glass-card"
            >
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-2xl font-bold text-primary">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
