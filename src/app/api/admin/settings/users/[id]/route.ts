import { NextRequest, NextResponse } from 'next/server';
import { MongoClient, ObjectId } from 'mongodb';
import bcrypt from 'bcryptjs';

export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const client = new MongoClient(process.env.MONGODB_URI || '');

    try {
        const { username, email, password } = await request.json();
        const { id } = await params;

        await client.connect();
        const db = client.db('rogueRescue');
        const collection = db.collection('admins');

        // Check if username or email already exists for other users
        const existingUser = await collection.findOne({
            $and: [
                { _id: { $ne: new ObjectId(id) } },
                { $or: [{ username }, { email }] }
            ]
        });

        if (existingUser) {
            return NextResponse.json(
                { error: 'Username or email already exists' },
                { status: 400 }
            );
        }

        // Update user
        const updateData: any = {
            username,
            email,
            updatedAt: new Date()
        };

        // Only update password if provided
        if (password) {
            updateData.password = await bcrypt.hash(password, 10);
        }

        await collection.updateOne(
            { _id: new ObjectId(id) },
            { $set: updateData }
        );

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json(
            { error: 'Failed to update user' },
            { status: 500 }
        );
    } finally {
        await client.close();
    }
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const client = new MongoClient(process.env.MONGODB_URI || '');

    try {
        const { id } = await params;

        await client.connect();
        const db = client.db('rogueRescue');
        const collection = db.collection('admins');

        // Check if user exists
        const user = await collection.findOne({ _id: new ObjectId(id) });
        if (!user) {
            return NextResponse.json(
                { error: 'User not found' },
                { status: 404 }
            );
        }

        // Delete user
        await collection.deleteOne({ _id: new ObjectId(id) });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json(
            { error: 'Failed to delete user' },
            { status: 500 }
        );
    } finally {
        await client.close();
    }
}