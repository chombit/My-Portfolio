"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="relative overflow-hidden rounded-full w-10 h-10"
      >
        <div className="absolute inset-0 bg-muted animate-pulse" />
      </Button>
    )
  }

  const getThemeIcon = (currentTheme: string | undefined) => {
    switch (currentTheme) {
      case "light":
        return <Sun className="h-4 w-4" />
      case "dark":
        return <Moon className="h-4 w-4" />
      default:
        return <Monitor className="h-4 w-4" />
    }
  }

  const getThemeLabel = (currentTheme: string | undefined) => {
    switch (currentTheme) {
      case "light":
        return "Light"
      case "dark":
        return "Dark"
      default:
        return "System"
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative overflow-hidden rounded-full w-10 h-10 hover:bg-primary/10 transition-all duration-300 group"
        >
          <motion.div
            key={theme}
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 180, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative"
          >
            {getThemeIcon(theme)}
          </motion.div>
          
          {/* Subtle glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent 
        align="end" 
        className="min-w-[160px] glass border-border/50 backdrop-blur-xl"
      >
        <AnimatePresence>
          {["light", "dark", "system"].map((themeOption) => (
            <motion.div
              key={themeOption}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
            >
              <DropdownMenuItem
                onClick={() => setTheme(themeOption)}
                className={`flex items-center gap-3 cursor-pointer transition-colors duration-200 ${
                  theme === themeOption 
                    ? "bg-primary/10 text-primary" 
                    : "hover:bg-muted/50"
                }`}
              >
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {getThemeIcon(themeOption)}
                </motion.div>
                <span className="font-medium">{getThemeLabel(themeOption)}</span>
                
                {/* Active indicator */}
                {theme === themeOption && (
                  <motion.div
                    className="ml-auto w-2 h-2 rounded-full bg-primary"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  />
                )}
              </DropdownMenuItem>
            </motion.div>
          ))}
        </AnimatePresence>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

// Compact version for mobile
export function ThemeToggleCompact() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="relative overflow-hidden rounded-lg w-9 h-9"
      >
        <div className="absolute inset-0 bg-muted animate-pulse" />
      </Button>
    )
  }

  const cycleTheme = () => {
    const themes = ["light", "dark", "system"]
    const currentIndex = themes.indexOf(theme || "system")
    const nextIndex = (currentIndex + 1) % themes.length
    setTheme(themes[nextIndex])
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={cycleTheme}
      className="relative overflow-hidden rounded-lg w-9 h-9 hover:bg-primary/10 transition-all duration-300 group"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ rotate: -180, opacity: 0, scale: 0.8 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 180, opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="relative"
        >
          {getThemeIcon(theme)}
        </motion.div>
      </AnimatePresence>
      
      {/* Touch feedback */}
      <motion.div
        className="absolute inset-0 rounded-lg bg-primary/20"
        initial={{ scale: 0 }}
        whileTap={{ scale: 1 }}
        transition={{ duration: 0.1 }}
      />
      
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

function getThemeIcon(theme: string | undefined) {
  switch (theme) {
    case "light":
      return <Sun className="h-4 w-4" />
    case "dark":
      return <Moon className="h-4 w-4" />
    default:
      return <Monitor className="h-4 w-4" />
  }
}
