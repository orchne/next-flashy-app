/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.pravatar.cc"],
    formats: ["image/avif", "image/webp"],
  },
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
    // localeDetection: false,
  },
};

module.exports = nextConfig;
