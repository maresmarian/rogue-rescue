// src/app/api/admin/dashboard/route.ts
import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import { TRAINING_COURSES } from '@/data/training';

export async function GET() {
    const client = new MongoClient(process.env.MONGODB_URI || '');

    try {
        await client.connect();
        const db = client.db('rogueRescue');
        const registrations = db.collection('registrations');

        // Get all registrations
        const allRegistrations = await registrations.find({}).toArray();

        // Calculate stats
        const totalRegistrations = allRegistrations.length;
        const pendingRegistrations = allRegistrations.filter(reg => reg.status === 'pending').length;

        const totalRevenue = allRegistrations
            .filter(reg => reg.status === 'approved')
            .reduce((total, reg) => {
                const course = TRAINING_COURSES.find(c => c.id === reg.courseId);
                return total + (course?.price || 0);
            }, 0);

        // Calculate upcoming courses
        const today = new Date();
        const upcomingCourses = TRAINING_COURSES.reduce((count, course) => {
            const futureDates = course.dates.filter(dateObj => new Date(dateObj.date) > today);
            return count + futureDates.length;
        }, 0);

        // Get recent registrations
        const recentRegistrations = await registrations
            .find({})
            .sort({ createdAt: -1 })
            .limit(5)
            .toArray();

        return NextResponse.json({
            stats: {
                totalRegistrations,
                pendingRegistrations,
                totalRevenue,
                upcomingCourses,
            },
            recentRegistrations,
        });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch dashboard data' },
            { status: 500 }
        );
    } finally {
        await client.close();
    }
}