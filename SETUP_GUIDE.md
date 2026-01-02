# 🚀 Quick Setup Guide - Jobedu Website

## ⚡ Quick Start (30 seconds)

1. **Open the website**
   - Double-click `index.html` in your file browser
   - The website will open in your default browser

That's it! The website is fully functional without any setup.

---

## 🌐 Local Development Server (Optional)

For testing features like service workers or avoiding CORS issues:

### Option 1: Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Then visit: `http://localhost:8000`

### Option 2: Node.js
```bash
# Install http-server globally (one time)
npm install -g http-server

# Run server
http-server
```
Then visit: `http://localhost:8080`

### Option 3: PHP
```bash
php -S localhost:8000
```
Then visit: `http://localhost:8000`

### Option 4: VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

---

## 📁 File Structure Overview

```
jobedu-website/
│
├── index.html              ← Main HTML file (open this!)
│
├── css/                    ← All stylesheets
│   ├── style.css          ← Main styles
│   ├── responsive.css     ← Mobile/tablet/desktop styles
│   └── animations.css     ← Scroll effects & animations
│
├── js/                     ← All JavaScript
│   ├── main.js            ← Cart, forms, scroll effects
│   └── navigation.js      ← Menu & navigation
│
├── images/                 ← All images
│   ├── home-bg.jpeg       ← Hero background
│   ├── shop-bg.jpeg       ← Shop background
│   ├── about-bg.jpeg      ← About background
│   ├── collab-bg.jpeg     ← Collaboration background
│   ├── contact-bg.jpeg    ← Contact background
│   ├── product-1.jpeg     ← Gaza Sun T-shirt
│   ├── product-2.jpeg     ← Camel Crossing T-shirt
│   ├── product-3.jpeg     ← Black Edition Jacket
│   ├── product-4.jpeg     ← Palestine Hoodie
│   └── product-5.jpeg     ← Peace T-shirt
│
└── README.md               ← Full documentation
```

---

## 🎨 Quick Customization

### Change Brand Colors
Open `css/style.css` and edit lines 8-13:
```css
:root {
    --primary-black: #000000;     ← Background color
    --primary-yellow: #FFC107;    ← Brand color (buttons, accents)
    --accent-gold: #FFD700;       ← Hover effects
    --white: #FFFFFF;             ← Text color
}
```

### Update Contact Info
Open `index.html` and search for:
- `+962 6 593 3595` ← Phone number (line ~280)
- `hello@jobedu.com` ← Email (line ~285)
- `facebook.com/JobeduJordan` ← Facebook (line ~290)

### Add/Remove Products
Open `index.html` and find the `<!-- Shop Section -->` (around line 85). Copy/paste/edit product cards.

### Change Background Images
Replace images in the `images/` folder with your own (keep the same filenames).

---

## 📱 Testing on Mobile

### Test on Real Device
1. Find your computer's local IP:
   - Windows: `ipconfig` → look for IPv4
   - Mac/Linux: `ifconfig` → look for inet

2. Start a local server (see above)

3. On your phone, visit: `http://YOUR-IP:8000`
   - Example: `http://192.168.1.100:8000`

### Browser DevTools
1. Open website in Chrome/Firefox
2. Press `F12` or `Ctrl+Shift+I` (Windows) / `Cmd+Option+I` (Mac)
3. Click device toolbar icon
4. Select device to simulate

---

## 🚀 Deployment to GitHub Pages

### Step 1: Create GitHub Repository
```bash
# In your project folder
git init
git add .
git commit -m "Initial commit: Jobedu streetwear website"
```

### Step 2: Push to GitHub
```bash
# Create a new repo on GitHub, then:
git remote add origin https://github.com/YOUR-USERNAME/jobedu-website.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings**
3. Scroll to **Pages** section
4. Under "Source", select **main** branch
5. Select **/ (root)** folder
6. Click **Save**

Your site will be live at:
`https://YOUR-USERNAME.github.io/jobedu-website/`

---

## 🌐 Other Deployment Options

### Netlify (Easiest)
1. Go to [netlify.com](https://netlify.com)
2. Sign up (free)
3. Drag and drop your project folder
4. Done! You'll get a URL instantly

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts
4. Done!

### Traditional Hosting (cPanel, etc.)
1. Zip your entire project folder
2. Upload via FTP or cPanel File Manager
3. Extract in your `public_html` folder
4. Visit your domain

---

## ✅ Pre-Flight Checklist

Before going live, verify:

- [ ] All images load correctly
- [ ] Contact form validates properly
- [ ] Mobile menu opens and closes
- [ ] All navigation links work
- [ ] Shopping cart adds items
- [ ] Contact information is correct
- [ ] Social media links are updated
- [ ] Website is responsive on mobile
- [ ] No console errors (Press F12 → Console tab)

---

## 🐛 Troubleshooting

### Images Not Loading
- **Check file paths**: Ensure images are in `images/` folder
- **Check file extensions**: `.jpeg` vs `.jpg`
- **Case sensitivity**: On some servers, `Image.jpeg` ≠ `image.jpeg`

### Styles Not Applying
- **Clear browser cache**: `Ctrl+Shift+R` (Windows) / `Cmd+Shift+R` (Mac)
- **Check CSS paths**: Ensure `css/` folder contains all files
- **Check console**: Press F12 → Console tab for errors

### JavaScript Not Working
- **Check console errors**: Press F12 → Console tab
- **Check file paths**: Ensure `js/` folder has both files
- **Clear cache**: Hard refresh browser

### Mobile Menu Not Working
- **Check screen size**: Menu appears below 768px width
- **Check JavaScript**: Ensure `navigation.js` is loaded
- **Test on real device**: Simulators sometimes behave differently

---

## 🎓 Learning Resources

### HTML/CSS
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [W3Schools](https://www.w3schools.com/)

### JavaScript
- [JavaScript.info](https://javascript.info/)
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

### Design
- [Google Fonts](https://fonts.google.com/)
- [Font Awesome Icons](https://fontawesome.com/)
- [Coolors (Color Palettes)](https://coolors.co/)

---

## 📞 Need Help?

1. Check the main [README.md](README.md) for detailed documentation
2. Look for console errors (F12 → Console)
3. Contact: hello@jobedu.com

---

## 🎉 You're All Set!

Your Jobedu website is ready to go. Open `index.html` and start exploring!

**Happy coding!** 🚀

---

*Last updated: January 2026*
