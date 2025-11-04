"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Star, Plus, Check, Play } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useAuth } from '@/lib/auth-context'
import { SignInModal } from '@/components/auth/sign-in-modal'
import { toast } from 'sonner'
import type { Movie } from '@/lib/types'

interface MovieCardProps {
  movie: Movie
}

export function MovieCard({ movie }: MovieCardProps) {
  const { isAuthenticated, addToWatchlist, removeFromWatchlist, isInWatchlist } = useAuth()
  const [signInOpen, setSignInOpen] = useState(false)
  const inWatchlist = isInWatchlist(movie.id)

  const handleAddToList = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (!isAuthenticated) {
      setSignInOpen(true)
      return
    }

    if (inWatchlist) {
      removeFromWatchlist(movie.id)
      toast.success("Removed from My List")
    } else {
      addToWatchlist(movie.id)
      toast.success("Added to My List")
    }
  }

  return (
    <>
      <Link href={`/movie/${movie.id}`} className="block">
        <Card className="group overflow-hidden bg-card border-none hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300">
          <div className="relative aspect-[2/3] overflow-hidden bg-muted">
            <Image
              src={movie.posterUrl}
              alt={movie.title}
              fill
              sizes="(max-width: 768px) 160px, (max-width: 1024px) 220px, 280px"
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              unoptimized
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-sm md:text-base line-clamp-2">{movie.title}</h3>
                <div className="flex items-center gap-2 text-xs">
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-gold text-gold" />
                    <span className="font-semibold text-gold">{movie.rating}</span>
                  </div>
                  <span className="text-muted-foreground">{movie.year}</span>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="flex-1"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      window.location.href = `/watch/${movie.id}`
                    }}
                  >
                    <Play className="mr-1 h-3 w-3" />
                    Play
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={handleAddToList}
                  >
                    {inWatchlist ? (
                      <Check className="h-3 w-3" />
                    ) : (
                      <Plus className="h-3 w-3" />
                    )}
                    <span className="sr-only">{inWatchlist ? 'Remove from list' : 'Add to list'}</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <CardContent className="p-3">
            <h3 className="line-clamp-1 text-sm md:text-base font-medium mb-1">{movie.title}</h3>
            <div className="flex items-center justify-between text-xs md:text-sm text-muted-foreground mb-2">
              <span>{movie.year}</span>
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-gold text-gold" />
                <span className="font-semibold text-gold">{movie.rating}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-1">
              {movie.genre.slice(0, 2).map((genre) => (
                <Badge key={genre} variant="secondary" className="text-xs">
                  {genre}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </Link>

      <SignInModal open={signInOpen} onOpenChange={setSignInOpen} />
    </>
  )
}
