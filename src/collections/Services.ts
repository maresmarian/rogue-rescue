import { CollectionConfig } from 'payload';

export const Services: CollectionConfig = {
    slug: "services",
    admin: {
        useAsTitle: "title",
    },
    fields: [
        {
            name: "title",
            type: "text",
            required: true,
        },
        {
            name: "description",
            type: "textarea",
            required: true,
        },
        {
            name: "icon",
            type: "text",
            required: true,
            admin: {
                description: "Lucide icon name (e.g., 'Fire', 'Helicopter', 'Mountain')",
            },
        },
        {
            name: "image",
            type: "upload",
            relationTo: "media",
            required: true,
        },
        {
            name: "features",
            type: "array",
            fields: [
                {
                    name: "title",
                    type: "text",
                    required: true,
                },
                {
                    name: "description",
                    type: "textarea",
                },
            ],
        },
        {
            name: "slug",
            type: "text",
            required: true,
            unique: true,
            admin: {
                description: "URL-friendly version of the service name (e.g., 'wildfire-ems')",
            },
        },
    ],
};