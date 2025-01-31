// src/app/api/courses/route.ts
import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

export async function GET() {
    const client = new MongoClient(process.env.MONGODB_URI || '');

    try {
        await client.connect();
        const db = client.db('rogueRescue');
        const collection = db.collection('courses');

        const courses = await collection.find({}).toArray();
        return NextResponse.json(courses);
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch courses' },
            { status: 500 }
        );
    } finally {
        await client.close();
    }
}