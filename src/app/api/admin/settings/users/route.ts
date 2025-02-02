// src/app/api/admin/settings/users/route.ts
import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

export async function GET() {
    const client = new MongoClient(process.env.MONGODB_URI || '');

    try {
        await client.connect();
        const db = client.db('rogueRescue');
        const collection = db.collection('admins');

        const users = await collection
            .find({})
            .project({ password: 0 })
            .toArray();

        return NextResponse.json(users);
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch users' },
            { status: 500 }
        );
    } finally {
        await client.close();
    }
}