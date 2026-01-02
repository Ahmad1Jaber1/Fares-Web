/* ====================================
   Navigation JavaScript - Jobedu Website
   ==================================== */

// ====================================
// Sticky Navigation on Scroll
// ====================================

const navbar = document.getElementById('navbar');
let lastScrollTop = 0;
let scrollThreshold = 100;

function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add scrolled class for styling
    if (scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScrollTop = scrollTop;
}

// Throttle scroll event for performance
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (!scrollTimeout) {
        scrollTimeout = setTimeout(() => {
            handleScroll();
            scrollTimeout = null;
        }, 10);
    }
});

// ====================================
// Mobile Menu Toggle
// ====================================

const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.getElementById('navLinks');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');

    // Prevent body scroll when menu is open
    if (navLinks.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});

// ====================================
// Close Mobile Menu on Outside Click
// ====================================

document.addEventListener('click', (e) => {
    const isClickInsideNav = navbar.contains(e.target);
    const isMenuOpen = navLinks.classList.contains('active');

    if (!isClickInsideNav && isMenuOpen) {
        navLinks.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ====================================
// Active Navigation Link on Scroll
// ====================================

const sections = document.querySelectorAll('.section');
const navigationLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
    const scrollPosition = window.pageYOffset + 150;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navigationLinks.forEach(link => {
                link.classList.remove('active');

                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Update active link on scroll with throttling
let linkUpdateTimeout;
window.addEventListener('scroll', () => {
    if (!linkUpdateTimeout) {
        linkUpdateTimeout = setTimeout(() => {
            updateActiveLink();
            linkUpdateTimeout = null;
        }, 50);
    }
});

// Update active link on page load
window.addEventListener('load', updateActiveLink);

// ====================================
// Navigation Link Click Handling
// ====================================

navigationLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Remove active class from all links
        navigationLinks.forEach(navLink => navLink.classList.remove('active'));

        // Add active class to clicked link
        link.classList.add('active');
    });
});

// ====================================
// Prevent Menu Close on Link Click Animation
// ====================================

navLinks.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-link')) {
        setTimeout(() => {
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            document.body.style.overflow = 'auto';
        }, 300); // Delay to allow smooth transition
    }
});

// ====================================
// Resize Event Handler
// ====================================

let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);

    resizeTimeout = setTimeout(() => {
        // Close mobile menu on resize to desktop
        if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }, 250);
});

// ====================================
// Keyboard Navigation Support
// ====================================

// Tab key navigation
navigationLinks.forEach((link, index) => {
    link.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            e.preventDefault();
            const nextIndex = (index + 1) % navigationLinks.length;
            navigationLinks[nextIndex].focus();
        }

        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            e.preventDefault();
            const prevIndex = (index - 1 + navigationLinks.length) % navigationLinks.length;
            navigationLinks[prevIndex].focus();
        }
    });
});

// ====================================
// Mobile Menu Accessibility
// ====================================

mobileMenuToggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        mobileMenuToggle.click();
    }
});

// Focus trap for mobile menu
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled])'
    );

    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    element.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    e.preventDefault();
                    lastFocusable.focus();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    e.preventDefault();
                    firstFocusable.focus();
                }
            }
        }
    });
}

// Apply focus trap when mobile menu is open
mobileMenuToggle.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
        trapFocus(navLinks);
    }
});

// ====================================
// Show/Hide Navigation on Scroll Direction
// ====================================

let previousScrollPosition = window.pageYOffset;
const navbarHeight = navbar.offsetHeight;

function handleScrollDirection() {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > previousScrollPosition && currentScrollPosition > navbarHeight * 2) {
        // Scrolling down - hide navbar
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up - show navbar
        navbar.style.transform = 'translateY(0)';
    }

    previousScrollPosition = currentScrollPosition;
}

// Optional: Enable hide on scroll down (commented out by default)
// Uncomment to enable this feature
/*
let scrollDirectionTimeout;
window.addEventListener('scroll', () => {
    if (!scrollDirectionTimeout) {
        scrollDirectionTimeout = setTimeout(() => {
            handleScrollDirection();
            scrollDirectionTimeout = null;
        }, 10);
    }
});
*/

// Add transition for navbar transform
navbar.style.transition = 'transform 0.3s ease, background-color 0.3s ease';

// ====================================
// Highlight Active Section in Viewport
// ====================================

const highlightOptions = {
    threshold: 0.3,
    rootMargin: '-100px 0px -100px 0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('id');

            navigationLinks.forEach(link => {
                link.classList.remove('active');

                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, highlightOptions);

// Observe all sections
sections.forEach(section => {
    sectionObserver.observe(section);
});

// ====================================
// Logo Click - Scroll to Top
// ====================================

const logo = document.querySelector('.logo');

logo.addEventListener('click', (e) => {
    e.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    // Set home link as active
    navigationLinks.forEach(link => link.classList.remove('active'));
    const homeLink = document.querySelector('.nav-link[href="#home"]');
    if (homeLink) {
        homeLink.classList.add('active');
    }
});

// ====================================
// Smooth Scroll Polyfill for Older Browsers
// ====================================

function smoothScrollPolyfill() {
    // Check if smooth scroll is supported
    if (!('scrollBehavior' in document.documentElement.style)) {
        // Add polyfill for smooth scroll
        const links = document.querySelectorAll('a[href^="#"]');

        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    const targetPosition = targetElement.offsetTop - navbar.offsetHeight;
                    const startPosition = window.pageYOffset;
                    const distance = targetPosition - startPosition;
                    const duration = 1000;
                    let start = null;

                    function animation(currentTime) {
                        if (start === null) start = currentTime;
                        const timeElapsed = currentTime - start;
                        const run = ease(timeElapsed, startPosition, distance, duration);
                        window.scrollTo(0, run);
                        if (timeElapsed < duration) requestAnimationFrame(animation);
                    }

                    function ease(t, b, c, d) {
                        t /= d / 2;
                        if (t < 1) return c / 2 * t * t + b;
                        t--;
                        return -c / 2 * (t * (t - 2) - 1) + b;
                    }

                    requestAnimationFrame(animation);
                }
            });
        });
    }
}

smoothScrollPolyfill();

// ====================================
// Performance Monitoring
// ====================================

if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;

            console.log(`⚡ Page loaded in ${pageLoadTime}ms`);
        }, 0);
    });
}

// ====================================
// Console Navigation Info
// ====================================

console.log('🧭 Navigation initialized');
console.log('📱 Mobile menu ready');
console.log('🔗 Active link tracking enabled');
