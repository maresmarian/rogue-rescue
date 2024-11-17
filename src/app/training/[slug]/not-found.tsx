'use client';

import BaseTemplate from '@/components/layout/BaseTemplate';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotFound() {
    return (
        <BaseTemplate>
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Search className="w-8 h-8 text-orange-500" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">
                        Course Not Found
                    </h1>
                    <p className="text-gray-600 mb-8">
                        The training course you're looking for doesn't exist or has been removed.
                    </p>
                    <Link
                        href="/training"
                        className="bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition-colors inline-block"
                    >
                        Browse All Courses
                    </Link>
                </div>
            </div>
        </BaseTemplate>
    );
}