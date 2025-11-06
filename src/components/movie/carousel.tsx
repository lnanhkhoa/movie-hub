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
    <section className="mb-[50px]">
      <div className="flex justify-between items-center px-[50px] mb-6">
        <h2 className="text-[clamp(20px,2.5vw,28px)] font-semibold">{title}</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-all hover:bg-white/20 hover:scale-110 active:scale-95 backdrop-blur-[10px]"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-all hover:bg-white/20 hover:scale-110 active:scale-95 backdrop-blur-[10px]"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-[50px] scroll-smooth"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        {movies.map((movie) => (
          <div key={movie.id} className="flex-none w-[280px]">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </section>
  )
}
