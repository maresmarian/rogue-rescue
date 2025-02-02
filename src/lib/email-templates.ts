// src/lib/email-templates.ts
import { COMPANY_INFO, CONTACT_INFO } from "@/data";
import { formatCourseDate } from "@/lib/formatDate";

const getBaseTemplate = (content: string, icon: string, title: string) => `
  <!DOCTYPE html>
  <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Icons', 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #1d1d1f;
            margin: 0 auto;
            padding: 20px;
            max-width: 800px;
            background-color: #fbfbfd;
            text-align: center;
        }
        .header {
          background: linear-gradient(135deg, #f4511e, #ff7644);
          color: white;
          padding: 48px 20px;
          text-align: center;
          border-radius: 0 0 24px 24px;
        }
        .header-title {
          font-size: 32px;
          font-weight: 600;
          margin-bottom: 8px;
          letter-spacing: -0.5px;
        }
        .header-subtitle {
          font-size: 18px;
          opacity: 0.9;
          font-weight: 400;
        }
        .content {
            margin: -24px auto 0;
            width: 100%;
            max-width: 600px;
            box-sizing: border-box;
            background: white;
            border-radius: 24px;
            box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
            position: relative;
            padding: 24px;
            text-align: left;
        }
        .section {
          margin: 24px 0;
          padding: 24px;
          background: #fbfbfd;
          border-radius: 16px;
        }
        .section-title {
          color: #f4511e;
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .field {
          margin: 16px 0;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .label {
          font-weight: 500;
          color: #6e6e73;
          min-width: 120px;
        }
        .value {
          color: #1d1d1f;
          flex: 1;
        }
        .metadata {
          font-size: 13px;
          color: #6e6e73;
          text-align: center;
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid #d2d2d7;
        }
        .footer {
          text-align: center;
          padding: 32px 20px;
          color: #6e6e73;
          font-size: 13px;
        }
        .button {
          display: inline-block;
          padding: 12px 24px;
          background-color: #f4511e;
          color: white;
          text-decoration: none;
          border-radius: 24px;
          font-weight: 500;
          margin-top: 20px;
        }
        @media only screen and (max-width: 600px) {
          body {
            padding: 10px;
          }
          .content {
            padding: 20px 16px;
          }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="header-title">${COMPANY_INFO.name}</div>
        <div class="header-subtitle">${title}</div>
      </div>
      <div class="content">
        ${content}
        <div class="metadata">
          Submitted on ${new Date().toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
})}
        </div>
      </div>
      <div class="footer">
        <p>© ${new Date().getFullYear()} ${COMPANY_INFO.name}. All rights reserved.</p>
        <p>${CONTACT_INFO.address.street}, ${CONTACT_INFO.address.city}, ${CONTACT_INFO.address.state}</p>
        <p>
          <a href="tel:${CONTACT_INFO.phone.value}" style="color: #f4511e; text-decoration: none;">
            ${CONTACT_INFO.phone.display}
          </a>
          &nbsp;•&nbsp;
          <a href="mailto:${CONTACT_INFO.email.general}" style="color: #f4511e; text-decoration: none;">
            ${CONTACT_INFO.email.general}
          </a>
        </p>
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
      <div class="section-title">📚 Registration Details</div>
      <div class="field">
        <span class="label">Course:</span>
        <span class="value">${course.title}</span>
      </div>
      <div class="field">
        <span class="label">Date:</span>
        <span class="value">${data.selectedDate ? formatCourseDate(data.selectedDate) : 'Not specified'}</span>
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

export function getUserRegistrationTemplate(data: any, course: any) {
    const content = `
    <div style="text-align: left;">
        <p>Dear ${data.firstName},</p>
        
        <p>Thank you for registering for the ${course.title} course. Your registration is currently pending approval.</p>
        
        <div class="section">
            <div class="section-title">Registration Details</div>
            <div class="field">
                <span class="label">Reference Number:</span>
                <span class="value">${data.referenceNumber}</span>
            </div>
            <div class="field">
                <span class="label">Course:</span>
                <span class="value">${course.title}</span>
            </div>
            <div class="field">
                <span class="label">Date:</span>
                <span class="value">${data.selectedDate ? formatCourseDate(data.selectedDate) : 'Not specified'}</span>
            </div>
            <div class="field">
                <span class="label">Location:</span>
                <span class="value">${course.location}</span>
            </div>
        </div>

        <div class="section">
            <div class="section-title">Your Information</div>
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
            ${data.company ? `
            <div class="field">
                <span class="label">Company:</span>
                <span class="value">${data.company}</span>
            </div>
            ` : ''}
        </div>

        <p><strong>What's Next?</strong></p>
        <ul>
            <li>Our team will review your registration within 1-2 business days</li>
            <li>You'll receive an email with confirmation or further instructions</li>
            <li>Please save your reference number for future correspondence</li>
        </ul>

        <p>If you have any questions, please contact us at ${CONTACT_INFO.email.training} and include your reference number.</p>
        
        <p>Best regards,<br>${COMPANY_INFO.name} Training Team</p>
    </div>
    `;
    return getBaseTemplate(content, '📋', 'Course Registration Received');
}

// Nová šablona pro přijetí registrace
export function getAcceptanceTemplate(data: any, course: any) {
    const content = `
    <div style="text-align: left;">
      <p>Dear ${data.firstName},</p>
      
      <p>We are pleased to inform you that your registration for the ${course.title} course has been approved!</p>
      
      <div class="section">
        <div class="section-title">Registration Details</div>
        <div class="field">
          <span class="label">Reference Number:</span>
          <span class="value">${data.referenceNumber}</span>
        </div>
        <div class="field">
          <span class="label">Course:</span>
          <span class="value">${course.title}</span>
        </div>
        <div class="field">
          <span class="label">Date:</span>
          <span class="value">${data.selectedDate ? formatCourseDate(data.selectedDate) : 'To be confirmed'}</span>
        </div>
        <div class="field">
          <span class="label">Location:</span>
          <span class="value">${course.location}</span>
        </div>
      </div>

      <p>If you have any questions, please contact us at ${CONTACT_INFO.email.training} and include your reference number.</p>
      
      <p>Looking forward to seeing you at the course!</p>
      
      <p>Best regards,<br>${COMPANY_INFO.name} Training Team</p>
    </div>
  `;
    return getBaseTemplate(content, '✅', 'Course Registration Approved');
}

// Nová šablona pro zamítnutí registrace
export function getRejectionTemplate(data: any, course: any) {
    const content = `
    <div style="text-align: left;">
      <p>Dear ${data.firstName},</p>
      
      <p>Thank you for your interest in our ${course.title} course. After careful review, we regret to inform you that we are unable to proceed with your registration at this time.</p>
      
      <div class="section">
        <div class="section-title">Registration Details</div>
        <div class="field">
          <span class="label">Course:</span>
          <span class="value">${course.title}</span>
        </div>
        <div class="field">
          <span class="label">Date:</span>
          <span class="value">${data.selectedDate ? formatCourseDate(data.selectedDate) : 'Not specified'}</span>
        </div>
      </div>

      <p>This may be due to one of the following reasons:</p>
      <ul>
        <li>The course is already at maximum capacity</li>
        <li>Prerequisites not met</li>
        <li>Course scheduling conflicts</li>
      </ul>

      <p>We encourage you to:</p>
      <ul>
        <li>Check our other available course dates</li>
        <li>Contact us to discuss alternative options</li>
        <li>Review the course prerequisites if applicable</li>
      </ul>

      <p>If you would like to discuss this further or explore other training opportunities, please contact us at ${CONTACT_INFO.email.training}.</p>
      
      <p>Best regards,<br>${COMPANY_INFO.name} Training Team</p>
    </div>
  `;
    return getBaseTemplate(content, '📋', 'Course Registration Status Update');
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

// Add these new functions for sender confirmation emails
export function getContactConfirmationTemplate(data: any) {
    const content = `
    <div style="text-align: left;">
      <p>Dear ${data.firstName},</p>
      
      <p>Thank you for contacting Rogue Rescue. We have received your message and will get back to you as soon as possible.</p>
      
      <p>Here's a summary of your message:</p>
      
      <div class="section">
        <div class="field">
          <span class="label">Subject:</span>
          <span class="value">${data.subject}</span>
        </div>
        <div class="field">
          <span class="label">Message:</span>
          <div style="white-space: pre-wrap; margin-top: 10px;">${data.message}</div>
        </div>
      </div>

      <p>If you need immediate assistance, please don't hesitate to call us at ${CONTACT_INFO.phone.display}.</p>
      
      <p>Best regards,<br>${COMPANY_INFO.name} Team</p>
    </div>
  `;
    return getBaseTemplate(content, '📨', 'Thank You for Contacting Us');
}

export function getTrainingRequestConfirmationTemplate(data: any) {
    const content = `
    <div style="text-align: left;">
      <p>Dear ${data.name},</p>
      
      <p>Thank you for your interest in our training programs. We have received your request and our team will review it shortly.</p>
      
      <div class="section">
        <div class="section-title">Request Details</div>
        <div class="field">
          <span class="label">Training Type:</span>
          <span class="value">${data.trainingType}</span>
        </div>
      </div>

      <p>We aim to respond to all training requests within 2 business days.</p>
      
      <p>If you need immediate assistance, please contact us at ${CONTACT_INFO.phone.display}.</p>
      
      <p>Best regards,<br>${COMPANY_INFO.name} Training Team</p>
    </div>
  `;
    return getBaseTemplate(content, '📋', 'Training Request Received');
}