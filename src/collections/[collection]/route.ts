// src/app/api/collections/[collection]/route.ts
import { NextRequest } from 'next/server';
import { getPayloadClient } from '@/lib/payload';

export async function GET(
    req: NextRequest,
    { params }: { params: { collection: string } }
) {
    try {
        const payloadClient = await getPayloadClient();

        const result = await payloadClient.find({
            collection: params.collection,
            depth: 1,
        });

        return new Response(JSON.stringify(result), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Error handling GET request:', error);
        return new Response(
            JSON.stringify({
                error: 'Internal Server Error',
                message: error instanceof Error ? error.message : 'Unknown error occurred'
            }),
            { status: 500 }
        );
    }
}

export async function POST(
    req: NextRequest,
    { params }: { params: { collection: string } }
) {
    try {
        const payloadClient = await getPayloadClient();
        const body = await req.json();

        const result = await payloadClient.create({
            collection: params.collection,
            data: body,
        });

        return new Response(JSON.stringify(result), {
            status: 201,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Error handling POST request:', error);
        return new Response(
            JSON.stringify({
                error: 'Internal Server Error',
                message: error instanceof Error ? error.message : 'Unknown error occurred'
            }),
            { status: 500 }
        );
    }
}