// src/data/training/courses/rope-rescue-advanced-technician.ts
import { TrainingCourse } from '@/types';

export const RopeRescueAdvancedTechnician: TrainingCourse = {
    id: 'rrat-001',
    title: 'Rope Rescue Advanced Technician',
    slug: 'rope-rescue-advanced-technician',
    category: 'Technical',
    description: `We are proud to present the Rope Rescue Advanced class, a comprehensive program designed to equip you with skills for rescuing individuals from challenging situations. Our instructors possess extensive global experience, and we are committed to sharing their valuable insights with you.

        This class is designed for individuals with a solid foundation in rope rescue, requiring at least a Rope Rescue Tech certification, as participants will engage in demanding tasks.

        The first day will focus exclusively on rope access rescues, honing your rope manipulation skills and mechanical advantage. The subsequent two days will be conducted in natural terrain, where you will tackle vertical access and high-angle rescue scenarios.

        We will emphasize time efficiency, simplicity, and teamwork in completing tasks, recognizing that effective communication and safety are paramount for successful rope rescue operations.

        In this class, you will:
        • Gain expert tips that align with rope rescue standards, significantly enhancing the speed and efficiency of your rescues
        • Master clear and concise communication strategies during rescue operations
        • Become proficient in executing rescue techniques with only the essential equipment needed

        Join us to elevate your skills and confidence in rope rescue!`,
    schedule: [
        {
            day: 1,
            focus: 'Rope Access and Advanced Skills',
            icon: 'Construction'
        },
        {
            day: 2,
            focus: 'Natural Terrain Operations',
            icon: 'Mountain'
        },
        {
            day: 3,
            focus: 'Complex Rescue Scenarios',
            icon: 'Target'
        }
    ],
    duration: '3 days',
    price: 950,
    level: 'Advanced',
    dates: [
        {
            date: '2025-05-04T12:00:00Z',
            spotsAvailable: 12
        },
        {
            date: '2025-11-18T12:00:00Z',
            spotsAvailable: 12
        }
    ],
    maxParticipants: 12,
    prerequisites: [
        'NFPA Rope Rescue Technician certification',
        'Significant rope rescue experience',
        'Advanced physical fitness requirement',
        'Demonstrated proficiency in basic and technical rescue skills'
    ],
    includes: [
        'Specialized advanced rescue equipment',
        'Real-world scenario training',
        'Advanced certification upon completion',
        'Daily refreshments',
        'Professional documentation',
        'Ongoing instructor support'
    ],
    image: '/images/services/industrial-rescue.jpg',
    location: 'Central Point / Emigrant Lake / Pilot Rock',
    type: 'technical',
    spotsAvailable: 12
};