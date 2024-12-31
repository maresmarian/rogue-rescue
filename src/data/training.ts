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
        dates: ['2025-02-03'], // February 3-6
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
        location: 'Central Point, OR',
        type: 'technical'
    },
    {
        id: 'tr-002',
        title: 'NFPA Rope Rescue Technician',
        slug: 'nfpa-rope-rescue-technician',
        category: 'Technical',
        description: `NFPA Rope Rescue Technician expands on concepts learned in operations as well as the introduction of new concepts. Unlike the operations class, this class operates in a completely vertical environment. The introduction of various vertical litter tending techniques as well as the introduction of guidelines and high lines will challenge students in a rigorous learning environment.

        This advanced course provides students with intensive, hands-on experience in complex rope rescue scenarios. Participants will learn and practice:

        • Advanced knot craft and rope system analysis
        • Complex mechanical advantage systems and their applications
        • Comprehensive vertical rescue techniques including multiple point anchors
        • High-line operations and advanced rigging scenarios
        • Guidelines for both vertical and horizontal applications
        • Advanced litter attending techniques in fully vertical environments
        • Patient packaging and environmental considerations
        • Critical decision making in technical rescue operations
        • Risk assessment and scene safety management
        • Team leadership and rescue scene organization

        The course emphasizes practical applications with numerous hands-on scenarios, allowing students to build confidence and competency in their technical rescue capabilities. Our experienced instructors provide detailed feedback and ensure each participant masters the required skills.

        This technician-level certification represents an advanced qualification in rope rescue operations, preparing rescuers for complex vertical rescue scenarios in both urban and wilderness environments. Successful completion demonstrates a high level of proficiency in technical rope rescue operations and leadership capabilities.

        Class size is intentionally limited to ensure optimal instructor-student interaction and maximum hands-on time with equipment and scenarios.`,
        duration: '4 days',
        price: 1100,
        level: 'Advanced',
        dates: ['2025-03-05'],
        prerequisites: [
            'NFPA Rope Rescue Operations certification',
            'Physical fitness requirement',
            'Documented rope rescue experience'
        ],
        includes: [
            'Advanced rope rescue equipment',
            'NFPA compliant course materials',
            'Technician-level certification upon completion',
            'Daily refreshments',
            'Professional certification documentation',
            'Access to instructor expertise and networking opportunities'
        ],
        image: '/images/services/high-angle-rescue.jpg',
        maxParticipants: 8,
        location: 'Central Point, OR',
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
                category: course.category,
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