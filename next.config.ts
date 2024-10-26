// next.config.ts
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
    reactStrictMode: true,
    experimental: {
        typedRoutes: true
    }
};

export default nextConfig;