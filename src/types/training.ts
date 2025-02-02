// src/types/training.ts
import { BaseContent } from './common';

export type CourseType = 'certification' | 'medical' | 'technical';
export type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced';
export type CourseCategory = 'Technical' | 'Medical' | 'Rescue' | 'Certification';

export interface ScheduleDay {
    day: number;
    focus: string;
    icon: string;
}

export interface TrainingCourse extends BaseContent {
    id: string;
    duration: string;
    price: number;
    level: CourseLevel;
    category: CourseCategory;
    dates: CourseDate[];
    maxParticipants: number;
    prerequisites: string[];
    includes: string[];
    spotsAvailable: number;
    location: string;
    type: CourseType;
    schedule: ScheduleDay[];
}

export interface TrainingEvent {
    id: string;
    courseId: string;
    title: string;
    date: Date;
    type: CourseType;
    category: CourseCategory;
    spots: number;
    spotsAvailable: number; // Added this field
    duration: string;
    price: number;
    location: string;
    slug: string;
    level: CourseLevel;
}

export interface CourseTemplateProps {
    course: TrainingCourse;
    selectedDate?: string;
    onRegister: (date: string) => void;
}

export interface Registration {
    _id: string;
    referenceNumber: string;
    courseId: string; // Make sure this matches the course IDs
    courseName: string;
    courseTitle: string;
    selectedDate: string;
    status: 'pending' | 'approved' | 'rejected';
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company?: string;
    emergencyContact: {
        name: string;
        phone: string;
        relationship: string;
    };
    createdAt: Date;
}

export interface CourseDate {
    date: string;
    spotsAvailable: number;
}