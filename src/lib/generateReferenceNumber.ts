// src/lib/generateReferenceNumber.ts
import { MongoClient, Document } from 'mongodb';

interface CounterDocument extends Document {
  _id: string;
  sequence: number;
}

export async function generateReferenceNumber(
  courseId: string
): Promise<string> {
  const client = new MongoClient(process.env.MONGODB_URI || '');

  try {
    await client.connect();
    const db = client.db('rogueRescue');
    const countersCollection = db.collection<CounterDocument>('counters');

    const counter = await countersCollection.findOneAndUpdate(
      { _id: `${courseId}-counter` as string },
      { $inc: { sequence: 1 } },
      { upsert: true, returnDocument: 'after' }
    );

    const sequence = counter?.sequence || 1;
    const prefix = courseId.substring(0, 2).toUpperCase();
    const year = new Date().getFullYear().toString().slice(-2);
    return `${prefix}${year}-${sequence.toString().padStart(3, '0')}`;
  } finally {
    await client.close();
  }
}
