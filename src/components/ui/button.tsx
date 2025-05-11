import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // default: "bg-primary text-primary-foreground hover:bg-primary/90",
        // destructive:
        //   "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        // outline:
        //   "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        // secondary:
        //   "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        // ghost: "hover:bg-accent hover:text-accent-foreground",
        // link: "text-primary underline-offset-4 hover:underline",
        // },
        default:
          "bg-primary text-white shadow-xs hover:bg-blue-600/90 focus:ring-2 focus:ring-blue-300",
        destructive:
          "bg-rose-500 text-white shadow-xs hover:bg-rose-700/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-red-500/40 dark:bg-rose-800",
        warning:
          "bg-yellow-500 text-black shadow-xs hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-300 dark:bg-yellow-700",
        info: "bg-sky-500 text-white shadow-xs hover:bg-sky-600 focus:ring-2 focus:ring-sky-300 dark:bg-sky-800",
        success:
          "bg-emerald-500 text-white shadow-xs hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-300 dark:bg-emerald-800",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-lime-500 text-black shadow-xs hover:bg-lime-600/80 focus:ring-2 focus:ring-lime-300",
        ghost:
          "hover:bg-gray-200 bg-gray-300 dark:bg-gray-200/40 dark:hover:bg-gray-400/50 text-black hover:bg-gray-500",
        link: "text-blue-500 underline-offset-4 hover:underline",
        devMode:
          "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-200 ease-in-out focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-700",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
