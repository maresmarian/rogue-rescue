// src/data/training/courses/ppe-inspection.ts
import { TrainingCourse } from '@/types';

export const PPEInspection: TrainingCourse = {
    id: 'ppe-i-001',
    title: 'PPE Inspection Class',
    slug: 'ppe-inspection',
    category: 'Technical',
    description: `At Rogue Rescue Services, our focus is on "Safety First." We understand that navigating manuals and inspection guidelines can be challenging. That's why we're offering this class—to help you better understand manuals, standards, and restrictions while providing tips on how to maintain equipment for rope rescue operations. 

        This training specifically targets periodic inspections of fall protection personal protective equipment (PPE) in accordance with NFPA, ANSI, and manufacturer manuals. Upon successful completion of this training, participants will be competent in conducting periodic inspections of all brands of fall protection PPE, unless otherwise specified by the manufacturer in the instructions for use.`,
    schedule: [
        {
            day: 1,
            focus: 'Equipment Inspection Standards and Procedures',
            icon: 'Clipboard'
        }
    ],
    duration: '1 day',
    price: 150,
    level: 'Intermediate',
    dates: [
        {
            date: '2025-03-01T12:00:00Z',
            spotsAvailable: 20
        },
        {
            date: '2025-04-19T12:00:00Z',
            spotsAvailable: 20
        }
    ],
    maxParticipants: 20,
    prerequisites: [
        'Basic knowledge of PPE equipment',
        'Experience in rope rescue operations',
        'Familiarity with safety standards'
    ],
    includes: [
        'Inspection guidelines and materials',
        'Hands-on inspection practice',
        'Documentation templates',
        'Certificate of completion',
        'Refreshments'
    ],
    image: '/images/services/ppe-inspection.jpg',
    location: 'Central Point, OR',
    type: 'technical',
    spotsAvailable: 20
};