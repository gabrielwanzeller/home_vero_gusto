import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const inputVariants = cva(
  "flex h-11 w-full rounded-md border-2 px-3 py-2 text-base md:text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-medium transition-all shadow-sm",
  {
    variants: {
      mode: {
        white: "bg-white border-black text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus-visible:translate-y-[2px] focus-visible:shadow-none transition-all",
        red: "bg-transparent border-white text-white placeholder:text-white/60 focus-visible:ring-offset-brand-red focus-visible:ring-white",
      },
    },
    defaultVariants: {
      mode: "white",
    },
  }
)

export interface InputProps
  extends React.ComponentProps<"input">,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, mode, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ mode, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
