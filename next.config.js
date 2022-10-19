/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io", "youtube.com"],
  },
  reactStrictMode: true,
  skipTypescriptChecking: true,
  typescript: {
    transpileOnly: true, // same as ts-node --transpile-only
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
