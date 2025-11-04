import { notFound } from 'next/navigation'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Play, Volume2, Settings, Maximize } from 'lucide-react'
import Link from 'next/link'
import { mockMovies } from '@/lib/mock-data'
import type { Metadata } from 'next'

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

          <div className="aspect-video w-full bg-black rounded-lg overflow-hidden mb-6 relative group">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-muted/50">
              <div className="text-center space-y-4">
                <Play className="h-16 w-16 mx-auto text-muted-foreground" />
                <p className="text-muted-foreground">Video player placeholder</p>
                <p className="text-sm text-muted-foreground max-w-md">
                  In production, this would integrate with a video player like Video.js or Plyr
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-4">
                <Button size="icon" variant="ghost" className="text-white">
                  <Play className="h-5 w-5" />
                  <span className="sr-only">Play</span>
                </Button>
                <Button size="icon" variant="ghost" className="text-white">
                  <Volume2 className="h-5 w-5" />
                  <span className="sr-only">Volume</span>
                </Button>
                <div className="flex-1 flex items-center gap-2">
                  <span className="text-xs text-white">0:00</span>
                  <div className="flex-1 h-1 bg-white/30 rounded-full">
                    <div className="h-full w-0 bg-primary rounded-full" />
                  </div>
                  <span className="text-xs text-white">{movie.duration}</span>
                </div>
                <Button size="icon" variant="ghost" className="text-white">
                  <Settings className="h-5 w-5" />
                  <span className="sr-only">Settings</span>
                </Button>
                <Button size="icon" variant="ghost" className="text-white">
                  <Maximize className="h-5 w-5" />
                  <span className="sr-only">Fullscreen</span>
                </Button>
              </div>
            </div>
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
