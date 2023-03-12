/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', process.env.NEXT_PUBLIC_CMS_URL],
  },
  i18n: {
    locales: ['en', 'th'],
    defaultLocale: 'en',
  },
}

module.exports = nextConfig
