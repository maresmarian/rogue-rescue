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
    // For static site generation
    trailingSlash: true,
    // Force static optimization
    experimental: {
        appDocumentPreloading: false,
        workerThreads: false,
        optimizeCss: false,
        optimizePackageImports: ['lucide-react']
    }
};

export default nextConfig;