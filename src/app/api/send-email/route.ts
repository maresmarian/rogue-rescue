// src/app/api/send-email/route.ts
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import { MongoClient } from 'mongodb';
import { COMPANY_INFO } from '@/data';
import {
    getContactFormTemplate,
    getRegistrationTemplate,
    getTrainingRequestTemplate,
    getContactConfirmationTemplate,
    getAcceptanceTemplate,
    getTrainingRequestConfirmationTemplate, getUserRegistrationTemplate
} from '@/lib/email-templates';
import { generateReferenceNumber } from "@/lib/generateReferenceNumber";
import { TRAINING_COURSES } from "@/data/training";

export const dynamic = 'force-dynamic';

if (!process.env.SENDGRID_API_KEY) {
    console.warn('SendGrid API key not found');
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

export async function POST(request: NextRequest) {
    try {
        const originalData = await request.json();

        let htmlContent: string;
        let subject: string;
        let collectionName: string;
        let dataToSave = { ...originalData };
        let foundCourse = null;

        switch (originalData.type) {
            case 'registration':
                if (!originalData.courseId) {
                    return NextResponse.json(
                        { error: 'CourseId is required' },
                        { status: 400 }
                    );
                }

                foundCourse = TRAINING_COURSES.find(c => c.id === originalData.courseId);

                if (!foundCourse) {
                    return NextResponse.json(
                        { error: 'Course not found' },
                        { status: 404 }
                    );
                }

                const referenceNumber = await generateReferenceNumber(foundCourse.id);

                const registrationData = {
                    ...originalData,
                    referenceNumber,
                    courseId: foundCourse.id,
                    courseName: foundCourse.title,
                    courseTitle: foundCourse.title,
                    status: 'pending',
                    createdAt: new Date()
                };

                // Save to MongoDB
                const mongoClient = await getMongoClient();
                const db = mongoClient.db('rogueRescue');
                const collection = db.collection('registrations');

                await collection.insertOne(registrationData);

                try {
                    // Email pro admina
                    await sgMail.send({
                        to: process.env.ADMIN_EMAIL || '',
                        from: {
                            email: process.env.SENDER_EMAIL || '',
                            name: 'Rogue Rescue INFO'
                        },
                        subject: `Course Registration - Ref: ${referenceNumber}`,
                        html: getRegistrationTemplate(registrationData, foundCourse),
                        text: `Course Registration - Ref: ${referenceNumber}`
                    });

                    // Email pro uživatele
                    if (originalData.email) {
                        await sgMail.send({
                            to: originalData.email,
                            from: {
                                email: process.env.SENDER_EMAIL || '',
                                name: COMPANY_INFO.name
                            },
                            subject: 'Course Registration Confirmation',
                            html: getUserRegistrationTemplate(registrationData, foundCourse),
                            text: 'Course Registration Confirmation'
                        });
                    }
                } catch (emailError) {
                    console.error('SendGrid error:', emailError);
                }

                return NextResponse.json({ success: true });

            case 'contact':
                htmlContent = getContactFormTemplate(originalData);
                subject = 'New Contact Form Submission';
                collectionName = 'contacts';
                break;

            case 'training-request':
                htmlContent = getTrainingRequestTemplate(originalData);
                subject = 'New Training Request';
                collectionName = 'trainingRequests';
                break;

            default:
                return NextResponse.json(
                    { error: 'Invalid form type' },
                    { status: 400 }
                );
        }

        // Pro ostatní typy (contact a training-request)
        const mongoClient = await getMongoClient();
        const db = mongoClient.db('rogueRescue');
        const collection = db.collection(collectionName);

        await collection.insertOne(dataToSave);

        try {
            // Email pro admina
            await sgMail.send({
                to: process.env.ADMIN_EMAIL || '',
                from: {
                    email: process.env.SENDER_EMAIL || '',
                    name: 'Rogue Rescue INFO'
                },
                subject,
                html: htmlContent,
                text: subject
            });

            // Email pro uživatele
            if (originalData.email) {
                let confirmationHtml: string;
                let confirmationSubject: string;

                if (originalData.type === 'contact') {
                    confirmationHtml = getContactConfirmationTemplate(originalData);
                    confirmationSubject = 'Thank You for Contacting Rogue Rescue';
                } else {
                    confirmationHtml = getTrainingRequestConfirmationTemplate(originalData);
                    confirmationSubject = 'Training Request Received';
                }

                await sgMail.send({
                    to: originalData.email,
                    from: {
                        email: process.env.SENDER_EMAIL || '',
                        name: COMPANY_INFO.name
                    },
                    subject: confirmationSubject,
                    html: confirmationHtml,
                    text: confirmationSubject
                });
            }
        } catch (emailError) {
            console.error('SendGrid error:', emailError);
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error in API route:', error);
        return NextResponse.json(
            { error: error instanceof Error ? error.message : 'Failed to process request' },
            { status: 500 }
        );
    }
}