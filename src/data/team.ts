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
            "Paramedic",
            "NFPA Rope Rescue Technician",
            "Wilderness First Responder"
        ]
    },
    {
        name: "Daniel Sarman",
        role: "Technical Rescue Specialist & Lead Instructor",
        image: "/images/team/daniel-sarman.jpg",
        linkedin: "https://linkedin.com/in/danielsarman",
        email: "daniel.sarman@icloud.com",
        bio: "Former Commander of Heli SAR and USAR with extensive international training experience across Europe, Middle East, and Asia.",
        specialties: [
            "Helicopter SAR",
            "Technical Rope Rescue",
            "High Angle Rescue",
            "HHO/HEC Operations"
        ],
        certifications: [
            "FF1, FF2",
            "EMT",
            "IRATA 2",
            "NFPA 472 HazMat",
            "Instructor HHO, HEC",
            "3D Nozzle Forward Instructor"
        ]
    }
];