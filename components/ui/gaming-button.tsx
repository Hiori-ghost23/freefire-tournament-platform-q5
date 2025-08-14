"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const gamingButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-gaming font-bold uppercase tracking-wider ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: "btn-gaming text-white shadow-lg hover:shadow-xl",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-gaming bg-transparent text-gaming hover:bg-gaming/10 hover:text-gaming hover:border-gaming/70",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "text-gaming hover:bg-gaming/10 hover:text-gaming",
        link: "text-gaming underline-offset-4 hover:underline",
        neon: "btn-gaming neon-glow text-white font-black",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 rounded-lg px-4 text-xs",
        lg: "h-14 rounded-xl px-8 text-base",
        xl: "h-16 rounded-2xl px-10 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface GamingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof gamingButtonVariants> {
  asChild?: boolean
  loading?: boolean
}

const GamingButton = React.forwardRef<HTMLButtonElement, GamingButtonProps>(
  ({ className, variant, size, asChild = false, loading = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(gamingButtonVariants({ variant, size, className }))}
        ref={ref}
        disabled={loading || props.disabled}
        {...props}
      >
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

        {loading ? <div className="loading-spinner w-5 h-5" /> : children}
      </Comp>
    )
  },
)
GamingButton.displayName = "GamingButton"

export { GamingButton, gamingButtonVariants }
