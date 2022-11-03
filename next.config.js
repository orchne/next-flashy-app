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

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig);
