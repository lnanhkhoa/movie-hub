import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Separator } from '@/components/ui/separator'
import { Play, Users, Film, Award } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Theta Movies',
  description: 'Learn more about Theta Movies'
}

export default function AboutPage() {
  const features = [
    {
      icon: Film,
      title: 'Vast Library',
      description: 'Thousands of movies and TV shows at your fingertips'
    },
    {
      icon: Play,
      title: 'Free Streaming',
      description: 'Watch unlimited content without any subscription fees'
    },
    {
      icon: Users,
      title: 'Personalized Lists',
      description: 'Create and manage your own watchlists'
    },
    {
      icon: Award,
      title: 'Quality Content',
      description: 'Curated collections of award-winning films'
    }
  ]

  const stats = [
    { label: 'Movies', value: '10,000+' },
    { label: 'TV Shows', value: '5,000+' },
    { label: 'Users', value: '1M+' },
    { label: 'Countries', value: '50+' }
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-[70px]">
        <div className="container mx-auto px-4 lg:px-8 py-8 md:py-12">
          <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
            <div className="text-center space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">About Theta Movies</h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Your free destination for discovering and watching movies and TV shows
              </p>
            </div>

            <Separator />

            <div className="space-y-6 text-muted-foreground">
              <p className="text-base md:text-lg">
                Founded in 2025, Theta Movies believes that entertainment should be accessible to
                everyone. We provide a platform where movie enthusiasts can discover, watch, and
                share their favorite content without barriers.
              </p>
              <p className="text-base md:text-lg">
                Our mission is to create the ultimate destination for movie lovers worldwide,
                offering a seamless experience across all devices with personalized recommendations
                and curated collections.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 py-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-netflix-red mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">
                Why Choose Theta Movies
              </h2>
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-6 rounded-lg bg-card hover:bg-accent transition-colors"
                  >
                    <div className="flex-none">
                      <feature.icon className="h-8 w-8 text-netflix-red" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
