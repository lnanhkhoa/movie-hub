// ============================================
// Movie Hub - Main JavaScript
// ============================================

// ============================================
// Navbar Scroll Effect
// ============================================
const navbar = document.getElementById('navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    lastScrollY = window.scrollY;
});

// ============================================
// Carousel Navigation
// ============================================
class CarouselController {
    constructor(carouselId) {
        this.carousel = document.getElementById(carouselId);
        this.prevBtn = document.querySelector(`[data-carousel="${carouselId}"].prev`);
        this.nextBtn = document.querySelector(`[data-carousel="${carouselId}"].next`);
        this.scrollAmount = 0;
        this.init();
    }

    init() {
        if (!this.carousel) return;

        // Calculate scroll amount based on card width + gap
        const card = this.carousel.querySelector('.movie-card');
        if (card) {
            const cardWidth = card.offsetWidth;
            const gap = 16; // Gap between cards
            this.scrollAmount = (cardWidth + gap) * 3; // Scroll 3 cards at a time
        }

        // Previous button
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.scrollPrev());
        }

        // Next button
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.scrollNext());
        }

        // Touch/swipe support
        this.enableTouchScroll();

        // Mouse drag support
        this.enableMouseDrag();
    }

    scrollPrev() {
        if (!this.carousel) return;
        this.carousel.scrollBy({
            left: -this.scrollAmount,
            behavior: 'smooth'
        });
    }

    scrollNext() {
        if (!this.carousel) return;
        this.carousel.scrollBy({
            left: this.scrollAmount,
            behavior: 'smooth'
        });
    }

    enableTouchScroll() {
        if (!this.carousel) return;

        let startX;
        let scrollLeft;
        let isDragging = false;

        this.carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].pageX - this.carousel.offsetLeft;
            scrollLeft = this.carousel.scrollLeft;
            isDragging = true;
        });

        this.carousel.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.touches[0].pageX - this.carousel.offsetLeft;
            const walk = (x - startX) * 2;
            this.carousel.scrollLeft = scrollLeft - walk;
        });

        this.carousel.addEventListener('touchend', () => {
            isDragging = false;
        });
    }

    enableMouseDrag() {
        if (!this.carousel) return;

        let startX;
        let scrollLeft;
        let isDragging = false;

        this.carousel.addEventListener('mousedown', (e) => {
            isDragging = true;
            this.carousel.style.cursor = 'grabbing';
            startX = e.pageX - this.carousel.offsetLeft;
            scrollLeft = this.carousel.scrollLeft;
        });

        this.carousel.addEventListener('mouseleave', () => {
            isDragging = false;
            this.carousel.style.cursor = 'default';
        });

        this.carousel.addEventListener('mouseup', () => {
            isDragging = false;
            this.carousel.style.cursor = 'default';
        });

        this.carousel.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - this.carousel.offsetLeft;
            const walk = (x - startX) * 2;
            this.carousel.scrollLeft = scrollLeft - walk;
        });

        // Prevent click event when dragging
        let hasMoved = false;
        this.carousel.addEventListener('mousedown', () => {
            hasMoved = false;
        });

        this.carousel.addEventListener('mousemove', () => {
            if (isDragging) {
                hasMoved = true;
            }
        });

        this.carousel.addEventListener('click', (e) => {
            if (hasMoved) {
                e.preventDefault();
                e.stopPropagation();
            }
        }, true);
    }
}

// Initialize all carousels
document.addEventListener('DOMContentLoaded', () => {
    new CarouselController('trending-carousel');
    new CarouselController('popular-carousel');
    new CarouselController('toprated-carousel');
});

// ============================================
// Movie Card Interactions
// ============================================
const movieCards = document.querySelectorAll('.movie-card');

movieCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        // Add subtle parallax effect on hover
        card.addEventListener('mousemove', handleCardMouseMove);
    });

    card.addEventListener('mouseleave', () => {
        card.removeEventListener('mousemove', handleCardMouseMove);
        // Reset transform
        const overlay = card.querySelector('.movie-overlay');
        if (overlay) {
            overlay.style.transform = 'translateY(0)';
        }
    });
});

function handleCardMouseMove(e) {
    const card = e.currentTarget;
    const overlay = card.querySelector('.movie-overlay');
    if (!overlay) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const deltaX = (x - centerX) / centerX;
    const deltaY = (y - centerY) / centerY;

    // Subtle parallax movement
    overlay.style.transform = `translate(${deltaX * 2}px, ${deltaY * 2}px)`;
}

// ============================================
// Action Button Interactions
// ============================================
const actionButtons = document.querySelectorAll('.action-btn');

actionButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();

        // Get aria-label to determine action type
        const action = btn.getAttribute('aria-label');

        // Add ripple effect
        createRipple(e, btn);

        // Get movie title from parent card
        const movieCard = btn.closest('.movie-card');
        const movieTitle = movieCard ? movieCard.querySelector('.movie-title')?.textContent : 'this movie';

        // Handle different actions
        if (action === 'Play') {
            window.location.href = 'video-player.html';
        } else if (action === 'Add to list') {
            addToMyList(movieTitle);
        } else if (action === 'More info') {
            window.location.href = 'movie-detail.html';
        }

        // Visual feedback
        btn.style.transform = 'scale(0.9)';
        setTimeout(() => {
            btn.style.transform = '';
        }, 200);
    });
});

// ============================================
// Hero CTA Buttons
// ============================================
const heroBtns = document.querySelectorAll('.hero-buttons .btn');

heroBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const btnText = btn.textContent.trim();
        console.log(`Hero button clicked: ${btnText}`);

        // Add ripple effect
        createRipple(e, btn);

        // Visual feedback
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btn.style.transform = '';
        }, 200);
    });
});

// ============================================
// Ripple Effect Helper
// ============================================
function createRipple(event, element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 255, 255, 0.5)';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 0.6s ease-out';
    ripple.style.pointerEvents = 'none';

    // Add CSS animation if not already in stylesheet
    if (!document.querySelector('#ripple-animation')) {
        const style = document.createElement('style');
        style.id = 'ripple-animation';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// ============================================
// Search Button Interaction
// ============================================
const searchBtn = document.querySelector('.search-btn');

if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        console.log('Search clicked - would open search overlay');
        // In production, this would open a search modal/overlay
        searchBtn.style.transform = 'scale(1.1) rotate(90deg)';
        setTimeout(() => {
            searchBtn.style.transform = '';
        }, 300);
    });
}

// ============================================
// Notification Button Interaction
// ============================================
const notificationBtn = document.querySelector('.notification-btn');

if (notificationBtn) {
    notificationBtn.addEventListener('click', () => {
        console.log('Notifications clicked - would open notifications panel');
        // In production, this would open notifications
        notificationBtn.style.transform = 'scale(1.1)';
        setTimeout(() => {
            notificationBtn.style.transform = '';
        }, 300);
    });
}

// ============================================
// User Profile Interaction
// ============================================
const userProfile = document.querySelector('.user-profile');

if (userProfile) {
    userProfile.addEventListener('click', () => {
        console.log('User profile clicked - would open user menu');
        // In production, this would open user menu dropdown
        const dropdownIcon = userProfile.querySelector('.dropdown-icon');
        if (dropdownIcon) {
            dropdownIcon.style.transform = dropdownIcon.style.transform === 'rotate(180deg)'
                ? 'rotate(0deg)'
                : 'rotate(180deg)';
        }
    });
}

// ============================================
// Smooth Scroll for Navigation Links
// ============================================
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');

        // Only handle internal links
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 70; // Account for navbar height
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }

            // Update active state
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
    });
});

// ============================================
// Intersection Observer for Animation on Scroll
// ============================================
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe carousel sections
const carouselSections = document.querySelectorAll('.carousel-section');
carouselSections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
});

// ============================================
// Keyboard Navigation Support
// ============================================
document.addEventListener('keydown', (e) => {
    // Arrow key navigation for carousels
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        const focusedElement = document.activeElement;
        const parentCarousel = focusedElement.closest('.carousel');

        if (parentCarousel) {
            const cards = parentCarousel.querySelectorAll('.movie-card');
            const currentIndex = Array.from(cards).indexOf(focusedElement.closest('.movie-card'));

            if (currentIndex !== -1) {
                let nextIndex;
                if (e.key === 'ArrowLeft') {
                    nextIndex = Math.max(0, currentIndex - 1);
                } else {
                    nextIndex = Math.min(cards.length - 1, currentIndex + 1);
                }

                cards[nextIndex].focus();
                cards[nextIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        }
    }

    // Escape key to close overlays (for future implementation)
    if (e.key === 'Escape') {
        console.log('Escape pressed - would close any open modals/overlays');
    }
});

// Make movie cards focusable for keyboard navigation and clickable
movieCards.forEach((card, index) => {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');

    // Get movie title from the card
    const titleElement = card.querySelector('.movie-title');
    const movieTitle = titleElement ? titleElement.textContent : `Movie ${index + 1}`;
    card.setAttribute('aria-label', `View details for ${movieTitle}`);

    // Click handler for movie cards
    card.addEventListener('click', (e) => {
        // Don't trigger if clicking an action button
        if (e.target.closest('.action-btn')) {
            return;
        }

        console.log(`Movie card clicked: ${movieTitle}`);
        window.location.href = 'movie-detail.html';
    });

    // Keyboard navigation
    card.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            console.log(`Movie card activated via keyboard: ${movieTitle}`);
            window.location.href = 'movie-detail.html';
        }
    });

    // Add cursor pointer style
    card.style.cursor = 'pointer';
});

// ============================================
// Performance Optimization: Lazy Loading Images
// ============================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });

    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// Logo Click Handler
// ============================================
const logo = document.querySelector('.logo');
if (logo) {
    logo.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
    logo.style.cursor = 'pointer';
}

// ============================================
// Footer Links
// ============================================
const footerLinks = document.querySelectorAll('footer a');
footerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        // If it's a # link, prevent default and show a message
        if (href === '#' || !href) {
            e.preventDefault();
            console.log(`Footer link clicked: ${link.textContent}`);
        }
    });
});

// ============================================
// Sign-In Modal Functionality
// ============================================
const signinModal = document.getElementById('signin-modal');
const signinModalOverlay = document.querySelector('.signin-modal-overlay');
const signinModalClose = document.querySelector('.signin-modal-close');
const googleSigninBtn = document.querySelector('.google-signin-btn');

// Check if user is logged in (mock function for wireframe)
function isUserLoggedIn() {
    return sessionStorage.getItem('userLoggedIn') === 'true';
}

// Show sign-in modal
function showSignInModal() {
    if (signinModal) {
        signinModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

// Close sign-in modal
function closeSignInModal() {
    if (signinModal) {
        signinModal.classList.remove('show');
        document.body.style.overflow = '';
    }
}

// Handle Google Sign-In (mock for wireframe)
function handleGoogleSignIn() {
    console.log('Google Sign-In initiated');
    // In production, this would integrate with Google OAuth
    // For wireframe, just simulate login
    setTimeout(() => {
        sessionStorage.setItem('userLoggedIn', 'true');
        closeSignInModal();
        alert('Successfully signed in with Google!');
        // Update UI to show logged-in state
        updateUserProfileUI();
    }, 500);
}

// Update user profile UI based on login state
function updateUserProfileUI() {
    const userProfile = document.querySelector('.user-profile');
    if (!userProfile) return;

    if (isUserLoggedIn()) {
        // Show user avatar and name
        userProfile.querySelector('.profile-img').src = 'https://ui-avatars.com/api/?name=John+Doe&background=E50914&color=fff&size=36';
        userProfile.setAttribute('aria-label', 'User menu');
    } else {
        // Show default avatar
        userProfile.querySelector('.profile-img').src = 'https://ui-avatars.com/api/?name=User&background=E50914&color=fff&size=36';
        userProfile.setAttribute('aria-label', 'Sign in');
    }
}

// Add to My List with authentication check
function addToMyList(movieTitle = 'this movie') {
    if (!isUserLoggedIn()) {
        showSignInModal();
        return false;
    }

    // If logged in, add to list
    console.log(`Adding ${movieTitle} to My List`);
    alert(`Added ${movieTitle} to My List!`);
    return true;
}

// Event Listeners for Modal
if (signinModalClose) {
    signinModalClose.addEventListener('click', closeSignInModal);
}

if (signinModalOverlay) {
    signinModalOverlay.addEventListener('click', closeSignInModal);
}

if (googleSigninBtn) {
    googleSigninBtn.addEventListener('click', handleGoogleSignIn);
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && signinModal && signinModal.classList.contains('show')) {
        closeSignInModal();
    }
});

// Update user profile click handler
if (userProfile) {
    userProfile.addEventListener('click', (e) => {
        e.preventDefault();
        if (!isUserLoggedIn()) {
            showSignInModal();
        } else {
            console.log('User profile clicked - would open user menu');
            // In production, this would open user menu dropdown
            const dropdownIcon = userProfile.querySelector('.dropdown-icon');
            if (dropdownIcon) {
                dropdownIcon.style.transform = dropdownIcon.style.transform === 'rotate(180deg)'
                    ? 'rotate(0deg)'
                    : 'rotate(180deg)';
            }
        }
    });
}

// Initialize user profile UI on page load
document.addEventListener('DOMContentLoaded', () => {
    updateUserProfileUI();
});

// ============================================
// Console Welcome Message
// ============================================
console.log('%c🎬 Movie Hub', 'font-size: 24px; font-weight: bold; color: #E50914;');
console.log('%cWelcome to Movie Hub - Your ultimate streaming destination!', 'font-size: 14px; color: #B3B3B3;');
console.log('%cBuilt with ❤️ using HTML, CSS, and JavaScript', 'font-size: 12px; color: #666;');

// ============================================
// Utility: Debug Mode
// ============================================
const DEBUG_MODE = false;

if (DEBUG_MODE) {
    console.log('Debug mode enabled');

    // Log carousel scroll positions
    document.querySelectorAll('.carousel').forEach(carousel => {
        carousel.addEventListener('scroll', () => {
            console.log(`${carousel.id} scroll position:`, carousel.scrollLeft);
        });
    });

    // Log all interactions
    document.addEventListener('click', (e) => {
        console.log('Click event:', e.target);
    });
}