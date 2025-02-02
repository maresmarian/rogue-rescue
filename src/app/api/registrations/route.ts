// src/app/api/registrations/route.ts
import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import { TRAINING_COURSES } from '@/data/training/courses';

export async function GET() {
  const client = new MongoClient(process.env.MONGODB_URI || '');

  try {
    await client.connect();
    const db = client.db('rogueRescue');
    const collection = db.collection('registrations');

    const registrations = await collection.find({}).toArray();

    const enrichedRegistrations = registrations.map((registration) => {
      const course = TRAINING_COURSES.find(
        (c) => c.id === registration.courseId
      );
      return {
        ...registration,
        courseName: course?.title || 'Unknown Course',
        courseTitle: course?.title || 'Unknown Course',
      };
    });

    return NextResponse.json(enrichedRegistrations);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch registrations' },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}
