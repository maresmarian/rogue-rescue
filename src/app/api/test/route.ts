// src/app/api/test/route.ts
import { NextResponse } from 'next/server';
import { getPayloadClient } from '@/lib/payload';

export async function GET() {
    try {
        const payloadClient = await getPayloadClient();

        const result = await payloadClient.find({
            collection: 'users',
            limit: 1,
        });

        return NextResponse.json({
            status: 'success',
            message: 'Connected to Payload and MongoDB successfully',
            data: result
        });
    } catch (error) {
        console.error('Payload/MongoDB Error:', error);
        return NextResponse.json({
            status: 'error',
            message: error instanceof Error ? error.message : 'Unknown error occurred'
        }, { status: 500 });
    }
}