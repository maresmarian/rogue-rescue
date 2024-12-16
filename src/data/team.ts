// src/data/team.ts
export interface TeamMember {
    name: string;
    role: string;
    image: string;
    linkedin?: string;
    email: string;
    bio: string;
    specialties?: string[];
    certifications?: string[];
}

export const TEAM_MEMBERS: TeamMember[] = [
    {
        name: "Brian Weidman",
        role: "Founder & Lead Instructor",
        image: "/images/team/brian-weidman.jpg",
        linkedin: "https://linkedin.com/in/brianweidman",
        email: "weidman.roguerescue@gmail.com",
        bio: "Experienced rescue professional with over 20 years in technical rescue and emergency response.",
        specialties: [
            "Technical Rope Rescue",
            "High Angle Rescue",
            "Wilderness Medicine"
        ],
        certifications: [
            "SPRAT Level 3",
            "NFPA Rope Rescue Technician",
            "Wilderness First Responder"
        ]
    }
];