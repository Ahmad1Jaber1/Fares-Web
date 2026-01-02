/* ====================================
   Main JavaScript - Jobedu Website
   ==================================== */

// ====================================
// Scroll Animations - Intersection Observer
// ====================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

// Observe all elements with animation classes
const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-down, .fade-in-left, .fade-in-right, .scale-in');
animatedElements.forEach(el => observer.observe(el));

// ====================================
// Lazy Loading Images
// ====================================

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.classList.add('loaded');
            observer.unobserve(img);
        }
    });
});

const lazyImages = document.querySelectorAll('img[loading="lazy"]');
lazyImages.forEach(img => imageObserver.observe(img));

// ====================================
// Shopping Cart Functionality
// ====================================

class ShoppingCart {
    constructor() {
        this.items = this.loadCart();
        this.notification = document.getElementById('cartNotification');
        this.initCartButtons();
    }

    loadCart() {
        const savedCart = localStorage.getItem('jobeduCart');
        return savedCart ? JSON.parse(savedCart) : [];
    }

    saveCart() {
        localStorage.setItem('jobeduCart', JSON.stringify(this.items));
    }

    addItem(product, price) {
        const existingItem = this.items.find(item => item.product === product);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({
                product: product,
                price: parseFloat(price),
                quantity: 1
            });
        }

        this.saveCart();
        this.showNotification();
    }

    showNotification() {
        this.notification.classList.add('show');
        setTimeout(() => {
            this.notification.classList.remove('show');
        }, 3000);
    }

    initCartButtons() {
        const addToCartButtons = document.querySelectorAll('.btn-add-cart');
        addToCartButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const product = e.target.dataset.product;
                const price = e.target.dataset.price;
                this.addItem(product, price);

                // Add ripple effect
                const ripple = document.createElement('span');
                ripple.classList.add('ripple');
                e.target.appendChild(ripple);

                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }

    getTotal() {
        return this.items.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }

    getItemCount() {
        return this.items.reduce((count, item) => {
            return count + item.quantity;
        }, 0);
    }
}

// Initialize shopping cart
const cart = new ShoppingCart();

// ====================================
// Contact Form Validation & Submission
// ====================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validation
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Success message (in real application, this would send to server)
        alert('Thank you for your message! We will get back to you soon.');

        // Reset form
        contactForm.reset();

        // Log to console (for demonstration)
        console.log('Form submitted:', { name, email, message });
    });

    // Real-time validation feedback
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            if (input.value.trim() === '') {
                input.style.borderColor = '#ff4444';
            } else {
                input.style.borderColor = 'var(--primary-yellow)';
            }
        });

        input.addEventListener('focus', () => {
            input.style.borderColor = 'var(--primary-yellow)';
        });
    });
}

// ====================================
// Smooth Scroll for Navigation Links
// ====================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            const navLinks = document.getElementById('navLinks');
            const mobileMenuToggle = document.getElementById('mobileMenuToggle');
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        }
    });
});

// ====================================
// Parallax Effect for Background Images
// ====================================

// PARALLAX DISABLED - Keeping backgrounds fixed for better stability
// Uncomment below to re-enable parallax effect if needed

/*
function parallaxEffect() {
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        const background = section.querySelector('.section-background, .hero-background');
        if (background) {
            const scrolled = window.pageYOffset;
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            // Only apply parallax if section is in viewport
            if (scrolled + window.innerHeight > sectionTop && scrolled < sectionTop + sectionHeight) {
                const yPos = (scrolled - sectionTop) * 0.5;
                background.style.transform = `translateY(${yPos}px)`;
            }
        }
    });
}

// Apply parallax on scroll (disabled on mobile for performance)
if (window.innerWidth > 768) {
    window.addEventListener('scroll', () => {
        requestAnimationFrame(parallaxEffect);
    });
}
*/

// ====================================
// Product Quick View Modal (Basic Implementation)
// ====================================

const quickViewButtons = document.querySelectorAll('.btn-quick-view');

quickViewButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const productCard = e.target.closest('.product-card');
        const productName = productCard.querySelector('.product-name').textContent;
        const productPrice = productCard.querySelector('.product-price').textContent;
        const productImage = productCard.querySelector('.product-image').src;

        // Simple alert for demonstration (in production, use a proper modal)
        alert(`Product: ${productName}\nPrice: ${productPrice}\n\nClick "Add to Cart" to purchase this item.`);

        console.log('Quick view:', { productName, productPrice, productImage });
    });
});

// ====================================
// Scroll Progress Indicator
// ====================================

function updateScrollProgress() {
    const scrollProgress = document.createElement('div');
    scrollProgress.className = 'scroll-progress';
    document.body.appendChild(scrollProgress);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        scrollProgress.style.width = scrolled + '%';
    });
}

// Initialize scroll progress
updateScrollProgress();

// ====================================
// Performance Optimization - Remove will-change after animation
// ====================================

animatedElements.forEach(el => {
    el.addEventListener('animationend', () => {
        el.classList.add('complete');
    });
});

// ====================================
// Keyboard Navigation Support
// ====================================

document.addEventListener('keydown', (e) => {
    // Press 'Escape' to close mobile menu
    if (e.key === 'Escape') {
        const navLinks = document.getElementById('navLinks');
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    }
});

// ====================================
// Add to Cart Button Ripple Effect
// ====================================

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple
        const ripple = document.createElement('span');
        ripple.classList.add('ripple-effect');

        // Get button dimensions
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);

        // Position ripple
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';

        this.appendChild(ripple);

        // Remove ripple after animation
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple effect styles dynamically
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }

    @keyframes ripple-animation {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// ====================================
// Console Welcome Message
// ====================================

console.log('%c👕 JOBEDU - Jordanian Streetwear', 'color: #FFC107; font-size: 20px; font-weight: bold;');
console.log('%cBorn from the streets of Amman, Jordan', 'color: #FFF; font-size: 14px;');
console.log('%cWebsite developed with ❤️', 'color: #888; font-size: 12px;');

// ====================================
// Analytics & Tracking (Placeholder)
// ====================================

// Track page views
function trackPageView() {
    console.log('Page view tracked:', window.location.pathname);
    // In production, integrate with Google Analytics or similar
}

trackPageView();

// Track product views
document.querySelectorAll('.product-card').forEach(card => {
    const productName = card.querySelector('.product-name').textContent;

    const productObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Product viewed:', productName);
                // In production, send to analytics
                productObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    productObserver.observe(card);
});

// ====================================
// Export cart for debugging
// ====================================

window.jobeduCart = cart;

console.log('💼 Cart available at: window.jobeduCart');
console.log('Current cart items:', cart.getItemCount());
