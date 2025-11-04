"use client"

import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { MovieCard } from './movie-card'
import type { Movie } from '@/lib/types'

interface CarouselProps {
  title: string
  movies: Movie[]
}

export function Carousel({ title, movies }: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return

    const scrollAmount = scrollRef.current.clientWidth * 0.8
    const targetScroll = direction === 'left'
      ? scrollRef.current.scrollLeft - scrollAmount
      : scrollRef.current.scrollLeft + scrollAmount

    scrollRef.current.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    })
  }

  if (movies.length === 0) return null

  return (
    <div className="space-y-4">
      <h2 className="text-xl md:text-2xl font-semibold px-4 lg:px-0">{title}</h2>

      <div className="relative group">
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-full w-12 rounded-none bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
          onClick={() => scroll('left')}
        >
          <ChevronLeft className="h-8 w-8" />
          <span className="sr-only">Scroll left</span>
        </Button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth px-4 lg:px-0"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {movies.map((movie) => (
            <div key={movie.id} className="flex-none w-[160px] md:w-[220px] lg:w-[280px]">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-full w-12 rounded-none bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
          onClick={() => scroll('right')}
        >
          <ChevronRight className="h-8 w-8" />
          <span className="sr-only">Scroll right</span>
        </Button>
      </div>
    </div>
  )
}
