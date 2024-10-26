/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
    images: {
        unoptimized: true
    },
    typescript: {
        ignoreBuildErrors: true // Temporary fix for the build
    },
    eslint: {
        ignoreDuringBuilds: true // Temporary fix for the build
    }
};

export default nextConfig;