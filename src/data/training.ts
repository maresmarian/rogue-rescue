// src/data/training.ts
import type { TrainingCourse, CourseLevel, CourseStats, CourseCategory } from '@/types';

export const TRAINING_LEVELS = [
    'Beginner',
    'Intermediate',
    'Advanced'
] as const;

export const TRAINING_CATEGORIES = [
    'Technical',
    'Medical',
    'Rescue',
    'Certification'
] as const;

export const TRAINING_STATS = {
    totalCourses: 15,
    totalTrainingDays: 180,
    totalStudents: 500,
    averageRating: 4.9,
    successRate: 98,
    coursesCompleted: 250
} as const;

export const TRAINING_COURSES: TrainingCourse[] = [
    {
        id: 'tr-001',
        title: 'NFPA Rope Rescue Operations',
        slug: 'nfpa-rope-rescue-operations',
        category: 'Technical',
        description: 'Comprehensive Oregon DPSST NFPA Rope Rescue Operations training designed to provide participants with the necessary knowledge and skills needed for technical rope rescue scenarios.',
        duration: '4 days',
        price: 950,
        level: 'Intermediate',
        dates: ['2025-01-13'], // January 12-16
        prerequisites: [
            'Physical fitness requirement',
            'Previous rope rescue experience recommended'
        ],
        includes: [
            'All necessary rope rescue equipment',
            'NFPA compliant course materials',
            'Certification upon completion',
            'Daily refreshments'
        ],
        image: '/images/training/rope-rescue-1.jpg',
        maxParticipants: 12,
        location: 'TBD',
        type: 'technical'
    }
];

// Helper function to get upcoming events
export function getUpcomingEvents() {
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    const allEvents = TRAINING_COURSES.flatMap(course =>
        course.dates.map(dateStr => {
            const date = new Date(dateStr);
            return {
                id: `${course.id}-${dateStr}`,
                courseId: course.id,
                title: course.title,
                date: date,
                type: course.type,
                category: course.category, // Add category to event
                spots: course.maxParticipants,
                duration: course.duration,
                price: course.price,
                location: course.location,
                slug: course.slug,
                level: course.level
            };
        })
    );

    return allEvents
        .filter(event => event.date >= now)
        .sort((a, b) => a.date.getTime() - b.date.getTime());
}