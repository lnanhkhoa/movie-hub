"use client"

import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { useAuth } from '@/lib/auth-context'
import { useState } from 'react'
import { SignInModal } from '@/components/auth/sign-in-modal'
import { toast } from 'sonner'
import Image from 'next/image'

export default function ProfilePage() {
  const { user, isAuthenticated } = useAuth()
  const [signInOpen, setSignInOpen] = useState(false)

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success("Profile updated successfully")
  }

  if (!isAuthenticated) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-background">
          <div className="container mx-auto px-4 lg:px-8 py-16 md:py-32">
            <div className="text-center max-w-md mx-auto space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold">Sign in to view your profile</h1>
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

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 lg:px-8 py-8 md:py-12">
          <div className="max-w-2xl mx-auto space-y-6 md:space-y-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Profile & Settings</h1>
              <p className="text-muted-foreground">Manage your account information</p>
            </div>

            <Separator />

            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <Image
                  src={user?.avatarUrl || ''}
                  alt={user?.name || 'User avatar'}
                  width={96}
                  height={96}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full"
                />
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold">{user?.name}</h2>
                  <p className="text-sm md:text-base text-muted-foreground">{user?.email}</p>
                </div>
              </div>

              <Separator />

              <form onSubmit={handleSave} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Display Name</Label>
                  <Input id="name" defaultValue={user?.name} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue={user?.email} disabled />
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Email is managed by Google and cannot be changed here
                  </p>
                </div>

                <Button type="submit">Save Changes</Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
