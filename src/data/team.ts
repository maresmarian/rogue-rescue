// src/data/team.ts
export interface TeamMember {
    name: string;
    role: string;
    image: string;
    email: string;
    shortBio: string;
    career: {
        year: string;
        title: string;
        description?: string;
    }[];
    specialties: string[];
    certifications: {
        medical?: string[];
        rescue?: string[];
        fire?: string[];
        other?: string[];
    };
    awards?: {
        year: string;
        title: string;
        issuer?: string;
    }[];
    education?: {
        year: string;
        title: string;
        institution: string;
    }[];
    location: {
        current: string;
        origin?: string;
    };
}

export const TEAM_MEMBERS: TeamMember[] = [
    {
        name: "Brian Weidman",
        role: "Founder, Lead Instructor & REMS Lead",
        image: "/images/team/brian-weidman.jpg",
        email: "brian.weidman@roguerescueservices.com",
        shortBio: "Fire Captain with extensive experience in emergency medicine, technical rescue, and wildfire operations. Founded Rogue Rescue Services to combine these passions into comprehensive rescue and training solutions.",
        career: [
            { year: '2024', title: 'Founded Rogue Rescue Academy', description: 'Comprehensive technical rescue training' },
            { year: '2021', title: 'Founded Rogue Rescue Services', description: 'Emergency services & training' },
            { year: '2015', title: 'Wildfire Operations', description: 'Started contract wildfire services' },
            { year: 'Current', title: 'Fire Captain', description: 'Southern Oregon Fire Department' },
            { year: '2010', title: 'Career Firefighter', description: 'Southern Oregon' },
        ],
        specialties: [
            "Technical Rescue Operations",
            "Emergency Medicine",
            "Wildfire Operations",
            "Technical Rescue Training",
            "Emergency Response"
        ],
        certifications: {
            medical: [
                "Oregon Paramedic License (2008)",
                "Advanced Cardiac Life Support"
            ],
            rescue: [
                "NFPA Rope Rescue Technician",
                "NFPA Vehicle Extrication Technician"
            ],
            fire: [
                "NFPA Fire Officer 1",
                "NFPA Fire Instructor 1",
                "NWCG Engine Boss",
                "NWCG Task Force Leader"
            ]
        },
        location: {
            current: "Southern Oregon, USA"
        }
    },
    {
        name: "Daniel Sarman",
        role: "Technical Rescue Specialist & Lead Instructor",
        image: "/images/team/daniel-sarman.jpg",
        email: "daniel.sarman@roguerescueservices.com",
        shortBio: "International rescue specialist with extensive experience in helicopter SAR operations and high-angle rescue. Former County Commander bringing worldwide expertise to technical rescue training.",
        career: [
            { year: '2021', title: 'Relocated to United States', description: 'International rescue specialist' },
            { year: '2019', title: 'County Commander', description: 'High Angle Rescue Squads' },
            { year: '2017', title: 'International Instructor', description: 'Technical rescue training' },
            { year: '2015', title: 'Heli SAR Commander', description: 'Helicopter rescue operations' },
            { year: '2008', title: 'Career Start', description: 'Prague Fire Department' },
        ],
        specialties: [
            "Helicopter SAR Operations",
            "High Angle Rescue",
            "International Training",
            "Technical Equipment Development",
            "Cave Rescue Operations"
        ],
        certifications: {
            rescue: [
                "IRATA Level II",
                "Cave Operations Rescue Certificate",
                "Canyoning Guide"
            ],
            other: [
                "HHO Instructor",
                "HEC Instructor",
                "High Angle Rescue Instructor"
            ]
        },
        awards: [
            { year: '2017', title: 'Medal for Saving Life', issuer: 'Czech Republic' },
            { year: '2014', title: 'Best Firefighter Crew', issuer: 'Prague Fire Department' },
            { year: '2013', title: 'Bronze Medal - Helicopter SAR', issuer: 'Czech Republic' }
        ],
        location: {
            current: "Southern Oregon, USA",
            origin: "Prague, Czech Republic"
        }
    }
];