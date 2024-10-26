/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // Handle static image optimizations
    images: {
        unoptimized: true,
        domains: ['localhost']
    },
    // Disable type checking during build
    typescript: {
        ignoreBuildErrors: true
    },
    // Disable ESLint during build
    eslint: {
        ignoreDuringBuilds: true
    },
    // Enable experimental features needed for font optimization
    experimental: {
        optimizeFonts: true
    }
};

module.exports = nextConfig;