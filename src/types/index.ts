// src/types/index.ts
export interface Service {
    title: string;
    description: string;
    icon: string;
    image: string;
}

export interface TrainingEvent {
    title: string;
    date: string;
    type: 'certification' | 'medical' | 'technical';
    spots: number;
}