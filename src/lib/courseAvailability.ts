// src/lib/courseAvailability.ts
import { MongoClient } from 'mongodb';
import { TRAINING_COURSES } from '@/data/training';

export async function getCourseAvailability(courseId: string, date: string) {
    const client = new MongoClient(process.env.MONGODB_URI || '');

    try {
        await client.connect();
        const db = client.db('rogueRescue');
        const coursesCollection = db.collection('courseAvailability');

        const availability = await coursesCollection.findOne({
            courseId,
            date
        });

        if (!availability) {
            // If no availability record exists, return the default from course config
            const course = TRAINING_COURSES.find(c => c.id === courseId);
            const defaultSpots = course?.dates.find(d => d.date === date)?.spotsAvailable || 0;

            // Create initial availability record
            await coursesCollection.insertOne({
                courseId,
                date,
                spotsAvailable: defaultSpots
            });

            return defaultSpots;
        }

        return availability.spotsAvailable;
    } finally {
        await client.close();
    }
}

export async function updateCourseAvailability(courseId: string, date: string, change: number) {
    const client = new MongoClient(process.env.MONGODB_URI || '');

    try {
        await client.connect();
        const db = client.db('rogueRescue');
        const coursesCollection = db.collection('courseAvailability');

        const availability = await coursesCollection.findOne({
            courseId,
            date
        });

        if (!availability) {
            const course = TRAINING_COURSES.find(c => c.id === courseId);
            const defaultSpots = course?.dates.find(d => d.date === date)?.spotsAvailable || 0;

            await coursesCollection.insertOne({
                courseId,
                date,
                spotsAvailable: Math.max(0, defaultSpots + change)
            });

            return Math.max(0, defaultSpots + change);
        }

        const newSpots = Math.max(0, availability.spotsAvailable + change);
        await coursesCollection.updateOne(
            { courseId, date },
            { $set: { spotsAvailable: newSpots } }
        );

        return newSpots;
    } finally {
        await client.close();
    }
}

export async function getAllCoursesAvailability() {
    const client = new MongoClient(process.env.MONGODB_URI || '');

    try {
        await client.connect();
        const db = client.db('rogueRescue');
        const coursesCollection = db.collection('courseAvailability');

        const availabilities = await coursesCollection.find({}).toArray();

        // Create map of availabilities
        const availabilityMap = new Map();
        availabilities.forEach(a => {
            availabilityMap.set(`${a.courseId}-${a.date}`, a.spotsAvailable);
        });

        // Update courses with real availabilities
        return TRAINING_COURSES.map(course => ({
            ...course,
            dates: course.dates.map(d => ({
                date: d.date,
                spotsAvailable: availabilityMap.get(`${course.id}-${d.date}`) ?? d.spotsAvailable
            }))
        }));
    } finally {
        await client.close();
    }
}