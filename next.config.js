/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: "1337",
                pathname: '/uploads/**',
            },
            {
                protocol: 'https',
                hostname: 'portfolio-cms.hendranata.com',
                pathname: '/uploads/**',
            }
        ]
    }
}

module.exports = nextConfig
