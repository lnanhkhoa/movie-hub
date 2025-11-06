import { notFound } from 'next/navigation'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { mockMovies } from '@/lib/mock-data'
import type { Metadata } from 'next'
import Video from 'next-video'

interface WatchPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: WatchPageProps): Promise<Metadata> {
  const { id } = await params
  const movie = mockMovies.find(m => m.id === id)

  if (!movie) {
    return { title: 'Movie Not Found' }
  }

  return {
    title: `Watch ${movie.title} - Movie Hub`,
  }
}

export async function generateStaticParams() {
  return mockMovies.map(movie => ({
    id: movie.id,
  }))
}

export default async function WatchPage({ params }: WatchPageProps) {
  const { id } = await params
  const movie = mockMovies.find(m => m.id === id)

  if (!movie) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 lg:px-8 py-6 md:py-8">
          <Button asChild variant="ghost" className="mb-4">
            <Link href={`/movie/${movie.id}`}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Movie Details
            </Link>
          </Button>

          <div className="aspect-video w-full bg-black rounded-lg overflow-hidden mb-6">
            {movie.manifestUrl ? (
              <Video
                src={movie.manifestUrl}
                controls
                className="w-full h-full"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-muted to-muted/50">
                <div className="text-center space-y-4">
                  <p className="text-muted-foreground">No video available</p>
                  <p className="text-sm text-muted-foreground max-w-md">
                    This movie doesn't have a video source configured yet.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <h1 className="text-2xl md:text-3xl font-bold">{movie.title}</h1>
            <p className="text-sm md:text-base text-muted-foreground">{movie.description}</p>
            <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
              <span>{movie.year}</span>
              <span>•</span>
              <span>{movie.duration}</span>
              <span>•</span>
              <span>{movie.ageRating}</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
