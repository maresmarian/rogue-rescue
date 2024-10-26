// src/lib/payload.ts
import payload, { Payload } from 'payload';
import config from '../payload.config';

let cached: {
    client: Payload | null;
    promise: Promise<Payload> | null;
} = (global as any).payloadClient || {
    client: null,
    promise: null,
};

if (process.env.NODE_ENV !== 'production') {
    (global as any).payloadClient = cached;
}

export const getPayloadClient = async (): Promise<Payload> => {
    if (cached.client) {
        return cached.client;
    }

    if (!cached.promise) {
        cached.promise = payload.init({
            config,
        });
    }

    try {
        cached.client = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }

    return cached.client;
};