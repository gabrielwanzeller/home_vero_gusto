import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border-0 border-black font-display uppercase tracking-wide cursor-pointer",
  {
    variants: {
      mode: {
        white: "",
        red: "",
      },
      variant: {
        primary: "",
        secondary: "",
        outline: "",
        ghost: "border-transparent bg-transparent hover:bg-neutral-100 text-black shadow-none", // Default ghost
      },
      size: {
        default: "h-11 px-6 py-2 has-[>svg]:px-4",
        sm: "h-9 rounded-md px-4 has-[>svg]:px-3 text-xs",
        lg: "h-14 rounded-md px-10 has-[>svg]:px-6 text-base",
        icon: "size-11 p-0",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    compoundVariants: [
      // === WHITE MODE VARIANTS ===
      {
        mode: "white",
        variant: "primary",
        class:
          "bg-primary text-primary-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-[4px] active:shadow-none selection:bg-black selection:text-white",
      },
      {
        mode: "white",
        variant: "secondary",
        class:
          "bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-[4px] active:shadow-none hover:bg-neutral-50",
      },
      {
        mode: "white",
        variant: "outline",
        class:
          "bg-transparent text-black border-2 border-black hover:bg-neutral-100 shadow-none",
      },
      {
        mode: "white",
        variant: "ghost",
        class: "border-transparent bg-transparent text-black hover:bg-neutral-100 shadow-none",
      },

      // === RED MODE VARIANTS ===
      {
        mode: "red",
        variant: "primary",
        class:
          "bg-white text-primary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-[4px] active:shadow-none hover:bg-neutral-50",
      },
      {
        mode: "red",
        variant: "secondary",
        class:
          "bg-transparent text-white border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-[4px] active:shadow-none hover:bg-white/10",
      },
      {
        mode: "red",
        variant: "outline",
        class:
          "bg-transparent text-white border-2 border-white hover:bg-white/10 shadow-none",
      },
      {
        mode: "red",
        variant: "ghost",
        class: "border-transparent bg-transparent text-white hover:bg-white/10 shadow-none",
      },
    ],
    defaultVariants: {
      mode: "white",
      variant: "primary",
      size: "default",
      fullWidth: false,
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, mode, size, fullWidth, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot.Root : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, mode, size, fullWidth, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
