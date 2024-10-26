/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // Temporarily fully ignore TypeScript errors
    typescript: {
        ignoreBuildErrors: true
    },
    eslint: {
        ignoreDuringBuilds: true
    }
};

export default nextConfig;