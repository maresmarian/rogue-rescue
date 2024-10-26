/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
    reactStrictMode: true,
    // Temporarily disable type checking during build
    typescript: {
        ignoreBuildErrors: true
    },
    // Remove images key entirely
    // Remove experimental key entirely
};

export default nextConfig;