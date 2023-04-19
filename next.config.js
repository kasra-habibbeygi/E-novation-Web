/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true
});

module.exports = withPWA({
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'enovationengineering.com.au/panel',
                pathname: '/media/**'
            }
        ]
    },
    env: {
        URL: process.env.URL
    }
});
