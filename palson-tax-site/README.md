# Palson Tax - Modern Website

A complete modernization of the Palson Tax website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🎯 Project Overview

This is a production-ready, system-first redesign featuring:

- **Modern Design System**: Finance-trust color palette with accessible AA+ contrast
- **Component Library**: Reusable UI components following shadcn/ui patterns
- **Full Page Templates**: Home, Services, About, Team, Pricing, Resources, FAQ, Contact, Legal
- **SEO Optimized**: JSON-LD schemas, Open Graph tags, semantic HTML
- **Accessible**: WCAG 2.2 AA compliant with keyboard navigation and ARIA labels
- **Performance**: Optimized for Core Web Vitals (LCP <2.5s, CLS <0.1)
- **Responsive**: Mobile-first design with tablet and desktop breakpoints

## 🏗️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Utilities**: class-variance-authority, clsx, tailwind-merge

## 📁 Project Structure

```
palson-tax-site/
├── app/
│   ├── about/           # About page
│   ├── contact/         # Contact form
│   ├── faq/             # FAQ with accordions
│   ├── pricing/         # Pricing tiers
│   ├── privacy/         # Privacy policy
│   ├── resources/       # Blog/resources
│   ├── services/        # Services index & detail pages
│   │   └── [slug]/      # Dynamic service pages
│   ├── team/            # Team directory
│   ├── terms/           # Terms of service
│   ├── globals.css      # Global styles & design tokens
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Home page
├── components/
│   ├── layout/
│   │   ├── header.tsx   # Sticky header with navigation
│   │   └── footer.tsx   # Footer with sitemap
│   └── ui/
│       ├── button.tsx   # Button component with variants
│       ├── card.tsx     # Card components
│       ├── badge.tsx    # Badge/tag component
│       └── accordion.tsx # Accordion for FAQs
├── lib/
│   └── utils.ts         # Utility functions (cn helper)
├── next.config.js       # Next.js configuration
├── tailwind.config.ts   # Tailwind design tokens
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies
```

## 🎨 Design System

### Colors

- **Primary**: Navy (#0B1E3B), Slate (#1F2937)
- **Accent**: Teal (#0EA5A6), Emerald (#22C55E), Indigo (#6366F1)
- **Surface**: Soft White (#F9FAFB), Card (#FFFFFF)
- **Semantic**: Success (#16A34A), Warning (#F59E0B), Error (#EF4444)
- **Gradients**: Trustwave (Navy→Indigo), Mint Glow (Teal→Emerald)

### Typography

- **Font**: Inter (system fallback)
- **Scale**: 12/14/16/18/20/24/30/36/48/60px
- **Line Height**: Generous (1.5-1.75)

### Spacing

- **Grid**: 4/8/12/16/24/32/48/64/96/128px
- **Border Radius**: 0.5rem default, 1.5rem for cards
- **Shadows**: Soft elevation with hover effects

## 🚀 Deployment

### GitHub Pages (Recommended)

This site is configured for automatic deployment to GitHub Pages:

1. **Enable GitHub Pages**:
   - Go to repository **Settings** → **Pages**
   - Set **Source** to "GitHub Actions"

2. **Deploy**:
   - Merge to `main` or `master` branch
   - GitHub Actions will automatically build and deploy

3. **Live Site**:
   - https://manav148.github.io/Palson/

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for detailed instructions, custom domain setup, and troubleshooting.

### Other Deployment Options

<details>
<summary>Vercel (Alternative)</summary>

```bash
npm install -g vercel
vercel
```

Note: Remove `basePath` and `output: 'export'` from `next.config.js` for Vercel.
</details>

<details>
<summary>Netlify (Alternative)</summary>

Build command: `npm run build`
Publish directory: `out`

Note: Works with current static export configuration.
</details>

## 💻 Local Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (static export)
npm run build

# Preview static build locally
npx serve@latest out
```

Development: [http://localhost:3000](http://localhost:3000)
Production preview: [http://localhost:3000/Palson](http://localhost:3000/Palson)

## 📄 Page Templates

### Home Page (`/`)
- Hero with value proposition and CTAs
- 6 value pillars (cards)
- Services preview grid
- Testimonials carousel
- CTA section with lead capture

### Services Pages (`/services`, `/services/[slug]`)
- **Index**: Grid of all services with pricing
- **Detail**: Problem→Solution, deliverables, process, pricing, FAQs
- 6 service types: Individual Tax, Business Tax, Bookkeeping, Payroll, Planning, IRS Resolution

### About Page (`/about`)
- Mission statement
- Core values (6 pillars)
- Timeline of company history
- Certifications & community involvement

### Team Page (`/team`)
- Team member cards with credentials
- Specialties and contact info
- Professional certifications section

### Pricing Page (`/pricing`)
- 3 pricing tiers (Starter, Growth, Advisory)
- Add-on services table
- Value propositions & FAQs

### Resources Page (`/resources`)
- Blog article index with categories
- Upcoming tax deadlines widget
- Newsletter signup
- Category filters

### FAQ Page (`/faq`)
- Categorized accordions (6 categories)
- Search-friendly format
- Links to related services

### Contact Page (`/contact`)
- Multi-step lead form with validation
- Contact information sidebar
- Success state with next steps

### Legal Pages (`/privacy`, `/terms`)
- Privacy policy (GDPR-friendly)
- Terms of service
- Plain-language summaries

## 🔍 SEO & Metadata

Every page includes:
- Unique title and meta description
- Canonical URLs
- Open Graph tags
- Twitter Card tags
- JSON-LD structured data:
  - Organization
  - LocalBusiness
  - Service
  - FAQPage
  - BlogPosting
  - ContactPage

## ♿ Accessibility Features

- WCAG 2.2 AA compliant color contrast
- Semantic HTML5 elements
- Skip-to-content link
- Keyboard navigation support
- ARIA labels and roles
- Focus-visible states
- Reduced motion support (`prefers-reduced-motion`)

## 🎯 Performance Optimizations

- Next.js App Router for automatic code splitting
- Image optimization with next/image
- Font optimization with next/font
- CSS-in-JS with zero runtime (Tailwind)
- Lazy loading for images and components
- Minimal JavaScript bundle

## 📱 Responsive Design

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+
- **Container**: Max 1280px (7xl)

## 🔐 Security & Privacy

- Bank-level encryption for forms (HTTPS)
- No third-party analytics trackers
- GDPR-compliant privacy policy
- Cookie consent ready
- Secure document upload portal (placeholder)

## 🗺️ Migration & Redirects

Create 301 redirects in `next.config.js` for legacy URLs:

```javascript
async redirects() {
  return [
    { source: '/old-services', destination: '/services', permanent: true },
    { source: '/tax-prep', destination: '/services/individual-tax-prep', permanent: true },
    // Add more as needed
  ];
}
```

## 📊 Analytics Setup

Recommended analytics (privacy-friendly):
- Plausible Analytics
- Fathom Analytics
- Simple Analytics

Add tracking code to `app/layout.tsx`.

## 🛠️ Development

### Component Creation

Follow shadcn/ui patterns:
```tsx
import { cn } from "@/lib/utils";

export function MyComponent({ className, ...props }) {
  return (
    <div className={cn("base-styles", className)} {...props}>
      {/* content */}
    </div>
  );
}
```

### Adding New Services

1. Add service data to `/app/services/[slug]/page.tsx`
2. Include slug in `generateStaticParams()`
3. Add to navigation in `/components/layout/header.tsx`

### Styling Guidelines

- Use Tailwind utility classes
- Extract repeated patterns to components
- Use design tokens from `tailwind.config.ts`
- Maintain spacing consistency (4px grid)

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Connect to GitHub and deploy
vercel
```

### Other Platforms

```bash
# Build production bundle
npm run build

# Serve static files from .next/
```

## 📝 Environment Variables

Create `.env.local`:

```bash
# Optional: Analytics
NEXT_PUBLIC_ANALYTICS_ID=your_id

# Optional: Contact Form Integration
CONTACT_FORM_API_KEY=your_key

# Optional: CMS/Blog Integration
CMS_API_KEY=your_key
```

## 🎨 Customization

### Changing Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  teal: {
    DEFAULT: "#YOUR_COLOR",
    // ...
  }
}
```

### Changing Content

- **Services**: Edit service data in `/app/services/[slug]/page.tsx`
- **Team**: Edit team array in `/app/team/page.tsx`
- **Contact Info**: Update in `/components/layout/footer.tsx`

## 📞 Support

For questions or issues:
- Email: info@palsontax.com
- Phone: (555) 555-1234

## 📄 License

Proprietary - © 2025 Palson Tax. All rights reserved.

---

Built with ❤️ by the Palson Tax team
