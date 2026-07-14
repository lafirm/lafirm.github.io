# Lafir M - Personal Engineering Portfolio

A world-class personal engineering portfolio website built with Astro, Tailwind CSS, and TypeScript. Designed for senior engineers by a senior engineer.

## Overview

This is a production-ready portfolio website showcasing:
- Professional journey and career progression
- Engineering philosophy and principles
- Detailed project case studies
- Technical skills and technologies
- Contact information

## Design Principles

- **Dark-first design**: Professional and timeless aesthetic
- **Minimal but impactful**: Every element serves a purpose
- **Performance-focused**: Optimized for Lighthouse scores >95
- **Accessible**: WCAG AA compliant with semantic HTML
- **SEO-optimized**: Open Graph, Twitter Cards, structured data

## Tech Stack

- **Framework**: Astro 4.0
- **Styling**: Tailwind CSS 3.4
- **Language**: TypeScript
- **Hosting**: GitHub Pages
- **Build**: Static site generation

## Project Structure

```
src/
├── layouts/
│   └── Layout.astro          # Main layout wrapper
├── components/
│   ├── Header.astro          # Navigation header
│   ├── Hero.astro            # Hero section
│   ├── About.astro           # About and career journey
│   ├── Philosophy.astro      # Engineering philosophy
│   ├── Experience.astro      # Professional experience
│   ├── Projects.astro        # Featured projects
│   ├── Skills.astro          # Technical skills
│   ├── Contact.astro         # Contact section
│   └── Footer.astro          # Footer
├── pages/
│   └── index.astro           # Main page
├── data/
│   ├── profile.ts            # Personal and philosophy data
│   ├── experience.ts         # Work experience data
│   └── projects.ts           # Projects and skills data
└── styles/
    └── global.css            # Global styles and animations

public/
├── robots.txt                # SEO robots
├── sitemap.xml              # XML sitemap
├── favicon.svg              # Favicon
└── site.webmanifest         # PWA manifest
```

## Setup & Installation

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/lafirm/lafirm.github.io.git
cd lafirm.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## Development

### Local Development

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build locally
```

### Building

The production build outputs static files to the `dist/` directory:

```bash
npm run build
```

## Deployment to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

1. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

2. Push to main branch - GitHub Actions will automatically deploy

### Option 2: Manual Deployment

```bash
# Build the site
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### Option 3: Using gh-pages Package

```bash
npm run deploy
```

This requires `gh-pages` package (already included in devDependencies).

## Performance Optimization

The site is optimized for performance:

- ✅ Static site generation
- ✅ Minimal JavaScript (no React on default)
- ✅ CSS-in-JS for styles
- ✅ Image optimization
- ✅ Font optimization with system fonts
- ✅ Lighthouse >95 score target

## SEO Features

- ✅ Meta tags and descriptions
- ✅ Open Graph support
- ✅ Twitter Card support
- ✅ Canonical URLs
- ✅ Structured data (JSON-LD ready)
- ✅ XML sitemap
- ✅ Robots.txt
- ✅ Mobile-friendly design

## Accessibility

- ✅ Semantic HTML
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Color contrast compliance
- ✅ Focus indicators
- ✅ Alt text for images

## Customization

### Update Personal Information

Edit `src/data/profile.ts`:

```typescript
export const profileData = {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your.email@example.com',
  // ... other fields
};
```

### Update Experience

Edit `src/data/experience.ts` to add/modify work experience.

### Update Projects

Edit `src/data/projects.ts` to showcase different projects.

### Update Skills

Edit `src/data/projects.ts` skills section to customize technology list.

### Customize Colors

Edit `tailwind.config.cjs`:

```javascript
colors: {
  background: '#09090B',
  'card-bg': '#111113',
  accent: '#2563EB',
  // ... other colors
}
```

## Content Guidelines

- All content is data-driven from `src/data/`
- No hardcoded content in components
- Reusable components for consistency
- Clear separation of concerns

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers

## Performance Metrics

Target Lighthouse Scores:
- Performance: >95
- Accessibility: >95
- Best Practices: >95
- SEO: >95

## License

MIT License - feel free to use this as a template for your own portfolio.

## Author

Lafir M
- GitHub: [@lafirm](https://github.com/lafirm)
- LinkedIn: [/in/lafir](https://linkedin.com/in/lafir)
- Email: lafir.decode008@silomails.com

## Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Web.dev Performance Guide](https://web.dev/performance/)
- [MDN Web Docs](https://developer.mozilla.org/)

## Contributing

Feel free to fork and customize this portfolio for your own use.

---

**Built with ❤️ for engineering excellence.**
