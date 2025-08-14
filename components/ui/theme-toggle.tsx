"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="theme-toggle">
        <div className="h-[1.5rem] w-[1.5rem]" />
      </div>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="theme-toggle group"
      aria-label="Toggle theme"
    >
      <Sun className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 text-gaming group-hover:text-gaming-secondary drop-shadow-lg" />
      <Moon className="absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 text-gaming group-hover:text-gaming-secondary drop-shadow-lg" />
    </button>
  )
}
