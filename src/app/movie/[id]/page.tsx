import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Play, Plus, Star } from 'lucide-react'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Carousel } from '@/components/movie/carousel'
import { mockMovies } from '@/lib/mock-data'
import type { Metadata } from 'next'

interface MovieDetailPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: MovieDetailPageProps): Promise<Metadata> {
  const { id } = await params
  const movie = mockMovies.find(m => m.id === id)

  if (!movie) {
    return { title: 'Movie Not Found' }
  }

  return {
    title: `${movie.title} (${movie.year}) - Movie Hub`,
    description: movie.description,
  }
}

export async function generateStaticParams() {
  return mockMovies.map(movie => ({
    id: movie.id,
  }))
}

export default async function MovieDetailPage({ params }: MovieDetailPageProps) {
  const { id } = await params
  const movie = mockMovies.find(m => m.id === id)

  if (!movie) {
    notFound()
  }

  const similarMovies = mockMovies.filter(m =>
    m.id !== movie.id &&
    m.genre.some(g => movie.genre.includes(g))
  ).slice(0, 10)

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="relative h-[400px] md:h-[500px] w-full">
          <Image
            src={movie.backdropUrl}
            alt={movie.title}
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
                  src={movie.posterUrl}
                  alt={movie.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 192px, 256px"
                  unoptimized
                />
              </div>
            </div>

            <div className="flex-1 space-y-4 md:space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">{movie.title}</h1>
                <div className="flex flex-wrap items-center gap-3 md:gap-4 text-sm md:text-base text-muted-foreground">
                  <span>{movie.year}</span>
                  <span>{movie.duration}</span>
                  <Badge variant="outline">{movie.ageRating}</Badge>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 md:h-6 md:w-6 fill-gold text-gold" />
                  <span className="text-xl md:text-2xl font-semibold text-gold">{movie.rating}/10</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {movie.genre.map((genre) => (
                  <Badge key={genre} variant="secondary">
                    {genre}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href={`/watch/${movie.id}`}>
                    <Play className="mr-2 h-5 w-5 fill-current" />
                    Play Now
                  </Link>
                </Button>
                <Button size="lg" variant="outline">
                  <Plus className="mr-2 h-5 w-5" />
                  Add to List
                </Button>
              </div>

              <Separator />

              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="cast">Cast & Crew</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-4 pt-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Synopsis</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {movie.description}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Director</h3>
                    <p className="text-muted-foreground">{movie.director}</p>
                  </div>
                </TabsContent>
                <TabsContent value="cast" className="space-y-4 pt-4">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {movie.cast.map((member) => (
                      <div key={member.id} className="text-center">
                        <div className="relative aspect-square mb-2 rounded-lg overflow-hidden bg-muted">
                          <Image
                            src={member.photoUrl}
                            alt={member.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            unoptimized
                          />
                        </div>
                        <p className="font-medium text-sm">{member.name}</p>
                        <p className="text-xs text-muted-foreground">{member.role}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {similarMovies.length > 0 && (
            <div className="mt-12 md:mt-16">
              <Carousel title="More Like This" movies={similarMovies} />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
