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
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    generateEtags: false,
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'no-store, max-age=0, must-revalidate',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;