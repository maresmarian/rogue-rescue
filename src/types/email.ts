// src/types/email.ts
export interface EmailData {
  to: string;
  from: string;
  subject: string;
  html: string;
  text?: string;
}
