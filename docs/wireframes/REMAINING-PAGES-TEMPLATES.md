# Remaining Wireframe Pages - HTML Templates

This document provides complete HTML structure templates for the 5 remaining wireframe pages. All CSS classes are already defined in `css/styles.css`.

---

## Page 1: help-center.html

### Complete HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Help Center - Movie Hub</title>
    <meta name="description" content="Get help with Movie Hub. Find answers to frequently asked questions.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <!-- COPY FULL NAVBAR from index.html -->

    <!-- Help Content -->
    <main class="help-content">
        <div class="help-container">
            <div class="help-header">
                <h1 class="help-title">Help Center</h1>
                <div class="help-search-bar">
                    <div class="search-bar-wrapper">
                        <svg class="search-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.35-4.35"></path>
                        </svg>
                        <input type="text" class="search-input" placeholder="Search for help..." aria-label="Search help">
                    </div>
                </div>
            </div>

            <div class="faq-sections">
                <!-- Getting Started Section -->
                <div class="faq-section">
                    <h2 class="faq-section-title">Getting Started</h2>
                    <div class="faq-list">
                        <div class="faq-item">
                            <button class="faq-question" onclick="toggleFAQ(this)">
                                How do I watch movies?
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </button>
                            <div class="faq-answer">
                                <div class="faq-answer-content">
                                    To watch movies on Movie Hub, simply browse our library, click on any movie poster, and hit the "Play Now" button. You can search by title, genre, or actor to find what you're looking for.
                                </div>
                            </div>
                        </div>

                        <div class="faq-item">
                            <button class="faq-question" onclick="toggleFAQ(this)">
                                Do I need to sign in?
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </button>
                            <div class="faq-answer">
                                <div class="faq-answer-content">
                                    You can browse and watch content without signing in. However, signing in with Google allows you to save movies to "My List", write reviews, and get personalized recommendations.
                                </div>
                            </div>
                        </div>

                        <div class="faq-item">
                            <button class="faq-question" onclick="toggleFAQ(this)">
                                Is Movie Hub free?
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </button>
                            <div class="faq-answer">
                                <div class="faq-answer-content">
                                    Yes! Movie Hub is completely free to use. We offer unlimited streaming of movies and TV shows with no subscription required.
                                </div>
                            </div>
                        </div>

                        <div class="faq-item">
                            <button class="faq-question" onclick="toggleFAQ(this)">
                                What devices are supported?
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </button>
                            <div class="faq-answer">
                                <div class="faq-answer-content">
                                    Movie Hub works on all modern web browsers including Chrome, Firefox, Safari, and Edge. You can access it from desktop computers, laptops, tablets, and smartphones.
                                </div>
                            </div>
                        </div>

                        <div class="faq-item">
                            <button class="faq-question" onclick="toggleFAQ(this)">
                                How do I add movies to My List?
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </button>
                            <div class="faq-answer">
                                <div class="faq-answer-content">
                                    Sign in with Google, then click the "Add to List" button on any movie or TV show page. You can view all your saved content in the "My List" section.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Account & Settings Section -->
                <div class="faq-section">
                    <h2 class="faq-section-title">Account & Settings</h2>
                    <div class="faq-list">
                        <div class="faq-item">
                            <button class="faq-question" onclick="toggleFAQ(this)">
                                How do I sign in with Google?
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </button>
                            <div class="faq-answer">
                                <div class="faq-answer-content">
                                    Click on any "Sign in with Google" button throughout the site. You'll be redirected to Google's secure login page. After authenticating, you'll be returned to Movie Hub with your account active.
                                </div>
                            </div>
                        </div>

                        <!-- Add 3 more Account FAQ items -->
                    </div>
                </div>

                <!-- Playback Issues Section -->
                <div class="faq-section">
                    <h2 class="faq-section-title">Playback Issues</h2>
                    <div class="faq-list">
                        <!-- Add 4 Playback FAQ items -->
                    </div>
                </div>

                <!-- My List Section -->
                <div class="faq-section">
                    <h2 class="faq-section-title">My List</h2>
                    <div class="faq-list">
                        <!-- Add 3 My List FAQ items -->
                    </div>
                </div>

                <!-- Legal & Privacy Section -->
                <div class="faq-section">
                    <h2 class="faq-section-title">Legal & Privacy</h2>
                    <div class="faq-list">
                        <!-- Add 3 Legal FAQ items -->
                    </div>
                </div>
            </div>

            <!-- Help CTA -->
            <div class="help-cta">
                <h3>Still need help?</h3>
                <p>Can't find what you're looking for? We're here to help!</p>
                <a href="contact.html" class="btn btn-primary">Contact Us</a>
            </div>
        </div>
    </main>

    <!-- COPY FULL FOOTER from index.html (with updated links) -->
    <!-- COPY SIGN-IN MODAL from index.html -->

    <script src="js/main.js"></script>
    <script>
        // FAQ Accordion functionality
        function toggleFAQ(questionElement) {
            const answer = questionElement.nextElementSibling;
            const isOpen = questionElement.classList.contains('active');

            // Close all FAQs
            document.querySelectorAll('.faq-question').forEach(q => {
                q.classList.remove('active');
                q.nextElementSibling.classList.remove('show');
            });

            // Open clicked FAQ if it was closed
            if (!isOpen) {
                questionElement.classList.add('active');
                answer.classList.add('show');
            }
        }
    </script>
</body>
</html>
```

---

## Page 2 & 3: terms.html & privacy.html

### Complete HTML Structure (Similar for both)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Terms of Service - Movie Hub</title> <!-- OR Privacy Policy -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <!-- COPY FULL NAVBAR from index.html -->

    <!-- Legal Content -->
    <main class="legal-content">
        <div class="legal-container">
            <div class="legal-header">
                <h1 class="legal-title">Terms of Service</h1> <!-- OR Privacy Policy -->
                <p class="legal-updated">Last updated: January 1, 2025</p>
            </div>

            <!-- Table of Contents (Sticky) -->
            <nav class="legal-toc">
                <h2 class="toc-title">Table of Contents</h2>
                <ul class="toc-list">
                    <li><a href="#acceptance">1. Acceptance of Terms</a></li>
                    <li><a href="#use">2. Use of Service</a></li>
                    <li><a href="#accounts">3. User Accounts</a></li>
                    <li><a href="#content">4. User Content</a></li>
                    <li><a href="#prohibited">5. Prohibited Activities</a></li>
                    <li><a href="#ip">6. Intellectual Property</a></li>
                    <li><a href="#privacy">7. Privacy</a></li>
                    <li><a href="#disclaimers">8. Disclaimers</a></li>
                    <li><a href="#liability">9. Limitation of Liability</a></li>
                    <li><a href="#changes">10. Changes to Terms</a></li>
                    <li><a href="#contact">11. Contact Information</a></li>
                </ul>
            </nav>

            <!-- Legal Body -->
            <div class="legal-body">
                <section class="legal-section" id="acceptance">
                    <h2>1. Acceptance of Terms</h2>
                    <p>
                        By accessing and using Movie Hub ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                    </p>
                    <p>
                        These Terms of Service ("Terms") govern your access to and use of Movie Hub's website, services, and applications. Please read these Terms carefully before using our Service.
                    </p>
                </section>

                <section class="legal-section" id="use">
                    <h2>2. Use of Service</h2>
                    <p>
                        Movie Hub grants you a limited, non-exclusive, non-transferable, and revocable license to use the Service for personal, non-commercial purposes in accordance with these Terms.
                    </p>
                    <p>
                        You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service:
                    </p>
                    <ul>
                        <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
                        <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent</li>
                        <li>To impersonate or attempt to impersonate Movie Hub, a Movie Hub employee, another user, or any other person or entity</li>
                    </ul>
                </section>

                <section class="legal-section" id="accounts">
                    <h2>3. User Accounts</h2>
                    <p>
                        When you create an account with us via Google Sign-In, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
                    </p>
                    <p>
                        You are responsible for safeguarding your account credentials and for any activities or actions under your account. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
                    </p>
                </section>

                <!-- Add remaining sections: content, prohibited, ip, privacy, disclaimers, liability, changes, contact -->
                <!-- Each section should have similar structure with h2 + paragraphs + optional lists -->
            </div>
        </div>
    </main>

    <!-- Back to Top Button -->
    <button class="back-to-top-btn" onclick="scrollToTop()" aria-label="Back to top">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
    </button>

    <!-- COPY FULL FOOTER from index.html -->
    <!-- COPY SIGN-IN MODAL from index.html -->

    <script src="js/main.js"></script>
    <script>
        // Back to top button
        window.addEventListener('scroll', function() {
            const backToTop = document.querySelector('.back-to-top-btn');
            if (window.scrollY > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });

        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Smooth scroll to section
        document.querySelectorAll('.toc-list a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                targetSection.scrollIntoView({ behavior: 'smooth' });
            });
        });
    </script>
</body>
</html>
```

### Privacy Policy - Specific TOC Items

For **privacy.html**, use these TOC items instead:
```html
<li><a href="#intro">1. Introduction</a></li>
<li><a href="#collect">2. Information We Collect</a></li>
<li><a href="#use">3. How We Use Your Information</a></li>
<li><a href="#google">4. Google Sign-In and OAuth</a></li>
<li><a href="#cookies">5. Cookies and Tracking</a></li>
<li><a href="#storage">6. Data Storage and Security</a></li>
<li><a href="#rights">7. Your Rights</a></li>
<li><a href="#children">8. Children's Privacy</a></li>
<li><a href="#changes">9. Changes to Privacy Policy</a></li>
<li><a href="#contact">10. Contact Us</a></li>
```

Add a specific section about Google Sign-In:
```html
<section class="legal-section" id="google">
    <h2>4. Google Sign-In and OAuth</h2>
    <p>
        When you sign in with Google, we receive limited information from Google including:
    </p>
    <ul>
        <li>Your name</li>
        <li>Your email address</li>
        <li>Your profile picture</li>
        <li>A unique Google identifier</li>
    </ul>
    <p>
        We use this information solely to create and manage your account. We do not have access to your Google password or any other Google account information beyond what is explicitly shared during the OAuth process.
    </p>
    <p>
        You can revoke Movie Hub's access to your Google account at any time through your Google Account settings.
    </p>
</section>
```

---

## Page 4: about.html

### Complete HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Us - Movie Hub</title>
    <meta name="description" content="Learn about Movie Hub - your destination for unlimited movie and TV show streaming.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <!-- COPY FULL NAVBAR from index.html -->

    <!-- About Hero -->
    <section class="about-hero">
        <div class="about-container">
            <h1 class="about-hero-title">About Movie Hub</h1>
            <div class="about-mission">
                <p>
                    Movie Hub is your ultimate destination for unlimited streaming of movies and TV shows. We believe entertainment should be accessible to everyone, which is why we offer a vast library of content completely free.
                </p>
                <p>
                    Founded in 2025, our mission is to bring the joy of cinema to audiences worldwide. We curate the best content from around the globe and make it available at your fingertips.
                </p>
                <p>
                    Whether you're a casual viewer or a dedicated cinephile, Movie Hub has something for everyone. Join millions of users who trust us for their daily dose of entertainment.
                </p>
            </div>
        </div>
    </section>

    <!-- About Content -->
    <main class="about-content">
        <div class="about-container">
            <!-- Features Section -->
            <section style="margin-bottom: 80px;">
                <h2 class="section-subtitle" style="text-align: center; margin-bottom: 48px;">Why Choose Movie Hub?</h2>
                <div class="features-grid">
                    <div class="feature-card">
                        <div class="feature-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M8 5v14l11-7z"/>
                            </svg>
                        </div>
                        <h3 class="feature-title">Free Streaming</h3>
                        <p class="feature-description">
                            Enjoy unlimited streaming of thousands of movies and TV shows without any subscription fees.
                        </p>
                    </div>

                    <div class="feature-card">
                        <div class="feature-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
                                <line x1="7" y1="2" x2="7" y2="22"></line>
                                <line x1="17" y1="2" x2="17" y2="22"></line>
                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                <line x1="2" y1="7" x2="7" y2="7"></line>
                                <line x1="2" y1="17" x2="7" y2="17"></line>
                                <line x1="17" y1="17" x2="22" y2="17"></line>
                                <line x1="17" y1="7" x2="22" y2="7"></line>
                            </svg>
                        </div>
                        <h3 class="feature-title">HD Quality</h3>
                        <p class="feature-description">
                            Stream in stunning HD and 4K quality for the best viewing experience.
                        </p>
                    </div>

                    <div class="feature-card">
                        <div class="feature-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
                            </svg>
                        </div>
                        <h3 class="feature-title">No Ads</h3>
                        <p class="feature-description">
                            Watch without interruptions. No annoying ads, just pure entertainment.
                        </p>
                    </div>

                    <div class="feature-card">
                        <div class="feature-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                            </svg>
                        </div>
                        <h3 class="feature-title">Huge Library</h3>
                        <p class="feature-description">
                            Access over 10,000 movies and 5,000 TV shows across all genres.
                        </p>
                    </div>

                    <div class="feature-card">
                        <div class="feature-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                                <line x1="6" y1="1" x2="6" y2="4"></line>
                                <line x1="10" y1="1" x2="10" y2="4"></line>
                                <line x1="14" y1="1" x2="14" y2="4"></line>
                            </svg>
                        </div>
                        <h3 class="feature-title">Easy Sign-In</h3>
                        <p class="feature-description">
                            Quick and secure sign-in with your Google account. No complicated registration.
                        </p>
                    </div>

                    <div class="feature-card">
                        <div class="feature-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                            </svg>
                        </div>
                        <h3 class="feature-title">My List Feature</h3>
                        <p class="feature-description">
                            Save your favorite content to watch later with our personalized My List feature.
                        </p>
                    </div>
                </div>
            </section>

            <!-- Statistics Section -->
            <section class="stats-section">
                <div class="about-container">
                    <h2 class="section-subtitle" style="text-align: center; margin-bottom: 48px;">Movie Hub By The Numbers</h2>
                    <div class="stats-grid">
                        <div class="stat-card">
                            <div class="stat-card-number">10,000+</div>
                            <div class="stat-card-label">Movies</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-card-number">5,000+</div>
                            <div class="stat-card-label">TV Shows</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-card-number">1M+</div>
                            <div class="stat-card-label">Active Users</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-card-number">4K</div>
                            <div class="stat-card-label">Max Quality</div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Contact CTA -->
            <section class="contact-cta">
                <h2>Get in Touch</h2>
                <p style="margin-bottom: 32px; font-size: 16px; color: var(--text-secondary);">
                    Have questions or feedback? We'd love to hear from you!
                </p>
                <a href="contact.html" class="btn btn-primary">Contact Us</a>
            </section>
        </div>
    </main>

    <!-- COPY FULL FOOTER from index.html -->
    <!-- COPY SIGN-IN MODAL from index.html -->

    <script src="js/main.js"></script>
</body>
</html>
```

---

## Page 5: contact.html

### Complete HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us - Movie Hub</title>
    <meta name="description" content="Contact Movie Hub support. We're here to help!">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <!-- COPY FULL NAVBAR from index.html -->

    <!-- Contact Content -->
    <main class="contact-content">
        <div class="contact-container">
            <div class="contact-header">
                <h1 class="contact-title">Contact Us</h1>
                <p class="contact-subtitle">Have questions? We'd love to hear from you</p>
            </div>

            <!-- Contact Form -->
            <form class="contact-form" id="contact-form" onsubmit="handleContactSubmit(event)">
                <div id="form-success" class="form-success" style="display: none;">
                    Your message has been sent successfully! We'll respond within 24-48 hours.
                </div>

                <div class="form-group">
                    <label for="name">
                        Name <span class="required">*</span>
                    </label>
                    <input type="text" id="name" name="name" required>
                    <div class="form-error" id="name-error"></div>
                </div>

                <div class="form-group">
                    <label for="email">
                        Email <span class="required">*</span>
                    </label>
                    <input type="email" id="email" name="email" required>
                    <div class="form-error" id="email-error"></div>
                </div>

                <div class="form-group">
                    <label for="subject">
                        Subject <span class="required">*</span>
                    </label>
                    <select id="subject" name="subject" required>
                        <option value="">Select a subject...</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="content">Content Request</option>
                        <option value="issue">Report Issue</option>
                        <option value="partnership">Partnership</option>
                        <option value="other">Other</option>
                    </select>
                    <div class="form-error" id="subject-error"></div>
                </div>

                <div class="form-group">
                    <label for="message">
                        Message <span class="required">*</span>
                    </label>
                    <textarea id="message" name="message" required minlength="10" rows="6"></textarea>
                    <div class="form-error" id="message-error"></div>
                </div>

                <button type="submit" class="btn btn-primary" style="width: 100%;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                    Send Message
                </button>
            </form>

            <!-- Alternative Contact -->
            <div class="alternative-contact">
                <h3>Other Ways to Reach Us</h3>
                <p class="contact-email">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align: middle; margin-right: 8px;">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    support@moviehub.com
                </p>

                <div class="contact-social">
                    <a href="#facebook" class="icon-btn" aria-label="Facebook">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                    </a>
                    <a href="#twitter" class="icon-btn" aria-label="Twitter">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                        </svg>
                    </a>
                    <a href="#instagram" class="icon-btn" aria-label="Instagram">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="#141414"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#141414" stroke-width="2"></line>
                        </svg>
                    </a>
                </div>

                <p class="response-time">
                    We typically respond within 24-48 hours during business days.
                </p>
            </div>
        </div>
    </main>

    <!-- COPY FULL FOOTER from index.html -->
    <!-- COPY SIGN-IN MODAL from index.html -->

    <script src="js/main.js"></script>
    <script>
        function handleContactSubmit(e) {
            e.preventDefault();

            // Clear previous errors
            document.querySelectorAll('.form-error').forEach(el => el.textContent = '');

            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value.trim();

            let isValid = true;

            // Validate name
            if (name.length < 2) {
                document.getElementById('name-error').textContent = 'Name must be at least 2 characters';
                isValid = false;
            }

            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                document.getElementById('email-error').textContent = 'Please enter a valid email address';
                isValid = false;
            }

            // Validate subject
            if (!subject) {
                document.getElementById('subject-error').textContent = 'Please select a subject';
                isValid = false;
            }

            // Validate message
            if (message.length < 10) {
                document.getElementById('message-error').textContent = 'Message must be at least 10 characters';
                isValid = false;
            }

            if (isValid) {
                // Show success message
                document.getElementById('form-success').style.display = 'block';
                document.getElementById('contact-form').reset();

                // Hide success message after 5 seconds
                setTimeout(() => {
                    document.getElementById('form-success').style.display = 'none';
                }, 5000);

                // In production, submit to backend here
                console.log('Form submitted:', { name, email, subject, message });
            }
        }
    </script>
</body>
</html>
```

---

## Footer Link Updates

Update the footer on ALL pages to include new page links:

```html
<footer class="footer">
    <div class="footer-container">
        <div class="footer-links">
            <div class="footer-column">
                <h3>Company</h3>
                <ul>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="#careers">Careers</a></li>
                    <li><a href="#press">Press</a></li>
                    <li><a href="#blog">Blog</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h3>Support</h3>
                <ul>
                    <li><a href="help-center.html">Help Center</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                    <li><a href="help-center.html">FAQ</a></li>
                    <li><a href="#feedback">Feedback</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h3>Legal</h3>
                <ul>
                    <li><a href="terms.html">Terms of Service</a></li>
                    <li><a href="privacy.html">Privacy Policy</a></li>
                    <li><a href="#cookie">Cookie Policy</a></li>
                    <li><a href="#disclaimer">Disclaimer</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h3>Follow Us</h3>
                <div class="social-icons">
                    <!-- Social icons SVGs here -->
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 Movie Hub. All rights reserved.</p>
        </div>
    </div>
</footer>
```

---

## Quick Implementation Checklist

For each page:

1. ✅ Copy the HTML structure from this document
2. ✅ Copy full navbar from `index.html`
3. ✅ Copy full footer from `index.html` (with updated links)
4. ✅ Copy sign-in modal from `index.html`
5. ✅ Add page-specific JavaScript if needed
6. ✅ Test responsive design at all breakpoints
7. ✅ Verify all links work correctly
8. ✅ Test accessibility (keyboard navigation, screen readers)

All CSS classes are already defined in `/Users/khoale/Devs/khoale/movie-hub/docs/wireframes/css/styles.css`

---

**Complete**: CSS ✅ | JavaScript utilities ✅ | Templates ✅

**Next**: Create the 5 remaining HTML files using these templates!
