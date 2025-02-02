// src/scripts/initCourseAvailability.ts
import { MongoClient } from 'mongodb';
import { TRAINING_COURSES } from '@/data/training/courses';

async function initCourseAvailability() {
    const client = new MongoClient(process.env.MONGODB_URI || '');

    try {
        await client.connect();
        const db = client.db('rogueRescue');
        const coursesCollection = db.collection('courseAvailability');

        // Smazat existující záznamy
        await coursesCollection.deleteMany({});

        // Vytvořit nové záznamy pro každý kurz a datum
        const initialRecords = TRAINING_COURSES.flatMap(course =>
            course.dates.map(({date, spotsAvailable}) => ({
                courseId: course.id,
                date,
                spotsAvailable: course.maxParticipants // Začínáme s max kapacitou
            }))
        );

        if (initialRecords.length > 0) {
            await coursesCollection.insertMany(initialRecords);
        }

        console.log('Course availability initialized successfully');
    } catch (error) {
        console.error('Error initializing course availability:', error);
    } finally {
        await client.close();
    }
}

initCourseAvailability();