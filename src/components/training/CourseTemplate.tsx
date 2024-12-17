// src/components/training/CourseTemplate.tsx
'use client';

import { motion } from 'framer-motion';
import { Clock, Users, Award, MapPin, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { TrainingCourse } from '@/types';
import { useState } from "react";
import { CourseTemplateProps } from '@/types/training';

export default function CourseTemplate({ course, onRegister, selectedDate: initialDate }: CourseTemplateProps) {
    const [selectedDate, setSelectedDate] = useState(initialDate || '');

    const handleRegister = () => {
        onRegister(selectedDate); // Now TypeScript knows selectedDate is a string
    };
    
    return (
        <>
            {/* Hero Section with Parallax */}
            <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
                </motion.div>

                <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-6"
                        >
                            <div className="flex items-center gap-4">
                <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm">
                  {course.category}
                </span>
                                <span className="text-white/80 flex items-center gap-2">
                  <Award className="w-4 h-4" />
                                    {course.level}
                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold text-white">
                                {course.title}
                            </h1>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                <div className="flex items-center gap-2 text-white/90">
                                    <Clock className="w-5 h-5" />
                                    <span>{course.duration}</span>
                                </div>
                                <div className="flex items-center gap-2 text-white/90">
                                    <Users className="w-5 h-5" />
                                    <span>Max {course.maxParticipants} students</span>
                                </div>
                                <div className="flex items-center gap-2 text-white/90">
                                    <MapPin className="w-5 h-5" />
                                    <span>{course.location}</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Course Details */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Description */}
                            <div className="prose prose-lg max-w-none">
                                <h2 className="text-3xl font-bold text-gray-900">Course Overview</h2>
                                <p className="text-gray-600">{course.description}</p>
                            </div>

                            {/* What's Included */}
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {course.includes.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100"
                                        >
                                            <CheckCircle2 className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                                            <span className="text-gray-600">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Prerequisites */}
                            {course.prerequisites && (
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Prerequisites</h3>
                                    <ul className="space-y-3">
                                        {course.prerequisites.map((prereq, index) => (
                                            <li key={index} className="flex items-center gap-3 text-gray-600">
                                                <ArrowRight className="w-4 h-4 text-orange-500" />
                                                {prereq}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Registration Sidebar */}
                        <div>
                            <div className="sticky top-24 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <div className="flex items-baseline justify-between mb-6">
                                    <span className="text-3xl font-bold text-gray-900">${course.price}</span>
                                    <span className="text-gray-500">{course.duration}</span>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <Calendar className="w-5 h-5"/>
                                        <select
                                            value={selectedDate}
                                            onChange={(e) => setSelectedDate(e.target.value)}
                                            className="flex-1 bg-white border border-gray-200 rounded-lg px-3 py-2"
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
                                        <MapPin className="w-5 h-5"/>
                                        <span>{course.location}</span>
                                    </div>
                                </div>

                                <button
                                    onClick={handleRegister}
                                    disabled={!selectedDate} // Optional: disable if no date selected
                                    className="w-full bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {!selectedDate ? 'Select a Date' : 'Register Now'}
                                    <ArrowRight className="w-4 h-4" />
                                </button>

                                <p className="text-sm text-gray-500 text-center mt-4">
                                    * Equipment and materials included
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}