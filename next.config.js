/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'www.vinking.site'],
    unoptimized: true,
  },
  output: 'standalone',
}

module.exports = nextConfig 