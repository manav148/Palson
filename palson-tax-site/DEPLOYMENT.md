# GitHub Pages Deployment Guide

This site is configured to deploy automatically to GitHub Pages.

## Quick Start

### 1. Enable GitHub Pages

1. Go to your GitHub repository: https://github.com/manav148/Palson
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
4. Save

### 2. Merge to Main Branch

Once you merge your code to the `main` or `master` branch, GitHub Actions will automatically:
- Build the Next.js site
- Export it as static files
- Deploy to GitHub Pages

### 3. Access Your Site

After deployment completes (2-3 minutes), your site will be live at:

**https://manav148.github.io/Palson/**

## Manual Deployment

To trigger a manual deployment:

1. Go to **Actions** tab in your repository
2. Select the "Deploy to GitHub Pages" workflow
3. Click "Run workflow" → "Run workflow"

## Local Testing

Test the production build locally before deploying:

```bash
cd palson-tax-site

# Build the static export
npm run build

# Preview the static files (requires a static server)
npx serve@latest out
```

Open http://localhost:3000/Palson to preview.

## Configuration Details

### Base Path

The site is configured with `basePath: '/Palson'` in `next.config.js` because GitHub Pages serves repository sites at `username.github.io/repository-name`.

All internal links automatically include this base path. External links work normally.

### Static Export

Next.js is configured with `output: 'export'` which generates a fully static site in the `/out` directory.

**Limitations:**
- No API routes (all data must be static or fetched client-side)
- No server-side rendering (SSR)
- No incremental static regeneration (ISR)
- No image optimization (images are served as-is)

These limitations don't affect this site since all pages are fully static.

## Custom Domain (Optional)

To use a custom domain like `www.palsontax.com`:

1. Add a `CNAME` file to `/public/`:
   ```
   www.palsontax.com
   ```

2. Configure DNS with your domain registrar:
   - Add a CNAME record pointing to `manav148.github.io`

3. In GitHub Settings → Pages:
   - Enter your custom domain: `www.palsontax.com`
   - Check "Enforce HTTPS"

4. Update `basePath` in `next.config.js`:
   ```javascript
   const nextConfig = {
     output: 'export',
     basePath: '', // Remove basePath for custom domain
     // ...
   };
   ```

## Troubleshooting

### Build Fails

Check the Actions tab for error logs. Common issues:
- TypeScript errors: Run `npm run build` locally first
- Missing dependencies: Ensure `package-lock.json` is committed

### 404 Errors

If you get 404s on page refresh:
- GitHub Pages doesn't support client-side routing natively
- All routes are pre-rendered as static HTML, so this shouldn't be an issue

### Links Not Working

If internal links don't work:
- Ensure you're using Next.js `<Link>` components (not `<a>` tags)
- Check that `basePath` is correctly set in `next.config.js`

### Images Not Loading

- Images must be in the `/public` directory
- Reference them with `/Palson/image.jpg` (including basePath)
- Or use Next.js `<Image>` component which handles basePath automatically

## Environment Variables

For production environment variables:

1. Create repository secrets:
   - Settings → Secrets and variables → Actions
   - Add secrets (e.g., `NEXT_PUBLIC_ANALYTICS_ID`)

2. Update `.github/workflows/deploy.yml`:
   ```yaml
   - name: Build with Next.js
     run: npm run build
     working-directory: ./palson-tax-site
     env:
       NEXT_PUBLIC_ANALYTICS_ID: ${{ secrets.NEXT_PUBLIC_ANALYTICS_ID }}
   ```

Note: Only `NEXT_PUBLIC_*` variables are included in the static export.

## Deployment Status

View deployment status:
- **Actions** tab: See build/deploy progress
- **Deployments** section: View active deployments and history

## Rollback

To rollback to a previous version:

1. Go to **Actions** tab
2. Find the previous successful deployment
3. Click "Re-run all jobs"

## Production Checklist

Before going live:

- [ ] Update contact information in footer
- [ ] Add real team photos to `/public/team/`
- [ ] Configure analytics (add to layout.tsx)
- [ ] Test all forms and links
- [ ] Verify mobile responsiveness
- [ ] Run Lighthouse audit (target 95+ scores)
- [ ] Set up custom domain (optional)
- [ ] Update social media links
- [ ] Add real content to blog/resources
- [ ] Configure email forwarding for info@palsontax.com

## Monitoring

After deployment:

- Check GitHub Actions for build status
- Monitor Google Search Console (if configured)
- Review analytics for traffic and behavior
- Test forms to ensure they work

## Support

- GitHub Pages Docs: https://docs.github.com/en/pages
- Next.js Static Export: https://nextjs.org/docs/app/building-your-application/deploying/static-exports
- Issues: https://github.com/manav148/Palson/issues

---

**Deployment Type**: GitHub Pages (Static)
**Build Time**: ~2-3 minutes
**URL**: https://manav148.github.io/Palson/
**Auto-Deploy**: Enabled on push to main/master
