// src/app/api/registrations/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { MongoClient, ObjectId } from 'mongodb';
import sgMail from '@sendgrid/mail';
import { getRegistrationConfirmationTemplate, getRejectionTemplate } from '@/lib/email-templates';
import { TRAINING_COURSES } from '@/data/training/courses';

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const client = new MongoClient(process.env.MONGODB_URI || '');
    const { id } = await params;

    try {
        const { status } = await request.json();
        await client.connect();
        const db = client.db('rogueRescue');
        const registrationsCollection = db.collection('registrations');

        const registration = await registrationsCollection.findOne({
            _id: new ObjectId(id)
        });

        if (!registration) {
            return NextResponse.json({ error: 'Registration not found' }, { status: 404 });
        }

        const course = TRAINING_COURSES.find(c => c.id === registration.courseId);

        if (!course) {
            return NextResponse.json({ error: 'Course not found' }, { status: 404 });
        }

        let updatedSpots = 0;
        if (registration.status !== 'approved' && status === 'approved') {
            updatedSpots = -1;
        } else if (registration.status === 'approved' && status !== 'approved') {
            updatedSpots = 1;
        }

        if (updatedSpots !== 0) {
            course.spotsAvailable = Math.max(0, Math.min(course.maxParticipants, course.spotsAvailable + updatedSpots));
        }

        await registrationsCollection.updateOne(
            { _id: new ObjectId(id) },
            {
                $set: {
                    status,
                    updatedAt: new Date(),
                    courseName: course.title,
                    courseTitle: course.title
                }
            }
        );

        try {
            if (status === 'approved') {
                await sgMail.send({
                    to: registration.email,
                    from: {
                        email: process.env.SENDER_EMAIL || '',
                        name: 'Rogue Rescue'
                    },
                    subject: 'Course Registration Approved',
                    html: getRegistrationConfirmationTemplate(registration, course)
                });
            } else if (status === 'rejected') {
                await sgMail.send({
                    to: registration.email,
                    from: {
                        email: process.env.SENDER_EMAIL || '',
                        name: 'Rogue Rescue'
                    },
                    subject: 'Course Registration Status',
                    html: getRejectionTemplate(registration, course)
                });
            }
        } catch (emailError) {
            console.error('Email sending error:', emailError);
        }

        return NextResponse.json({
            success: true,
            spotsAvailable: course.spotsAvailable
        });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json(
            { error: error instanceof Error ? error.message : 'Failed to update registration' },
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
    const { id } = await params;

    try {
        await client.connect();
        const db = client.db('rogueRescue');
        const registrationsCollection = db.collection('registrations');

        const registration = await registrationsCollection.findOne({
            _id: new ObjectId(id)
        });

        if (!registration) {
            return NextResponse.json({ error: 'Registration not found' }, { status: 404 });
        }

        // If registration was approved, increase available spots
        if (registration.status === 'approved') {
            const course = TRAINING_COURSES.find(c => c.id === registration.courseId);
            if (course) {
                course.spotsAvailable = Math.min(course.maxParticipants, course.spotsAvailable + 1);
            }
        }

        await registrationsCollection.deleteOne({ _id: new ObjectId(id) });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json(
            { error: error instanceof Error ? error.message : 'Failed to delete registration' },
            { status: 500 }
        );
    } finally {
        await client.close();
    }
}