// src/app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
    try {
        const data = await request.json();

        await sgMail.send({
            to: process.env.ADMIN_EMAIL,
            from: process.env.SENDER_EMAIL!,
            subject: `New ${data.type} Form Submission`,
            html: generateEmailHtml(data),
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

function generateEmailHtml(data: any) {
    // Různé šablony podle typu formuláře
    switch(data.type) {
        case 'contact':
            return `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `;
        case 'registration':
            return `
        <h2>New Course Registration</h2>
        <p><strong>Course:</strong> ${data.courseName}</p>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ...
      `;
        default:
            return '';
    }
}