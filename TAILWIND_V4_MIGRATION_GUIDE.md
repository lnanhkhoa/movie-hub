# Tailwind CSS v4 Migration Guide

**Date:** 2025-11-06
**Project:** Movie Hub Wireframes
**Status:** In Progress (index.html: 90% complete, others: pending)

## Overview

Complete migration of 13 HTML wireframe files from custom CSS to Tailwind CSS v4 utility-based classes.

## What's Been Done

### index.html (90% Complete)

Successfully converted:
- Head section with Tailwind v4 CDN links
- Navigation bar (fixed, backdrop blur, flex layout)
- Hero section (responsive typography, gradient overlays)
- Footer (grid layout, social links)
- Sign-in modal (centered, backdrop)
- Section headers and carousel controls
- First carousel movie card pattern

Remaining:
- Convert 16 remaining movie-card elements in Popular and Top Rated carousels

### Files Not Yet Started (12)

1. login.html
2. signup.html
3. password-reset.html
4. movie-detail.html
5. tv-show-detail.html
6. search-results.html
7. my-list.html
8. profile.html
9. browse-genre.html
10. collections.html
11. video-player.html
12. 404.html

## How to Complete the Migration

### Option 1: Automated Batch Script

```bash
# Make the script executable
chmod +x /Users/khoale/Devs/khoale/movie-hub/convert-tailwind-v4.sh

# Run the script
./convert-tailwind-v4.sh
```

The script will:
- Replace all custom CSS link references
- Update body, navbar, button, and form classes
- Create backups of original files
- Note: Manual review needed for complex components

### Option 2: Manual File-by-File Conversion

Use the patterns below for each HTML file.

## Essential Class Mappings

### CDN Links (Add to all files)

```html
<head>
    <!-- Remove these: -->
    <!-- <link rel="stylesheet" href="css/styles.css"> -->
    <!-- <link rel="stylesheet" href="css/auth.css"> -->

    <!-- Add this instead: -->
    <script src="https://cdn.jsdelivr.net/npm/tailwindcss@4.1.16/dist/lib.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@4.1.16/index.min.css" rel="stylesheet">
</head>
```

### Body & Main Containers

```html
<!-- OLD -->
<body>
<main class="content">

<!-- NEW -->
<body class="bg-[#141414] text-white overflow-x-hidden">
<main class="bg-[#141414]">
```

### Navigation Components

```html
<!-- OLD navbar -->
<nav class="navbar">
    <div class="nav-container">
        <div class="nav-left">
            <div class="logo">...</div>
            <ul class="nav-links">

<!-- NEW navbar -->
<nav class="fixed top-0 left-0 right-0 h-[70px] bg-black/95 backdrop-blur-md z-[1000] transition-all duration-300">
    <div class="max-w-[1920px] mx-auto h-full px-[50px] flex justify-between items-center">
        <div class="flex items-center gap-[40px]">
            <div class="flex items-center gap-3 font-bold text-2xl text-[#E50914]">...</div>
            <ul class="flex gap-6 items-center">
```

### Button Styles

```html
<!-- OLD buttons -->
<button class="btn btn-primary">Click</button>
<button class="btn btn-secondary">Click</button>

<!-- NEW buttons -->
<button class="inline-flex items-center gap-3 bg-[#E50914] hover:bg-red-700 text-white px-6 py-3 rounded font-semibold transition-colors duration-200">Click</button>
<button class="inline-flex items-center gap-3 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded font-semibold transition-colors duration-200 backdrop-blur-sm border border-white/30">Click</button>
```

### Movie Card Component (Most Important)

```html
<!-- OLD movie-card structure (Trending/Popular carousels) -->
<div class="movie-card">
    <div class="movie-poster">
        <img src="..." alt="...">
    </div>
    <div class="movie-overlay">
        <h3 class="movie-title">Title</h3>
        <div class="movie-info">
            <span class="movie-year">2008</span>
            <div class="movie-rating">
                <svg width="16">...</svg>
                <span>9.0</span>
            </div>
        </div>
        <div class="movie-actions">
            <button class="action-btn" aria-label="Play">
                <svg>...</svg>
            </button>
            <button class="action-btn" aria-label="Add to list">
                <svg>...</svg>
            </button>
            <button class="action-btn" aria-label="More info">
                <svg>...</svg>
            </button>
        </div>
    </div>
</div>

<!-- NEW movie-card with Tailwind -->
<div class="flex-shrink-0 w-72 snap-start group cursor-pointer">
    <div class="relative overflow-hidden rounded-lg bg-gray-900">
        <img src="..." alt="..." class="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300">
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
            <h3 class="text-lg font-bold text-white mb-2">Title</h3>
            <div class="flex justify-between items-center mb-4 text-sm text-gray-300">
                <span>2008</span>
                <div class="flex items-center gap-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFB800"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    <span>9.0</span>
                </div>
            </div>
            <div class="flex gap-2">
                <button class="flex-1 inline-flex items-center justify-center w-9 h-9 bg-white/20 hover:bg-[#E50914] text-white rounded transition-colors duration-200" aria-label="Play">
                    <svg width="20">...</svg>
                </button>
                <button class="flex-1 inline-flex items-center justify-center w-9 h-9 bg-white/20 hover:bg-white/30 text-white rounded transition-colors duration-200" aria-label="Add to list">
                    <svg width="20">...</svg>
                </button>
                <button class="flex-1 inline-flex items-center justify-center w-9 h-9 bg-white/20 hover:bg-white/30 text-white rounded transition-colors duration-200" aria-label="More info">
                    <svg width="20">...</svg>
                </button>
            </div>
        </div>
    </div>
</div>
```

### Form Elements (for auth pages)

```html
<!-- OLD form -->
<form class="auth-form">
    <div class="form-group">
        <label class="form-label">Email</label>
        <input class="form-input" type="email">
        <span class="error-message" id="emailError"></span>
    </div>
</form>

<!-- NEW form -->
<form class="space-y-4">
    <div>
        <label class="block text-sm font-medium text-white mb-2">Email</label>
        <input class="w-full bg-gray-900 border border-gray-700 rounded px-4 py-2 text-white placeholder-gray-500 focus:border-[#E50914] focus:outline-none transition-colors" type="email">
        <span class="text-red-500 text-sm" id="emailError"></span>
    </div>
</form>
```

### Footer

```html
<!-- OLD footer -->
<footer class="footer">
    <div class="footer-container">
        <div class="footer-links">
            <div class="footer-column">
                <h3>Company</h3>
                <ul>...</ul>
            </div>
        </div>
    </div>
</footer>

<!-- NEW footer -->
<footer class="bg-[#1F1F1F] border-t border-gray-800">
    <div class="max-w-[1920px] mx-auto px-[50px] py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
                <h3 class="text-lg font-bold text-white mb-4">Company</h3>
                <ul class="space-y-2">
                    <li><a class="text-gray-400 hover:text-white transition-colors">...</a></li>
                </ul>
            </div>
        </div>
    </div>
</footer>
```

## Color Palette

```css
/* Primary Colors */
--primary-bg: #141414;      /* bg-[#141414] */
--secondary-bg: #1F1F1F;    /* bg-[#1F1F1F] */
--accent-red: #E50914;      /* bg-[#E50914], text-[#E50914] */
--accent-gold: #FFB800;     /* fill-[#FFB800] */

/* Text Colors */
--text-primary: #FFFFFF;    /* text-white */
--text-secondary: #B3B3B3;  /* text-gray-400 */
--overlay: rgba(0, 0, 0, 0.7);  /* bg-black/70 */
```

## File-Specific Guidance

### Auth Pages (login.html, signup.html, password-reset.html)

Key conversions:
```html
<!-- Page background -->
<body class="bg-[#141414] text-white">
    <main class="min-h-screen flex items-center justify-center pt-[70px]">
        <div class="w-full max-w-md px-6">
            <div class="bg-[#1F1F1F] rounded-lg p-8">
                <!-- Form content -->
            </div>
        </div>
    </main>
</body>

<!-- Form inputs -->
<input type="email" class="w-full bg-gray-900 border border-gray-700 rounded px-4 py-2 text-white placeholder-gray-500 focus:border-[#E50914] outline-none transition-colors">

<!-- Checkboxes -->
<label class="flex items-center gap-2 text-gray-300">
    <input type="checkbox" class="w-5 h-5 rounded border border-gray-600 accent-[#E50914]">
    <span>Remember me</span>
</label>

<!-- Error messages -->
<span class="text-red-500 text-sm">Error message</span>

<!-- Social login buttons -->
<button class="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-gray-900 font-semibold py-3 rounded-lg transition-colors">
    <svg class="w-5 h-5">...</svg>
    Sign in with Google
</button>
```

### Detail Pages (movie-detail.html, tv-show-detail.html)

Key sections:
- Hero section with backdrop image
- Tab navigation
- Cast/crew grids
- Related items carousel (use movie-card pattern)

### Search & Browse Pages (search-results.html, browse-genre.html)

Key patterns:
- Grid layout for results
- Filter sidebar
- Pagination controls
- Movie card components

### User Pages (my-list.html, profile.html)

Key patterns:
- Header with user info
- Content grids
- Edit buttons
- Movie card components

### Special Pages (video-player.html, 404.html)

- Video player wrapper
- Error page centered content
- Call-to-action buttons

## Testing Checklist

After converting each file:

- [ ] Layout renders correctly on desktop (1280px+)
- [ ] Layout renders correctly on tablet (768px)
- [ ] Layout renders correctly on mobile (320px)
- [ ] Navigation bar is fixed and functional
- [ ] Buttons have proper hover states
- [ ] Forms are usable (inputs, labels, error messages)
- [ ] Movie cards show on hover overlay
- [ ] Colors match design (dark theme)
- [ ] Typography is readable
- [ ] Links are clickable
- [ ] No broken images
- [ ] Modal/dialog interactions work

## Troubleshooting

### Issue: Styles not applying

**Solution:** Ensure Tailwind CDN is loaded before closing `</head>`

### Issue: Custom colors not working

**Solution:** Use arbitrary Tailwind values: `bg-[#E50914]`, `text-[#B3B3B3]`

### Issue: Responsive classes not working

**Solution:** Use Tailwind breakpoints: `md:`, `lg:`, `xl:`
Example: `text-2xl md:text-4xl lg:text-5xl`

### Issue: Z-index not working

**Solution:** Use explicit z-index values: `z-[1000]`, `z-[9999]`

### Issue: Opacity not working

**Solution:** Use slash notation: `bg-black/70`, `text-white/50`

## Performance Notes

- Tailwind v4 CDN is lightweight (~100KB gzipped)
- Consider using build-time optimization for production
- Keep Google Fonts for Poppins and Roboto (already loaded)
- No custom CSS files needed after migration

## Git Workflow

```bash
# Create feature branch
git checkout -b feat/tailwind-v4-migration

# Make changes
# Update files

# Commit progress
git add docs/wireframes/*.html
git commit -m "feat: Complete Tailwind v4 migration for [page-name]"

# Push and create PR
git push origin feat/tailwind-v4-migration
```

## Complete File Checklist

- [ ] index.html (90% - finish movie cards)
- [ ] login.html
- [ ] signup.html
- [ ] password-reset.html
- [ ] movie-detail.html
- [ ] tv-show-detail.html
- [ ] search-results.html
- [ ] my-list.html
- [ ] profile.html
- [ ] browse-genre.html
- [ ] collections.html
- [ ] video-player.html
- [ ] 404.html

## Resources

- Tailwind CSS v4 Docs: https://tailwindcss.com/docs
- Tailwind UI Components: https://tailwindui.com/
- Color Reference: https://tailwindcss.com/docs/customizing-colors
- Responsive Design: https://tailwindcss.com/docs/responsive-design

## Next Steps

1. **Immediate:** Complete index.html movie cards (copy template 16 times)
2. **Short-term:** Batch convert auth pages (login, signup, password-reset)
3. **Medium-term:** Convert detail pages (movie-detail, tv-show-detail)
4. **Long-term:** Convert browse/search pages and utility pages
5. **Final:** Test all pages, create PR, merge to main

---

**Questions or Issues?** Refer to the migration report or patterns in this guide.
