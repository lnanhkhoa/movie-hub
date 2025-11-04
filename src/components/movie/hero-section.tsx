import Image from 'next/image'
import Link from 'next/link'
import { Play, Plus, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import type { Movie } from '@/lib/types'

interface HeroSectionProps {
  movie: Movie
}

export function HeroSection({ movie }: HeroSectionProps) {
  return (
    <div className="relative h-[70vh] md:h-[80vh] lg:h-[90vh] w-full overflow-hidden">
      <Image
        src={movie.backdropUrl}
        alt={movie.title}
        fill
        priority
        className="object-cover"
        sizes="100vw"
        unoptimized
      />

      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />

      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl space-y-4 md:space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold animate-in slide-in-from-bottom-4 duration-1000">
              {movie.title}
            </h1>

            <div className="flex flex-wrap items-center gap-3 md:gap-4 text-sm md:text-lg">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 md:h-6 md:w-6 fill-gold text-gold" />
                <span className="font-semibold text-gold">{movie.rating}/10</span>
              </div>
              <span className="text-muted-foreground">{movie.year}</span>
              <span className="text-muted-foreground">{movie.duration}</span>
              <Badge variant="outline" className="text-xs md:text-sm">
                {movie.ageRating}
              </Badge>
            </div>

            <div className="flex flex-wrap gap-2">
              {movie.genre.map((genre) => (
                <Badge key={genre} variant="secondary">
                  {genre}
                </Badge>
              ))}
            </div>

            <p className="text-sm md:text-lg lg:text-xl text-muted-foreground line-clamp-3 max-w-xl">
              {movie.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href={`/watch/${movie.id}`}>
                  <Play className="mr-2 h-5 w-5 fill-current" />
                  Play Now
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={`/movie/${movie.id}`}>
                  <Plus className="mr-2 h-5 w-5" />
                  More Info
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
