import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Play, Star } from 'lucide-react'
import { mockTVShows } from '@/lib/mock-data'
import type { Metadata } from 'next'

interface TVShowDetailPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: TVShowDetailPageProps): Promise<Metadata> {
  const { id } = await params
  const show = mockTVShows.find(s => s.id === id)

  if (!show) {
    return { title: 'TV Show Not Found' }
  }

  return {
    title: `${show.title} (${show.year}) - Movie Hub`,
    description: show.description,
  }
}

export async function generateStaticParams() {
  return mockTVShows.map(show => ({
    id: show.id,
  }))
}

export default async function TVShowDetailPage({ params }: TVShowDetailPageProps) {
  const { id } = await params
  const show = mockTVShows.find(s => s.id === id)

  if (!show) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="relative h-[400px] md:h-[500px] w-full">
          <Image
            src={show.backdropUrl}
            alt={show.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 -mt-32 md:-mt-40 relative z-10">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            <div className="flex-none w-48 md:w-64 mx-auto md:mx-0">
              <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={show.posterUrl}
                  alt={show.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 192px, 256px"
                  unoptimized
                />
              </div>
            </div>

            <div className="flex-1 space-y-4 md:space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{show.title}</h1>

              <div className="flex items-center gap-4">
                <Star className="h-5 w-5 md:h-6 md:w-6 fill-gold text-gold" />
                <span className="text-xl md:text-2xl font-semibold text-gold">{show.rating}/10</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {show.genre.map((genre) => (
                  <Badge key={genre} variant="secondary">
                    {genre}
                  </Badge>
                ))}
              </div>

              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {show.description}
              </p>

              <div className="text-sm text-muted-foreground">
                <p>Creator: {show.creator}</p>
                <p>Year: {show.year}</p>
                <p>Seasons: {show.seasons.length}</p>
              </div>

              <Tabs defaultValue="season-1" className="w-full">
                <TabsList>
                  {show.seasons.slice(0, 5).map((season) => (
                    <TabsTrigger key={season.seasonNumber} value={`season-${season.seasonNumber}`}>
                      Season {season.seasonNumber}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {show.seasons.map((season) => (
                  <TabsContent key={season.seasonNumber} value={`season-${season.seasonNumber}`} className="space-y-4 pt-4">
                    <p className="text-muted-foreground">
                      {season.episodeCount} episodes
                    </p>
                    {season.episodes.length > 0 && (
                      <div className="space-y-4">
                        {season.episodes.map((episode) => (
                          <div key={episode.episodeNumber} className="flex gap-4 p-4 rounded-lg bg-card hover:bg-accent transition-colors">
                            <div className="relative flex-none w-32 md:w-40 aspect-video rounded overflow-hidden bg-muted">
                              <Image
                                src={episode.thumbnailUrl}
                                alt={episode.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 128px, 160px"
                                unoptimized
                              />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold mb-1">
                                {episode.episodeNumber}. {episode.title}
                              </h4>
                              <p className="text-xs md:text-sm text-muted-foreground mb-2">{episode.duration}</p>
                              <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">{episode.description}</p>
                              <Button size="sm" variant="outline" className="mt-2">
                                <Play className="mr-2 h-3 w-3" />
                                Play
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
