/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    // Outras configurações do PWA, se necessário
    // Exemplo:
    disable: process.env.NODE_ENV === 'development',
    // register: true,
    // sw: 'service-worker.js',
  },
});
