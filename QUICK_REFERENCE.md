# 🎯 Quick Reference Card - Jobedu Website

## 🚀 Getting Started
```bash
# Just open this file:
index.html

# Or use a local server:
python -m http.server 8000
```

---

## 📁 File Guide

| File | Purpose |
|------|---------|
| `index.html` | Main website file - **START HERE** |
| `css/style.css` | Main styles & design system |
| `css/responsive.css` | Mobile/tablet/desktop layouts |
| `css/animations.css` | Scroll effects & transitions |
| `js/main.js` | Shopping cart, forms, animations |
| `js/navigation.js` | Menu & scroll navigation |
| `README.md` | **Full documentation** |
| `SETUP_GUIDE.md` | **Quick setup instructions** |
| `PROJECT_SUMMARY.md` | Project overview & specs |

---

## 🎨 Quick Edits

### Change Colors
File: `css/style.css` (Lines 8-13)
```css
--primary-black: #000000;
--primary-yellow: #FFC107;
--accent-gold: #FFD700;
```

### Update Contact Info
File: `index.html` (Search for these)
- Phone: `+962 6 593 3595`
- Email: `hello@jobedu.com`
- Facebook: `facebook.com/JobeduJordan`

### Add Product
File: `index.html` (Line ~85 in Shop Section)
1. Copy existing product card HTML
2. Paste and edit:
   - Product name
   - Price
   - Image path
   - data-product and data-price attributes

### Change Images
Folder: `images/`
- Replace with same filename OR
- Update src in `index.html`

---

## 🎯 Section Locations in HTML

| Section | Line # (approx) |
|---------|----------------|
| Navigation | 35 |
| Home/Hero | 60 |
| Shop | 85 |
| About | 185 |
| Collaboration | 210 |
| Contact | 240 |
| Footer | 310 |

---

## 🌐 Deployment Commands

### GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit: Jobedu website"
git remote add origin YOUR_REPO_URL
git push -u origin main
```

### Netlify (Drag & Drop)
1. Go to netlify.com
2. Drag project folder
3. Done!

---

## 🔍 Troubleshooting

| Problem | Solution |
|---------|----------|
| Images not loading | Check `images/` folder and file extensions |
| Styles not applying | Hard refresh: `Ctrl+Shift+R` (Win) / `Cmd+Shift+R` (Mac) |
| JavaScript errors | Press `F12` → Check Console tab |
| Mobile menu not working | Test on real device or below 768px width |

---

## 📱 Responsive Breakpoints

```
320px  - Small mobile
480px  - Mobile
768px  - Tablet (menu becomes horizontal)
1024px - Desktop
1440px - Large desktop
1920px - Extra large desktop
```

---

## ⌨️ Keyboard Shortcuts (in browser)

- `F12` - Open Developer Tools
- `Ctrl+Shift+R` - Hard refresh (clear cache)
- `Ctrl+Shift+C` - Inspect element
- `Esc` - Close mobile menu

---

## 🎨 Color Codes

```
Black:        #000000
Yellow:       #FFC107
Gold:         #FFD700
White:        #FFFFFF
Light Gray:   #F5F5F5
Dark Gray:    #333333
```

---

## 📦 Products

1. Gaza Sun T-shirt - 23 JOD
2. Camel Crossing T-shirt - 21 JOD
3. Black Edition Jacket - 25 JOD
4. Palestine Hoodie - 25 JOD
5. Symbolic Peace T-shirt - 23 JOD

---

## 🔗 Important Links

- Main docs: `README.md`
- Setup guide: `SETUP_GUIDE.md`
- Project summary: `PROJECT_SUMMARY.md`

---

## 📞 Contact

- Email: hello@jobedu.com
- Phone: +962 6 593 3595
- Facebook: facebook.com/JobeduJordan

---

## ✅ Pre-Launch Checklist

- [ ] Test on mobile device
- [ ] Update contact information
- [ ] Test all navigation links
- [ ] Verify all images load
- [ ] Test contact form
- [ ] Check shopping cart
- [ ] Test on different browsers
- [ ] Check console for errors (F12)

---

**Need detailed help?** → See [README.md](README.md)

**Ready to deploy?** → See [SETUP_GUIDE.md](SETUP_GUIDE.md)

---

*Jobedu - Born from the streets of Amman, Jordan* 🇯🇴
