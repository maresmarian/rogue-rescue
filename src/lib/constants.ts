import { HeroSlide, Service, TrainingEvent, TrainingCourse } from '@/types';

export const HERO_SLIDES: HeroSlide[] = [
    {
        image: '/images/hero/hero-1.jpg',
        title: 'Providing Vertical Excellence',
        subtitle: 'Expert rescue services and professional training'
    },
    {
        image: '/images/hero/hero-2.jpg',
        title: 'Professional Training',
        subtitle: 'Comprehensive programs for rescue professionals'
    },
    {
        image: '/images/hero/hero-3.jpg',
        title: 'Emergency Response',
        subtitle: '24/7 emergency rescue services'
    }
];

export const SERVICES: Service[] = [
    {
        title: "Wildfire EMS",
        description: "Emergency medical services specialized for wildfire environments.",
        icon: "Activity",
        image: "/images/services/wildfire-ems.jpg",
        slug: "wildfire-ems"
    },
    {
        title: "Technical Rescue",
        description: "Specialized rescue operations in challenging environments.",
        icon: "Map",
        image: "/images/services/technical-rescue.jpg",
        slug: "technical-rescue"
    },
    {
        title: "High Angle Rescue",
        description: "Vertical rescue operations and safety systems.",
        icon: "Clock",
        image: "/images/services/high-angle-rescue.jpg",
        slug: "high-angle"
    }
];

export const TRAINING_EVENTS: TrainingEvent[] = [
    {
        title: "Technical Rope Rescue - Level 1",
        date: "March 15-20, 2024",
        type: "certification",
        spots: 12,
        duration: "5 days",
        price: "$1,299",
        location: "Cascade Mountains, WA"
    },
    {
        title: "Wilderness First Responder",
        date: "April 5-10, 2024",
        type: "medical",
        spots: 8,
        duration: "6 days",
        price: "$995",
        location: "Mt. Hood, OR"
    },
    {
        title: "High Angle Rescue Specialist",
        date: "April 25-30, 2024",
        type: "technical",
        spots: 10,
        duration: "5 days",
        price: "$1,499",
        location: "Smith Rock, OR"
    }
];

export const TRAINING_COURSES: TrainingCourse[] = [
    {
        id: 'tr-001',
        title: 'Technical Rope Rescue - Level 1',
        slug: 'technical-rope-rescue-1',
        description: 'Comprehensive introduction to technical rope rescue operations including high-angle rescue techniques, equipment usage, and safety protocols.',
        duration: '5 days',
        price: 1299,
        level: 'Beginner',
        category: 'Technical',
        dates: ['2024-04-15', '2024-05-20', '2024-06-17'],
        prerequisites: ['Basic first aid certification', 'Physical fitness requirement'],
        includes: [
            'All necessary equipment',
            'Course materials',
            'Certification upon completion',
            'Lunch and refreshments'
        ],
        image: '/images/training/rope-rescue-1.jpg',
        maxParticipants: 12,
        location: 'Main Training Facility'
    },
    // Let's add another course for completeness
    {
        id: 'tr-002',
        title: 'Wilderness First Responder',
        slug: 'wilderness-first-responder',
        description: 'Essential medical training for outdoor professionals and rescue personnel operating in remote environments.',
        duration: '6 days',
        price: 995,
        level: 'Intermediate',
        category: 'Medical',
        dates: ['2024-05-01', '2024-06-15', '2024-07-10'],
        prerequisites: ['Basic first aid certification'],
        includes: [
            'Medical supplies and training equipment',
            'Course manual and materials',
            'WFR certification upon completion',
            'Daily meals and refreshments'
        ],
        image: '/images/training/wilderness-first-responder.jpg',
        maxParticipants: 8,
        location: 'Mountain Training Center'
    }
];