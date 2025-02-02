// src/app/api/courses/availability/route.ts
import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import { TRAINING_COURSES } from '@/data/training';

export async function GET() {
    const client = new MongoClient(process.env.MONGODB_URI || '');

    try {
        await client.connect();
        const db = client.db('rogueRescue');
        const coursesCollection = db.collection('courseAvailability');

        const availabilities = await coursesCollection.find({}).toArray();

        // Vytvořit mapu dostupností
        const availabilityMap = new Map();
        availabilities.forEach(a => {
            availabilityMap.set(`${a.courseId}-${a.date}`, a.spotsAvailable);
        });

        // Aktualizovat kurzy s reálnými dostupnostmi
        const coursesWithAvailability = TRAINING_COURSES.map(course => ({
            ...course,
            dates: course.dates.map(d => ({
                date: d.date,
                spotsAvailable: availabilityMap.get(`${course.id}-${d.date}`) ?? course.maxParticipants
            }))
        }));

        return NextResponse.json(coursesWithAvailability);
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch course availability' },
            { status: 500 }
        );
    } finally {
        await client.close();
    }
}