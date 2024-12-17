// src/lib/email-templates.ts
import { COMPANY_INFO, CONTACT_INFO } from "@/data";

const getBaseTemplate = (content: string, icon: string, title: string) => `
  <!DOCTYPE html>
  <html>
    <head>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #374151;
          margin: 0;
          padding: 0;
          background-color: #f3f4f6;
        }
        .header {
          background: linear-gradient(to right, #f4511e, #f97316);
          color: white;
          padding: 40px 20px;
          text-align: center;
        }
        .header-icon {
          font-size: 48px;
          margin-bottom: 20px;
        }
        .header-title {
          font-size: 32px;
          font-weight: bold;
          margin-bottom: 10px;
        }
        .header-subtitle {
          font-size: 18px;
          opacity: 0.9;
        }
        .content {
          max-width: 600px;
          margin: 0 auto;
          padding: 40px 20px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          margin-top: -40px;
          position: relative;
        }
        .section {
          margin: 30px 0;
          padding: 20px;
          background: #f9fafb;
          border-radius: 12px;
          border-left: 4px solid #f4511e;
        }
        .section-title {
          color: #f4511e;
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .field {
          margin: 12px 0;
          padding: 8px 0;
          border-bottom: 1px solid #e5e7eb;
        }
        .label {
          font-weight: 600;
          color: #4b5563;
          min-width: 120px;
          display: inline-block;
        }
        .value {
          color: #1f2937;
        }
        .footer {
          text-align: center;
          padding: 20px;
          color: #6b7280;
          font-size: 14px;
          margin-top: 20px;
        }
        .button {
          display: inline-block;
          padding: 12px 24px;
          background-color: #f4511e;
          color: white;
          text-decoration: none;
          border-radius: 8px;
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="header-icon">${icon}</div>
        <div class="header-title">${COMPANY_INFO.name}</div>
        <div class="header-subtitle">${title}</div>
      </div>
      <div class="content">
        ${content}
      </div>
      <div class="footer">
        <p>© ${new Date().getFullYear()} ${COMPANY_INFO.name}. All rights reserved.</p>
        <p>${CONTACT_INFO.address.street}, ${CONTACT_INFO.address.city}, ${CONTACT_INFO.address.state}</p>
      </div>
    </body>
  </html>
`;

export function getContactFormTemplate(data: any) {
    const content = `
    <div class="section">
      <div class="section-title">📋 Contact Information</div>
      <div class="field">
        <span class="label">Name:</span>
        <span class="value">${data.firstName} ${data.lastName}</span>
      </div>
      <div class="field">
        <span class="label">Email:</span>
        <span class="value">${data.email}</span>
      </div>
      <div class="field">
        <span class="label">Subject:</span>
        <span class="value">${data.subject}</span>
      </div>
    </div>
    <div class="section">
      <div class="section-title">💬 Message</div>
      <div style="white-space: pre-wrap;">${data.message}</div>
    </div>
  `;
    return getBaseTemplate(content, '📬', 'New Contact Form Submission');
}

export function getRegistrationTemplate(data: any, course: any) {
    const content = `
    <div class="section">
      <div class="section-title">📚 Course Details</div>
      <div class="field">
        <span class="label">Course:</span>
        <span class="value">${course.title}</span>
      </div>
      <div class="field">
        <span class="label">Date:</span>
        <span class="value">${data.selectedDate || 'Not specified'}</span>
      </div>
      <div class="field">
        <span class="label">Price:</span>
        <span class="value">$${course.price}</span>
      </div>
    </div>
    
    <div class="section">
      <div class="section-title">👤 Personal Information</div>
      <div class="field">
        <span class="label">Name:</span>
        <span class="value">${data.firstName} ${data.lastName}</span>
      </div>
      <div class="field">
        <span class="label">Email:</span>
        <span class="value">${data.email}</span>
      </div>
      <div class="field">
        <span class="label">Phone:</span>
        <span class="value">${data.phone}</span>
      </div>
      <div class="field">
        <span class="label">Company:</span>
        <span class="value">${data.company || 'Not specified'}</span>
      </div>
    </div>

    <div class="section">
      <div class="section-title">🚨 Emergency Contact</div>
      <div class="field">
        <span class="label">Name:</span>
        <span class="value">${data.emergencyContact.name}</span>
      </div>
      <div class="field">
        <span class="label">Phone:</span>
        <span class="value">${data.emergencyContact.phone}</span>
      </div>
      <div class="field">
        <span class="label">Relationship:</span>
        <span class="value">${data.emergencyContact.relationship}</span>
      </div>
    </div>
  `;
    return getBaseTemplate(content, '📋', 'New Course Registration');
}

export function getTrainingRequestTemplate(data: any) {
    const content = `
    <div class="section">
      <div class="section-title">👤 Requester Information</div>
      <div class="field">
        <span class="label">Name:</span>
        <span class="value">${data.name}</span>
      </div>
      <div class="field">
        <span class="label">Email:</span>
        <span class="value">${data.email}</span>
      </div>
      <div class="field">
        <span class="label">Phone:</span>
        <span class="value">${data.phone}</span>
      </div>
      <div class="field">
        <span class="label">Company:</span>
        <span class="value">${data.company || 'Not specified'}</span>
      </div>
    </div>

    <div class="section">
      <div class="section-title">🎓 Training Details</div>
      <div class="field">
        <span class="label">Type:</span>
        <span class="value">${data.trainingType}</span>
      </div>
      <div class="field">
        <span class="label">Message:</span>
        <div style="white-space: pre-wrap; margin-top: 10px;">${data.message}</div>
      </div>
    </div>
  `;
    return getBaseTemplate(content, '📚', 'New Training Request');
}