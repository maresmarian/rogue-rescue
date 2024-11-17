// src/data/services.ts
import { Service } from '@/types';

export const SERVICES: Service[] = [
    {
        title: "Wildfire EMS",
        description: "Emergency medical services specialized for wildfire environments.",
        shortDescription: "Emergency medical services for wildfire environments",
        fullDescription: "Comprehensive emergency medical services tailored for wildfire environments with rapid response capabilities.",
        icon: "Activity",
        image: "/images/services/wildfire-ems.jpg",
        slug: "wildfire-ems",
        features: [
            "Rapid response teams",
            "Specialized equipment",
            "Wilderness medicine protocols"
        ]
    },
    {
        title: "Technical Rescue",
        description: "Specialized rescue operations in challenging environments.",
        shortDescription: "Technical rescue operations in challenging environments",
        fullDescription: "Expert technical rescue services for complex scenarios requiring specialized equipment and training.",
        icon: "Map",
        image: "/images/services/technical-rescue.jpg",
        slug: "technical-rescue",
        features: [
            "Confined space rescue",
            "Structure collapse response",
            "Industrial rescue operations"
        ]
    },
    {
        title: "High Angle Rescue",
        description: "Vertical rescue operations and safety systems.",
        shortDescription: "Vertical rescue operations and safety systems",
        fullDescription: "Professional high angle rescue services and rope access solutions for elevated emergencies.",
        icon: "Clock",
        image: "/images/services/high-angle-rescue.jpg",
        slug: "high-angle",
        features: [
            "Rope rescue systems",
            "Tower evacuation",
            "Mountain rescue operations"
        ]
    }
];