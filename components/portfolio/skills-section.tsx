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
  Sparkles,
  Brain,
} from "lucide-react"

const programmingLanguages = [
  { name: "JavaScript", icon: Zap },
  { name: "Python", icon: Terminal },
  { name: "TypeScript", icon: Terminal },
]

const frontendSkills = [
  { name: "React", icon: Layout },
  { name: "Next.js", icon: Globe },
]

const backendSkills = [
  { name: "Node.js", icon: Server },
  { name: "REST APIs", icon: Globe },
]

const databaseSkills = [
  { name: "SQL Databases", icon: Database },
  { name: "MongoDB", icon: Database },
]

const versionControlSkills = [
  { name: "Git", icon: GitBranch },
  { name: "GitHub", icon: GitBranch },
]

const aiSkills = [
  { name: "RAG", icon: Brain },
  { name: "Vector Databases", icon: Database },
  { name: "LLM Integration", icon: Sparkles },
  { name: "NLP", icon: Terminal },
]

const spokenLanguages = [
  { name: "English (Intermediate)", icon: Globe },
  { name: "Amharic (Fluent)", icon: Globe },
  { name: "Sidamu Afoo (Fluent)", icon: Globe },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* AI Development */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 sm:p-8 rounded-2xl glass-card relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[60px] group-hover:bg-primary/20 transition-colors" />

            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">AI Development</h3>
              </div>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 gap-3"
            >
              {aiSkills.map((skill, index) => (
                <SkillBadge key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </motion.div>

          {/* Languages & Core Tech */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 sm:p-8 rounded-2xl glass-card relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[60px] group-hover:bg-primary/20 transition-colors" />

            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Terminal className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Languages & Core Tech</h3>
              </div>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 gap-3"
            >
              {programmingLanguages.map((skill, index) => (
                <SkillBadge key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </motion.div>

          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-6 sm:p-8 rounded-2xl glass-card relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[60px] group-hover:bg-primary/20 transition-colors" />

            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Layout className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Frontend</h3>
              </div>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 gap-3"
            >
              {frontendSkills.map((skill, index) => (
                <SkillBadge key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-6 sm:p-8 rounded-2xl glass-card relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[60px] group-hover:bg-primary/20 transition-colors" />

            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Server className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Backend</h3>
              </div>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 gap-3"
            >
              {backendSkills.map((skill, index) => (
                <SkillBadge key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </motion.div>

          {/* Databases */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="p-6 sm:p-8 rounded-2xl glass-card relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[60px] group-hover:bg-primary/20 transition-colors" />

            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Databases</h3>
              </div>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 gap-3"
            >
              {databaseSkills.map((skill, index) => (
                <SkillBadge key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </motion.div>

          {/* Version Control */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="p-6 sm:p-8 rounded-2xl glass-card relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[60px] group-hover:bg-primary/20 transition-colors" />

            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <GitBranch className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Version Control</h3>
              </div>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 gap-3"
            >
              {versionControlSkills.map((skill, index) => (
                <SkillBadge key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </motion.div>

          {/* Communication Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="md:col-span-2 lg:col-span-3 p-6 sm:p-8 rounded-2xl glass-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Languages</h3>
              </div>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3"
            >
              {spokenLanguages.map((skill, index) => (
                <SkillBadge key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
