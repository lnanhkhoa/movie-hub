'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Star, Plus, Check, Play } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'
import { SignInModal } from '@/components/auth/sign-in-modal'
import { toast } from 'sonner'
import type { Movie } from '@/lib/types'
import { useRouter } from 'next/navigation'
import { ACTIVE_MOVIE_ID } from '@/lib/mock-data'
import { cn } from '@/lib/utils'

interface MovieCardProps {
  movie: Movie
}

export function MovieCard({ movie }: MovieCardProps) {
  const { isAuthenticated, addToWatchlist, removeFromWatchlist, isInWatchlist } = useAuth()
  const [signInOpen, setSignInOpen] = useState(false)
  const inWatchlist = isInWatchlist(movie.id)
  const router = useRouter()
  const inActiveMovie = movie.id !== ACTIVE_MOVIE_ID

  const handleAddToList = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (!isAuthenticated) {
      setSignInOpen(true)
      return
    }

    if (inWatchlist) {
      removeFromWatchlist(movie.id)
      toast.success('Removed from My List')
    } else {
      addToWatchlist(movie.id)
      toast.success('Added to My List')
    }
  }

  return (
    <>
      <div className="relative min-w-[280px] flex-shrink-0 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_24px_rgba(0,0,0,0.5)] hover:z-10 cursor-pointer group">
        <Link href={`/movie/${movie.id}`} className="block">
          <div className="relative w-[280px] h-[420px] overflow-hidden bg-secondary">
            <Image
              src={movie.posterUrl}
              alt={movie.title}
              fill
              sizes="280px"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              unoptimized
            />

            {/* Overlay */}
            <div
              className="absolute bottom-0 left-0 right-0 p-6 opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
              style={{
                background:
                  'linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.8) 50%, transparent 100%)'
              }}
            >
              <h3 className="text-lg font-semibold mb-2 leading-tight">{movie.title}</h3>

              <div className="flex items-center gap-3 mb-4 text-sm">
                <span className="text-muted-foreground">{movie.year}</span>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-gold text-gold" />
                  <span className="font-semibold text-gold">{movie.rating}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    router.push(`/watch/${movie.id}`)
                  }}
                  disabled={inActiveMovie}
                  className={cn(
                    `w-12 h-12 bg-white/15 rounded-full flex items-center justify-center transition-all hover:bg-netflix-red hover:scale-[1.15] active:scale-95 backdrop-blur-[10px]`,
                    inActiveMovie ? 'opacity-50 cursor-not-allowed bg-white/15' : ''
                  )}
                  aria-label="Play"
                >
                  <Play className="h-5 w-5 fill-current" />
                </button>
                <button
                  onClick={handleAddToList}
                  disabled={true}
                  className={cn(
                    `w-12 h-12 bg-white/15 rounded-full flex items-center justify-center transition-all hover:bg-netflix-red hover:scale-[1.15] active:scale-95 backdrop-blur-[10px]`,
                    inActiveMovie ? 'opacity-50 cursor-not-allowed bg-white/15' : ''
                  )}
                  aria-label={inWatchlist ? 'Remove from list' : 'Add to list'}
                >
                  {inWatchlist ? <Check className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                </button>
                <Link
                  href={`/movie/${movie.id}`}
                  onClick={(e) => e.stopPropagation()}
                  className={cn(
                    `w-12 h-12 bg-white/15 rounded-full flex items-center justify-center transition-all hover:bg-netflix-red hover:scale-[1.15] active:scale-95 backdrop-blur-[10px]`,
                    inActiveMovie ? 'opacity-50 cursor-not-allowed bg-white/15' : ''
                  )}
                  aria-label="More info"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <SignInModal open={signInOpen} onOpenChange={setSignInOpen} />
    </>
  )
}
