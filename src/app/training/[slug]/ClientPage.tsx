'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import BaseTemplate from '@/components/layout/BaseTemplate';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TRAINING_COURSES } from '@/lib/constants';
import { Clock, Users, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import Modal from '@/components/common/Modal';
import RegistrationForm from '@/components/training/RegistrationForm';

type ClientPageProps = {
    params: {
        slug: string;
    };
};

export default function ClientCoursePage({ params }: ClientPageProps) {
    const searchParams = useSearchParams();
    const selectedDate = searchParams.get('date');
    const [showSuccess, setShowSuccess] = useState(false);
    const [isRegistering, setIsRegistering] = useState(false);

    const course = TRAINING_COURSES.find(c => c.slug === params.slug);

    if (!course) {
        return (
            <BaseTemplate>
                <div className="min-h-screen flex items-center justify-center">
                    <p className="text-gray-600">Course not found</p>
                </div>
            </BaseTemplate>
        );
    }

    // Rest of your component remains the same...
    return (
        <BaseTemplate>

        {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px]">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />
                    <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="max-w-7xl mx-auto px-6 relative z-20 h-full flex items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-xl"
                    >
                        <div className="mb-4">
              <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm">
                {course.category}
              </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            {course.title}
                        </h1>
                        <div className="flex flex-wrap gap-6 text-white/90">
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5" />
                                {course.duration}
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="w-5 h-5" />
                                {course.maxParticipants} participants max
                            </div>
                            <div className="flex items-center gap-2">
                                <Award className="w-5 h-5" />
                                {course.level}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Course Details */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="prose prose-lg max-w-none"
                            >
                                <h2>Course Description</h2>
                                <p>{course.description}</p>

                                <h3>What's Included</h3>
                                <ul>
                                    {course.includes.map((item, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                {course.prerequisites && (
                                    <>
                                        <h3>Prerequisites</h3>
                                        <ul>
                                            {course.prerequisites.map((prereq, index) => (
                                                <li key={index}>{prereq}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </motion.div>
                        </div>

                        {/* Registration Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 sticky top-24">
                                <div className="text-3xl font-bold text-gray-900 mb-6">
                                    ${course.price}
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <Calendar className="w-5 h-5" />
                                        <select
                                            className="flex-1 bg-white border border-gray-200 rounded-lg px-3 py-2"
                                            defaultValue={selectedDate || ''}
                                        >
                                            <option value="">Select a date</option>
                                            {course.dates.map(date => (
                                                <option key={date} value={date}>
                                                    {new Date(date).toLocaleDateString('en-US', {
                                                        month: 'long',
                                                        day: 'numeric',
                                                        year: 'numeric'
                                                    })}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="flex items-center gap-3 text-gray-600">
                                        <MapPin className="w-5 h-5" />
                                        {course.location}
                                    </div>
                                </div>

                                <button
                                    onClick={() => setIsRegistering(true)}
                                    className="w-full bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition-colors"
                                >
                                    Register Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <>
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
                    <div className="text-center">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                        >
                            <CheckCircle2 className="w-8 h-8 text-green-500" />
                        </motion.div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                            Registration Successful!
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Thank you for registering. You will receive a confirmation email shortly with additional details.
                        </p>
                        <button
                            onClick={() => setShowSuccess(false)}
                            className="bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors"
                        >
                            Close
                        </button>
                    </div>
                </Modal>
            </>
        </BaseTemplate>
    );
}