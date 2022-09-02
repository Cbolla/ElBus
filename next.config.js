/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const withPWA = require("next-pwa");

module.exports = {
  nextConfig,
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    sw:"/sw.js"
  },
  reactStrictMode: true,
}
