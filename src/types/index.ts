export interface HeroSlide {
    image: string;
    title: string;
    subtitle: string;
}

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
    duration: string;
    price: string;
    location: string;
}

export interface TrainingCourse {
    id: string;
    title: string;
    slug: string;
    description: string;
    duration: string;
    price: number;
    level: string;
    category: string;
    dates: string[];
    prerequisites: string[];
    includes: string[];
    image: string;
    maxParticipants: number;
    location: string;
}