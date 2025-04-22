/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vinking.site',
      },
      {
        protocol: 'https',
        hostname: 'www.vinking.site',
      }
    ],
  },
  output: 'standalone',
}

module.exports = nextConfig 