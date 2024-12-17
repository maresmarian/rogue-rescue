// src/app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import { getContactFormTemplate, getRegistrationTemplate, getTrainingRequestTemplate } from '@/lib/email-templates';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
    try {
        const data = await request.json();
        let htmlContent;
        let subject;

        switch (data.type) {
            case 'contact':
                htmlContent = getContactFormTemplate(data);
                subject = 'New Contact Form Submission';
                break;
            case 'registration':
                htmlContent = getRegistrationTemplate(data, data.course);
                subject = 'New Course Registration';
                break;
            case 'training-request':
                htmlContent = getTrainingRequestTemplate(data);
                subject = 'New Training Request';
                break;
            default:
                throw new Error('Invalid form type');
        }

        await sgMail.send({
            to: process.env.ADMIN_EMAIL!,
            from: process.env.SENDER_EMAIL!,
            subject,
            html: htmlContent,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('SendGrid error:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}