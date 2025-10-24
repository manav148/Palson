# Migration Guide: Old Palson Tax Site → New Site

## Overview

This document provides a complete migration plan from the existing Palson Tax website to the new modernized version.

## Pre-Migration Checklist

- [ ] Audit current site URLs and page structure
- [ ] Export existing content (blog posts, service descriptions, team bios)
- [ ] Document current SEO rankings for key pages
- [ ] Set up Google Search Console for new domain/subdomain (if applicable)
- [ ] Backup current site completely
- [ ] Test new site thoroughly on staging environment
- [ ] Set up analytics on new site
- [ ] Configure DNS settings (if needed)

## URL Mapping & 301 Redirects

Create 301 redirects for all existing URLs to maintain SEO value.

### Common URL Patterns

| Old URL | New URL | Priority |
|---------|---------|----------|
| `/services.html` | `/services` | High |
| `/about-us.html` | `/about` | High |
| `/contact-us.html` | `/contact` | High |
| `/individual-tax.html` | `/services/individual-tax-prep` | High |
| `/business-tax.html` | `/services/small-business-tax` | High |
| `/bookkeeping.html` | `/services/bookkeeping` | High |
| `/team.html` | `/team` | Medium |
| `/faq.html` | `/faq` | Medium |
| `/blog/*` | `/resources/*` | Medium |
| `/privacy-policy.html` | `/privacy` | Low |
| `/terms.html` | `/terms` | Low |

### Implementation

Add to `next.config.js`:

```javascript
async redirects() {
  return [
    // Service pages
    {
      source: '/services.html',
      destination: '/services',
      permanent: true,
    },
    {
      source: '/individual-tax.html',
      destination: '/services/individual-tax-prep',
      permanent: true,
    },
    {
      source: '/business-tax.html',
      destination: '/services/small-business-tax',
      permanent: true,
    },
    {
      source: '/bookkeeping.html',
      destination: '/services/bookkeeping',
      permanent: true,
    },
    {
      source: '/payroll.html',
      destination: '/services/payroll',
      permanent: true,
    },
    {
      source: '/tax-planning.html',
      destination: '/services/tax-planning',
      permanent: true,
    },
    {
      source: '/irs-help.html',
      destination: '/services/irs-resolution',
      permanent: true,
    },

    // Main pages
    {
      source: '/about-us.html',
      destination: '/about',
      permanent: true,
    },
    {
      source: '/contact-us.html',
      destination: '/contact',
      permanent: true,
    },
    {
      source: '/team.html',
      destination: '/team',
      permanent: true,
    },
    {
      source: '/pricing.html',
      destination: '/pricing',
      permanent: true,
    },
    {
      source: '/faq.html',
      destination: '/faq',
      permanent: true,
    },

    // Blog/Resources
    {
      source: '/blog',
      destination: '/resources',
      permanent: true,
    },
    {
      source: '/blog/:slug*',
      destination: '/resources/:slug*',
      permanent: true,
    },

    // Legal
    {
      source: '/privacy-policy.html',
      destination: '/privacy',
      permanent: true,
    },
    {
      source: '/terms-of-service.html',
      destination: '/terms',
      permanent: true,
    },
  ];
}
```

## Content Migration

### 1. Services Content
- ✅ Already built with modern copy
- Review existing service descriptions and merge unique details
- Update pricing if needed

### 2. Team Bios
- Export current team member information
- Add photos to `/public/team/` directory
- Update team data in `/app/team/page.tsx`
- Consider creating individual team member profile pages if needed

### 3. Blog/Resources
- Export all blog posts from current CMS
- Convert to MDX or integrate with headless CMS (Contentful, Sanity, etc.)
- Create new posts in `/app/resources/[slug]/page.tsx`
- Maintain publish dates for SEO

### 4. Testimonials
- Extract current testimonials
- Add to home page data structure
- Consider adding dedicated testimonials page

### 5. FAQs
- ✅ Common questions already added
- Review current FAQ page for additional questions
- Organize by category

## Technical Migration Steps

### Phase 1: Preparation (Week 1)
1. Complete development and testing
2. Set up hosting (Vercel/Netlify recommended)
3. Configure custom domain
4. Set up SSL certificate
5. Configure environment variables
6. Test forms and interactive elements

### Phase 2: Pre-Launch (Week 2)
1. Deploy to staging environment
2. Run full QA testing
3. Test all redirects
4. Run Lighthouse audits (target 95+ scores)
5. Verify analytics tracking
6. Test email forms and integrations

### Phase 3: Launch (Week 3)
1. Update DNS records (if changing domains)
2. Deploy to production
3. Submit new sitemap to Google Search Console
4. Monitor error logs for 404s
5. Check analytics for proper tracking

### Phase 4: Post-Launch (Week 4)
1. Monitor traffic and user behavior
2. Fix any reported issues
3. Adjust redirects based on 404 errors
4. Request re-indexing for key pages
5. Gather client/user feedback

## SEO Considerations

### Update XML Sitemap
- Next.js will generate sitemap automatically
- Or create `/app/sitemap.ts`:

```typescript
export default function sitemap() {
  return [
    {
      url: 'https://www.palsontax.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.palsontax.com/services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Add all pages...
  ];
}
```

### Submit to Search Engines
- Google Search Console: Submit new sitemap
- Bing Webmaster Tools: Submit new sitemap
- Request re-crawl for key pages

### Monitor Rankings
Track these key terms:
- "tax preparation [city]"
- "small business accountant"
- "IRS resolution services"
- "tax planning [city]"
- "bookkeeping services"

## Analytics Setup

### Google Analytics 4
Add to `app/layout.tsx`:

```typescript
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

### Goals to Track
- Contact form submissions
- Phone clicks
- Email clicks
- Service page visits
- Resource downloads (if applicable)

## Form Integration

### Contact Form
Options for handling form submissions:
1. **Formspree** (easiest): No backend needed
2. **SendGrid/Mailgun**: Email API integration
3. **HubSpot/Salesforce**: CRM integration
4. **Custom API Route**: Next.js API route + email service

Example API route (`/app/api/contact/route.ts`):

```typescript
export async function POST(request: Request) {
  const data = await request.json();

  // Send email via service (SendGrid, etc.)
  // Or save to CRM

  return Response.json({ success: true });
}
```

## Performance Checklist

- [ ] All images optimized (WebP/AVIF)
- [ ] Fonts optimized (next/font)
- [ ] CSS minified
- [ ] JavaScript minified
- [ ] Lighthouse Performance > 95
- [ ] Lighthouse Accessibility > 95
- [ ] Lighthouse Best Practices > 95
- [ ] Lighthouse SEO > 95
- [ ] Core Web Vitals passing (LCP, FID, CLS)

## Rollback Plan

If critical issues arise:
1. Revert DNS to old site
2. Investigate and fix issues
3. Re-deploy when ready

Keep old site accessible at subdomain (e.g., old.palsontax.com) for 30 days.

## Post-Migration Monitoring (30 Days)

### Week 1
- Monitor daily: traffic, bounce rate, form submissions
- Fix any reported bugs immediately
- Address 404 errors with additional redirects

### Week 2-4
- Monitor weekly: organic search traffic, rankings
- Gather user feedback via surveys
- A/B test CTAs and messaging if needed

### Month 2-3
- Compare metrics to pre-migration baseline
- Optimize based on user behavior
- Consider adding features based on feedback

## Success Metrics

Track these KPIs:
- Organic search traffic (maintain or increase)
- Contact form submissions (increase target: +20%)
- Bounce rate (decrease target: -10%)
- Average session duration (increase)
- Page load speed (target: <2s)
- Mobile usability score (target: 100)

## Support Contacts

- **Development**: [your development team]
- **Hosting**: [Vercel/Netlify support]
- **DNS/Domain**: [registrar support]
- **SEO**: [SEO consultant if applicable]

---

Last Updated: January 2025
