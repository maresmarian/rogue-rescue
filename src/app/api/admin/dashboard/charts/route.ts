// src/app/api/admin/dashboard/charts/route.ts
import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import { TRAINING_COURSES } from '@/data/training';

export async function GET() {
    const client = new MongoClient(process.env.MONGODB_URI || '');

    try {
        await client.connect();
        const db = client.db('rogueRescue');
        const registrations = db.collection('registrations');

        // Get registrations for the last 30 days
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        const allRegistrations = await registrations
            .find({
                createdAt: { $gte: thirtyDaysAgo }
            })
            .toArray();

        // Process registrations by date
        const byDate = Array.from({ length: 30 }, (_, i) => {
            const date = new Date();
            date.setDate(date.getDate() - i);
            date.setHours(0, 0, 0, 0);

            return {
                date: date.toISOString().split('T')[0],
                count: allRegistrations.filter(reg =>
                    new Date(reg.createdAt).toISOString().split('T')[0] === date.toISOString().split('T')[0]
                ).length
            };
        }).reverse();

        // Process registrations by course
        const courseCounts = TRAINING_COURSES.map(course => ({
            name: course.title.split(' ').slice(0, 2).join(' '), // Shorter names for display
            value: allRegistrations.filter(reg => reg.courseId === course.id).length
        }));

        return NextResponse.json({
            byDate,
            byCourse: courseCounts
        });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch chart data' },
            { status: 500 }
        );
    } finally {
        await client.close();
    }
}