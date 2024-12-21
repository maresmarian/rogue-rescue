// src/data/team.ts
export interface TeamMember {
    name: string;
    role: string;
    image: string;
    email: string;
    bio: string;
    specialties: string[];
    certifications: string[];
    awards?: string[];
}

export const TEAM_MEMBERS: TeamMember[] = [
    {
        name: "Brian Weidman",
        role: "Founder, Lead Instructor & REMS Lead",
        image: "/images/team/brian-weidman.jpg",
        email: "weidman.roguerescue@gmail.com",
        bio: "Fire Captain with over 14 years of experience in the fire service and technical rescue operations.",
        specialties: [
            "Technical Rescue Operations",
            "Emergency Response",
            "Personnel Training",
            "Hazard Risk Assessment"
        ],
        certifications: [
            "NFPA Fire Officer 1",
            "NFPA Fire Instructor 1",
            "NFPA Rope Rescue Technician",
            "NFPA Vehicle Extrication Technician",
            "Oregon Paramedic",
            "NWCG Engine Boss",
            "NWCG Task Force Leader"
        ]
    },
    {
        name: "Daniel Sarman",
        role: "Technical Rescue Specialist & Lead Instructor",
        image: "/images/team/daniel-sarman.jpg",
        email: "daniel.sarman@icloud.com",
        bio: "Former Commander of Helicopter SAR and USAR teams with extensive international training experience and multiple rescue operations awards.",
        specialties: [
            "Helicopter SAR",
            "Technical Rope Rescue",
            "High Angle Rescue",
            "Emergency Response",
            "International Training"
        ],
        certifications: [
            "FF1, FF2",
            "EMT",
            "IRATA 2",
            "NFPA 472 HazMat",
            "Instructor HHO, HEC"
        ],
        awards: [
            "Best Firefighter Crew 2014",
            "Bronze Medal - Helicopter SAR",
            "Medal for Saving Life"
        ]
    }
];