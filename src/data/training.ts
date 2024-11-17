
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

// Get dates for the next few months
const getNextMonthDate = (monthsAhead: number) => {
    const date = new Date();
    date.setMonth(date.getMonth() + monthsAhead);
    return date.toISOString().split('T')[0];
};

export const TRAINING_COURSES: TrainingCourse[] = [
    {
        id: 'tr-001',
        title: 'Technical Rope Rescue - Level 1',
        slug: 'technical-rope-rescue-1',
        category: 'Technical',
        description: 'Comprehensive introduction to technical rope rescue operations...',
        duration: '5 days',
        price: 1299,
        level: 'Beginner',
        dates: [
            getNextMonthDate(1),
            getNextMonthDate(2),
            getNextMonthDate(3)
        ],
        prerequisites: ['Basic first aid certification', 'Physical fitness requirement'],
        includes: [
            'All necessary equipment',
            'Course materials',
            'Certification upon completion',
            'Lunch and refreshments'
        ],
        image: '/images/training/rope-rescue-1.jpg',
        maxParticipants: 12,
        location: 'Main Training Facility',
        type: 'technical'
    },
    {
        id: 'tr-002',
        title: 'Wilderness First Responder',
        slug: 'wilderness-first-responder',
        category: 'Medical',
        description: 'Essential medical training for outdoor professionals...',
        duration: '6 days',
        price: 995,
        level: 'Intermediate',
        dates: [
            getNextMonthDate(1.5),  // 1.5 months from now
            getNextMonthDate(2.5),  // 2.5 months from now
            getNextMonthDate(3.5)   // 3.5 months from now
        ],
        prerequisites: ['Basic first aid certification'],
        includes: [
            'Medical supplies and training equipment',
            'Course manual and materials',
            'WFR certification upon completion',
            'Daily meals and refreshments'
        ],
        image: '/images/training/medical-training.jpg',
        maxParticipants: 8,
        location: 'Mountain Training Center',
        type: 'medical'
    },
    {
        id: 'tr-003',
        title: 'High Angle Rescue Specialist',
        slug: 'high-angle-rescue',
        category: 'Rescue',
        description: 'Advanced training in vertical rescue operations...',
        duration: '5 days',
        price: 1499,
        level: 'Advanced',
        dates: [
            getNextMonthDate(0.5),  // 2 weeks from now
            getNextMonthDate(1.5),  // 1.5 months from now
            getNextMonthDate(2.5)   // 2.5 months from now
        ],
        prerequisites: [
            'Technical Rope Rescue Level 1',
            'Current first aid certification',
            'Physical fitness requirements'
        ],
        includes: [
            'Advanced rescue equipment',
            'Technical manuals',
            'Certification exam',
            'Meals and accommodation'
        ],
        image: '/images/training/technical-training.jpg',
        maxParticipants: 10,
        location: 'Smith Rock, OR',
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

// Helper to get total number of courses and other stats
export function getCourseStats(): CourseStats {
    return {
        totalCourses: TRAINING_COURSES.length,
        totalTrainingDays: TRAINING_COURSES.reduce((acc, course) =>
            acc + parseInt(course.duration.split(' ')[0]), 0),
        totalUpcomingDates: getUpcomingEvents().length,
        totalTrainedProfessionals: 500 // This could be dynamic if you have actual data
    };
}