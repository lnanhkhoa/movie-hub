import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { MovieCard } from '@/components/movie/movie-card'
import { Badge } from '@/components/ui/badge'
import { mockMovies } from '@/lib/mock-data'
import type { Metadata } from 'next'

const GENRES = [
  'Action',
  'Comedy',
  'Drama',
  'Horror',
  'Sci-Fi',
  'Thriller',
  'Romance',
  'Crime',
  'Adventure',
  'Fantasy'
]

interface GenrePageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: GenrePageProps): Promise<Metadata> {
  const { slug } = await params
  const genreName = slug.charAt(0).toUpperCase() + slug.slice(1)

  return {
    title: `${genreName} Movies - Theta Movies`,
    description: `Browse ${genreName} movies on Theta Movies`
  }
}

export async function generateStaticParams() {
  return [
    { slug: 'all' },
    ...GENRES.map((genre) => ({
      slug: genre.toLowerCase()
    }))
  ]
}

export default async function GenrePage({ params }: GenrePageProps) {
  const { slug } = await params
  const genreName = slug === 'all' ? 'All' : slug.charAt(0).toUpperCase() + slug.slice(1)

  const filteredMovies =
    slug === 'all'
      ? mockMovies
      : mockMovies.filter((m) => m.genre.some((g) => g.toLowerCase() === slug.toLowerCase()))

  if (filteredMovies.length === 0 && slug !== 'all') {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-[70px]">
        <div className="container mx-auto px-4 lg:px-8 py-8 md:py-12">
          <div className="mb-6 md:mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{genreName} Movies</h1>
            <p className="text-muted-foreground">{filteredMovies.length} movies</p>
          </div>

          <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
            <Link href="/genre/all">
              <Badge variant={slug === 'all' ? 'default' : 'outline'} className="cursor-pointer">
                All
              </Badge>
            </Link>
            {GENRES.map((genre) => (
              <Link key={genre} href={`/genre/${genre.toLowerCase()}`}>
                <Badge
                  variant={slug.toLowerCase() === genre.toLowerCase() ? 'default' : 'outline'}
                  className="cursor-pointer"
                >
                  {genre}
                </Badge>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
