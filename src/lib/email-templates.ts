// src/lib/email-templates.ts
export function getContactFormTemplate(data: any) {
    return `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Subject:</strong> ${data.subject}</p>
    <p><strong>Message:</strong> ${data.message}</p>
  `;
}

export function getRegistrationTemplate(data: any, course: any) {
    return `
    <h2>New Course Registration</h2>
    <p><strong>Course:</strong> ${course.title}</p>
    <p><strong>Selected Date:</strong> ${data.selectedDate || 'Not specified'}</p>
    <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Company:</strong> ${data.company}</p>
    <h3>Emergency Contact</h3>
    <p><strong>Name:</strong> ${data.emergencyContact.name}</p>
    <p><strong>Phone:</strong> ${data.emergencyContact.phone}</p>
    <p><strong>Relationship:</strong> ${data.emergencyContact.relationship}</p>
  `;
}

export function getTrainingRequestTemplate(data: any) {
    return `
    <h2>New Training Request</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Company:</strong> ${data.company}</p>
    <p><strong>Training Type:</strong> ${data.trainingType}</p>
    <p><strong>Message:</strong> ${data.message}</p>
  `;
}