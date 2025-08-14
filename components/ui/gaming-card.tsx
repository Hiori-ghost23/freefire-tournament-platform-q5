"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const GamingCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: "default" | "glass" | "neon" | "gradient"
    hover?: boolean
  }
>(({ className, variant = "default", hover = true, ...props }, ref) => {
  const variants = {
    default: "card-gaming",
    glass: "glass-card",
    neon: "card-gaming neon-glow",
    gradient: "bg-gaming-gradient text-white border-0",
  }

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl shadow-lg transition-all duration-400",
        variants[variant],
        hover && "hover-lift cursor-pointer",
        className,
      )}
      {...props}
    />
  )
})
GamingCard.displayName = "GamingCard"

const GamingCardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-2 p-6", className)} {...props} />
  ),
)
GamingCardHeader.displayName = "GamingCardHeader"

const GamingCardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("text-2xl font-gaming font-bold leading-none tracking-tight gradient-text", className)}
      {...props}
    />
  ),
)
GamingCardTitle.displayName = "GamingCardTitle"

const GamingCardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-muted-foreground font-display leading-relaxed", className)} {...props} />
  ),
)
GamingCardDescription.displayName = "GamingCardDescription"

const GamingCardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />,
)
GamingCardContent.displayName = "GamingCardContent"

const GamingCardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  ),
)
GamingCardFooter.displayName = "GamingCardFooter"

export { GamingCard, GamingCardHeader, GamingCardFooter, GamingCardTitle, GamingCardDescription, GamingCardContent }
