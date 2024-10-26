// src/collections/Media.ts
import { CollectionConfig } from 'payload';

export const Media: CollectionConfig = {
    slug: 'media',
    upload: {
        staticDir: 'media',
        mimeTypes: ['image/*'],
        imageSizes: [
            {
                name: 'thumbnail',
                width: 400,
                height: 300,
                position: 'centre',
            },
            {
                name: 'card',
                width: 768,
                height: 576,
                position: 'centre',
            },
            {
                name: 'hero',
                width: 1920,
                height: 1080,
                position: 'centre',
            },
        ],
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
        },
        {
            name: 'caption',
            type: 'text',
        },
    ],
};