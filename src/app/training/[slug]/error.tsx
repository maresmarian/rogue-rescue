// src/training/[slug]/error.tsx
'use client';

import BaseTemplate from '@/components/layout/BaseTemplate';
import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <BaseTemplate>
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <AlertTriangle className="w-8 h-8 text-red-500" />
          </motion.div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Something went wrong!
          </h1>
          <p className="text-gray-600 mb-8">
            We encountered an error while loading this course.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={reset}
              className="bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition-colors"
            >
              Try Again
            </button>
            <Link
              href="/training"
              className="bg-gray-100 text-gray-900 px-6 py-3 rounded-xl hover:bg-gray-200 transition-colors"
            >
              Back to Training
            </Link>
          </div>
        </div>
      </div>
    </BaseTemplate>
  );
}
