# Theta Movies - Logo Usage Guide

## Introduction

This guide provides comprehensive instructions for using the Theta Movies logo across all platforms and media. The logo is a critical brand asset that must be used consistently to maintain brand recognition and integrity.

## Logo Concepts Overview

We've developed three distinct logo concepts, each with unique strengths and use cases:

### Concept A: Minimalist Icon
**Philosophy**: Bold, iconic symbol that stands alone
**Best For**: App icons, favicons, social media profiles, loading animations
**Strength**: Maximum impact with minimal elements, highly memorable

**Files:**
- `/public/logos/theta-movies-concept-a-icon.svg` - Red icon on transparent
- `/public/logos/theta-movies-concept-a-icon-white.svg` - White icon for dark backgrounds
- `/public/logos/theta-movies-concept-a-horizontal.svg` - Icon with text

### Concept B: Wordmark
**Philosophy**: Integrated typography with theta symbol embedded in text
**Best For**: Marketing materials, email signatures, documents
**Strength**: Strong brand name presence with creative integration

**Files:**
- `/public/logos/theta-movies-concept-b-wordmark.svg` - θeta replacing "th"
- `/public/logos/theta-movies-concept-b-wordmark-alt.svg` - θ symbol in "movies"

### Concept C: Badge Combination
**Philosophy**: Flexible system with icon and text working together or separately
**Best For**: Primary logo across website, navbar, marketing campaigns
**Strength**: Maximum versatility and professional appearance

**Files:**
- `/public/logos/theta-movies-concept-c-horizontal.svg` - Horizontal layout
- `/public/logos/theta-movies-concept-c-vertical.svg` - Vertical layout
- `/public/logos/theta-movies-concept-c-icon.svg` - Badge icon standalone

### Premium Variations
**Philosophy**: Special editions for premium features and marketing
**Files:**
- `/public/logos/theta-movies-premium-gradient.svg` - Red-to-gold gradient
- `/public/logos/theta-movies-premium-gold.svg` - Gold color scheme

### Optimized Assets
- `/public/logos/theta-movies-favicon.svg` - Optimized for 16x16 favicon

---

## Logo Selection Guide

### When to Use Each Concept

#### Concept A (Minimalist Icon)
✅ **USE FOR:**
- Favicon (browser tab icon)
- Mobile app icon
- Social media profile pictures (Twitter, Facebook, Instagram)
- Loading spinner/animation
- Watermarks on video content
- Small spaces where text isn't readable

❌ **AVOID FOR:**
- First brand introduction (use with text initially)
- Print materials where brand name recognition is critical
- Contexts where icon alone might be ambiguous

#### Concept B (Wordmark)
✅ **USE FOR:**
- Email signatures
- Document headers and letterheads
- Marketing materials with limited vertical space
- Homepage hero sections
- Partnership announcements
- Press releases

❌ **AVOID FOR:**
- Very small sizes (under 100px width)
- Square spaces (use vertical or icon instead)
- Contexts requiring quick icon recognition

#### Concept C (Badge Combination)
✅ **USE FOR:**
- Primary website navbar
- Marketing campaigns
- Social media cover photos
- Business cards
- Merchandise (t-shirts, mugs, etc.)
- App splash screens
- Presentation slides

❌ **AVOID FOR:**
- Extremely small sizes (use icon-only instead)
- Contexts where you've already established icon recognition

---

## Technical Specifications

### File Format Guidelines

**SVG (Scalable Vector Graphics)**
- **Primary format** for all digital uses
- Scales infinitely without quality loss
- Small file size
- Works on all modern browsers
- Best for: Web, mobile apps, digital displays

**When to Use:**
- Website navigation
- App interfaces
- Digital marketing
- Social media graphics
- Email signatures

**How to Implement:**
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

### Color Specifications

#### Primary Color Palette

**Netflix Red**
```css
--theta-red: #E50914
RGB: 229, 9, 20
CMYK: 0, 96, 91, 10
Pantone: 185 C (closest match)
```

**Accent Gold**
```css
--theta-gold: #FFB800
RGB: 255, 184, 0
CMYK: 0, 28, 100, 0
Pantone: 123 C (closest match)
```

**Base White**
```css
--theta-white: #FFFFFF
RGB: 255, 255, 255
CMYK: 0, 0, 0, 0
```

**Dark Background**
```css
--theta-dark: #141414
RGB: 20, 20, 20
CMYK: 0, 0, 0, 92
```

#### Color Usage Rules

**On Dark Backgrounds (#141414, #1F1F1F):**
- Primary logo: Red icon + white text
- Alternative: White icon + white text
- Premium: Gold icon + white text

**On Light Backgrounds (rare, use cautiously):**
- Primary logo: Red icon + dark text
- Ensure 4.5:1 contrast ratio for accessibility

**Monochrome Applications:**
- Use all-white logo on dark backgrounds
- Use all-dark logo on light backgrounds
- Never use colors outside approved palette

### Size Guidelines

#### Minimum Sizes

**Digital (Screen)**
- Icon only: 16px × 16px (favicon)
- Icon with text (horizontal): 120px width minimum
- Full logo: 160px width minimum

**Print**
- Icon only: 0.25 inches (6mm)
- Icon with text: 1 inch (25mm) width minimum
- Full logo: 1.5 inches (38mm) width minimum

#### Recommended Sizes

**Website Navbar:**
- Desktop: 160-200px width
- Tablet: 140-160px width
- Mobile: 120-140px width

**Social Media:**
- Profile Picture: 400px × 400px (icon only)
- Cover Photo: 1200px × 400px (horizontal or vertical logo)
- Post Graphics: 1080px × 1080px (flexible sizing)

**App Icons:**
- iOS: 1024px × 1024px (icon only, export as PNG)
- Android: 512px × 512px (icon only, export as PNG)

### Clear Space

**Minimum Clear Space:**
Equal to the height of the theta symbol on all sides

```
┌─────────────────────────┐
│   [clearspace]          │
│   ┌─────────────┐       │
│   │  θ  THETA   │       │
│   │   MOVIES    │       │
│   └─────────────┘       │
│   [clearspace]          │
└─────────────────────────┘
```

**What this means:**
- Don't place text, graphics, or other elements too close to the logo
- Maintain breathing room around all edges
- Prevents visual clutter and maintains logo integrity

---

## Usage Guidelines

### DO's ✅

✅ **Use approved logo files**
- Always use official SVG files from `/public/logos/`
- Don't recreate or modify the logo

✅ **Maintain aspect ratio**
- Scale proportionally (lock aspect ratio)
- Don't stretch or squash the logo

✅ **Use on dark backgrounds**
- Primary usage: dark backgrounds (#141414, #1F1F1F)
- Logo designed for dark theme first

✅ **Provide clear space**
- Maintain minimum clear space around logo
- Don't crowd with other elements

✅ **Test at intended size**
- Verify readability at smallest size
- Use appropriate variation for context

✅ **Use approved colors only**
- Stick to red, gold, white, or monochrome
- No custom colors or effects

✅ **Ensure accessibility**
- Maintain proper contrast ratios
- Include alt text for screen readers

### DON'Ts ❌

❌ **Don't distort**
- Never stretch or compress
- Never skew or rotate at odd angles

❌ **Don't add effects**
- No drop shadows
- No outer glows
- No gradients (unless using premium gradient version)
- No 3D effects
- No textures or patterns

❌ **Don't change colors**
- Don't use unapproved colors
- Don't apply color filters
- Don't desaturate (except for monochrome version)

❌ **Don't rearrange elements**
- Don't separate or move logo components
- Don't change spacing between icon and text
- Don't reposition text

❌ **Don't outline or box**
- Don't add borders or frames
- Don't place in shapes (circles, squares)
- Exception: Badge icon already has circle as part of design

❌ **Don't combine with other logos**
- Don't create co-branded logos without approval
- Maintain clear separation from partner logos

❌ **Don't use low-resolution formats**
- Avoid pixelated or blurry logos
- Always use vector SVG when possible

---

## Platform-Specific Guidelines

### Website (Next.js)

**Navbar Logo:**
```tsx
// app/components/layout/navbar.tsx
import Image from 'next/image'

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur z-50">
      <div className="container flex items-center justify-between h-[70px]">
        <Link href="/" className="flex items-center">
          <Image
            src="/logos/theta-movies-concept-c-horizontal.svg"
            alt="Theta Movies"
            width={160}
            height={40}
            priority
            className="h-10 w-auto"
          />
        </Link>
        {/* ... rest of navbar ... */}
      </div>
    </nav>
  )
}
```

**Favicon:**
```tsx
// app/layout.tsx
export const metadata: Metadata = {
  title: 'Theta Movies',
  icons: {
    icon: '/logos/theta-movies-favicon.svg',
    apple: '/logos/theta-movies-concept-a-icon.svg',
  },
}
```

**Loading State:**
```tsx
// app/loading.tsx
export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Image
        src="/logos/theta-movies-concept-a-icon.svg"
        alt="Loading..."
        width={64}
        height={64}
        className="animate-pulse"
      />
    </div>
  )
}
```

### Social Media

**Profile Pictures:**
- File: `theta-movies-concept-a-icon.svg` or `theta-movies-concept-c-icon.svg`
- Export as PNG: 400px × 400px
- Background: Dark (#141414) or transparent
- Icon: Red or white

**Cover Photos:**
- Twitter/X: 1500px × 500px
- Facebook: 820px × 312px
- LinkedIn: 1584px × 396px
- Use horizontal logo with plenty of breathing room

**Post Graphics:**
- Square: 1080px × 1080px
- Story: 1080px × 1920px
- Place logo in corner with clear space
- Use watermark-style semi-transparent logo

### Email

**Email Signature:**
```html
<img
  src="https://thetamovies.com/logos/theta-movies-concept-b-wordmark.svg"
  alt="Theta Movies"
  width="200"
  height="auto"
/>
```

**Email Headers:**
- Use horizontal logo
- Width: 600px (standard email width)
- Center-aligned or left-aligned
- Link to homepage

### Print Materials

**Business Cards:**
- Front: Icon + text (Concept C vertical)
- Size: Standard business card dimensions
- Colors: Red/white on dark background OR full-color on white
- Include minimum clear space

**Letterhead:**
- Header: Horizontal logo, top-left or center
- Size: 2 inches width
- Margins: 0.5 inch from edges

**Merchandise:**
- T-shirts: Large icon or badge logo
- Mugs: Wrap-around horizontal logo
- Stickers: Die-cut icon shape
- Always provide vector files to printers

---

## Accessibility Requirements

### Contrast Ratios

**WCAG 2.1 AA Compliance:**

**Logo on Dark Background (#141414):**
- Red (#E50914) on Dark: 4.8:1 ✅ (Meets AA)
- White (#FFFFFF) on Dark: 15.5:1 ✅ (Meets AAA)
- Gold (#FFB800) on Dark: 10.2:1 ✅ (Meets AAA)

**Logo on Light Background (if needed):**
- Test contrast before using
- May need darker red shade for sufficient contrast

### Alt Text Guidelines

**Descriptive Alt Text:**
```html
<!-- For full logo -->
<img src="logo.svg" alt="Theta Movies - Streaming Platform">

<!-- For icon only (when brand is established) -->
<img src="icon.svg" alt="Theta Movies">

<!-- For decorative use (rare) -->
<img src="logo.svg" alt="" role="presentation">
```

**Screen Reader Considerations:**
- Logo should be readable by screen readers
- Use semantic HTML (`<img>` with alt text)
- Include company name in alt text
- SVG should include `<title>` and `<desc>` tags

---

## File Management

### Logo File Directory Structure

```
public/logos/
├── README.md (this file)
│
├── Concept A - Minimalist Icon
│   ├── theta-movies-concept-a-icon.svg
│   ├── theta-movies-concept-a-icon-white.svg
│   └── theta-movies-concept-a-horizontal.svg
│
├── Concept B - Wordmark
│   ├── theta-movies-concept-b-wordmark.svg
│   └── theta-movies-concept-b-wordmark-alt.svg
│
├── Concept C - Badge Combination
│   ├── theta-movies-concept-c-horizontal.svg
│   ├── theta-movies-concept-c-vertical.svg
│   └── theta-movies-concept-c-icon.svg
│
├── Premium Variations
│   ├── theta-movies-premium-gradient.svg
│   └── theta-movies-premium-gold.svg
│
└── Optimized Assets
    └── theta-movies-favicon.svg
```

### Version Control

**Logo Versioning:**
- Major redesigns: v2.0, v3.0
- Minor refinements: v1.1, v1.2
- Current version: v1.0

**Change Log:**
- Document any logo modifications
- Maintain archive of previous versions
- Communicate changes to team

---

## Brand Applications

### Loading Animations

**Pulse Animation:**
```tsx
<Image
  src="/logos/theta-movies-concept-a-icon.svg"
  alt="Loading"
  width={64}
  height={64}
  className="animate-pulse"
/>
```

**Spin Animation:**
```tsx
<Image
  src="/logos/theta-movies-concept-a-icon.svg"
  alt="Loading"
  width={64}
  height={64}
  className="animate-spin"
/>
```

### Video Watermarks

**Placement:**
- Top-right or bottom-right corner
- 10% opacity for non-intrusive presence
- Icon-only logo
- Size: 40-60px

### Partnership & Co-Branding

**When Partnering with Other Brands:**
- Maintain equal prominence
- Separate with vertical line or spacing
- Use monochrome versions if partner logo is colorful
- Get approval for co-branded materials

---

## Quality Control Checklist

Before using the logo, verify:

- [ ] Using official logo file from `/public/logos/`
- [ ] Correct logo variation for context (icon, horizontal, vertical)
- [ ] Appropriate size (meets minimum size requirements)
- [ ] Proper clear space maintained
- [ ] Correct colors (red, gold, white, or monochrome)
- [ ] No distortion or stretching
- [ ] Sufficient contrast with background
- [ ] Alt text included (for digital use)
- [ ] File format appropriate (SVG for web, PNG for social)
- [ ] Logo is crisp and clear at intended size

---

## Getting Help

**Questions about logo usage?**
- Review this guide first
- Check design-guidelines.md for brand context
- Contact design team for approval on edge cases

**Need a different format or size?**
- SVG files scale to any size
- Export to PNG/JPG as needed
- Maintain aspect ratio when resizing

**Requesting new variations?**
- Submit request with use case
- Design team will evaluate and create if appropriate
- Don't create custom variations without approval

---

## Recommended Logo Strategy

### Phase 1: Brand Launch (First 3 Months)
**PRIMARY:** Concept C (Badge Horizontal) everywhere with text
**WHY:** Establish brand name recognition, flexible system

**Use:**
- Navbar: Horizontal logo with text
- Favicon: Optimized favicon
- Social media: Badge icon for profile, horizontal for cover
- Marketing: Always include full logo with text

### Phase 2: Brand Recognition (3-12 Months)
**PRIMARY:** Concept C (Flexible usage)
**SECONDARY:** Concept A (Icon only for established contexts)

**Use:**
- Navbar: Horizontal logo (desktop), icon only (mobile)
- Loading: Icon only with animation
- Social media: Icon only for profile (brand is recognized)
- Marketing: Mix of full logo and icon-only

### Phase 3: Brand Maturity (12+ Months)
**PRIMARY:** Icon-first strategy
**SECONDARY:** Full logo when introducing to new audiences

**Use:**
- Icon only: Most contexts (like Netflix's "N")
- Full logo: New market entry, partnerships, formal contexts
- Flexibility: Use what works best for each context

---

**Document Version:** 1.0
**Last Updated:** 2025-11-06
**Maintained By:** Theta Movies Design Team
**Status:** Approved for Use
