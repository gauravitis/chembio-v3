/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lab.honeywell.com',
        pathname: '/shop/media/catalog/product/**',
      },
    ],
  },
}

module.exports = nextConfig
