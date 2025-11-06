import { Suspense } from 'react'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { MovieCard } from '@/components/movie/movie-card'
import { Input } from '@/components/ui/input'
import { mockMovies } from '@/lib/mock-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Search Movies - Theta Movies',
  description: 'Search for your favorite movies and TV shows'
}

export default function SearchPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-[70px]">
        <div className="container mx-auto px-4 lg:px-8 py-8 md:py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Search Movies</h1>

          <div className="flex flex-col md:flex-row gap-4 mb-8 md:mb-12">
            <Input
              type="search"
              placeholder="Search for movies..."
              className="flex-1"
              defaultValue=""
            />
          </div>

          <Suspense fallback={<div>Loading...</div>}>
            <div className="mb-4">
              <p className="text-muted-foreground">Found {mockMovies.length} results</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
              {mockMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  )
}
