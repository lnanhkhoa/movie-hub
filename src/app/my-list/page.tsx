"use client"

import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { MovieCard } from '@/components/movie/movie-card'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/lib/auth-context'
import { useState } from 'react'
import { SignInModal } from '@/components/auth/sign-in-modal'
import { mockMovies } from '@/lib/mock-data'

export default function MyListPage() {
  const { user, isAuthenticated } = useAuth()
  const [signInOpen, setSignInOpen] = useState(false)

  if (!isAuthenticated) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-background">
          <div className="container mx-auto px-4 lg:px-8 py-16 md:py-32">
            <div className="text-center max-w-md mx-auto space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold">Sign in to access your list</h1>
              <p className="text-muted-foreground">
                Create a free account to save your favorite movies and TV shows
              </p>
              <Button onClick={() => setSignInOpen(true)} size="lg">
                Sign In
              </Button>
            </div>
          </div>
        </main>
        <Footer />
        <SignInModal open={signInOpen} onOpenChange={setSignInOpen} />
      </>
    )
  }

  const watchlistMovies = mockMovies.filter(m =>
    user?.watchlist.includes(m.id)
  )

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 lg:px-8 py-8 md:py-12">
          <div className="mb-6 md:mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">My List</h1>
            <p className="text-muted-foreground">
              {watchlistMovies.length} {watchlistMovies.length === 1 ? 'movie' : 'movies'} in your list
            </p>
          </div>

          {watchlistMovies.length === 0 ? (
            <div className="text-center py-16 md:py-32">
              <p className="text-muted-foreground text-lg">
                Your list is empty. Start adding movies!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
              {watchlistMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
