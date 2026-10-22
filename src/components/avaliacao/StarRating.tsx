import * as React from "react"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface StarRatingProps {
  onChange: (rating: number) => void
  className?: string
}

export function StarRating({ onChange, className }: StarRatingProps) {
  const [rating, setRating] = React.useState(0)
  const [hover, setHover] = React.useState(0)

  const handleRating = (value: number) => {
    setRating(value)
    onChange(value)
  }

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {[1, 2, 3, 4, 5].map((star) => {
        const isActive = star <= (hover || rating)
        
        return (
          <button
            key={star}
            type="button"
            aria-label={`${star} ${star === 1 ? 'estrela' : 'estrelas'}`}
            aria-pressed={rating === star}
            className="rounded-md p-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-transform duration-200 hover:scale-110 cursor-pointer"
            onClick={() => handleRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
          >
            <Star
              className={cn(
                "w-10 h-10 md:w-12 md:h-12 transition-colors",
                isActive
                  ? "fill-primary text-primary"
                  : "text-muted-foreground fill-none"
              )}
            />
          </button>
        )
      })}
    </div>
  )
}
