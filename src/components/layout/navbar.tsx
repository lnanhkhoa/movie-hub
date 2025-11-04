"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Search, Menu, X, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { SignInModal } from '@/components/auth/sign-in-modal'
import { useAuth } from '@/lib/auth-context'
import { toast } from 'sonner'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/genre/action', label: 'Movies' },
  { href: '/tv/1', label: 'TV Shows' },
  { href: '/collections', label: 'Collections' },
  { href: '/my-list', label: 'My List' },
]

export function Navbar() {
  const pathname = usePathname()
  const { user, isAuthenticated, signOut } = useAuth()
  const [signInOpen, setSignInOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const handleSignOut = () => {
    signOut()
    toast.success("Signed out successfully")
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Play className="h-6 w-6 text-netflix-red fill-current" />
              <span className="text-xl md:text-2xl font-bold text-netflix-red">Movie Hub</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm transition-colors hover:text-netflix-red ${
                      isActive ? 'text-netflix-red font-semibold' : 'text-muted-foreground'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                {searchOpen ? (
                  <div className="flex items-center gap-2">
                    <Input
                      type="search"
                      placeholder="Search movies..."
                      className="w-64"
                      autoFocus
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          const value = (e.target as HTMLInputElement).value
                          if (value.trim()) {
                            window.location.href = `/search?q=${encodeURIComponent(value)}`
                          }
                        }
                      }}
                    />
                    <Button variant="ghost" size="icon" onClick={() => setSearchOpen(false)}>
                      <X className="h-5 w-5" />
                      <span className="sr-only">Close search</span>
                    </Button>
                  </div>
                ) : (
                  <Button variant="ghost" size="icon" onClick={() => setSearchOpen(true)}>
                    <Search className="h-5 w-5" />
                    <span className="sr-only">Search</span>
                  </Button>
                )}
              </div>

              {isAuthenticated && user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                      <Image
                        src={user.avatarUrl}
                        alt={user.name}
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-full"
                      />
                      <span className="sr-only">Open user menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium">{user.name}</p>
                        <p className="text-xs text-muted-foreground">{user.email}</p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/profile">Profile & Settings</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/my-list">My List</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleSignOut}>
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button onClick={() => setSignInOpen(true)} className="hidden md:inline-flex">
                  Sign In
                </Button>
              )}

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>

          {mobileMenuOpen && (
            <nav className="md:hidden py-4 space-y-4 border-t border-border">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm hover:text-netflix-red transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
                <Input
                  type="search"
                  placeholder="Search movies..."
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      const value = (e.target as HTMLInputElement).value
                      if (value.trim()) {
                        window.location.href = `/search?q=${encodeURIComponent(value)}`
                        setMobileMenuOpen(false)
                      }
                    }
                  }}
                />
              </div>
              {!isAuthenticated && (
                <Button onClick={() => { setSignInOpen(true); setMobileMenuOpen(false); }} className="w-full">
                  Sign In
                </Button>
              )}
            </nav>
          )}
        </div>
      </header>

      <SignInModal open={signInOpen} onOpenChange={setSignInOpen} />
    </>
  )
}
