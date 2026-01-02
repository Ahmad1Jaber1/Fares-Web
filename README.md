# JOBEDU - Jordanian Streetwear Website

![Jobedu Logo](images/home-bg.jpeg)

## 🎯 About

**Jobedu** is a modern, responsive e-commerce website for a Jordanian streetwear brand that combines urban culture with authentic Arabic flair. Born from the vibrant streets of Amman, Jordan, Jobedu embodies the spirit of contemporary fashion and cultural expression.

This website showcases Jobedu's unique collection of streetwear, tells the brand's story, highlights collaborations, and provides an easy way for customers to get in touch.

---

## ✨ Features

### 🎨 Design
- **Modern Streetwear Aesthetic**: Bold black and yellow/gold color scheme
- **Fully Responsive**: Perfect display on all devices (320px to 1920px+)
- **Smooth Animations**: Scroll-triggered fade-ins, hover effects, and transitions
- **Parallax Effects**: Immersive background scrolling
- **Mobile-First Approach**: Optimized for mobile devices with hamburger menu

### 🛍️ E-Commerce Functionality
- **Product Showcase**: 5 featured products with hover effects
- **Shopping Cart**: Local storage-based cart system
- **Quick View**: Preview products with quick view button
- **Add to Cart**: Animated cart notifications

### 📱 User Experience
- **Sticky Navigation**: Always accessible navigation bar
- **Active Link Highlighting**: Shows current section
- **Smooth Scrolling**: Seamless navigation between sections
- **Contact Form**: Validated form with real-time feedback
- **Keyboard Navigation**: Full accessibility support

### ⚡ Performance
- **Lazy Loading**: Images load as you scroll
- **Optimized Animations**: GPU-accelerated for smooth performance
- **Fast Load Times**: Optimized CSS and JavaScript
- **SEO Ready**: Proper meta tags and semantic HTML

---

## 📂 Project Structure

```
jobedu-website/
├── index.html                 # Main HTML file
├── css/
│   ├── style.css             # Main stylesheet with design system
│   ├── responsive.css        # Responsive breakpoints and media queries
│   └── animations.css        # Animation keyframes and classes
├── js/
│   ├── main.js              # Core functionality (cart, forms, animations)
│   └── navigation.js        # Navigation logic and scroll handling
├── images/
│   ├── home-bg.jpeg         # Hero section background
│   ├── shop-bg.jpeg         # Shop section background
│   ├── about-bg.jpeg        # About section background
│   ├── collab-bg.jpeg       # Collaboration section background
│   ├── contact-bg.jpeg      # Contact section background
│   ├── product-1.jpeg       # Gaza Sun T-shirt
│   ├── product-2.jpeg       # Camel Crossing T-shirt
│   ├── product-3.jpeg       # Black Edition Jacket
│   ├── product-4.jpeg       # Palestine Hoodie
│   └── product-5.jpeg       # Symbolic Peace T-shirt
└── README.md                # This file
```

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server or build tools required - this is a static website

### Installation

1. **Clone or Download** the repository
   ```bash
   git clone https://github.com/yourusername/jobedu-website.git
   cd jobedu-website
   ```

2. **Open in Browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000

     # Using Node.js (http-server)
     npx http-server

     # Using PHP
     php -S localhost:8000
     ```

3. **View the Website**
   - Navigate to `http://localhost:8000` (if using a server)
   - Or open the `index.html` file directly

---

## 🎨 Technologies Used

### Frontend
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with Grid, Flexbox, and CSS Variables
- **Vanilla JavaScript**: No frameworks - pure, optimized JavaScript

### Design Features
- **CSS Grid & Flexbox**: Responsive layouts
- **CSS Variables**: Consistent design system
- **Intersection Observer API**: Scroll animations
- **Local Storage API**: Shopping cart persistence

### Fonts
- **Montserrat**: Primary font for headings and body
- **Cairo**: Arabic-friendly font support
- **Font Awesome**: Icons for social media and contact

---

## 📱 Responsive Breakpoints

```css
Mobile First (Default):     320px - 479px
Small Phones:              480px - 767px
Tablets:                   768px - 1023px
Desktop:                   1024px - 1439px
Large Desktop:             1440px - 1919px
Extra Large Desktop:       1920px+
```

---

## 🎯 Page Sections

### 1. **Home / Hero**
- Full-screen hero with brand message
- Call-to-action buttons
- Eye-catching background imagery

### 2. **Shop Now**
- Product grid with 5 featured items
- Product cards with hover effects
- Add to cart functionality
- Quick view option

### 3. **About Us**
- Brand story and mission
- Cultural heritage emphasis
- Engaging narrative

### 4. **Collaboration**
- Partnership with Jokers
- Collaborative collection highlight
- Visual storytelling

### 5. **Contact**
- Contact form with validation
- Phone, email, and social media links
- Social media icons
- Interactive form fields

---

## 🛒 Products

| Product | Price | Description |
|---------|-------|-------------|
| Gaza Sun T-shirt | 23 JOD | Black t-shirt with sun/wave design |
| Camel Crossing T-shirt | 21 JOD | Yellow camel crossing sign design |
| Black Edition Jacket | 25 JOD | Black zip-up jacket with branding |
| Palestine Hoodie | 25 JOD | Green hoodie with Palestine design |
| Symbolic Peace T-shirt | 23 JOD | White t-shirt with peace symbol |

---

## 💻 Browser Support

- ✅ Chrome (latest 2 versions)
- ✅ Firefox (latest 2 versions)
- ✅ Safari (latest 2 versions)
- ✅ Edge (latest 2 versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## ♿ Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Alt Text**: All images have descriptive alt text
- **Color Contrast**: WCAG AA compliant
- **Focus Indicators**: Visible focus states
- **Reduced Motion**: Respects user preferences

---

## 🎨 Design System

### Color Palette
```css
Primary Black:    #000000
Primary Yellow:   #FFC107
Accent Gold:      #FFD700
White:            #FFFFFF
Gray Light:       #F5F5F5
Gray Dark:        #333333
```

### Typography
```css
Font Sizes:
- Hero:      2.5rem - 4rem (responsive)
- H1:        2rem - 3rem
- H2:        1.5rem - 2.5rem
- Body:      1rem - 1.125rem
- Small:     0.875rem
```

### Spacing
```css
XS:    0.5rem
SM:    1rem
MD:    2rem
LG:    4rem
XL:    6rem
```

---

## 🚀 Deployment

### GitHub Pages

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Jobedu streetwear website"
   git branch -M main
   git remote add origin https://github.com/yourusername/jobedu-website.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Select `main` branch
   - Select `/ (root)` directory
   - Click Save

3. **Access Your Site**
   - Your site will be available at: `https://yourusername.github.io/jobedu-website/`

### Other Hosting Options

- **Netlify**: Drag and drop the project folder
- **Vercel**: Import from GitHub
- **Surge**: `surge` command from project directory
- **Traditional Hosting**: Upload files via FTP

---

## 📝 Customization Guide

### Changing Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-black: #000000;
    --primary-yellow: #FFC107;
    /* Change these values */
}
```

### Adding Products
1. Add product image to `images/` folder
2. Add product card HTML in `index.html`:
```html
<div class="product-card fade-in-up">
    <!-- Product markup -->
</div>
```

### Updating Content
- Edit text directly in `index.html`
- Replace background images in `images/` folder
- Update contact information in the Contact section

---

## 🐛 Known Issues

None at this time. Please report issues via GitHub Issues.

---

## 📧 Contact Information

- **Email**: hello@jobedu.com
- **Phone**: +962 6 593 3595
- **Facebook**: [facebook.com/JobeduJordan](https://facebook.com/JobeduJordan)

---

## 📄 License

Copyright © 2026 Jobedu. All rights reserved.

---

## 🙏 Credits

- **Design & Development**: Built with modern web standards
- **Fonts**: Google Fonts (Montserrat, Cairo)
- **Icons**: Font Awesome
- **Images**: Jobedu Brand Assets

---

## 🔮 Future Enhancements

Potential features for future versions:

- [ ] Backend integration for cart and checkout
- [ ] Payment gateway integration
- [ ] User authentication and accounts
- [ ] Product filtering and search
- [ ] Multi-language support (Arabic/English)
- [ ] Blog/news section
- [ ] Newsletter subscription
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Size guide and product details modal

---

## 💡 Development Notes

### Performance Optimization
- Images are lazy-loaded using Intersection Observer
- Animations use GPU acceleration with `transform` and `opacity`
- Scroll events are throttled for better performance
- Mobile parallax is disabled for performance

### Code Quality
- Clean, commented code
- Consistent naming conventions (BEM for CSS)
- DRY principles applied
- Modular JavaScript architecture

### Testing Checklist
- [x] Mobile responsiveness (320px - 1920px+)
- [x] Cross-browser compatibility
- [x] Form validation
- [x] Shopping cart functionality
- [x] Smooth scrolling
- [x] Navigation highlighting
- [x] Image lazy loading
- [x] Accessibility features

---

## 🤝 Contributing

This is a brand website for Jobedu. If you find bugs or have suggestions:

1. Open an issue
2. Describe the problem or enhancement
3. Provide screenshots if applicable

---

## 📞 Support

For support or questions:
- Email: hello@jobedu.com
- Open a GitHub issue

---

**Built with ❤️ for the streets of Jordan**

*Jobedu - Born from the vibrant streets of Amman, Jordan*
