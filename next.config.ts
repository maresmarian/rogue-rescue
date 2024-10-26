// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    transpilePackages: ['payload', 'express'],
    webpack: (config) => {
        config.externals = [...(config.externals || []), 'express'];
        return config;
    },
};

export default nextConfig;