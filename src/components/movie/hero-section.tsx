import Image from "next/image"
import Link from "next/link"
import { Play, Plus, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Movie } from "@/lib/types"
import { IS_HIDE_AUTH } from "@/config/env"

interface HeroSectionProps {
  movie: Movie
}

export function HeroSection({ movie }: HeroSectionProps) {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden mt-[70px]">
      {/* Background */}
      <div className="absolute inset-0 z-[1]">
        <Image
          src={movie.backdropUrl}
          alt={movie.title}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          unoptimized
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-[60%] z-[2]"
        style={{
          background: 'linear-gradient(to top, rgb(20, 20, 20) 0%, rgba(20, 20, 20, 0.8) 50%, transparent 100%)'
        }}
      />

      {/* Content */}
      <div className="relative z-[3] w-full max-w-[1920px] mx-auto px-[50px]">
        <div className="max-w-[600px] space-y-4 md:space-y-6">
          <h1 className="text-[clamp(48px,6vw,72px)] font-bold leading-tight tracking-[-1px] text-shadow">
            {movie.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold text-gold drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />
              ))}
              <span className="ml-2 font-semibold text-gold text-lg">{movie.rating}</span>
            </div>
            <span className="text-muted-foreground text-base font-medium pl-4 border-l-2 border-muted-foreground">
              {movie.year}
            </span>
            <span className="text-muted-foreground text-base font-medium pl-4 border-l-2 border-muted-foreground">
              {movie.duration}
            </span>
            <span className="text-muted-foreground text-base font-medium pl-4 border-l-2 border-muted-foreground">
              {movie.ageRating}
            </span>
          </div>

          <p className="text-lg leading-relaxed text-foreground max-w-[600px] font-[family-name:var(--font-roboto)] text-shadow-sm">
            {movie.description}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Button
              asChild
              size="lg"
              className="bg-netflix-red hover:bg-[#c40812] hover:scale-105 transition-all text-white shadow-[0_8px_24px_rgba(229,9,20,0.4)] px-8 py-[14px] text-base font-semibold tracking-[0.3px] rounded-md"
            >
              <Link href={`/watch/${movie.id}`} className="flex items-center gap-3">
                <Play className="h-6 w-6 fill-current" />
                Play Now
              </Link>
            </Button>
            {!IS_HIDE_AUTH && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="backdrop-blur-[10px] bg-white/20 hover:bg-white/30 border-2 border-white/50 hover:border-white hover:scale-105 transition-all px-8 py-[14px] text-base font-semibold tracking-[0.3px] rounded-md"
              >
                <Link href={`/movie/${movie.id}`} className="flex items-center gap-3">
                  <Plus className="h-6 w-6" />
                  Add to List
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
