import type { LucideProps } from 'lucide-react';
export interface Service {
    title: string;
    description: string;
    icon: string;
    image: string;
    slug: string;
}

export interface TrainingEvent {
    title: string;
    date: string;
    type: 'certification' | 'medical' | 'technical';
    spots: number;
}
