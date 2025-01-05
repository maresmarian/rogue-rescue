// src/app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import type { MailDataRequired } from '@sendgrid/mail';
import { MongoClient } from 'mongodb';
import { COMPANY_INFO } from '@/data';
import {
    getContactFormTemplate,
    getRegistrationTemplate,
    getTrainingRequestTemplate,
    getContactConfirmationTemplate,
    getRegistrationConfirmationTemplate,
    getTrainingRequestConfirmationTemplate
} from '@/lib/email-templates';

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
        let htmlContent: string;
        let subject: string;
        let collectionName: string;

        // Determine email content and MongoDB collection based on form type
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

        // Save to MongoDB
        const mongoClient = await getMongoClient();
        const db = mongoClient.db('rogueRescue');
        const collection = db.collection(collectionName);

        await collection.insertOne({
            ...data,
            createdAt: new Date()
        });

        // Send emails
        try {
            // Send notification to admin
            const adminMsg: MailDataRequired = {
                to: process.env.ADMIN_EMAIL || '',
                from: {
                    email: process.env.SENDER_EMAIL || '',
                    name: 'Rogue Rescue INFO'
                },
                subject,
                html: htmlContent,
                text: subject // Fallback plain text
            };

            await sgMail.send(adminMsg);

            // Send confirmation email to user if email is provided
            if (data.email) {
                let confirmationHtml: string;
                let confirmationSubject: string;

                switch (data.type) {
                    case 'contact':
                        confirmationHtml = getContactConfirmationTemplate(data);
                        confirmationSubject = 'Thank You for Contacting Rogue Rescue';
                        break;
                    case 'registration':
                        confirmationHtml = getRegistrationConfirmationTemplate(data, data.course);
                        confirmationSubject = 'Course Registration Confirmation';
                        break;
                    case 'training-request':
                        confirmationHtml = getTrainingRequestConfirmationTemplate(data);
                        confirmationSubject = 'Training Request Received';
                        break;
                    default:
                        throw new Error('Invalid form type for confirmation');
                }

                const userMsg: MailDataRequired = {
                    to: data.email,
                    from: {
                        email: process.env.SENDER_EMAIL || '',
                        name: COMPANY_INFO.name
                    },
                    subject: confirmationSubject,
                    html: confirmationHtml,
                    text: confirmationSubject // Fallback plain text
                };

                await sgMail.send(userMsg);
            }

        } catch (emailError) {
            console.error('SendGrid error:', emailError);
            // Continue execution even if email fails
            // We don't want to fail the whole request just because email sending failed
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