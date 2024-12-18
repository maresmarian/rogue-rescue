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
    // This ensures proper export directory
    distDir: 'out',
    experimental: {
        optimizePackageImports: ['lucide-react']
    }
};

export default nextConfig;