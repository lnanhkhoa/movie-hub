# Movie Hub - Development Guide

A comprehensive guide for developers working on the Movie Hub project.

---

## Table of Contents

1. [Getting Started](#getting-started)
2. [Project Architecture](#project-architecture)
3. [Development Workflow](#development-workflow)
4. [Adding New Features](#adding-new-features)
5. [Component Development](#component-development)
6. [Styling Guidelines](#styling-guidelines)
7. [State Management](#state-management)
8. [TypeScript Best Practices](#typescript-best-practices)
9. [Testing Strategy](#testing-strategy)
10. [Performance Optimization](#performance-optimization)
11. [Common Tasks](#common-tasks)
12. [Troubleshooting](#troubleshooting)

---

## Getting Started

### Prerequisites

- **Node.js**: 18.18 or later
- **Package Manager**: npm, yarn, or pnpm
- **Code Editor**: VS Code recommended with extensions:
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense
  - TypeScript and JavaScript Language Features

### Initial Setup

1. **Clone the repository**:
```bash
git clone https://github.com/yourusername/movie-hub.git
cd movie-hub
```

2. **Install dependencies**:
```bash
npm install
```

3. **Start development server**:
```bash
npm run dev
```

4. **Open browser**:
```
http://localhost:3000
```

### Development Commands

```bash
# Development server with hot reload
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Type check
npx tsc --noEmit
```

---

## Project Architecture

### Directory Structure

```
movie-hub/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   └── [routes]/          # Route folders
│
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── layout/           # Layout components
│   ├── auth/             # Auth components
│   └── movie/            # Movie components
│
├── lib/                  # Utilities and helpers
│   ├── auth-context.tsx  # Auth state
│   ├── mock-data.ts      # Mock data
│   ├── types.ts          # Type definitions
│   └── utils.ts          # Utility functions
│
├── docs/                 # Documentation
├── public/               # Static assets
└── [config files]        # Configuration
```

### Key Architectural Decisions

#### 1. Next.js App Router

We use the App Router (not Pages Router) for:
- Improved performance with Server Components
- Nested layouts
- Streaming and Suspense support
- Simplified data fetching

#### 2. Server vs Client Components

**Use Server Components (default) when**:
- Fetching data
- Accessing backend resources
- Keeping sensitive info on server
- Reducing client-side JavaScript

**Use Client Components (`"use client"`) when**:
- Using React hooks (useState, useEffect, useContext)
- Handling browser-only APIs
- Event listeners (onClick, onChange)
- Using Context providers

**Examples**:
```tsx
// Server Component (default)
export default function MovieDetailPage() {
  const movie = getMovie(id) // Can access backend directly
  return <div>{movie.title}</div>
}

// Client Component
"use client"
export function MovieCard() {
  const [liked, setLiked] = useState(false)
  return <button onClick={() => setLiked(true)}>Like</button>
}
```

#### 3. Static vs Dynamic Rendering

- **Static Generation**: All public pages (homepage, movie details, genre pages)
- **Dynamic Rendering**: Auth-gated pages (my-list, profile)
- **ISR (Future)**: Content that updates periodically

---

## Development Workflow

### 1. Feature Development Flow

```
1. Create feature branch
   git checkout -b feature/new-feature

2. Make changes
   - Edit files
   - Test locally

3. Commit changes
   git add .
   git commit -m "feat: add new feature"

4. Push branch
   git push origin feature/new-feature

5. Create Pull Request
   - Review changes
   - Request reviews
   - Merge to main
```

### 2. Commit Message Convention

Follow conventional commits:

```bash
# Format
<type>(<scope>): <subject>

# Types
feat:     New feature
fix:      Bug fix
docs:     Documentation
style:    Formatting, missing semi-colons, etc.
refactor: Code restructuring
test:     Adding tests
chore:    Maintenance

# Examples
feat(auth): add Google OAuth integration
fix(carousel): resolve scroll issue on mobile
docs(readme): update installation instructions
style(navbar): improve responsive layout
refactor(api): extract data fetching logic
```

### 3. Branch Naming

```bash
feature/feature-name    # New features
fix/bug-description     # Bug fixes
refactor/component-name # Code refactoring
docs/section-name       # Documentation updates
```

---

## Adding New Features

### Adding a New Page

1. **Create page directory**:
```bash
mkdir app/new-page
```

2. **Create page.tsx**:
```tsx
// app/new-page/page.tsx
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'New Page',
  description: 'Description for SEO'
}

export default function NewPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold mb-8">New Page</h1>
          {/* Content */}
        </div>
      </main>
      <Footer />
    </>
  )
}
```

3. **Add to navigation** (if needed):
```tsx
// lib/constants.ts (create if doesn't exist)
export const NAVBAR_LINKS = [
  // ... existing links
  { href: '/new-page', label: 'New Page' },
]
```

### Adding Dynamic Routes

For pages with dynamic parameters (e.g., `/movie/[id]`):

```tsx
// app/movie/[id]/page.tsx
interface MoviePageProps {
  params: Promise<{ id: string }>
}

// Generate static paths at build time
export async function generateStaticParams() {
  const movies = await getMovies()
  return movies.map(movie => ({
    id: movie.id
  }))
}

// Generate metadata for each page
export async function generateMetadata({ params }: MoviePageProps) {
  const { id } = await params
  const movie = await getMovie(id)

  return {
    title: movie.title,
    description: movie.description
  }
}

export default async function MoviePage({ params }: MoviePageProps) {
  const { id } = await params
  const movie = await getMovie(id)

  return <div>{movie.title}</div>
}
```

---

## Component Development

### Creating New Components

1. **Determine component type**:
   - UI component → `components/ui/`
   - Layout component → `components/layout/`
   - Feature component → `components/[feature]/`

2. **Create component file**:
```tsx
// components/movie/rating-badge.tsx
interface RatingBadgeProps {
  rating: number
  className?: string
}

export function RatingBadge({ rating, className }: RatingBadgeProps) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <Star className="h-4 w-4 fill-gold text-gold" />
      <span className="font-semibold">{rating}</span>
    </div>
  )
}
```

3. **Export from index** (optional):
```tsx
// components/movie/index.ts
export { MovieCard } from './movie-card'
export { HeroSection } from './hero-section'
export { Carousel } from './carousel'
export { RatingBadge } from './rating-badge'
```

### Adding shadcn/ui Components

Use the CLI to add pre-built components:

```bash
# Add a single component
npx shadcn@latest add button

# Add multiple components
npx shadcn@latest add button card dialog

# See available components
npx shadcn@latest add
```

Components are added to `components/ui/` and can be customized.

### Component Best Practices

#### 1. Type Safety
```tsx
// ✅ Good - Explicit types
interface ButtonProps {
  label: string
  onClick: () => void
  variant?: 'primary' | 'secondary'
}

// ❌ Bad - No types
function Button({ label, onClick, variant }) {
  return <button onClick={onClick}>{label}</button>
}
```

#### 2. Props Destructuring
```tsx
// ✅ Good - Destructure props
export function MovieCard({ movie, onSelect }: MovieCardProps) {
  return <div>{movie.title}</div>
}

// ❌ Bad - Using props object
export function MovieCard(props: MovieCardProps) {
  return <div>{props.movie.title}</div>
}
```

#### 3. Default Props
```tsx
// ✅ Good - Default values in destructuring
export function Button({
  variant = 'primary',
  size = 'md'
}: ButtonProps) {
  return <button className={`btn-${variant} btn-${size}`}>Click</button>
}
```

#### 4. Composition over Configuration
```tsx
// ✅ Good - Composable
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>

// ❌ Bad - Props for everything
<Card title="Title" content="Content" hasHeader />
```

---

## Styling Guidelines

### Tailwind CSS Usage

#### 1. Utility-First Approach
```tsx
// ✅ Good - Use Tailwind utilities
<div className="flex items-center gap-4 p-6 bg-card rounded-lg">

// ❌ Bad - Inline styles
<div style={{ display: 'flex', padding: '24px' }}>
```

#### 2. Responsive Design
```tsx
// Mobile-first responsive classes
<div className="
  grid
  grid-cols-2
  md:grid-cols-4
  lg:grid-cols-5
  gap-4
  md:gap-6
">
```

Breakpoints:
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px
- `2xl:` - 1536px

#### 3. Custom Theme Values

Use CSS variables defined in `app/globals.css`:

```tsx
// ✅ Good - Use theme colors
<div className="bg-background text-foreground">

// Custom colors in @theme
<div className="bg-netflix-red text-white">
```

#### 4. Component Variants with CVA

Use `class-variance-authority` for variants:

```tsx
import { cva } from 'class-variance-authority'

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        destructive: "bg-destructive text-destructive-foreground",
      },
      size: {
        default: "h-10 px-4",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
```

#### 5. cn() Helper

Merge classes with the `cn()` utility:

```tsx
import { cn } from '@/lib/utils'

<div className={cn(
  "base-classes",
  isActive && "active-classes",
  className // Allow override
)}>
```

---

## State Management

### 1. Local State (useState)

For component-specific state:

```tsx
"use client"
import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  )
}
```

### 2. Global State (React Context)

For app-wide state like authentication:

```tsx
// lib/auth-context.tsx
"use client"
import { createContext, useContext, useState } from 'react'

interface AuthContextType {
  user: User | null
  signIn: () => void
  signOut: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}
```

Usage:
```tsx
"use client"
import { useAuth } from '@/lib/auth-context'

export function Profile() {
  const { user, signOut } = useAuth()

  return (
    <div>
      <p>{user?.name}</p>
      <button onClick={signOut}>Sign Out</button>
    </div>
  )
}
```

### 3. URL State (useSearchParams)

For filter/search state:

```tsx
"use client"
import { useSearchParams, useRouter } from 'next/navigation'

export function SearchFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const genre = searchParams.get('genre') || 'all'

  const updateGenre = (newGenre: string) => {
    const params = new URLSearchParams(searchParams)
    params.set('genre', newGenre)
    router.push(`/search?${params.toString()}`)
  }

  return <Select value={genre} onValueChange={updateGenre} />
}
```

---

## TypeScript Best Practices

### 1. Define Interfaces for Props

```tsx
// ✅ Good
interface MovieCardProps {
  movie: Movie
  onSelect?: (id: string) => void
  className?: string
}

export function MovieCard({ movie, onSelect, className }: MovieCardProps) {
  return <div>{movie.title}</div>
}
```

### 2. Use Type Inference

```tsx
// ✅ Good - Let TypeScript infer
const movies = mockMovies.filter(m => m.rating > 8)

// ❌ Unnecessary - Explicit type when inferred
const movies: Movie[] = mockMovies.filter(m => m.rating > 8)
```

### 3. Avoid `any`

```tsx
// ❌ Bad
function handleData(data: any) {
  return data.value
}

// ✅ Good
function handleData(data: { value: string }) {
  return data.value
}

// ✅ Better - Generic
function handleData<T extends { value: string }>(data: T) {
  return data.value
}
```

### 4. Use Utility Types

```tsx
// Partial - Make all properties optional
type PartialMovie = Partial<Movie>

// Pick - Select specific properties
type MoviePreview = Pick<Movie, 'id' | 'title' | 'posterUrl'>

// Omit - Exclude specific properties
type MovieWithoutCast = Omit<Movie, 'cast'>

// Readonly - Make immutable
type ImmutableMovie = Readonly<Movie>
```

---

## Testing Strategy

### Unit Testing (Future)

Install testing libraries:
```bash
npm install -D @testing-library/react @testing-library/jest-dom jest jest-environment-jsdom
```

Example test:
```tsx
// components/movie/movie-card.test.tsx
import { render, screen } from '@testing-library/react'
import { MovieCard } from './movie-card'

describe('MovieCard', () => {
  const mockMovie = {
    id: '1',
    title: 'Inception',
    rating: 8.8,
    // ... other properties
  }

  it('renders movie title', () => {
    render(<MovieCard movie={mockMovie} />)
    expect(screen.getByText('Inception')).toBeInTheDocument()
  })

  it('displays rating', () => {
    render(<MovieCard movie={mockMovie} />)
    expect(screen.getByText('8.8')).toBeInTheDocument()
  })
})
```

### E2E Testing (Future)

Use Playwright for end-to-end tests:
```bash
npm install -D @playwright/test
```

Example E2E test:
```typescript
// e2e/homepage.spec.ts
import { test, expect } from '@playwright/test'

test('homepage displays hero section', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: 'Inception' })).toBeVisible()
})

test('navigation works', async ({ page }) => {
  await page.goto('/')
  await page.click('text=Movies')
  await expect(page).toHaveURL('/genre/all')
})
```

---

## Performance Optimization

### 1. Image Optimization

Always use Next.js Image component:

```tsx
import Image from 'next/image'

// ✅ Good - Optimized
<Image
  src={movie.posterUrl}
  alt={movie.title}
  width={280}
  height={420}
  sizes="(max-width: 768px) 160px, (max-width: 1024px) 220px, 280px"
  className="object-cover"
/>

// ❌ Bad - No optimization
<img src={movie.posterUrl} alt={movie.title} />
```

### 2. Lazy Loading

Use React.lazy for code splitting:

```tsx
import { lazy, Suspense } from 'react'

const HeavyComponent = lazy(() => import('./HeavyComponent'))

export function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  )
}
```

### 3. Memoization

Use React.memo for expensive renders:

```tsx
import { memo } from 'react'

export const MovieCard = memo(function MovieCard({ movie }: MovieCardProps) {
  return <div>{movie.title}</div>
})
```

Use useMemo for expensive calculations:

```tsx
const filteredMovies = useMemo(
  () => movies.filter(m => m.genre.includes(selectedGenre)),
  [movies, selectedGenre]
)
```

### 4. Debouncing

Debounce search input:

```tsx
import { useState, useCallback } from 'react'
import { debounce } from 'lodash'

export function SearchInput() {
  const [query, setQuery] = useState('')

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      // Perform search
      console.log('Searching:', value)
    }, 300),
    []
  )

  return (
    <input
      value={query}
      onChange={(e) => {
        setQuery(e.target.value)
        debouncedSearch(e.target.value)
      }}
    />
  )
}
```

---

## Common Tasks

### 1. Add a New Movie

Edit `lib/mock-data.ts`:

```tsx
export const mockMovies: Movie[] = [
  // ... existing movies
  {
    id: '19',
    title: 'New Movie',
    year: 2024,
    genre: ['Action', 'Thriller'],
    rating: 8.5,
    duration: '2h 15m',
    ageRating: 'PG-13',
    description: 'Movie description here',
    posterUrl: 'https://placehold.co/280x420/1a1a1a/666666?text=New+Movie',
    backdropUrl: 'https://placehold.co/1920x1080/1a1a1a/666666?text=Backdrop',
    cast: [],
    director: 'Director Name'
  }
]
```

Rebuild to generate new static page:
```bash
npm run build
```

### 2. Customize Theme Colors

Edit `app/globals.css`:

```css
@theme {
  /* Change Netflix red */
  --color-netflix-red: #FF0000;

  /* Add new color */
  --color-custom-blue: #0066FF;
}
```

Use in components:
```tsx
<div className="bg-netflix-red text-white" />
<div className="bg-custom-blue text-white" />
```

### 3. Add New Genre

Edit `lib/constants.ts`:

```tsx
export const GENRES = [
  'Action',
  'Comedy',
  'Drama',
  // ... existing genres
  'Western', // New genre
] as const
```

Rebuild to generate new genre page:
```bash
npm run build
```

### 4. Modify Navbar Links

Edit `components/layout/navbar.tsx`:

```tsx
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/genre/all', label: 'Movies' },
  { href: '/tv/1', label: 'TV Shows' },
  { href: '/collections', label: 'Collections' },
  { href: '/my-list', label: 'My List' },
  // Add new link
  { href: '/trending', label: 'Trending' },
]
```

---

## Troubleshooting

### Common Issues

#### 1. Build Errors

**Issue**: TypeScript errors during build
```bash
Type error: Property 'X' does not exist on type 'Y'
```

**Solution**: Check type definitions in `lib/types.ts` and ensure props match

#### 2. CSS Not Applying

**Issue**: Tailwind classes not working

**Solution**:
- Check if class name is correct
- Verify Tailwind config includes the file
- Restart dev server (`npm run dev`)

#### 3. Image Not Loading

**Issue**: Next.js Image component shows error

**Solution**:
- Verify image URL is correct
- Add domain to `next.config.ts` remotePatterns
- Check image aspect ratio matches width/height props

#### 4. Context Not Found

**Issue**: `useAuth must be used within AuthProvider`

**Solution**: Ensure component is wrapped in provider:
```tsx
// app/layout.tsx
<AuthProvider>
  {children}
</AuthProvider>
```

#### 5. Static Generation Fails

**Issue**: `generateStaticParams()` errors

**Solution**:
- Ensure function returns array of objects
- Check all required params are included
- Verify data source is accessible at build time

### Debug Tools

#### 1. React DevTools
Install browser extension for component inspection

#### 2. Next.js DevTools
Built into dev server, shows:
- Compilation status
- Route information
- Client/Server components

#### 3. Console Logging
```tsx
// Server component logs
console.log('Server:', movie) // Shows in terminal

// Client component logs
console.log('Client:', movie) // Shows in browser
```

#### 4. TypeScript Checking
```bash
# Check for type errors
npx tsc --noEmit

# Watch mode
npx tsc --noEmit --watch
```

---

## Additional Resources

### Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Docs](https://ui.shadcn.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Internal Docs

- [Design Guidelines](/Users/khoale/Devs/khoale/movie-hub/docs/design-guidelines.md)
- [Implementation Summary](/Users/khoale/Devs/khoale/movie-hub/docs/implementation-summary.md)
- [Deployment Guide](/Users/khoale/Devs/khoale/movie-hub/docs/deployment-guide.md)

---

**Happy Coding!** 🚀
