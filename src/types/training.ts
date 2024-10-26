export interface TrainingCourse {
    id: string;
    title: string;
    slug: string;
    description: string;
    duration: string;
    price: number;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    category: 'Technical' | 'Medical' | 'Rescue' | 'Certification';
    dates: string[];
    prerequisites?: string[];
    includes: string[];
    image: string;
    maxParticipants: number;
    location: string;
}