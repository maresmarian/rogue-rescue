// src/app/training/page.tsx
'use client';

import { useState } from 'react';
import BaseTemplate from '@/components/layout/BaseTemplate';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Filter, ArrowRight, Clock, Users, Award } from 'lucide-react';
import TrainingCalendar from '@/components/training/Calendar';
import Modal from '@/components/common/Modal';
import RequestTrainingModal from '@/components/common/RequestTrainingModal';
import { TRAINING_COURSES, TRAINING_STATS, TRAINING_CATEGORIES, TRAINING_LEVELS } from '@/data/training';
import { CourseCategory, CourseLevel } from "@/types";

export default function TrainingPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [selectedLevel, setSelectedLevel] = useState<string>('');
    const [showRequestModal, setShowRequestModal] = useState(false);

    const filteredCourses = TRAINING_COURSES.filter(course => {
        if (selectedCategory && course.category !== selectedCategory) return false;
        if (selectedLevel && course.level !== selectedLevel) return false;
        return true;
    });

    return (
        <BaseTemplate>
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] bg-gray-900 flex items-center">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />
                    <Image
                        src="/images/training/training-hero.jpg"
                        alt="Training Programs"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="max-w-7xl mx-auto px-6 relative z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Training Programs
                        </h1>
                        <p className="text-xl text-gray-200 max-w-xl mb-8">
                            Professional rescue and emergency response training from industry experts.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="#courses"
                                className="bg-orange-500 text-white px-8 py-4 rounded-full hover:bg-orange-600 transition-colors inline-flex items-center justify-center gap-2"
                            >
                                View Courses <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#calendar"
                                className="bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
                            >
                                <Calendar className="w-5 h-5" />
                                Training Calendar
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Filters and Course List */}
            <section className="py-24 px-6" id="courses">
                <div className="max-w-7xl mx-auto">
                    {/* Filters */}
                    <div className="mb-12 flex flex-wrap gap-6">
                        <div className="flex items-center gap-4">
                            <Filter className="w-5 h-5 text-gray-500" />
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="bg-white border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            >
                                <option value="">All Categories</option>
                                {TRAINING_CATEGORIES.map((category: CourseCategory) => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>

                        <select
                            value={selectedLevel}
                            onChange={(e) => setSelectedLevel(e.target.value)}
                            className="bg-white border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                            <option value="">All Levels</option>
                            {TRAINING_LEVELS.map((level: CourseLevel) => (
                                <option key={level} value={level}>{level}</option>
                            ))}
                        </select>
                    </div>

                    {/* Course Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredCourses.map((course) => (
                            <motion.div
                                key={course.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
                            >
                                <div className="relative h-48">
                                    <Image
                                        src={course.image}
                                        alt={course.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                                        {course.category}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {course.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 line-clamp-2">
                                        {course.description}
                                    </p>

                                    <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            {course.duration}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Users className="w-4 h-4" />
                                            {course.maxParticipants} max
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Award className="w-4 h-4" />
                                            {course.level}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className="text-2xl font-bold text-gray-900">
                                            ${course.price}
                                        </span>
                                        <Link
                                            href={`/training/${course.slug}`}
                                            className="text-orange-500 hover:text-orange-600 flex items-center gap-2"
                                        >
                                            View Details <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Calendar Section */}
            <section className="py-24 px-6 bg-gray-900" id="calendar">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold text-white mb-6">
                                Upcoming Training Sessions
                            </h2>
                            <p className="text-xl text-gray-400 mb-8">
                                Browse our upcoming training schedule and secure your spot today.
                            </p>

                            <div className="grid grid-cols-2 gap-6 mb-12">
                                <div className="bg-gray-800 rounded-2xl p-6">
                                    <Users className="w-8 h-8 text-orange-500 mb-4" />
                                    <h4 className="text-3xl font-bold text-white mb-2">
                                        {TRAINING_STATS.totalStudents}+
                                    </h4>
                                    <p className="text-gray-400">Trained Professionals</p>
                                </div>

                                <div className="bg-gray-800 rounded-2xl p-6">
                                    <Award className="w-8 h-8 text-orange-500 mb-4" />
                                    <h4 className="text-3xl font-bold text-white mb-2">
                                        {TRAINING_STATS.totalCourses}+
                                    </h4>
                                    <p className="text-gray-400">Training Programs</p>
                                </div>
                            </div>

                            <button
                                onClick={() => setShowRequestModal(true)}
                                className="bg-orange-500 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all"
                            >
                                Request Custom Training
                            </button>
                        </motion.div>

                        <TrainingCalendar limit={5} />
                    </div>
                </div>
            </section>

            <Modal
                isOpen={showRequestModal}
                onClose={() => setShowRequestModal(false)}
                title="Request Custom Training"
            >
                <RequestTrainingModal
                    isOpen={showRequestModal}
                    onClose={() => setShowRequestModal(false)}
                />
            </Modal>
        </BaseTemplate>
    );
}