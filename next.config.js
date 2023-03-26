const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  assetPrefix: isProd ? '' : process.env.HOST,
  images: {
    domains: ["s3.us-west-2.amazonaws.com", "lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
