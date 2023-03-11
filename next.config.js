/** @type {import('next').NextConfig} */
const nextConfig = {
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
};

module.exports = nextConfig;
