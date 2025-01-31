// src/lib/constants.ts
export * from '@/data/hero';
export * from '@/data/services';
export * from '@/data/training';
export * from '@/data/company';
export * from '@/data/contact';
export * from '@/data/navigation';
export * from '@/data/partners';

// If you need to combine data for specific use cases, you can create config objects here:
export const SITE_CONFIG = {
    meta: {
        title: 'Rogue Rescue',
        description: 'Professional rescue services and training solutions'
    },
    api: {
        baseUrl: process.env.NEXT_PUBLIC_API_URL || '',
        timeout: 5000
    },
    pagination: {
        defaultLimit: 10,
        maxLimit: 50
    }
};

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';
