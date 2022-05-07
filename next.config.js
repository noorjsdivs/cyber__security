/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  skipTypescriptChecking: true,
  typescript: {
    transpileOnly: true, // same as ts-node --transpile-only
  },
};

module.exports = nextConfig;
