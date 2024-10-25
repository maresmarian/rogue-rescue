// src/lib/constants.ts

export const HERO_SLIDES = [
    {
        image: '/images/hero/hero-1.jpg',  // Changed from slide1.jpg to hero-1.jpg
        title: 'Providing Vertical Excellence',
        subtitle: 'Expert rescue services and professional training'
    },
    {
        image: '/images/hero/hero-2.jpg',  // Changed from slide2.jpg to hero-2.jpg
        title: 'Professional Training',
        subtitle: 'Comprehensive programs for rescue professionals'
    },
    {
        image: '/images/hero/hero-3.jpg',  // Changed from slide3.jpg to hero-3.jpg
        title: 'Emergency Response',
        subtitle: '24/7 emergency rescue services'
    }
];

export const SERVICES = [
    {
        title: "Wildfire EMS",
        description: "Emergency medical services specialized for wildfire environments.",
        icon: "Activity",
        image: "/images/services/wildfire-ems.jpg"  // Make sure this matches your file name exactly
    },
    {
        title: "Technical Rescue",
        description: "Specialized rescue operations in challenging environments.",
        icon: "Map",
        image: "/images/services/technical-rescue.jpg" 
    },
    {
        title: "High Angle Rescue",
        description: "Vertical rescue operations and safety systems.",
        icon: "Clock",
        image: "/images/services/high-angle-rescue.jpg"  // Changed from high-angle.jpg to match your structure
    }
];

export const TRAINING_EVENTS = [
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