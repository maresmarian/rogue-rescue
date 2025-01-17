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

// src/data/training.ts
export const TRAINING_COURSES: TrainingCourse[] = [
    {
        id: 'tr-001',
        title: 'NFPA Rope Rescue Operations',
        slug: 'nfpa-rope-rescue-operations',
        category: 'Technical',
        description: `This comprehensive operations-level course provides emergency responders with essential knowledge and practical skills in rope rescue operations.

        Key Learning Objectives:
        • Master fundamental rope rescue concepts and terminology
        • Develop proficiency in basic and intermediate knot tying
        • Learn mechanical advantage systems and their applications
        • Practice patient packaging and litter operations
        • Understanding scene safety and risk assessment

        Course Methodology:
        Our experienced instructors emphasize hands-on learning through practical scenarios. Each participant receives individual attention to ensure skill mastery in a supportive learning environment.

        Equipment and Systems:
        • Industry-standard rope rescue equipment
        • Multiple anchor point systems
        • Mechanical advantage systems
        • Patient packaging equipment
        • Personal protective equipment

        Certification Benefits:
        This operations-level certification serves as the foundation for technical rescue capabilities, preparing rescuers for both low and steep-angle rescue scenarios. Upon completion, participants will have the confidence and competence to perform essential rope rescue operations.`,
        schedule: [
            {
                day: 1,
                focus: 'Basic Concepts and Safety Fundamentals',
                icon: 'BookOpen'
            },
            {
                day: 2,
                focus: 'Knots, Anchors, and Mechanical Advantage',
                icon: 'Link'
            },
            {
                day: 3,
                focus: 'Litter Operations and Patient Care',
                icon: 'HeartPulse'
            },
            {
                day: 4,
                focus: 'Practical Scenarios and Certification',
                icon: 'GraduationCap'
            }
        ],
        duration: '4 days',
        price: 950,
        level: 'Intermediate',
        dates: ['2025-02-03T12:00:00Z'],
        prerequisites: [
            'Physical fitness requirement',
            'Previous rope rescue experience recommended',
            'Basic ICS understanding',
            'Ability to work at height'
        ],
        includes: [
            'All necessary rope rescue equipment',
            'NFPA compliant course materials',
            'Operations-level certification upon completion',
            'Daily refreshments',
            'Professional documentation',
            'Access to instructor expertise'
        ],
        image: '/images/services/high-angle-rescue.jpg',
        maxParticipants: 12,
        location: 'Central Point, OR',
        type: 'technical',
    },
    {
        id: 'tr-002',
        title: 'NFPA Rope Rescue Technician',
        slug: 'nfpa-rope-rescue-technician',
        category: 'Technical',
        description: `Take your rescue capabilities to the next level with our advanced technician-level training program.

        Advanced Skills Development:
        • Complex mechanical advantage systems
        • Advanced anchor point configurations
        • High-line operations setup and management
        • Technical rope system analysis
        • Advanced patient packaging techniques

        Vertical Environment Operations:
        Our course operates in a completely vertical environment, challenging students to master advanced techniques in real-world conditions.

        Technical Competencies:
        • Vertical litter attendance techniques
        • Guideline operations for various scenarios
        • High-line rescue methods
        • Advanced belay systems
        • Complex rope system management

        Leadership and Decision Making:
        • Risk assessment strategies
        • Team leadership development
        • Critical decision-making scenarios
        • Advanced safety management
        • Rescue scene organization

        Professional Development:
        This technician-level certification represents the highest standard in rope rescue operations. Successful completion demonstrates advanced proficiency and leadership capabilities in technical rescue operations.`,
        schedule: [
            {
                day: 1,
                focus: 'Advanced Systems and Complex Anchors',
                icon: 'Construction'
            },
            {
                day: 2,
                focus: 'Vertical Environment Operations',
                icon: 'MountainSnow'
            },
            {
                day: 3,
                focus: 'High Lines and Advanced Rigging',
                icon: 'Link2'
            },
            {
                day: 4,
                focus: 'Advanced Scenarios and Leadership',
                icon: 'Trophy'
            }
        ],
        duration: '4 days',
        price: 1100,
        level: 'Advanced',
        dates: ['2025-03-05T12:00:00Z'],
        prerequisites: [
            'NFPA Rope Rescue Operations certification',
            'Physical fitness requirement',
            'Documented rope rescue experience',
            'Comfort working in vertical environments',
            'Previous rescue team experience'
        ],
        includes: [
            'Advanced rope rescue equipment',
            'NFPA compliant course materials',
            'Technician-level certification upon completion',
            'Daily refreshments',
            'Professional certification documentation',
            'Access to instructor expertise and networking opportunities',
            'Post-course support and resources'
        ],
        image: '/images/services/high-angle-rescue-2.jpg',
        maxParticipants: 8,
        location: 'Central Point, OR',
        type: 'technical',
    }
];

// Helper function to get upcoming events
export function getUpcomingEvents() {
    const now = new Date();
    now.setUTCHours(0, 0, 0, 0);

    const allEvents = TRAINING_COURSES.flatMap(course =>
        course.dates.map(dateStr => ({
            id: `${course.id}-${dateStr}`,
            courseId: course.id,
            title: course.title,
            date: new Date(dateStr), // Toto už bude UTC datum z data stringu
            type: course.type,
            category: course.category,
            spots: course.maxParticipants,
            duration: course.duration,
            price: course.price,
            location: course.location,
            slug: course.slug,
            level: course.level
        }))
    );

    return allEvents
        .filter(event => event.date >= now)
        .sort((a, b) => a.date.getTime() - b.date.getTime());
}