// src/data/about.ts

import { Shield, Clock, Users, Award } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface AboutStat {
    number: string;
    label: string;
    icon: LucideIcon;
}

interface AboutValue {
    title: string;
    description: string;
}

export const ABOUT_STATS: AboutStat[] = [
    {
        number: "50+",
        label: "Rescue Operations",
        icon: Shield
    },
    {
        number: "10+",
        label: "Years Experience",
        icon: Clock
    },
    {
        number: "15+",
        label: "Trained Professionals",
        icon: Users
    },
    {
        number: "24/7",
        label: "Emergency Response",
        icon: Award
    }
];

export const ABOUT_VALUES: AboutValue[] = [
    {
        title: "Excellence",
        description: "We maintain the highest standards in rescue operations and training, continuously improving our methods and techniques to provide superior service."
    },
    {
        title: "Safety",
        description: "Safety is paramount in everything we do. We ensure thorough risk assessment and maintain rigorous safety protocols in all our operations."
    },
    {
        title: "Innovation",
        description: "We embrace advanced technology and innovative approaches to enhance our rescue capabilities and training methodologies."
    }
];

export const ABOUT_CONTENT = {
    hero: {
        title: "Who We Are",
        subtitle: "A dedicated team of rescue professionals committed to saving lives and providing exceptional training.",
        image: "/images/hero/about-us.jpg"
    },
    mission: {
        title: "Our Mission",
        description: [
            "At Rogue Rescue, our mission is to provide the highest quality rescue services and professional training. We believe in constant improvement, cutting-edge techniques, and unwavering dedication to safety.",
            "Our team consists of highly trained professionals with extensive experience in technical rescue, emergency medical services, and specialized training delivery."
        ]
    },
    values: {
        title: "Our Values",
        subtitle: "Our core values guide everything we do, from emergency response to professional training."
    }
} as const;