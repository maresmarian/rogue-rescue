import { HeroSlide, Service, TrainingCourse, TrainingEvent } from '@/types';
import { TRAINING_COURSES, getUpcomingEvents, getCourseStats } from '@/data/training';


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

export { TRAINING_COURSES, getUpcomingEvents, getCourseStats };