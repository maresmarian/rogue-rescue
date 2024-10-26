import React from 'react';
import { CollectionConfig } from 'payload';
import { RichTextAdapter, PayloadComponent } from 'payload';

const basicEditor: RichTextAdapter<any, any, object> = {
    generateComponentMap: (() => new Map<string, React.ReactNode>()) as unknown as PayloadComponent<any, never>,
    validate: () => true as const,
    CellComponent: (() => React.createElement('div')) as unknown as PayloadComponent<never>,
    FieldComponent: (() => React.createElement('div')) as unknown as PayloadComponent<never, any>,
};

export const TrainingCourses: CollectionConfig = {
    slug: "training-courses",
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
            name: "date",
            type: "date",
            required: true,
        },
        {
            name: "type",
            type: "select",
            options: [
                { label: "Certification", value: "certification" },
                { label: "Medical", value: "medical" },
                { label: "Technical", value: "technical" },
            ],
            required: true,
        },
        {
            name: "spots",
            type: "number",
            required: true,
            min: 0,
        },
        {
            name: "description",
            type: "richText",
            editor: basicEditor,
        },
        {
            name: "curriculum",
            type: "array",
            fields: [
                {
                    name: "title",
                    type: "text",
                    required: true,
                },
                {
                    name: "content",
                    type: "richText",
                    editor: basicEditor,
                },
            ],
        },
        {
            name: "prerequisites",
            type: "array",
            fields: [
                {
                    name: "requirement",
                    type: "text",
                },
            ],
        },
        {
            name: "price",
            type: "number",
            required: true,
        },
        {
            name: "duration",
            type: "text",
            required: true,
        },
        {
            name: "slug",
            type: "text",
            required: true,
            unique: true,
        },
    ],
};
