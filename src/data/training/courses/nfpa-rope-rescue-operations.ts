// src/data/training/courses/nfpa-rope-rescue-operations.ts
import { TrainingCourse } from '@/types';

export const NFPARopeRescueOperations: TrainingCourse = {
    id: 'nfpa-rro-001',
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
    dates: [
        {
            date: '2025-02-03T12:00:00Z',
            spotsAvailable: 15
        },
        {
            date: '2025-10-19T12:00:00Z',
            spotsAvailable: 15
        }
    ],
    maxParticipants: 15,
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
    location: 'Central Point, OR',
    type: 'technical',
    spotsAvailable: 15
};