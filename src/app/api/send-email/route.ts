// src/app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import { MongoClient } from 'mongodb';
import { getContactFormTemplate, getRegistrationTemplate, getTrainingRequestTemplate } from '@/lib/email-templates';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

if (!process.env.SENDGRID_API_KEY) {
    console.warn('SendGrid API key not found');
} else if (!process.env.SENDGRID_API_KEY.startsWith('SG.')) {
    console.warn('SendGrid API key may be malformed');
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

let client: MongoClient | null = null;

async function getMongoClient() {
    if (!client) {
        client = new MongoClient(process.env.MONGODB_URI || '');
        await client.connect();
    }
    return client;
}

export async function POST(request: Request) {
    try {
        const data = await request.json();
        let htmlContent;
        let subject;
        let collectionName;

        switch (data.type) {
            case 'contact':
                htmlContent = getContactFormTemplate(data);
                subject = 'New Contact Form Submission';
                collectionName = 'contacts';
                break;
            case 'registration':
                htmlContent = getRegistrationTemplate(data, data.course);
                subject = 'New Course Registration';
                collectionName = 'registrations';
                break;
            case 'training-request':
                htmlContent = getTrainingRequestTemplate(data);
                subject = 'New Training Request';
                collectionName = 'trainingRequests';
                break;
            default:
                throw new Error('Invalid form type');
        }

        // MongoDB save
        const mongoClient = await getMongoClient();
        const db = mongoClient.db('rogueRescue');
        const collection = db.collection(collectionName);

        await collection.insertOne({
            ...data,
            createdAt: new Date()
        });

        // SendGrid email
        try {
            await sgMail.send({
                to: process.env.ADMIN_EMAIL || '',
                from: {
                    email: process.env.SENDER_EMAIL || '', 
                    name: 'Rogue Rescue INFO'
                },
                subject,
                html: htmlContent,
                
            });
        } catch (emailError) {
            console.error('SendGrid error:', emailError);
            // Continue execution even if email fails
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json(
            { error: 'Failed to process request' },
            { status: 500 }
        );
    }
}