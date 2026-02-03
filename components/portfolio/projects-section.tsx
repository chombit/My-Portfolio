"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, Smartphone, Globe, Users, Building2, ArrowUpRight } from "lucide-react"
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
    github: "https://github.com/nahomworku/job-portal",
    demo: "https://job-portal-demo.vercel.app",
    featured: true,
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Android Healthcare System",
    description:
      "A mobile healthcare application developed during internship, providing patients with appointment booking, health records management, and telemedicine features.",
    icon: Smartphone,
    tags: ["Android", "Kotlin", "Firebase", "Room DB", "Material Design"],
    image: "/projects/healthcare.jpg",
    github: "https://github.com/nahomworku/healthcare-app",
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
    github: "https://github.com/nahomworku/employee-management",
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
    github: "https://github.com/nahomworku/ngo-website",
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

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative rounded-2xl glass-card overflow-hidden ${
        project.featured ? "lg:col-span-2" : ""
      }`}
    >
      {/* Project Image */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <motion.div
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
          />
        </motion.div>
        
        {/* Image Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t ${project.color} to-background/80 opacity-60`} />
        
        {/* Badge */}
        {project.badge && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.15 + 0.3 }}
            className="absolute top-4 left-4"
          >
            <Badge className="bg-primary/90 text-primary-foreground border-0 backdrop-blur-sm">
              {project.badge}
            </Badge>
          </motion.div>
        )}
        
        {/* Quick Action Buttons - Appear on Hover */}
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
                  className="p-3 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="h-5 w-5 text-foreground" />
                </motion.a>
              )}
              {project.demo && (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary hover:bg-primary/80 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`View ${project.title} live demo`}
                >
                  <ArrowUpRight className="h-5 w-5 text-primary-foreground" />
                </motion.a>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Card Content */}
      <div className="p-6 sm:p-8 flex flex-col">
        {/* Header with Icon */}
        <div className="flex items-center gap-3 mb-4">
          <motion.div 
            whileHover={{ rotate: 10, scale: 1.1 }}
            className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors"
          >
            <project.icon className="h-5 w-5 text-primary" />
          </motion.div>
          <h3 className="text-xl sm:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {/* Tags with stagger animation */}
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
              className="px-3 py-1 text-xs font-medium rounded-full bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Animated border on hover */}
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

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills in full-stack development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className="magnetic-btn border-border hover:border-primary hover:text-primary rounded-full bg-transparent"
          >
            <a
              href="https://github.com/nahomworku"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              View More on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
