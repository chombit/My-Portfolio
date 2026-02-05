"use client"

import React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  Code2,
  Database,
  Globe,
  Layout,
  Server,
  Smartphone,
  Terminal,
  Zap,
  GitBranch,
  Layers,
  Cloud,
  Shield,
} from "lucide-react"

const frontendSkills = [
  { name: "React.js", icon: Code2 },
  { name: "Next.js", icon: Globe },
  { name: "TypeScript", icon: Terminal },
  { name: "Tailwind CSS", icon: Layout },
  { name: "JavaScript", icon: Zap },
  { name: "HTML/CSS", icon: Layers },
]

const backendSkills = [
  { name: "Node.js", icon: Server },
  { name: "Express.js", icon: Globe },
  { name: "PostgreSQL", icon: Database },
  { name: "Prisma", icon: Database },
  { name: "MongoDB", icon: Database },
  { name: "REST APIs", icon: Cloud },
]

const otherSkills = [
  { name: "Git & GitHub", icon: GitBranch },
  { name: "Docker", icon: Layers },
  { name: "Android Dev", icon: Smartphone },
  { name: "Security", icon: Shield },
]

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
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
}

function SkillBadge({ skill, index }: { skill: { name: string; icon: React.ElementType }; index: number }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group flex items-center gap-3 px-4 py-3 rounded-xl glass-card hover:border-primary/50 transition-all duration-300 cursor-default"
    >
      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
        <skill.icon className="h-5 w-5 text-primary" />
      </div>
      <span className="text-sm font-medium text-foreground">{skill.name}</span>
    </motion.div>
  )
}

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Tech Stack
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Technical Arsenal
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge technologies and frameworks I wield to build exceptional digital products
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Frontend Card - Large */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 p-6 sm:p-8 rounded-2xl glass-card relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[60px] group-hover:bg-primary/20 transition-colors" />
            
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Layout className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Frontend Craftsmanship</h3>
                <p className="text-sm text-muted-foreground">Creating stunning, responsive user experiences</p>
              </div>
            </div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3"
            >
              {frontendSkills.map((skill, index) => (
                <SkillBadge key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </motion.div>

          {/* Stats Card - Small */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 sm:p-8 rounded-2xl glass-card flex flex-col justify-center"
          >
            <div className="text-center">
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-5xl sm:text-6xl font-bold text-gradient"
              >
                3+
              </motion.span>
              <p className="text-muted-foreground mt-2">Years of Experience</p>
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Projects Completed</span>
                <span className="text-lg font-semibold text-foreground">15+</span>
              </div>
            </div>
          </motion.div>

          {/* Backend Card - Medium */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 p-6 sm:p-8 rounded-2xl glass-card relative overflow-hidden group"
          >
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-[60px] group-hover:bg-primary/20 transition-colors" />
            
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Server className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Backend Architecture</h3>
                <p className="text-sm text-muted-foreground">Engineering scalable, secure server solutions</p>
              </div>
            </div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3"
            >
              {backendSkills.map((skill, index) => (
                <SkillBadge key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </motion.div>

          {/* Other Skills Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-6 sm:p-8 rounded-2xl glass-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">DevOps & Tools</h3>
            </div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 gap-3"
            >
              {otherSkills.map((skill, index) => (
                <SkillBadge key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
