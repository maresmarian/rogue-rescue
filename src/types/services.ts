// src/types/services.ts

import { BaseContent } from './common';

export interface Service extends BaseContent {
    icon: string;
    features: string[];
    shortDescription: string;
    fullDescription: string;
}
export interface Service {
    title: string;
    description: string;
    icon: string;
    image: string;
    slug: string;
    features: string[];
    shortDescription: string;
    fullDescription: string;
}