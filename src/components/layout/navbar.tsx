'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Search, Menu, X, Bell } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { SignInModal } from '@/components/auth/sign-in-modal'
import { useAuth } from '@/lib/auth-context'
import { toast } from 'sonner'
import { IS_HIDE_AUTH } from '@/config/env'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/genre/action', label: 'Movies' },
  { href: '/tv/1', label: 'TV Shows' },
  { href: '/collections', label: 'New & Popular' }
  // { href: "/my-list", label: "My List" },
]

export function Navbar() {
  const pathname = usePathname()
  const { user, isAuthenticated, signOut } = useAuth()
  const [signInOpen, setSignInOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSignOut = () => {
    signOut()
    toast.success('Signed out successfully')
  }

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 h-[70px] z-1000 transition-all duration-300',
          scrolled
            ? 'bg-[rgba(20,20,20,0.98)] shadow-[0_2px_10px_rgba(0,0,0,0.5)]'
            : 'bg-[rgba(20,20,20,0.95)] backdrop-blur-[10px]'
        )}
      >
        <div className="max-w-[1920px] mx-auto h-full px-[50px]">
          <div className="flex h-full items-center justify-between">
            <div className="flex items-center gap-10">
              <Link href="/" className="flex items-center gap-3">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="40" height="40" rx="6" fill="#E50914" />
                  <path d="M10 10L20 20L10 30V10Z" fill="white" />
                  <path d="M20 10L30 20L20 30V10Z" fill="white" opacity="0.7" />
                </svg>
                <span className="text-2xl font-bold text-netflix-red tracking-[-0.5px]">
                  Theta Movies
                </span>
              </Link>

              <ul className="hidden md:flex items-center gap-6">
                {navLinks.map((link) => {
                  const isActive =
                    pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          'text-sm font-medium transition-colors hover:text-foreground relative',
                          isActive ? 'text-foreground' : 'text-muted-foreground',
                          isActive &&
                            "after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-[3px] after:bg-netflix-red after:rounded-[2px]"
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="flex items-center gap-6">
              <Link
                href="/search"
                className="hidden md:flex p-2 rounded transition-colors hover:bg-white/10"
              >
                <Search className="h-6 w-6" />
                <span className="sr-only">Search</span>
              </Link>

              <button className="hidden md:flex p-2 rounded transition-colors hover:bg-white/10">
                <Bell className="h-6 w-6" />
                <span className="sr-only">Notifications</span>
              </button>

              {isAuthenticated && user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={cn(
                        'relative flex items-center gap-2 p-1 rounded transition-colors hover:bg-white/10 group',
                        IS_HIDE_AUTH && 'hidden'
                      )}
                    >
                      <Image
                        src={user.avatarUrl}
                        alt={user.name}
                        width={36}
                        height={36}
                        className="w-9 h-9 rounded"
                      />
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="transition-transform group-hover:rotate-180"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                      <span className="sr-only">Open user menu</span>
                    </button>
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
                    <DropdownMenuItem onClick={handleSignOut}>Sign Out</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button
                  onClick={() => setSignInOpen(true)}
                  className={cn('hidden md:inline-flex', IS_HIDE_AUTH && 'md:hidden')}
                >
                  Sign In
                </Button>
              )}

              <Button
                variant="ghost"
                size="icon"
                className={cn('md:hidden', IS_HIDE_AUTH && 'hidden')}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-4 border-t border-border/40">
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
              {!isAuthenticated && !IS_HIDE_AUTH && (
                <Button
                  onClick={() => {
                    setSignInOpen(true)
                    setMobileMenuOpen(false)
                  }}
                  className="w-full"
                >
                  Sign In
                </Button>
              )}
            </div>
          )}
        </div>
      </nav>

      <SignInModal open={signInOpen} onOpenChange={setSignInOpen} />
    </>
  )
}
