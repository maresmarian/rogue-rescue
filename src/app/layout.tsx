// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import { RootLayoutClient } from './RootLayoutClient';
import AuthProvider from '@/providers/AuthProvider';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'Rogue Rescue Services',
  description: 'Professional rescue services and training solutions',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <Analytics />
      <RootLayoutClient>{children}</RootLayoutClient>
    </AuthProvider>
  );
}
