import * as React from "react"
import { Moon, Sun } from "lucide-react"

import { useTheme } from "@/components/theme-provider"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    let variantClasses = ""
    let sizeClasses = ""

    // Variant styles
    switch (variant) {
      case "default":
        variantClasses = "bg-primary text-primary-foreground shadow hover:bg-primary/90"
        break
      case "destructive":
        variantClasses = "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90"
        break
      case "outline":
        variantClasses = "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground"
        break
      case "secondary":
        variantClasses = "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80"
        break
      case "ghost":
        variantClasses = "hover:bg-accent hover:text-accent-foreground"
        break
      case "link":
        variantClasses = "text-primary underline-offset-4 hover:underline"
        break
    }

    // Size styles
    switch (size) {
      case "default":
        sizeClasses = "h-9 px-4 py-2"
        break
      case "sm":
        sizeClasses = "h-8 rounded-md px-3 text-xs"
        break
      case "lg":
        sizeClasses = "h-10 rounded-md px-8"
        break
      case "icon":
        sizeClasses = "h-9 w-9"
        break
    }

    return (
      <button
        className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${variantClasses} ${sizeClasses} ${className || ''}`}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}