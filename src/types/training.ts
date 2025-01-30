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
    dates: string[];
    prerequisites: string[];
    includes: string[];
    maxParticipants: number;
    spotsAvailable: number; // Added this field
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

export interface CourseStats {
    totalCourses: number;
    totalTrainingDays: number;
    totalUpcomingDates: number;
    totalTrainedProfessionals: number;
}

export interface CourseTemplateProps {
    course: TrainingCourse;
    selectedDate?: string;
    onRegister: (date: string) => void;
}