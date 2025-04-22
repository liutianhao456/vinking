/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['localhost', 'vinking.site', 'www.vinking.site', '76.76.21.241', '66.33.60.130'],
  },
  output: 'standalone',
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://vinking.site' : '',
}

module.exports = nextConfig 