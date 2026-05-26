# Lumen Studio — Hair Salon Website

A premium, responsive marketing site for a modern hair design studio. Built with semantic HTML, modern CSS, and lightweight vanilla JavaScript—no frameworks or build step required.

## Features

- **Responsive-first layout** — Optimized for mobile, tablet, and desktop
- **Conversion-focused homepage** — Hero, trust metrics, services, process, gallery, testimonials, and CTA
- **Modern UI** — Glass header on scroll, card-based sections, subtle depth (shadows, gradients, glassmorphism)
- **Accessible foundations** — Skip link, semantic landmarks, ARIA labels, focus states, reduced-motion support
- **Lightweight interactions** — Sticky header, mobile menu, scroll-reveal animations

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Full landing page with all main sections |
| Studio | `about.html` | About the salon and approach |
| Lookbook | `hairstyle.html` | Image gallery of recent work |
| Journal | `news.html` | Articles and studio updates |
| Contact | `contact.html` | Contact details and booking form |

## Project structure

```
hairstylesalon/
├── index.html          # Homepage
├── about.html          # Studio page
├── hairstyle.html      # Lookbook gallery
├── news.html           # Journal / blog
├── contact.html        # Contact & booking form
├── css/
│   ├── main.css        # Active design system (use this)
│   └── style.css       # Legacy template styles (unused)
├── js/
│   └── main.js         # Header, mobile nav, scroll reveal
├── images/             # Photos and assets
├── fonts/              # Legacy local fonts (unused by main.css)
└── README.md
```

## Getting started

### Option 1: Open directly

Double-click `index.html` or open it in your browser:

```
file:///path/to/hairstylesalon/index.html
```

### Option 2: Local server (recommended)

Some browsers handle relative paths and fonts more reliably with a local server.

**Python:**

```bash
cd hairstylesalon
python -m http.server 8080
```

Then visit [http://localhost:8080](http://localhost:8080).

**Node.js (npx):**

```bash
npx serve .
```

## Tech stack

- **HTML5** — Semantic structure
- **CSS3** — Custom properties, Grid, Flexbox, `clamp()`, transitions
- **JavaScript (ES5-compatible)** — No dependencies
- **Google Fonts** — [Sora](https://fonts.google.com/specimen/Sora) (headings) + [Inter](https://fonts.google.com/specimen/Inter) (body)

## Customization

### Brand name

Search for `Lumen` across HTML files and replace with your salon name. Update the `<title>` and `<meta name="description">` tags on each page.

### Colors

Edit CSS variables at the top of `css/main.css`:

```css
:root {
  --color-ink: #14141a;
  --color-canvas: #f6f4f1;
  --color-accent: #5a6b5c;
  /* ... */
}
```

### Images

Replace files in `images/` or update `src` paths in the HTML. The homepage preloads the hero image for faster first paint.

### Contact form

The form on `contact.html` currently uses `action="#"`. Connect it to your backend, form service (e.g. Formspree, Netlify Forms), or email handler as needed.

### Typography

To change fonts, update the Google Fonts `@import` in `css/main.css` and the `--font-display` / `--font-body` variables.

## Accessibility

- Skip-to-content link
- Landmark regions (`header`, `main`, `footer`, `nav`)
- Keyboard-focus styles on interactive elements
- `prefers-reduced-motion` disables scroll animations
- Meaningful `alt` text on images (review and update for your content)

## Browser support

Works in current versions of Chrome, Firefox, Safari, and Edge. Uses widely supported features (`IntersectionObserver` for scroll reveal; falls back gracefully when unavailable).

## Performance notes

- Hero image is preloaded on the homepage
- Below-the-fold images use `loading="lazy"`
- No JavaScript frameworks; single small `main.js` file
- Google Fonts loaded via CSS `@import` (consider `<link rel="preconnect">` for production)

## Legacy files

`css/style.css` and fonts in `fonts/` belong to the original free template. They are **not** linked by the redesigned pages. You can remove them if you no longer need the old layout.

## License

Original template assets may be subject to the [Free Website Templates](http://www.freewebsitetemplates.com/) terms. The Lumen Studio redesign content and `main.css` / `main.js` were created for this project—adjust licensing as needed for your use case.

## Credits

- Photography: placeholder images from the original template set in `images/`
- Design direction: premium modern salon / SaaS-inspired UI
- Fonts: Google Fonts (Sora, Inter)
