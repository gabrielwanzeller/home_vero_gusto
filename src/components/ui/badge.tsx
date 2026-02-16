import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border-2 px-3 py-0.5 text-xs font-bold font-display uppercase tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      mode: {
        white: "",
        red: "",
      },
      variant: {
        primary: "border-transparent",
        outline: "bg-transparent",
      },
    },
    compoundVariants: [
      {
        mode: "white",
        variant: "primary",
        class: "bg-primary text-primary-foreground hover:bg-primary/80",
      },
      {
        mode: "white",
        variant: "outline",
        class: "text-foreground border-black",
      },
      {
        mode: "red",
        variant: "primary",
        class: "bg-white text-primary hover:bg-white/90",
      },
      {
        mode: "red",
        variant: "outline",
        class: "text-white border-white",
      },
    ],
    defaultVariants: {
      mode: "white",
      variant: "primary",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, mode, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, mode }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
