# Theta Movies - Design Guidelines

## Overview
This document outlines the design system and guidelines for **Theta Movies** (formerly Movie Hub), a modern movie streaming platform with a Netflix-inspired dark theme that prioritizes content discovery and user experience.

## Design Philosophy
- **Content First**: Let movie posters and visuals take center stage
- **Cinematic Experience**: Immersive, full-screen layouts with dramatic imagery
- **Dark by Default**: Reduce eye strain during extended viewing sessions
- **Smooth & Responsive**: Fluid animations and seamless interactions
- **Accessible**: WCAG 2.1 AA compliant for all users
- **Intelligent Perspective**: Theta (θ) represents the angle of view—smart, curated content discovery

---

## Brand Identity

### Brand Name: Theta Movies

**Meaning & Symbolism:**
- **Theta (θ)**: Greek letter representing angles, perspective, and measurement
- **Symbolic Meaning**: Intelligent angle of approach, curated perspective on content
- **Modern Association**: Tech-forward, sophisticated, mathematical precision
- **Lowercase Styling**: "theta movies" for contemporary, approachable feel

### Logo System

We've developed three distinct logo concepts, each optimized for different use cases:

#### Concept A: Minimalist Icon
- **Style**: Bold theta (Θ) symbol in a filled circle
- **Best For**: Favicons, app icons, social media profiles, loading states
- **Strength**: Instantly recognizable, scales perfectly to any size
- **Files**: `theta-movies-concept-a-icon.svg`, `theta-movies-concept-a-icon-white.svg`

#### Concept B: Integrated Wordmark
- **Style**: "theta movies" with θ symbol embedded in typography
- **Best For**: Marketing materials, email signatures, documents
- **Strength**: Clear brand name with creative symbol integration
- **Files**: `theta-movies-concept-b-wordmark.svg`, `theta-movies-concept-b-wordmark-alt.svg`

#### Concept C: Badge Combination (Recommended Primary)
- **Style**: Circular badge icon paired with text
- **Best For**: Primary logo across website, navbar, marketing campaigns
- **Strength**: Maximum versatility, professional appearance
- **Files**: `theta-movies-concept-c-horizontal.svg`, `theta-movies-concept-c-vertical.svg`

**Premium Variations:**
- Gradient version: Red-to-gold gradient for special features
- Gold version: Luxurious gold color scheme for premium content

**See full logo guidelines:** `/docs/logo-usage-guide.md`

### Logo Usage in Code

**Navbar Implementation:**
```tsx
import Image from 'next/image'

<Image
  src="/logos/theta-movies-concept-c-horizontal.svg"
  alt="Theta Movies"
  width={160}
  height={40}
  priority
/>
```

**Favicon Configuration:**
```tsx
// app/layout.tsx
export const metadata = {
  title: 'Theta Movies',
  icons: {
    icon: '/logos/theta-movies-favicon.svg',
  },
}
```

---

## Color Palette

### Primary Colors
```css
--primary-bg: #141414      /* Deep Black - Main background */
--secondary-bg: #1F1F1F    /* Charcoal - Cards and sections */
--accent-red: #E50914      /* Netflix Red - CTAs and branding */
--accent-gold: #FFB800     /* Gold - Ratings and premium features */
```

### Text Colors
```css
--text-primary: #FFFFFF    /* White - Headings and primary text */
--text-secondary: #B3B3B3  /* Light Gray - Body text and metadata */
--overlay: rgba(0, 0, 0, 0.7)  /* Black overlay for readability */
```

### Usage Guidelines
- **Primary Background (#141414)**: Use for main page background, creating depth
- **Secondary Background (#1F1F1F)**: Use for cards, navigation, and elevated surfaces
- **Accent Red (#E50914)**: Reserved for primary CTAs, logo, and active states
- **Accent Gold (#FFB800)**: Exclusively for star ratings and premium indicators
- **Text Primary (#FFFFFF)**: Headings, movie titles, and emphasized content
- **Text Secondary (#B3B3B3)**: Descriptive text, metadata, and supporting information

---

## Typography

### Font Families
```css
--font-primary: 'Poppins', sans-serif    /* Headings, UI elements */
--font-secondary: 'Roboto', sans-serif   /* Body text, metadata */
```

### Type Scale

#### Headings
- **Hero Title**: 48-64px, Poppins Bold (700)
- **Section Title**: 24-28px, Poppins SemiBold (600)
- **Card Title**: 16-18px, Poppins Medium (500)
- **Metadata**: 14px, Roboto Regular (400)

#### Body Text
- **Primary**: 18px, Poppins Regular (400)
- **Secondary**: 16px, Roboto Light (300)
- **Small**: 14px, Roboto Regular (400)

### Usage Guidelines
- Use **Poppins** for all headings, buttons, and navigation
- Use **Roboto** for descriptions, metadata, and body content
- Maintain minimum 16px font size for body text (accessibility)
- Line height: 1.5-1.6 for readability

---

## Layout & Spacing

### Grid System
- **Container Max Width**: 1920px
- **Content Padding**: 50px (desktop), 20px (mobile)
- **Section Spacing**: 60px vertical gap between sections

### Spacing Scale
```css
--spacing-sm: 8px      /* Tight spacing */
--spacing-md: 16px     /* Default spacing */
--spacing-lg: 24px     /* Section padding */
--spacing-xl: 40px     /* Large gaps */
--spacing-2xl: 50px    /* Container padding */
```

### Component Dimensions

#### Navigation Bar
- Height: 70px
- Padding: 0 50px (desktop), 0 20px (mobile)
- Z-index: 1000

#### Hero Section
- Height: 90vh
- Max content width: 600px
- Gradient overlay: linear-gradient(to top, rgba(20,20,20,1) 0%, transparent 100%)

#### Movie Cards
- Desktop: 280px width × 420px height
- Tablet: 220px width × 330px height
- Mobile: 160px width × 240px height
- Aspect ratio: 2:3 (portrait)
- Border radius: 8px
- Gap between cards: 16px

---

## Components

### Navigation Bar
**Purpose**: Fixed navigation for quick access to all sections

**Structure**:
- Logo + brand name on the left
- Navigation links (Home, Movies, TV Shows, New & Popular, My List)
- Search, notifications, and profile on the right

**Behavior**:
- Fixed position at top
- Semi-transparent background with backdrop blur
- Becomes fully opaque on scroll
- Active link indicator: Red underline (#E50914)

### Hero Section
**Purpose**: Showcase featured content with high visual impact

**Structure**:
- Full viewport background image/video
- Gradient overlay for text readability
- Movie title (48-64px)
- Star rating system (5 stars, gold #FFB800)
- Metadata (year, duration, age rating)
- Short description (2-3 lines max)
- CTA buttons (Play Now, Add to List)

**Behavior**:
- Background image covers full section
- Gradient darkens from top to bottom
- Buttons have hover effects (scale + brightness)

### Movie Card
**Purpose**: Present movie information in a compact, attractive format

**Structure**:
- Movie poster image (2:3 aspect ratio)
- Hover overlay with details
- Title, rating, year, action buttons

**Behavior**:
- Scale up to 1.05x on hover
- Show overlay with details on hover
- Smooth transition (300ms ease-in-out)
- Box shadow increases on hover

**States**:
- Default: Image only
- Hover: Scaled + overlay + shadow
- Focus: Blue outline for accessibility

### Carousel
**Purpose**: Horizontal scrolling for browsing multiple movies

**Structure**:
- Section title (24-28px)
- Horizontal scrolling container
- Navigation arrows (prev/next)
- 6+ movie cards per carousel

**Behavior**:
- Smooth scroll animation
- Navigation arrows appear on hover (desktop)
- Touch/swipe enabled (mobile)
- Mouse drag support (desktop)
- Keyboard navigation (arrow keys)

### Buttons

#### Primary Button (Play Now)
```css
Background: #E50914
Color: #FFFFFF
Height: 48px
Padding: 0 32px
Border-radius: 4px
Font: Poppins Medium (500), 16px
```

#### Secondary Button (Add to List)
```css
Background: transparent
Border: 2px solid #FFFFFF
Color: #FFFFFF
Height: 48px
Padding: 0 32px
Border-radius: 4px
Font: Poppins Medium (500), 16px
```

**Hover States**:
- Primary: Brightness increase to 110%
- Secondary: Background becomes rgba(255,255,255,0.1)

---

## Animations & Transitions

### Timing Functions
```css
--transition-fast: 0.2s ease-in-out      /* Quick UI feedback */
--transition-normal: 0.3s ease-in-out    /* Default interactions */
--transition-slow: 0.5s ease-in-out      /* Page transitions */
```

### Common Animations

#### Hover Effects
- Movie cards: `transform: scale(1.05)` + box-shadow
- Buttons: Brightness increase or background fill
- Links: Color fade to accent red

#### Scroll Animations
- Fade in elements as they enter viewport
- Use Intersection Observer for performance
- Respect `prefers-reduced-motion` media query

#### Carousel Scrolling
- Smooth scroll behavior
- 300ms scroll animation
- Momentum-based touch scrolling

---

## Responsive Design

### Breakpoints
```css
/* Mobile First Approach */
--mobile: 320px - 767px
--tablet: 768px - 1023px
--desktop: 1024px - 1439px
--large-desktop: 1440px+
```

### Responsive Behavior

#### Mobile (320px - 767px)
- Single column layout
- Navigation collapses to hamburger menu
- Movie cards: 160px width
- Hero height: 70vh
- Touch-optimized: 44px minimum touch targets
- Reduced padding: 20px

#### Tablet (768px - 1023px)
- 2-3 movie cards visible
- Movie cards: 220px width
- Hero height: 80vh
- Moderate padding: 30px

#### Desktop (1024px+)
- 4-6 movie cards visible
- Movie cards: 280px width
- Hero height: 90vh
- Full padding: 50px
- Hover effects enabled

---

## Accessibility

### WCAG 2.1 AA Compliance

#### Color Contrast
- Text on dark background: Minimum 4.5:1 ratio
- Large text (18px+): Minimum 3:1 ratio
- All color combinations tested and verified

#### Keyboard Navigation
- Tab order follows logical reading order
- All interactive elements focusable
- Visible focus indicators (2px blue outline)
- Escape key closes modals
- Arrow keys navigate carousels

#### Screen Readers
- Semantic HTML5 elements
- ARIA labels on all icons and buttons
- ARIA live regions for dynamic content
- Alt text on all images
- Proper heading hierarchy (h1 > h2 > h3)

#### Motion & Animation
- Respect `prefers-reduced-motion` media query
- Disable animations for users with motion sensitivity
- Provide static alternatives

#### Touch Targets
- Minimum size: 44px × 44px
- Adequate spacing: 8px minimum gap
- Touch-friendly on mobile devices

---

## Performance Guidelines

### Optimization Strategies
- Lazy load images below the fold
- Use Intersection Observer for scroll animations
- Minimize JavaScript bundle size
- Use CSS transforms for animations (GPU-accelerated)
- Preload critical fonts and assets
- Compress images (WebP format preferred)

### Loading States
- Skeleton screens for content loading
- Smooth fade-in for loaded images
- Progress indicators for video playback

---

## Best Practices

### DO
✅ Use dark theme colors consistently
✅ Maintain 16px minimum font size
✅ Provide hover states for all interactive elements
✅ Use semantic HTML5 elements
✅ Test on multiple devices and browsers
✅ Optimize images and assets
✅ Respect user preferences (motion, color schemes)
✅ Ensure keyboard accessibility

### DON'T
❌ Use light backgrounds (breaks dark theme)
❌ Mix too many font families
❌ Create touch targets smaller than 44px
❌ Rely solely on color to convey information
❌ Autoplay videos with sound
❌ Use excessive animations
❌ Ignore accessibility requirements

---

## Future Enhancements

### Planned Features
- Dark/Light theme toggle
- User customizable accent colors
- Advanced search with filters
- Video player integration
- User reviews and ratings
- Watchlist and favorites
- Continue watching feature
- Personalized recommendations

### Design Tokens
Consider implementing design tokens for easier theme customization:
```json
{
  "color": {
    "brand": {
      "primary": "#E50914",
      "secondary": "#FFB800"
    },
    "background": {
      "primary": "#141414",
      "secondary": "#1F1F1F"
    }
  }
}
```

---

## Resources

### Design Tools
- Figma/Sketch for mockups
- Adobe Color for palette generation
- Contrast Checker for accessibility

### Fonts
- [Google Fonts - Poppins](https://fonts.google.com/specimen/Poppins)
- [Google Fonts - Roboto](https://fonts.google.com/specimen/Roboto)

### Placeholder Images
- [Placehold.co](https://placehold.co) - Simple placeholder images
- [Unsplash](https://unsplash.com) - High-quality stock photos
- [The Movie Database (TMDb)](https://www.themoviedb.org) - Real movie posters

---

## Version History
- **v1.1** (2025-11-06): Brand evolution to Theta Movies
  - Introduced new logo system with three distinct concepts
  - Created comprehensive logo usage guidelines
  - Maintained existing color palette and design system
  - Enhanced brand identity with theta (θ) symbolism
- **v1.0** (2025-11-03): Initial design system documentation
  - Established color palette, typography, and component library
  - Defined responsive breakpoints and accessibility standards
  - Created comprehensive guidelines for Movie Hub platform

---

**Last Updated**: November 6, 2025
**Maintained By**: Theta Movies Design Team
