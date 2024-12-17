// src/app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import { MongoClient } from 'mongodb';
import { getContactFormTemplate, getRegistrationTemplate, getTrainingRequestTemplate } from '@/lib/email-templates';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

// MongoDB setup
const uri = process.env.MONGODB_URI!;
const client = new MongoClient(uri);

export async function POST(request: Request) {
    try {
        const data = await request.json();
        let htmlContent;
        let subject;
        let collectionName;

        // Determine email template and collection based on form type
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

        // Connect to MongoDB
        await client.connect();
        const db = client.db('Rogue-rescue-services'); // or whatever your database name is
        const collection = db.collection(collectionName);

        // Save to MongoDB
        const timestamp = new Date();
        await collection.insertOne({
            ...data,
            createdAt: timestamp
        });

        // Send email
        await sgMail.send({
            to: process.env.ADMIN_EMAIL!,
            from: process.env.SENDER_EMAIL!,
            subject,
            html: htmlContent,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json(
            { error: 'Failed to process request' },
            { status: 500 }
        );
    } finally {
        await client.close();
    }
}