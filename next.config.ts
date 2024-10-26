/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'out',  // Specify the output directory explicitly
    images: {
        unoptimized: true
    },
    typescript: {
        ignoreBuildErrors: true
    },
    eslint: {
        ignoreDuringBuilds: true
    }
};

module.exports = nextConfig;