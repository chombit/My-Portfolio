"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Award, Calendar, MapPin, BookOpen, Code } from "lucide-react"
import Image from "next/image"

const education = [
  {
    degree: "Full Stack Web Development Training",
    institution: "Addis Ababa University, AAIT",
    location: "Addis Ababa, Ethiopia",
    period: "2023",
    description:
      "Intensive training program covering modern full-stack development including React.js, Node.js, TypeScript, PostgreSQL, and cloud deployment. Built multiple real-world projects.",
    highlights: ["React.js & Next.js", "Node.js & Express", "PostgreSQL & Prisma", "TypeScript"],
    icon: Award,
    image: "/education/aait.jpg",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    degree: "BSc in Computer Science",
    institution: "Ambo University",
    location: "Ambo, Ethiopia",
    period: "2019 - 2023",
    description:
      "Comprehensive computer science education covering algorithms, data structures, software engineering, database systems, and mobile application development.",
    highlights: ["Software Engineering", "Data Structures", "Database Systems", "Android Development"],
    icon: GraduationCap,
    image: "/education/ambo-university.jpg",
    color: "from-blue-500/20 to-indigo-500/20",
  },
]

function TimelineItem({
  item,
  index,
  isLast,
}: {
  item: (typeof education)[0]
  index: number
  isLast: boolean
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
      {/* Animated Timeline Line */}
      {!isLast && (
        <motion.div 
          initial={{ height: 0 }}
          animate={isInView ? { height: "100%" } : {}}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
          className="absolute left-[11px] sm:left-[15px] top-12 bottom-0 w-px bg-gradient-to-b from-primary to-primary/20" 
        />
      )}

      {/* Timeline Dot with Pulse */}
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
        <item.icon className="h-3 w-3 sm:h-4 sm:w-4 text-primary relative z-10" />
      </motion.div>

      {/* Content Card with Image */}
      <motion.div 
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
        className="glass-card rounded-2xl overflow-hidden group hover:border-primary/30 transition-all duration-300"
      >
        {/* Image Header */}
        <div className="relative h-40 sm:h-48 overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.institution}
              fill
              className="object-cover"
            />
          </motion.div>
          <div className={`absolute inset-0 bg-gradient-to-t ${item.color} to-background/90`} />
          
          {/* Floating Period Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2 + 0.4 }}
            className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary font-medium"
          >
            <Calendar className="h-4 w-4" />
            {item.period}
          </motion.div>
          
          {/* Icon Badge */}
          <div className="absolute bottom-4 left-4">
            <motion.div 
              whileHover={{ rotate: 10 }}
              className="p-3 rounded-xl bg-background/80 backdrop-blur-sm"
            >
              <item.icon className="h-6 w-6 text-primary" />
            </motion.div>
          </div>
        </div>
        
        {/* Text Content */}
        <div className="p-6 sm:p-8">
          {/* Degree */}
          <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {item.degree}
          </h3>

          {/* Institution */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4">
            <span className="text-muted-foreground font-medium">{item.institution}</span>
            <span className="flex items-center gap-1 text-sm text-muted-foreground/70">
              <MapPin className="h-3 w-3" />
              {item.location}
            </span>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
            {item.description}
          </p>

          {/* Highlights with stagger */}
          <motion.div 
            className="flex flex-wrap gap-2"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: { staggerChildren: 0.05, delayChildren: index * 0.2 + 0.3 }
              }
            }}
          >
            {item.highlights.map((highlight) => (
              <motion.span
                key={highlight}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-default"
              >
                {highlight}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Background
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Education & Training
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey and professional development in computer science
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {education.map((item, index) => (
            <TimelineItem
              key={item.degree}
              item={item}
              index={index}
              isLast={index === education.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
