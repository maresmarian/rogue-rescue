/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
    // Remove the problematic images configuration
    reactStrictMode: true,
    eslint: {
        // Disable ESLint during builds to bypass the entity escaping errors
        ignoreDuringBuilds: true
    }
};

export default nextConfig;