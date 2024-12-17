// Add this test route
// src/app/api/test-email/route.ts
import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export async function GET() {
    try {
        await sgMail.send({
            to: process.env.ADMIN_EMAIL || '',
            from: process.env.SENDER_EMAIL || '',
            subject: 'Test Email',
            html: '<h1>Test Email</h1><p>This is a test email from your application.</p>',
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('SendGrid test error:', error);
        return NextResponse.json(
            { error: String(error) },
            { status: 500 }
        );
    }
}