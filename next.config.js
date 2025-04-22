/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['localhost', 'vinking.site', 'www.vinking.site'],
  },
  output: 'standalone',
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://vinking.site' : '',
}

module.exports = nextConfig 