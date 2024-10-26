/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true
    },
    typescript: {
        ignoreBuildErrors: true
    },
    eslint: {
        ignoreDuringBuilds: true
    },
    // Remove basePath since we're using a custom domain
    assetPrefix: '/',
    // Ensure trailing slashes for consistency
    trailingSlash: true
};

module.exports = nextConfig;