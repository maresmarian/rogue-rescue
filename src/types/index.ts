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

export interface HeroSlide {
    image: string;
    title: string;
    subtitle: string;
}

export interface TrainingCourse {
    id: string;
    title: string;
    slug: string;
    description: string;
    duration: string;
    price: number;
    level: CourseLevel;
    category: CourseCategory;
    dates: string[];
    prerequisites: string[];
    includes: string[];
    image: string;
    maxParticipants: number;
    location: string;
    type: CourseType;  // Added this field
}

export interface TrainingEvent {
    id: string;
    courseId: string;
    title: string;
    date: Date;
    type: CourseType;
    spots: number;
    duration: string;
    price: number;
    location: string;
    slug: string;
    level: CourseLevel;
}

export interface RequestTrainingModalProps {
    isOpen: boolean;
    onClose: () => void;
}


export type CourseType = 'certification' | 'medical' | 'technical';
export type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced';
export type CourseCategory = 'Technical' | 'Medical' | 'Rescue' | 'Certification';

export interface TrainingCourse {
    id: string;
    title: string;
    slug: string;
    description: string;
    duration: string;
    price: number;
    level: CourseLevel;
    category: CourseCategory;
    dates: string[];
    prerequisites: string[];
    includes: string[];
    image: string;
    maxParticipants: number;
    location: string;
    type: CourseType;
}

export interface TrainingEvent {
    id: string;
    courseId: string;
    title: string;
    date: Date;
    type: CourseType;
    category: CourseCategory; // Added category
    spots: number;
    duration: string;
    price: number;
    location: string;
    slug: string;
    level: CourseLevel;
}

export interface CourseStats {
    totalCourses: number;
    totalTrainingDays: number;
    totalUpcomingDates: number;
    totalTrainedProfessionals: number;
}