/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Palson',
  images: {
    unoptimized: true, // Required for static export
  },
  // Redirects don't work with static export - handle via _redirects file or client-side
};

module.exports = nextConfig;
