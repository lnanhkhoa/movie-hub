# Movie Hub - Wireframes Summary

## Overview
Complete set of wireframe pages for Movie Hub streaming platform with Google Sign-In integration.

**Location**: `/Users/khoale/Devs/khoale/movie-hub/docs/wireframes/`

---

## Completed Pages (10 Core + 2 New)

### Content Discovery Pages
1. **index.html** - Homepage with hero section, carousels, sign-in modal ✅
2. **movie-detail.html** - Movie details, cast, crew, reviews ✅
3. **search-results.html** - Search with filters, grid/list views ✅
4. **browse-genre.html** - Genre-based browsing ✅
5. **my-list.html** - User's saved movies/shows ✅
6. **tv-show-detail.html** - TV show with season selector & episode grid ✅
7. **collections.html** - Curated collections (e.g., Christopher Nolan Films) ✅

### User Experience Pages
8. **profile.html** - User profile, settings, watch history ✅
9. **video-player.html** - Full-screen video player with controls ✅

### Authentication Pages
10. **login.html** - Google Sign-In login page ✅
11. **signup.html** - Google Sign-In signup page ✅
12. **password-reset.html** - Password reset page ✅

---

## Pages to Create (Remaining 6)

### Infrastructure Pages

#### 1. 404.html - Error Page
**Status**: ⏳ Needs creation

**Features**:
- Large "404" gradient text
- Friendly error message
- Search bar (links to search-results.html)
- 4-6 Popular Movies cards
- "Back to Home" and "Browse Movies" buttons
- Minimal navbar (logo only, no user profile)
- Error illustration (emoji or SVG)

**Structure**:
```html
- Minimal navbar
- Error content section
  - 404 code (large gradient)
  - Error title
  - Error description
  - Search bar
  - Action buttons
  - Popular movies grid (4-6 cards)
- Simple footer
- Sign-in modal
```

**CSS Classes**: `.error-content`, `.error-container`, `.error-code`, `.error-title`, `.error-description`, `.error-search`, `.error-actions`, `.error-illustration`

---

#### 2. help-center.html - Help & Support
**Status**: ⏳ Needs creation

**Features**:
- Page title: "Help Center"
- Search help bar
- FAQ sections with accordion/expand-collapse:
  - Getting Started (5 questions)
  - Account & Settings (4 questions)
  - Playback Issues (4 questions)
  - My List (3 questions)
  - Legal & Privacy (3 questions)
- "Still need help?" CTA → contact.html
- Sign-in modal

**Structure**:
```html
- Full navbar
- Help content
  - Header with title
  - Search bar
  - FAQ sections
    - Section title
    - Accordion items (question + hidden answer)
- Help CTA section
- Full footer
- Sign-in modal
```

**CSS Classes**: `.help-content`, `.help-container`, `.help-header`, `.help-title`, `.help-search-bar`, `.faq-sections`, `.faq-section`, `.faq-list`, `.faq-item`, `.faq-question`, `.faq-answer`, `.help-cta`

**JavaScript Required**: Accordion toggle functionality

---

#### 3. terms.html - Terms of Service
**Status**: ⏳ Needs creation

**Features**:
- Document layout (max-width: 800px)
- Page title: "Terms of Service"
- Last updated date
- Table of contents (sticky):
  - Acceptance of Terms
  - Use of Service
  - User Accounts
  - User Content
  - Prohibited Activities
  - Intellectual Property
  - Privacy
  - Disclaimers
  - Limitation of Liability
  - Changes to Terms
  - Contact Information
- Sections with headings and paragraphs
- "Back to top" button (fixed, bottom-right)
- Simple navbar and footer

**Structure**:
```html
- Full navbar
- Legal content
  - Header (title + date)
  - Table of contents (sticky)
  - Legal body sections
    - Each section with h2 + paragraphs
- Back to top button
- Full footer
- Sign-in modal
```

**CSS Classes**: `.legal-content`, `.legal-container`, `.legal-header`, `.legal-title`, `.legal-updated`, `.legal-toc`, `.toc-title`, `.toc-list`, `.legal-body`, `.legal-section`, `.back-to-top-btn`

**JavaScript Required**: Back to top button, smooth scroll to sections

---

#### 4. privacy.html - Privacy Policy
**Status**: ⏳ Needs creation

**Features**:
- Similar layout to terms.html
- Page title: "Privacy Policy"
- Last updated date
- Table of contents:
  - Introduction
  - Information We Collect
  - How We Use Your Information
  - Google Sign-In and OAuth
  - Cookies and Tracking
  - Data Storage and Security
  - Your Rights
  - Children's Privacy
  - Changes to Privacy Policy
  - Contact Us
- Special section about Google Sign-In data usage
- "Back to top" button
- Simple navbar and footer

**Structure**: Same as terms.html

**CSS Classes**: Same as terms.html

---

### Additional Pages

#### 5. about.html - About Movie Hub
**Status**: ⏳ Needs creation

**Features**:
- Hero section with gradient background
- Large heading: "About Movie Hub"
- Mission statement (2-3 paragraphs)
- "What is Movie Hub?" section
- Features grid (6 features):
  - Free Streaming
  - HD Quality
  - No Ads
  - Huge Library
  - Easy Sign-In
  - My List Feature
- Statistics section (4 stats):
  - 10,000+ Movies
  - 5,000+ TV Shows
  - 1M+ Users
  - 4K Quality
- Contact CTA → contact.html
- Sign-in modal

**Structure**:
```html
- Full navbar
- About hero section
  - Hero title
  - Mission paragraphs
- About content
  - What is Movie Hub section
  - Features grid (6 feature cards)
  - Statistics section (4 stat cards)
  - Contact CTA
- Full footer
- Sign-in modal
```

**CSS Classes**: `.about-hero`, `.about-container`, `.about-hero-title`, `.about-mission`, `.about-content`, `.features-grid`, `.feature-card`, `.feature-icon`, `.feature-title`, `.feature-description`, `.stats-section`, `.stats-grid`, `.stat-card-number`, `.stat-card-label`, `.contact-cta`

---

#### 6. contact.html - Contact Form
**Status**: ⏳ Needs creation

**Features**:
- Page title: "Contact Us"
- Subtitle: "Have questions? We'd love to hear from you"
- Contact form (max-width: 600px):
  - Name input (required)
  - Email input (required, email validation)
  - Subject dropdown (required):
    - General Inquiry
    - Technical Support
    - Content Request
    - Report Issue
    - Partnership
    - Other
  - Message textarea (required, min 10 chars)
  - Submit button: "Send Message"
  - Success message after submit
- Alternative contact section:
  - Email: support@moviehub.com
  - Social media links
- Response time notice: "We'll respond within 24-48 hours"
- Form validation with error messages
- Sign-in modal

**Structure**:
```html
- Full navbar
- Contact content
  - Header (title + subtitle)
  - Contact form
    - Form groups (name, email, subject, message)
    - Submit button
    - Success/error messages
  - Alternative contact section
    - Email
    - Social media links
    - Response time notice
- Full footer
- Sign-in modal
```

**CSS Classes**: `.contact-content`, `.contact-container`, `.contact-header`, `.contact-title`, `.contact-subtitle`, `.contact-form`, `.form-error`, `.form-success`, `.alternative-contact`, `.contact-email`, `.contact-social`, `.response-time`

**JavaScript Required**: Form validation, submit handler

---

## Common Elements Across All Pages

### Navigation Bar
- Logo (SVG with link to index.html)
- Navigation links:
  - Home → index.html
  - Movies → search-results.html?type=movies
  - TV Shows → search-results.html?type=tv
  - New & Popular → index.html#new
  - My List → my-list.html
- Search icon → search-results.html
- Notifications icon
- User profile dropdown → profile.html

### Footer Links (Updated)
All pages should have footer with these links:

**Company**:
- About Us → **about.html**
- Careers → #careers
- Press → #press
- Blog → #blog

**Support**:
- Help Center → **help-center.html**
- Contact Us → **contact.html**
- FAQ → **help-center.html**
- Feedback → #feedback

**Legal**:
- Terms of Service → **terms.html**
- Privacy Policy → **privacy.html**
- Cookie Policy → #cookie
- Disclaimer → #disclaimer

**Social Media**: Facebook, Twitter, Instagram, YouTube

### Sign-In Modal
- Present on ALL pages
- Google Sign-In button
- Links to terms.html and privacy.html
- Triggered by:
  - "Add to List" button (when not signed in)
  - "Write a Review" button
  - "My List" navigation (when empty)

---

## Design System

### Colors
- Primary Background: `#141414`
- Secondary Background: `#1F1F1F`
- Accent Red: `#E50914`
- Accent Gold: `#FFB800`
- Text Primary: `#FFFFFF`
- Text Secondary: `#B3B3B3`

### Typography
- Primary Font: Poppins (headings, UI)
- Secondary Font: Roboto (body text)
- Google Fonts with Vietnamese support

### Spacing
- sm: 8px
- md: 16px
- lg: 24px
- xl: 40px
- 2xl: 50px

### Transitions
- Fast: 0.2s ease-in-out
- Normal: 0.3s ease-in-out
- Slow: 0.5s ease-in-out

### Responsive Breakpoints
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

---

## File Structure

```
/Users/khoale/Devs/khoale/movie-hub/docs/wireframes/
├── index.html ✅
├── movie-detail.html ✅
├── tv-show-detail.html ✅
├── search-results.html ✅
├── browse-genre.html ✅
├── collections.html ✅
├── my-list.html ✅
├── profile.html ✅
├── video-player.html ✅
├── login.html ✅
├── signup.html ✅
├── password-reset.html ✅
├── 404.html ⏳
├── help-center.html ⏳
├── terms.html ⏳
├── privacy.html ⏳
├── about.html ⏳
├── contact.html ⏳
├── css/
│   └── styles.css ✅ (updated with all new styles)
├── js/
│   └── main.js ✅
└── docs/
    ├── FEATURES.md ✅
    ├── AUTH-PAGES-SUMMARY.md ✅
    ├── AUTH-INTEGRATION-GUIDE.md ✅
    └── WIREFRAMES-SUMMARY.md ✅ (this file)
```

---

## JavaScript Functionality Required

### main.js - Already Implemented
- Navbar scroll effect
- Sign-in modal open/close
- Carousel navigation
- Video player controls
- Form validation basic structure

### Additional JS Needed

**help-center.html**:
```javascript
// FAQ accordion toggle
function toggleFAQ(questionElement) {
    const answer = questionElement.nextElementSibling;
    const isOpen = questionElement.classList.contains('active');

    // Close all other FAQs
    document.querySelectorAll('.faq-question').forEach(q => {
        q.classList.remove('active');
        q.nextElementSibling.classList.remove('show');
    });

    // Toggle current FAQ
    if (!isOpen) {
        questionElement.classList.add('active');
        answer.classList.add('show');
    }
}
```

**terms.html & privacy.html**:
```javascript
// Back to top button
window.addEventListener('scroll', function() {
    const backToTop = document.querySelector('.back-to-top-btn');
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

// Smooth scroll to section
document.querySelectorAll('.toc-list a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
```

**contact.html**:
```javascript
// Form validation
function validateContactForm(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value.trim();

    let isValid = true;

    // Validate name
    if (name.length < 2) {
        showError('name', 'Name must be at least 2 characters');
        isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError('email', 'Please enter a valid email address');
        isValid = false;
    }

    // Validate subject
    if (!subject) {
        showError('subject', 'Please select a subject');
        isValid = false;
    }

    // Validate message
    if (message.length < 10) {
        showError('message', 'Message must be at least 10 characters');
        isValid = false;
    }

    if (isValid) {
        showSuccess('Your message has been sent successfully!');
        document.getElementById('contact-form').reset();
    }
}
```

---

## Next Steps

### To Complete the Wireframes:
1. Create remaining 6 HTML pages (404, help-center, terms, privacy, about, contact)
2. Add JavaScript for:
   - FAQ accordions (help-center.html)
   - Back to top button (terms.html, privacy.html)
   - Form validation (contact.html)
3. Update footer links on ALL existing pages to include new pages
4. Test all pages for:
   - Responsive design (mobile, tablet, desktop)
   - Cross-browser compatibility
   - Accessibility (keyboard navigation, screen readers)
   - Sign-in modal integration

### Development Integration:
1. Replace placeholder content with real data
2. Implement Google OAuth authentication
3. Connect to backend API for:
   - Movie/TV show data
   - User profiles
   - Reviews and ratings
   - My List functionality
4. Add real video player integration
5. Implement search and filter functionality
6. Add analytics tracking

---

## Key Features Implemented

✅ **Google Sign-In Integration**: Modal on all pages, linked to terms & privacy
✅ **Responsive Design**: Mobile-first approach, all breakpoints covered
✅ **Dark Theme**: Consistent #141414 background, #E50914 accent
✅ **TV Show Details**: Season selector, episode grid with continue watching
✅ **Collections**: Curated movie collections with stats and related collections
✅ **Accessibility**: ARIA labels, keyboard navigation, focus indicators
✅ **Typography**: Google Fonts with Vietnamese support
✅ **Smooth Animations**: Transitions, hover effects, micro-interactions

⏳ **Pending**:
- Infrastructure pages (404, help, legal)
- Additional pages (about, contact)
- Footer link updates
- Enhanced JavaScript functionality

---

## Contact for Questions
For implementation questions or clarifications, refer to:
- `/docs/wireframes/FEATURES.md` - Complete feature list
- `/docs/wireframes/AUTH-PAGES-SUMMARY.md` - Authentication integration details
- `/docs/wireframes/AUTH-INTEGRATION-GUIDE.md` - Google Sign-In implementation guide

---

**Last Updated**: 2025-11-03
**Status**: 12/18 pages complete, 6 pages remaining
**CSS**: Complete with all styles for remaining pages
**Design System**: Fully defined and documented
