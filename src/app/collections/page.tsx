import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { mockCollections } from '@/lib/mock-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Collections - Movie Hub',
  description: 'Curated movie collections',
}

export default function CollectionsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 lg:px-8 py-8 md:py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Collections</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {mockCollections.map((collection) => (
              <Link key={collection.id} href={`/collections/${collection.id}`}>
                <Card className="overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-all">
                  <div className="relative aspect-video bg-muted">
                    <Image
                      src={collection.thumbnailUrl}
                      alt={collection.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      unoptimized
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{collection.name}</CardTitle>
                    <CardDescription>{collection.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {collection.movies.length} movies
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
