// src/app/RootLayoutClient.tsx
'use client';

import Navigation from '@/components/layout/Navigation';
import EmergencyModal from '@/components/common/EmergencyModal';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export function RootLayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  return (
    <html lang="en">
      <body className="font-sans">
        {isAdmin ? (
          children
        ) : (
          <>
            <Navigation />
            <AnimatePresence mode="wait">{children}</AnimatePresence>
            <EmergencyModal />
          </>
        )}
      </body>
    </html>
  );
}
