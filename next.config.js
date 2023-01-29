/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['store.storeimages.cdn-apple.com', 'images.ctfassets.net', 'firebasestorage.googleapis.com'],
  },
}

module.exports = nextConfig
