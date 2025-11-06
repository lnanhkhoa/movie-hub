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
      <main className="relative z-10 pb-[50px]">
        <HeroSection movie={featuredMovie} />

        <div className="space-y-0">
          <Carousel title="Trending Now" movies={trendingMovies} />
          <Carousel title="Popular Movies" movies={popularMovies} />
          <Carousel title="Top Rated" movies={actionMovies} />
        </div>
      </main>
      <Footer />
    </>
  )
}
