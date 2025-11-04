# Movie Hub

A modern, Netflix-inspired movie streaming platform built with Next.js 16, React 19, and Tailwind CSS v4. Movie Hub provides a cinematic experience for discovering and browsing movies and TV shows with a beautiful dark theme and responsive design.

![Movie Hub](https://placehold.co/1200x630/141414/E50914?text=Movie+Hub)

## Features

- **15 Pages**: Complete implementation including homepage, movie/TV details, search, browse by genre, collections, profile, and more
- **Netflix-Inspired Dark Theme**: Immersive dark design with #141414 background, #E50914 accent red, and #FFB800 gold ratings
- **Responsive Design**: Mobile-first approach with breakpoints at 320px, 768px, and 1024px
- **Google Authentication**: Optional sign-in modal for user features (mock implementation ready for OAuth)
- **Watchlist Management**: Add movies to "My List" with auth-gated functionality
- **Dynamic Carousels**: Smooth horizontal scrolling movie carousels with touch/swipe support
- **Search & Filters**: Genre browsing and search functionality
- **Static Site Generation**: All pages pre-rendered at build time (63 static pages)
- **shadcn/ui Components**: Beautiful, accessible UI components built on Radix UI
- **Performance Optimized**: Tailwind v4 CSS-first architecture, image optimization, and fast loading

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack, React 19.2)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first @theme, modern utilities)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (Radix UI + Tailwind)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Poppins (headings), Roboto (body) via Google Fonts
- **TypeScript**: Full type safety
- **State Management**: React Context API for authentication
- **Notifications**: Sonner for toast notifications

## Getting Started

### Prerequisites

- Node.js 18.18 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/movie-hub.git
cd movie-hub
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

### Build for Production

```bash
npm run build
npm start
```

The build process generates 63 static pages for optimal performance.

## Project Structure

```
movie-hub/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx             # Root layout with fonts & providers
│   ├── page.tsx               # Homepage with hero & carousels
│   ├── movie/[id]/           # Dynamic movie detail pages
│   ├── tv/[id]/              # TV show detail pages
│   ├── watch/[id]/           # Video player pages
│   ├── genre/[slug]/         # Genre browsing pages
│   ├── search/               # Search results page
│   ├── collections/          # Movie collections page
│   ├── my-list/              # User watchlist page
│   ├── profile/              # User profile page
│   ├── help/                 # Help center page
│   ├── about/                # About page
│   ├── contact/              # Contact form page
│   ├── terms/                # Terms of service
│   ├── privacy/              # Privacy policy
│   ├── not-found.tsx         # 404 error page
│   └── globals.css           # Global styles & Tailwind config
│
├── components/                # React components
│   ├── ui/                   # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   └── ... (14 components)
│   ├── layout/               # Layout components
│   │   ├── navbar.tsx        # Main navigation
│   │   └── footer.tsx        # Footer
│   ├── auth/                 # Authentication components
│   │   └── sign-in-modal.tsx # Google sign-in modal
│   └── movie/                # Movie-specific components
│       ├── movie-card.tsx    # Movie card component
│       ├── hero-section.tsx  # Hero banner
│       └── carousel.tsx      # Movie carousel
│
├── lib/                       # Utilities & helpers
│   ├── auth-context.tsx      # Authentication context
│   ├── mock-data.ts          # Mock movie/TV data (18 movies, 3 shows)
│   ├── types.ts              # TypeScript type definitions
│   └── utils.ts              # Utility functions (cn helper)
│
├── docs/                      # Documentation
│   ├── design-guidelines.md  # Design system & guidelines
│   ├── implementation-summary.md
│   ├── development-guide.md
│   └── deployment-guide.md
│
└── public/                    # Static assets
    └── fonts/                 # Font files (if needed)
```

## Development

### Available Commands

- `npm run dev` - Start development server (Turbopack enabled)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Key Files

- **app/globals.css** - Tailwind v4 configuration with Movie Hub theme
- **components.json** - shadcn/ui configuration
- **lib/mock-data.ts** - Mock data for movies, TV shows, and collections
- **lib/auth-context.tsx** - Authentication state management

### Adding New Pages

1. Create a new directory in `app/` (e.g., `app/new-page/`)
2. Add a `page.tsx` file with your component
3. Export metadata for SEO
4. Use `<Navbar />` and `<Footer />` for consistent layout

Example:

```tsx
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'New Page',
  description: 'Description for new page'
}

export default function NewPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Your content */}
      </main>
      <Footer />
    </>
  )
}
```

### Adding New Components

1. Use shadcn/ui CLI to add base components:

```bash
npx shadcn@latest add [component-name]
```

2. Create custom components in `components/` directory
3. Follow naming convention: kebab-case for files, PascalCase for components

### Customizing Theme

Edit `app/globals.css` to customize the Movie Hub theme:

```css
@theme {
  /* Update colors */
  --color-netflix-red: #E50914;
  --color-gold: #FFB800;

  /* Update fonts */
  --font-poppins: "Poppins", sans-serif;
}
```

## Pages

### Public Pages
- **/** - Homepage with hero section and movie carousels
- **/movie/[id]** - Movie detail page with cast, ratings, and synopsis
- **/tv/[id]** - TV show detail page with seasons and episodes
- **/watch/[id]** - Video player page
- **/search** - Search results with filters
- **/genre/[slug]** - Browse movies by genre (11 genres + all)
- **/collections** - Curated movie collections
- **/help** - Help center with FAQs
- **/about** - About page
- **/contact** - Contact form
- **/terms** - Terms of service
- **/privacy** - Privacy policy

### Auth-Gated Pages
- **/my-list** - User's watchlist (requires sign-in)
- **/profile** - User profile & settings (requires sign-in)

### Error Pages
- **/not-found** - Custom 404 page

## Design System

Movie Hub follows a Netflix-inspired design system with:

- **Colors**: Dark background (#141414), card background (#1F1F1F), Netflix red (#E50914), gold (#FFB800)
- **Typography**: Poppins for headings, Roboto for body text
- **Spacing**: 8px grid system
- **Components**: Accessible, responsive shadcn/ui components
- **Animations**: Smooth transitions and hover effects

See [docs/design-guidelines.md](/Users/khoale/Devs/khoale/movie-hub/docs/design-guidelines.md) for full design specifications.

## Authentication

Currently uses mock authentication with localStorage. To integrate real Google OAuth:

1. Install NextAuth.js:
```bash
npm install next-auth
```

2. Configure Google OAuth provider in `app/api/auth/[...nextauth]/route.ts`
3. Replace mock auth in `lib/auth-context.tsx` with NextAuth hooks
4. Add environment variables for Google Client ID and Secret

## Future Enhancements

- [ ] Real Google OAuth integration
- [ ] Backend API integration (TMDB or custom)
- [ ] Video player with playback controls
- [ ] User reviews and ratings
- [ ] Advanced search with filters
- [ ] Personalized recommendations
- [ ] Watch history tracking
- [ ] Multi-language support
- [ ] Dark/Light theme toggle
- [ ] Accessibility improvements

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms

Movie Hub can be deployed to any platform that supports Next.js:

- **Netlify**: Use `next build` and deploy `.next` folder
- **AWS Amplify**: Connect GitHub repository
- **Docker**: Use `next/standalone` output

See [docs/deployment-guide.md](/Users/khoale/Devs/khoale/movie-hub/docs/deployment-guide.md) for detailed deployment instructions.

## Performance

- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **Static Generation**: 63 pages pre-rendered at build time
- **Image Optimization**: Next.js Image component with WebP/AVIF support
- **Code Splitting**: Automatic route-based code splitting
- **CSS**: Tailwind v4 CSS-first architecture for minimal runtime

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration from [Netflix](https://www.netflix.com)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/)
- Movie data structure inspired by [TMDB](https://www.themoviedb.org/)

## Contact

For questions or feedback, please open an issue or contact the development team.

---

**Built with ❤️ using Next.js 16, React 19, and Tailwind CSS v4**
