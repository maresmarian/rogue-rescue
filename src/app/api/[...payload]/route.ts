import { NextRequest, NextResponse } from 'next/server';
import payload from 'payload';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { InitOptions, SanitizedConfig } from 'payload';

interface CustomInitOptions extends InitOptions {
    secret?: string;
}

async function ensurePayloadInitialized() {
    const secret = process.env.PAYLOAD_SECRET;
    if (!secret) {
        throw new Error('Error: missing secret key. A secret key is needed to secure Payload.');
    }

    await payload.init({
        config: {
            secret,
            collections: ['users', 'services', 'training-courses', 'team-members', 'media'],
            db: mongooseAdapter({
                url: process.env.MONGODB_URI || '',
            }),
        } as unknown as SanitizedConfig,
    });
}

export async function POST(req: NextRequest) {
    await ensurePayloadInitialized();

    const { pathname } = new URL(req.url);
    const collection = pathname.split('/')[2];

    if (!collection) {
        return NextResponse.json({ error: 'No collection specified' }, { status: 400 });
    }

    if (!['users', 'services', 'training-courses', 'team-members', 'media'].includes(collection)) {
        return NextResponse.json(
            { error: `The collection with slug "${collection}" can't be found.` },
            { status: 400 }
        );
    }

    try {
        const body = await req.json();
        const result = await payload.create({
            collection,
            data: body,
        });

        return NextResponse.json(result);
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error occurred';
        console.error('Error handling POST request:', error);
        return new Response(
            JSON.stringify({
                error: 'Internal Server Error',
                message,
            }),
            { status: 500 }
        );
    }
}

export async function GET(req: NextRequest) {
    await ensurePayloadInitialized();

    const { pathname } = new URL(req.url);
    const collection = pathname.split('/')[2];

    if (!collection) {
        return NextResponse.json(
            { error: 'No collection specified' },
            { status: 400 }
        );
    }

    if (!['users', 'services', 'training-courses', 'team-members', 'media'].includes(collection)) {
        return NextResponse.json(
            { error: `The collection with slug "${collection}" can't be found.` },
            { status: 400 }
        );
    }

    try {
        const result = await payload.find({
            collection,
            depth: 1,
        });

        return NextResponse.json(result);
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error occurred';
        console.error('Error handling GET request:', error);
        return new Response(
            JSON.stringify({
                error: 'Internal Server Error',
                message,
            }),
            { status: 500 }
        );
    }
}