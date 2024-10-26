import { CollectionConfig } from 'payload';

export const TeamMembers: CollectionConfig = {
    slug: "team-members",
    admin: {
        useAsTitle: "name",
    },
    fields: [
        {
            name: "name",
            type: "text",
            required: true,
        },
        {
            name: "role",
            type: "text",
            required: true,
        },
        {
            name: "photo",
            type: "upload",
            relationTo: "media",
            required: true,
        },
        {
            name: "bio",
            type: "textarea",
        },
        {
            name: "certifications",
            type: "array",
            fields: [
                {
                    name: "certification",
                    type: "text",
                },
            ],
        },
        {
            name: "specialties",
            type: "array",
            fields: [
                {
                    name: "specialty",
                    type: "text",
                },
            ],
        },
        {
            name: "order",
            type: "number",
            admin: {
                description: "Used to control the display order of team members",
            },
        },
    ],
};