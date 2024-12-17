// src/app/training/[slug]/ClientPage.tsx
'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import BaseTemplate from '@/components/layout/BaseTemplate';
import Modal from '@/components/common/Modal';
import RegistrationForm from '@/components/training/RegistrationForm';
import CourseTemplate from '@/components/training/CourseTemplate';
import { TrainingCourse } from '@/types';
import { CheckCircle2 } from "lucide-react";

interface ClientPageProps {
    course: TrainingCourse;
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
}

export default function ClientCoursePage({ course, params, searchParams }: ClientPageProps) {
    const routerSearchParams = useSearchParams();
    const [selectedDate, setSelectedDate] = useState<string>(
        routerSearchParams.get('date') ||
        (typeof searchParams.date === 'string' ? searchParams.date : '')
    );
    const [showSuccess, setShowSuccess] = useState(false);
    const [isRegistering, setIsRegistering] = useState(false);

    return (
        <BaseTemplate>
            <CourseTemplate
                course={course}
                selectedDate={selectedDate}
                onRegister={(date: string) => {
                    setSelectedDate(date);
                    setIsRegistering(true);
                }}
            />

            <Modal
                isOpen={isRegistering}
                onClose={() => setIsRegistering(false)}
                title="Course Registration"
            >
                <RegistrationForm
                    course={course}
                    selectedDate={selectedDate}
                    onSuccess={() => {
                        setIsRegistering(false);
                        setShowSuccess(true);
                    }}
                />
            </Modal>

            <Modal
                isOpen={showSuccess}
                onClose={() => setShowSuccess(false)}
                title="Registration Complete"
            >
                <div className="text-center p-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Registration Successful!
                    </h3>
                    <p className="text-gray-600">
                        Thank you for registering. You will receive a confirmation email shortly.
                    </p>
                </div>
            </Modal>
        </BaseTemplate>
    );
}