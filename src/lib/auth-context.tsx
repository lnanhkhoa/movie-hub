"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'
import type { User } from './types'

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  signIn: () => Promise<void>
  signOut: () => void
  addToWatchlist: (movieId: string) => void
  removeFromWatchlist: (movieId: string) => void
  isInWatchlist: (movieId: string) => boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    if (typeof window === 'undefined') return null
    const storedUser = localStorage.getItem('movie-hub-user')
    if (storedUser) {
      try {
        return JSON.parse(storedUser)
      } catch {
        console.error('Failed to parse user data')
        return null
      }
    }
    return null
  })

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (user) {
      localStorage.setItem('movie-hub-user', JSON.stringify(user))
    } else {
      localStorage.removeItem('movie-hub-user')
    }
  }, [user])

  const signIn = async () => {
    const mockUser: User = {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      avatarUrl: 'https://avatar.vercel.sh/john',
      watchlist: [],
    }
    setUser(mockUser)
  }

  const signOut = () => {
    setUser(null)
  }

  const addToWatchlist = (movieId: string) => {
    if (!user) return
    if (user.watchlist.includes(movieId)) return
    setUser({
      ...user,
      watchlist: [...user.watchlist, movieId],
    })
  }

  const removeFromWatchlist = (movieId: string) => {
    if (!user) return
    setUser({
      ...user,
      watchlist: user.watchlist.filter(id => id !== movieId),
    })
  }

  const isInWatchlist = (movieId: string) => {
    return user?.watchlist.includes(movieId) ?? false
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        signIn,
        signOut,
        addToWatchlist,
        removeFromWatchlist,
        isInWatchlist,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
