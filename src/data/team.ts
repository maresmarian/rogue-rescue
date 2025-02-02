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
    education?: string[];
  };
  awards?: {
    year: string;
    title: string;
    issuer?: string;
    description?: string;
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
    name: 'Brian Weidman',
    role: 'Founder, Lead Instructor & REMS Lead',
    image: '/images/team/brian-weidman.jpg',
    email: 'brian.weidman@roguerescueservices.com',
    shortBio:
      'Fire Captain with extensive experience in emergency medicine, technical rescue, and wildfire operations. Founded Rogue Rescue Services to combine these passions into comprehensive rescue and training solutions.',
    career: [
      {
        year: '2024',
        title: 'Founded Rogue Rescue Academy',
        description: 'Comprehensive technical rescue training',
      },
      {
        year: '2021',
        title: 'Founded Rogue Rescue Services',
        description: 'Emergency services & training',
      },
      {
        year: '2015',
        title: 'Wildfire Operations',
        description: 'Started contract wildfire services',
      },
      {
        year: 'Current',
        title: 'Fire Captain',
        description: 'Southern Oregon Fire Department',
      },
      {
        year: '2010',
        title: 'Career Firefighter',
        description: 'Southern Oregon',
      },
    ],
    specialties: [
      'Technical Rescue Operations',
      'Emergency Medicine',
      'Wildfire Operations',
      'Technical Rescue Training',
      'Emergency Response',
    ],
    certifications: {
      medical: [
        'Oregon Paramedic License (2008)',
        'Advanced Cardiac Life Support',
      ],
      rescue: [
        'NFPA Rope Rescue Technician',
        'NFPA Vehicle Extrication Technician',
      ],
      fire: [
        'NFPA Fire Officer 1',
        'NFPA Fire Instructor 1',
        'NWCG Engine Boss',
        'NWCG Task Force Leader',
      ],
    },
    location: {
      current: 'Southern Oregon, USA',
    },
  },
  {
    name: 'Daniel Sarman',
    role: 'Technical Rescue Specialist & Lead Instructor',
    image: '/images/team/daniel-sarman.jpg',
    email: 'daniel.sarman@roguerescueservices.com',
    shortBio:
      'International rescue specialist with extensive experience in helicopter SAR operations and high-angle rescue. Former County Commander bringing worldwide expertise to technical rescue training.',
    career: [
      {
        year: '2021',
        title: 'Relocated to United States',
        description: 'International rescue specialist',
      },
      {
        year: '2019',
        title: 'County Commander',
        description: 'High Angle Rescue Squads',
      },
      {
        year: '2017',
        title: 'International Instructor',
        description: 'Technical rescue training',
      },
      {
        year: '2015',
        title: 'Heli SAR Commander',
        description: 'Helicopter rescue operations',
      },
      {
        year: '2008',
        title: 'Career Start',
        description: 'Prague Fire Department',
      },
    ],
    specialties: [
      'Helicopter SAR Operations',
      'High Angle Rescue',
      'International Training',
      'Technical Equipment Development',
      'Cave Rescue Operations',
    ],
    certifications: {
      rescue: [
        'IRATA Level II',
        'Cave Operations Rescue Certificate',
        'Canyoning Guide',
      ],
      other: [
        'HHO Instructor',
        'HEC Instructor',
        'High Angle Rescue Instructor',
      ],
    },
    awards: [
      {
        year: '2017',
        title: 'Medal for Saving Life',
        issuer: 'Czech Republic',
      },
      {
        year: '2014',
        title: 'Best Firefighter Crew',
        issuer: 'Prague Fire Department',
      },
      {
        year: '2013',
        title: 'Bronze Medal - Helicopter SAR',
        issuer: 'Czech Republic',
      },
    ],
    location: {
      current: 'Southern Oregon, USA',
      origin: 'Prague, Czech Republic',
    },
  },
  {
    name: 'Bryan Studebaker',
    role: 'Technical Rescue Specialist & Lead Instructor',
    image: '/images/team/bryan-studebaker.jpg',
    email: 'bryan.studebaker@roguerescueservices.com',
    shortBio:
      'Former US Army veteran with extensive military and firefighting experience. Currently serves as the rope rescue lead for Medford Fire Department with 17 years of fire service experience.',
    career: [
      {
        year: '2023-Current',
        title: 'Medford Fire Department',
        description:
          'Career Firefighter, Rope Rescue Lead, Rope Rescue Instructor',
      },
      {
        year: '2023-Current ',
        title: 'Rogue Rescue Services',
        description: 'REMS Team Member, Rope Rescue Instructor',
      },
      {
        year: '2014-Current',
        title: 'Rogue Community College',
        description: 'Adjunct Instructor',
      },
      {
        year: '2010-2013',
        title: 'Roseburg Fire Department',
        description: 'Career Firefighter',
      },
      {
        year: '2000-2007',
        title: 'Military Service',
        description: 'US Army',
      },
    ],
    specialties: [
      'Technical Rescue',
      'Emergency Response',
      'Land Navigation',
      'Rope Rescue Training',
    ],
    certifications: {
      fire: [
        'NFPA Fire Officer 1',
        'NFPA Fire Instructor II',
        'NWCG Engine Boss',
        'NFA Incident Safety Officer',
      ],
      rescue: [
        'NFPA Rope Rescue Technician',
        'NFPA Confined Space Technician',
        'NFPA Trench Rescue Technician',
        'NFPA Vehicle Rescue Technician',
        'NFPA Machinery Rescue Technician',
      ],
      other: ['NFPA HazMat Technician', 'Oregon EMT'],
    },
    awards: [
      { year: '2015', title: 'Company Citation' },
      {
        year: '2006',
        title: 'Army Commendation Medal',
        issuer: 'US Army',
        description: 'Awarded 4 times',
      },
    ],
    location: {
      current: 'Medford, Oregon',
    },
  },
  {
    name: 'Mike Calhoun',
    role: 'REMS Team Leader & Lead Instructor',
    image: '/images/team/mike-calhoun.jpg',
    email: 'mike.calhoun@roguerescueservices.com',
    shortBio:
      '32+ year fire service professional with extensive technical rescue experience. Former Deputy Chief of Operations and technical rescue team leader with comprehensive instruction background.',
    career: [
      {
        year: '2023',
        title: 'REMS Team Leader',
        description: 'Rogue Rescue Services',
      },
      { year: '2022', title: 'Retired Deputy Chief of Operations' },
      {
        year: '2013',
        title: 'Technical Rescue Team Leader',
        description: '2013-2021',
      },
      {
        year: '2008',
        title: 'Technical Rescue Instructor',
        description: 'Peak Rescue Institute',
      },
      {
        year: '2002',
        title: 'Rescue Instructor',
        description: 'Rogue Community College (2002-2018)',
      },
      { year: '1996', title: 'Technical Rescue Practitioner' },
      {
        year: '1990',
        title: 'Volunteer Firefighter',
        description: 'Career Start',
      },
    ],
    specialties: [
      'Technical Rescue Operations',
      'Rescue Incident Command',
      'High Angle Rescue',
      'Technical Rescue Instruction',
    ],
    certifications: {
      rescue: ['Technical Rescue Practitioner', 'High Angle Rescue Specialist'],
      other: ['Multiple Fire Service Professional Certifications'],
      education: [
        'AAS in Fire Science',
        'Oregon Executive Development Institute Graduate',
      ],
    },
    location: {
      current: 'Southern Oregon, USA',
    },
  },
];
