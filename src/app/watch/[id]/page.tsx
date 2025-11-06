'use client'

import { useState } from 'react'
import { notFound, useParams } from 'next/navigation'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Loader } from 'lucide-react'
import Link from 'next/link'
import { mockMovies } from '@/lib/mock-data'
import Video from 'next-video'
import Yt from 'player.style/sutro/react'

export default function WatchPage() {
  const params = useParams()
  const { id } = params
  const movie = mockMovies.find((m) => m.id === id)
  const [isLoading, setIsLoading] = useState(true)

  if (!movie) return notFound()

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-[70px]">
        <div className="container mx-auto px-4 lg:px-8 py-6 md:py-8">
          <Button asChild variant="ghost" className="mb-4">
            <Link href={`/movie/${movie.id}`}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Link>
          </Button>

          <div className="aspect-video w-full bg-black rounded-lg overflow-hidden mb-6 relative">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
                <Loader className="h-12 w-12 text-white animate-spin" />
              </div>
            )}
            {movie.manifestUrl ? (
              <Video
                src={movie.manifestUrl}
                controls
                theme={Yt}
                className="w-full h-full"
                onLoadStart={() => setIsLoading(true)}
                onCanPlay={() => setIsLoading(false)}
                autoPlay="muted"
                muted
                poster={movie.posterUrl}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-muted to-muted/50">
                <div className="text-center space-y-4">
                  <p className="text-muted-foreground">No video available</p>
                  <p className="text-sm text-muted-foreground max-w-md">
                    This movie doesn&apos;t have a video source configured yet.
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
