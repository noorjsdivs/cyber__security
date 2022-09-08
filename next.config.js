/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  reactStrictMode: true,
  skipTypescriptChecking: true,
  typescript: {
    transpileOnly: true, // same as ts-node --transpile-only
  },
};

module.exports = nextConfig;
