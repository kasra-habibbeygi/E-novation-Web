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
                protocol: 'http',
                hostname: '154.26.136.182',
                pathname: '/media/**'
            }
        ]
    },
    env: {
        URL: process.env.URL
    }
});
