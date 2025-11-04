import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home } from 'lucide-react'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] bg-background px-4">
        <div className="text-center space-y-6 max-w-md">
          <h1 className="text-7xl md:text-8xl font-bold text-netflix-red">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold">Page Not Found</h2>
          <p className="text-muted-foreground text-base md:text-lg">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Button asChild size="lg">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Go Home
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </>
  )
}
