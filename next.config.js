/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['store.storeimages.cdn-apple.com', 'images.ctfassets.net'],
  },
}

module.exports = nextConfig
