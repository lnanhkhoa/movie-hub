export interface Movie {
  id: string
  title: string
  year: number
  genre: string[]
  rating: number
  duration: string
  ageRating: string
  description: string
  posterUrl: string
  backdropUrl: string
  trailerUrl?: string
  manifestUrl?: string
  cast: CastMember[]
  director: string
}

export interface TVShow {
  id: string
  title: string
  year: number
  genre: string[]
  rating: number
  seasons: Season[]
  ageRating: string
  description: string
  posterUrl: string
  backdropUrl: string
  cast: CastMember[]
  creator: string
}

export interface Season {
  seasonNumber: number
  episodeCount: number
  episodes: Episode[]
}

export interface Episode {
  episodeNumber: number
  title: string
  duration: string
  description: string
  thumbnailUrl: string
  videoUrl: string
}

export interface CastMember {
  id: string
  name: string
  role: string
  photoUrl: string
}

export interface Collection {
  id: string
  name: string
  description: string
  movies: string[]
  thumbnailUrl: string
}

export interface User {
  id: string
  name: string
  email: string
  avatarUrl: string
  watchlist: string[]
}

export interface Review {
  id: string
  userId: string
  userName: string
  userAvatar: string
  content: string
  rating: number
  createdAt: string
}
