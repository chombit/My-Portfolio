"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Building2, Calendar, MapPin, Award, Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Junior Full-Stack Developer",
    company: "Sidama Bank",
    location: "Addis Ababa, Ethiopia",
    period: "2024 – Present",
    description:
      "Designed and deployed production-grade corporate web platforms for institutional banking services. Built enterprise systems including HRM and shareholder voting platforms.",
    highlights: [
      "Official Corporate Portal for institutional banking",
      "Enterprise HRM System with employee onboarding and analytics",
      "Shareholder Voting System with real-time vote aggregation",
    ],
    icon: Building2,
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Junior AI & Full-Stack Developer",
    company: "Freelancing and Personal Projects",
    location: "Remote",
    period: "2025 – Present",
    description:
      "Developing innovative freelance projects and personal applications, focusing on AI integration, mobile development, and full-stack web solutions.",
    highlights: [
      "EthioKey AI Mobile Keyboard - Offline-first Android keyboard with AI predictions",
      "RAG-Integrated Telegram Bot - AI conversational agent with document retrieval",
      "FaydaJobs.com - End-to-end job portal with candidate search pipelines",
      "MalaZone Market Platform - Multi-vendor e-commerce platform",
    ],
    icon: Briefcase,
    color: "from-blue-500/20 to-indigo-500/20",
  },
]

function ExperienceCard({
  experience,
  index,
}: {
  experience: (typeof experiences)[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2, type: "spring", stiffness: 100 }}
      className="relative pl-8 sm:pl-12 pb-16 last:pb-0"
    >
      {/* Timeline Line */}
      {index !== experiences.length - 1 && (
        <motion.div
          initial={{ height: 0 }}
          animate={isInView ? { height: "100%" } : {}}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
          className="absolute left-[11px] sm:left-[15px] top-12 bottom-0 w-px bg-gradient-to-b from-primary to-primary/20"
        />
      )}

      {/* Timeline Dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.2 + 0.2, type: "spring" }}
        className="absolute left-0 top-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full bg-primary/30"
        />
        <experience.icon className="h-3 w-3 sm:h-4 sm:w-4 text-primary relative z-10" />
      </motion.div>

      {/* Content Card */}
      <motion.div
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
        className="glass-card rounded-2xl p-6 sm:p-8 group hover:border-primary/30 transition-all duration-300"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {experience.title}
            </h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Building2 className="h-4 w-4" />
              <span className="font-medium">{experience.company}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{experience.period}</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <MapPin className="h-4 w-4" />
          <span>{experience.location}</span>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
          {experience.description}
        </p>

        {/* Highlights */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
            <Award className="h-4 w-4 text-primary" />
            <span>Key Achievements</span>
          </div>
          <ul className="space-y-2">
            {experience.highlights.map((highlight, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2 + 0.4 + idx * 0.1 }}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span>{highlight}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Work Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Professional Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building impactful solutions in enterprise environments and freelance projects
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.title} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
