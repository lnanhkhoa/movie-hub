# Movie Hub - Deployment Guide

A comprehensive guide for deploying Movie Hub to production.

---

## Table of Contents

1. [Deployment Platforms](#deployment-platforms)
2. [Vercel Deployment (Recommended)](#vercel-deployment-recommended)
3. [Alternative Platforms](#alternative-platforms)
4. [Environment Variables](#environment-variables)
5. [Build Optimization](#build-optimization)
6. [Performance Checklist](#performance-checklist)
7. [Monitoring & Analytics](#monitoring--analytics)
8. [Troubleshooting](#troubleshooting)

---

## Deployment Platforms

Movie Hub can be deployed to any platform that supports Next.js:

| Platform | Difficulty | Build Time | Features | Best For |
|----------|-----------|------------|----------|----------|
| **Vercel** | Easy | Fast | Zero-config, automatic deployment | Recommended |
| **Netlify** | Easy | Fast | Continuous deployment, forms | Alternative |
| **AWS Amplify** | Medium | Medium | Full AWS integration | Enterprise |
| **Docker** | Advanced | Slow | Full control, portable | Self-hosting |
| **Railway** | Easy | Fast | Simple setup, databases | Quick deploys |

---

## Vercel Deployment (Recommended)

Vercel is the recommended platform as it's built by the creators of Next.js.

### Automatic Deployment (GitHub)

**Step 1: Push to GitHub**

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit"

# Create GitHub repository and push
git remote add origin https://github.com/yourusername/movie-hub.git
git push -u origin main
```

**Step 2: Import to Vercel**

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Add New Project"
3. Import your movie-hub repository
4. Configure project:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
5. Click "Deploy"

**Step 3: Automatic Deployments**

Every push to `main` branch triggers a new deployment:
```bash
git push origin main  # Triggers production deployment
```

Every pull request gets a preview deployment:
```bash
git checkout -b feature/new-feature
git push origin feature/new-feature
# Create PR → Gets preview URL
```

### Manual Deployment (Vercel CLI)

**Step 1: Install Vercel CLI**

```bash
npm install -g vercel
```

**Step 2: Login**

```bash
vercel login
```

**Step 3: Deploy**

```bash
# First deployment (production)
vercel --prod

# Preview deployment
vercel
```

### Custom Domain

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain (e.g., `moviehub.com`)
3. Configure DNS records:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
4. Wait for DNS propagation (up to 48 hours)
5. SSL certificate automatically generated

---

## Alternative Platforms

### Netlify

**Step 1: Build Settings**

Create `netlify.toml` in project root:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

**Step 2: Deploy**

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select repository
4. Deploy settings are auto-detected from `netlify.toml`
5. Click "Deploy site"

**Environment Variables**:
- Go to Site Settings → Environment Variables
- Add production variables

### AWS Amplify

**Step 1: Install Amplify CLI**

```bash
npm install -g @aws-amplify/cli
amplify configure
```

**Step 2: Initialize Amplify**

```bash
amplify init
```

**Step 3: Add Hosting**

```bash
amplify add hosting
```

**Step 4: Deploy**

```bash
amplify publish
```

### Docker Deployment

**Step 1: Create Dockerfile**

```dockerfile
# Dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

**Step 2: Update next.config.ts**

```typescript
const nextConfig = {
  output: 'standalone',
  // ... other config
}
```

**Step 3: Build and Run**

```bash
# Build Docker image
docker build -t movie-hub .

# Run container
docker run -p 3000:3000 movie-hub
```

**Step 4: Deploy to Docker Hub**

```bash
# Tag image
docker tag movie-hub yourusername/movie-hub:latest

# Push to Docker Hub
docker push yourusername/movie-hub:latest
```

### Railway

**Step 1: Install Railway CLI**

```bash
npm install -g @railway/cli
```

**Step 2: Login and Deploy**

```bash
railway login
railway init
railway up
```

**Step 3: Add Domain**

```bash
railway domain
```

---

## Environment Variables

### Development (.env.local)

Create `.env.local` for local development:

```bash
# App
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Authentication (when integrated)
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Database (when integrated)
DATABASE_URL=postgresql://user:password@localhost:5432/moviehub

# API Keys (when integrated)
TMDB_API_KEY=your-tmdb-api-key
```

### Production Environment Variables

**For Vercel**:
1. Go to Project Settings → Environment Variables
2. Add variables:
   - `NEXTAUTH_URL`: Your production URL (e.g., https://moviehub.com)
   - `NEXTAUTH_SECRET`: Generate with `openssl rand -base64 32`
   - `GOOGLE_CLIENT_ID`: From Google Cloud Console
   - `GOOGLE_CLIENT_SECRET`: From Google Cloud Console

**For Netlify**:
1. Site Settings → Environment Variables
2. Add same variables as above

**Important**: Never commit `.env.local` to git. Add to `.gitignore`:
```
.env.local
.env.*.local
```

---

## Build Optimization

### 1. Analyze Bundle Size

```bash
# Install bundle analyzer
npm install @next/bundle-analyzer

# Update next.config.ts
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  // ... your config
})

# Analyze
ANALYZE=true npm run build
```

### 2. Image Optimization

**Already Optimized**:
- Using Next.js Image component
- Automatic WebP/AVIF generation
- Responsive image sizing
- Lazy loading

**Further Optimization**:
```bash
# Install sharp for better image optimization
npm install sharp
```

### 3. Font Optimization

**Already Optimized**:
- Using next/font/google
- Automatic font subsetting
- Preload critical fonts

### 4. Code Splitting

**Already Optimized**:
- Automatic route-based splitting
- Dynamic imports for heavy components

**Manual Optimization**:
```tsx
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false // Disable SSR if not needed
})
```

### 5. Static Generation

**Already Optimized**:
- 63 pages pre-rendered at build time
- No runtime API calls for static content

**Add ISR (Incremental Static Regeneration)**:
```tsx
// Revalidate every hour
export const revalidate = 3600

export default async function MoviePage() {
  // Fetch fresh data
  const movies = await fetchMovies()
  return <div>{/* ... */}</div>
}
```

### 6. Compression

Enable compression in `next.config.ts`:

```typescript
const nextConfig = {
  compress: true, // Enable gzip compression
  // ... other config
}
```

### 7. Remove Unused Dependencies

```bash
# Analyze dependencies
npx depcheck

# Remove unused packages
npm uninstall [package-name]
```

---

## Performance Checklist

### Pre-Deployment

- [ ] Run production build locally
  ```bash
  npm run build
  npm start
  ```
- [ ] Test all pages work correctly
- [ ] Check for console errors/warnings
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Verify images load properly
- [ ] Test authentication flow
- [ ] Check all links work

### Lighthouse Audit

Run Lighthouse in Chrome DevTools:

```bash
# Or use CLI
npm install -g lighthouse

lighthouse https://your-site.com --view
```

**Target Scores**:
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

### Core Web Vitals

**Targets**:
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

**Check with**:
- Chrome DevTools → Performance tab
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)

### SEO Optimization

- [ ] All pages have unique `<title>` tags
- [ ] All pages have `<meta description>`
- [ ] Open Graph tags added
- [ ] Twitter Card tags added
- [ ] Sitemap.xml generated
- [ ] Robots.txt configured

**Generate Sitemap** (`app/sitemap.ts`):
```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://moviehub.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://moviehub.com/genre/all',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Add all routes
  ]
}
```

**Configure Robots** (`app/robots.ts`):
```typescript
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: 'https://moviehub.com/sitemap.xml',
  }
}
```

### Security Checklist

- [ ] HTTPS enabled (automatic on Vercel/Netlify)
- [ ] Environment variables secured
- [ ] No API keys in client-side code
- [ ] Content Security Policy configured
- [ ] CORS configured properly
- [ ] Rate limiting on API routes (when added)

**Add Security Headers** (`next.config.ts`):
```typescript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  }
}
```

---

## Monitoring & Analytics

### Vercel Analytics

**Step 1: Enable Analytics**

```bash
npm install @vercel/analytics
```

**Step 2: Add to Layout**

```tsx
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### Google Analytics

**Step 1: Install**

```bash
npm install @next/third-parties
```

**Step 2: Add to Layout**

```tsx
// app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

### Error Tracking (Sentry)

**Step 1: Install**

```bash
npm install @sentry/nextjs
```

**Step 2: Initialize**

```bash
npx @sentry/wizard@latest -i nextjs
```

**Step 3: Configure**

Wizard creates:
- `sentry.client.config.ts`
- `sentry.server.config.ts`
- `sentry.edge.config.ts`

### Uptime Monitoring

Free services:
- [UptimeRobot](https://uptimerobot.com/)
- [StatusCake](https://www.statuscake.com/)
- [Pingdom](https://www.pingdom.com/)

Set up alerts for:
- Downtime
- Slow response times (> 3s)
- SSL certificate expiry

---

## Troubleshooting

### Build Fails

**Issue**: Build fails on deployment platform

**Solutions**:
1. Check build logs for errors
2. Ensure all dependencies are in `package.json`
3. Verify Node.js version compatibility
4. Test build locally: `npm run build`
5. Check for TypeScript errors: `npx tsc --noEmit`

### Environment Variables Not Working

**Issue**: Environment variables undefined in production

**Solutions**:
1. Verify variables are set in platform dashboard
2. Check variable names are correct (case-sensitive)
3. Ensure `NEXT_PUBLIC_` prefix for client-side variables
4. Redeploy after adding new variables

### Images Not Loading

**Issue**: Images return 404 or don't optimize

**Solutions**:
1. Check `next.config.ts` has correct `remotePatterns`
2. Verify image URLs are accessible
3. Test with placeholder images first
4. Check image dimensions match component props

### Slow Build Times

**Issue**: Build takes too long (> 5 minutes)

**Solutions**:
1. Reduce number of static pages
2. Use ISR instead of full static generation
3. Optimize dependencies (remove unused)
4. Enable caching on CI/CD platform
5. Use Vercel (fastest Next.js builds)

### 404 Errors After Deployment

**Issue**: Pages return 404 in production but work locally

**Solutions**:
1. Check route names are correct (case-sensitive)
2. Verify `generateStaticParams()` returns correct paths
3. Check for dynamic imports that might fail
4. Ensure all pages have default export

### Performance Issues

**Issue**: Slow page loads in production

**Solutions**:
1. Run Lighthouse audit
2. Check image sizes (compress if needed)
3. Enable compression in `next.config.ts`
4. Use CDN (automatic on Vercel)
5. Implement lazy loading for heavy components
6. Analyze bundle size: `ANALYZE=true npm run build`

---

## Post-Deployment Tasks

### 1. Verify Deployment

- [ ] Visit production URL
- [ ] Test all pages load correctly
- [ ] Check console for errors
- [ ] Test on mobile device
- [ ] Verify SSL certificate (https://)
- [ ] Test authentication flow
- [ ] Check analytics tracking

### 2. Set Up Monitoring

- [ ] Configure uptime monitoring
- [ ] Enable error tracking (Sentry)
- [ ] Set up analytics (Google Analytics)
- [ ] Configure alerts for downtime

### 3. Performance Testing

- [ ] Run Lighthouse audit
- [ ] Test Core Web Vitals
- [ ] Check PageSpeed Insights score
- [ ] Test on slow 3G connection

### 4. SEO Setup

- [ ] Submit sitemap to Google Search Console
- [ ] Verify Open Graph tags with [OpenGraph.xyz](https://www.opengraph.xyz/)
- [ ] Test Twitter Cards with [Card Validator](https://cards-dev.twitter.com/validator)
- [ ] Add to Google Search Console
- [ ] Submit to Bing Webmaster Tools

### 5. Documentation

- [ ] Update README with production URL
- [ ] Document environment variables
- [ ] Create deployment runbook
- [ ] Document rollback procedure

---

## Rollback Procedure

### Vercel

**Option 1: Instant Rollback**
1. Go to Deployments tab
2. Find previous working deployment
3. Click "..." → "Promote to Production"

**Option 2: Git Revert**
```bash
git revert HEAD
git push origin main
# Automatically triggers new deployment
```

### Other Platforms

**Git Revert**:
```bash
# Revert last commit
git revert HEAD

# Revert specific commit
git revert [commit-hash]

# Push to trigger redeploy
git push origin main
```

---

## Continuous Deployment Best Practices

### 1. Branch Strategy

```
main (production)
  ├── develop (staging)
  │   ├── feature/new-feature
  │   └── fix/bug-fix
```

**Workflow**:
1. Feature branches → `develop` (preview deployment)
2. `develop` → `main` (production deployment)

### 2. Preview Deployments

Every PR gets a unique preview URL:
- Test changes before merging
- Share with stakeholders
- Run E2E tests

### 3. Automated Tests (Future)

Add to CI/CD pipeline:
```yaml
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run lint
      - run: npm run test
      - run: npm run build
```

---

## Cost Optimization

### Vercel Pricing

**Free Tier** (Hobby):
- 100 GB bandwidth/month
- Unlimited deployments
- 6,000 build minutes/month
- Perfect for Movie Hub

**Pro Tier** ($20/month):
- 1 TB bandwidth
- 24,000 build minutes
- Custom domains
- Recommended for production

### Reduce Costs

1. **Optimize Images**: Smaller images = less bandwidth
2. **Enable Caching**: Reduce server requests
3. **Use Static Generation**: Free on CDN
4. **Minimize Build Time**: Faster builds = lower costs

---

## Summary

Movie Hub deployment checklist:

1. ✅ Choose platform (Vercel recommended)
2. ✅ Push code to GitHub
3. ✅ Import to deployment platform
4. ✅ Configure environment variables
5. ✅ Deploy
6. ✅ Add custom domain (optional)
7. ✅ Set up monitoring
8. ✅ Run performance audits
9. ✅ Configure SEO
10. ✅ Test thoroughly

**Estimated Time**:
- Initial deployment: 10-15 minutes
- Custom domain setup: 1-2 hours (DNS propagation)
- Full optimization: 2-3 hours

---

For questions or issues, refer to:
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Project README](/Users/khoale/Devs/khoale/movie-hub/README.md)

**Happy Deploying!** 🚀
