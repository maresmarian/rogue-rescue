// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true
    },
    eslint: {
        ignoreDuringBuilds: true
    },
    experimental: {
        optimizePackageImports: ['lucide-react']
    },
    images: {
        dangerouslyAllowSVGs: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
};

export default nextConfig;