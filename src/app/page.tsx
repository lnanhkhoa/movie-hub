import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { HeroSection } from '@/components/movie/hero-section'
import { Carousel } from '@/components/movie/carousel'
import { mockMovies } from '@/lib/mock-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Movie Hub - Stream Your Favorite Movies & TV Shows',
  description: 'Watch the latest movies and TV shows. Stream unlimited entertainment on Movie Hub.',
}

export default function HomePage() {
  const featuredMovie = mockMovies[0]
  const trendingMovies = mockMovies.slice(0, 10)
  const popularMovies = mockMovies.slice(5, 15)
  const actionMovies = mockMovies.filter(m => m.genre.includes('Action'))

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <HeroSection movie={featuredMovie} />

        <div className="container mx-auto py-8 md:py-12 space-y-8 md:space-y-12">
          <Carousel title="Trending Now" movies={trendingMovies} />
          <Carousel title="Popular on Movie Hub" movies={popularMovies} />
          <Carousel title="Action Movies" movies={actionMovies} />
        </div>
      </main>
      <Footer />
    </>
  )
}
