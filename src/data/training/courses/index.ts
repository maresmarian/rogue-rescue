// src/data/training/courses/index.ts
export * from './nfpa-rope-rescue-operations';
export * from './nfpa-rope-rescue-technician';
export * from './rope-rescue-advanced-technician';
export * from './ppe-inspection';

import { NFPARopeRescueOperations } from './nfpa-rope-rescue-operations';
import { NFPARopeRescueTechnician } from './nfpa-rope-rescue-technician';
import { RopeRescueAdvancedTechnician } from './rope-rescue-advanced-technician';
import { PPEInspection } from './ppe-inspection';

export const TRAINING_COURSES = [
    NFPARopeRescueOperations,
    NFPARopeRescueTechnician,
    RopeRescueAdvancedTechnician,
    PPEInspection
] as const;


export function getUpcomingEvents() {
    const now = new Date();
    now.setUTCHours(0, 0, 0, 0);

    const allEvents = TRAINING_COURSES.flatMap(course =>
        course.dates.map(dateStr => ({
            id: `${course.id}-${dateStr}`,
            courseId: course.id,
            title: course.title,
            date: new Date(dateStr),
            type: course.type,
            category: course.category,
            spots: course.maxParticipants,
            spotsAvailable: course.spotsAvailable,
            duration: course.duration,
            price: course.price,
            location: course.location,
            slug: course.slug,
            level: course.level
        }))
    );

    return allEvents
        .filter(event => event.date >= now)
        .sort((a, b) => a.date.getTime() - b.date.getTime());
}