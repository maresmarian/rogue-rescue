// src/components/sections/Training.tsx
'use client';

import { Users, Award, Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { TRAINING_STATS } from '@/data/training';
import SectionTitle from '@/components/common/SectionTitle';
import FadeInWhenVisible from '@/components/effects/FadeInWhenVisible';
import TrainingEventCard from '@/components/common/TrainingEventCard';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Modal from '@/components/common/Modal';
import RequestTrainingModal from '@/components/common/RequestTrainingModal';
import CalendarModal from '@/components/training/CalendarModal';
import type { TrainingEvent, TrainingCourse } from "@/types";

interface TrainingProps {
    courses?: TrainingCourse[];
    isLoading?: boolean;
}

export default function Training({ courses = [], isLoading = false }: TrainingProps) {
    const [showRequestModal, setShowRequestModal] = useState(false);
    const [showCalendarModal, setShowCalendarModal] = useState(false);
    const [events, setEvents] = useState<TrainingEvent[]>([]);

    useEffect(() => {
        // Convert courses to events
        const now = new Date();
        const upcomingEvents = courses.flatMap(course =>
            course.dates.map(({ date, spotsAvailable }) => ({
                id: `${course.id}-${date}`,
                courseId: course.id,
                title: course.title,
                date: new Date(date),
                type: course.type,
                category: course.category,
                spots: course.maxParticipants,
                spotsAvailable,
                duration: course.duration,
                price: course.price,
                location: course.location,
                slug: course.slug,
                level: course.level
            }))
        ).filter(event => new Date(event.date) >= now)
            .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

        setEvents(upcomingEvents);
    }, [courses]);

    const displayEvents = events.slice(0, 3); // Show only 3 events

    return (
        <section className="py-24 px-6 bg-gray-900">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <FadeInWhenVisible>
                        <div>
                            <SectionTitle
                                title="Professional Training Programs"
                                subtitle="Comprehensive training programs designed to prepare professionals for challenging rescue scenarios."
                                light
                            />

                            <div className="grid grid-cols-2 gap-6 mb-12">
                                <motion.div className="bg-gray-800 rounded-2xl p-6">
                                    <Users className="w-8 h-8 text-orange-500 mb-4" />
                                    <h4 className="text-3xl font-bold text-white mb-2">
                                        {TRAINING_STATS.professionals}+
                                    </h4>
                                    <p className="text-gray-400">Trained Professionals</p>
                                </motion.div>

                                <motion.div className="bg-gray-800 rounded-2xl p-6">
                                    <Award className="w-8 h-8 text-orange-500 mb-4" />
                                    <h4 className="text-3xl font-bold text-white mb-2">
                                        {TRAINING_STATS.totalCourses}+
                                    </h4>
                                    <p className="text-gray-400">Training Programs</p>
                                </motion.div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <motion.button
                                    whileHover={{scale: 1.05}}
                                    whileTap={{scale: 0.95}}
                                    onClick={() => setShowCalendarModal(true)}
                                    className="bg-orange-500 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all flex items-center justify-center gap-2"
                                >
                                    View Calendar <Calendar className="w-5 h-5"/>
                                </motion.button>

                                <motion.button
                                    onClick={() => setShowRequestModal(true)}
                                    whileHover={{scale: 1.05}}
                                    whileTap={{scale: 0.95}}
                                    className="bg-gray-800 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all border border-gray-700 hover:border-gray-600"
                                >
                                    Request Training
                                </motion.button>
                            </div>
                        </div>
                    </FadeInWhenVisible>

                    {/* Training Preview */}
                    <FadeInWhenVisible delay={0.2}>
                        <div className="bg-white rounded-2xl p-8">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-2xl font-bold text-gray-900">Upcoming Training</h3>
                                <Link href="/training#calendar">
                                    <motion.span
                                        whileHover={{ x: 5 }}
                                        className="text-sm text-orange-500 cursor-pointer flex items-center gap-1"
                                    >
                                        View All
                                        <ArrowRight className="w-4 h-4" />
                                    </motion.span>
                                </Link>
                            </div>

                            {isLoading ? (
                                <div className="flex justify-center items-center h-64">
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500" />
                                </div>
                            ) : displayEvents.length === 0 ? (
                                <div className="text-center py-8">
                                    <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                    <p className="text-gray-600">No upcoming training sessions scheduled.</p>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    {displayEvents.map((event) => (
                                        <Link
                                            key={event.id}
                                            href={`/training/${event.slug}?date=${event.date.toISOString().split('T')[0]}`}
                                        >
                                            <TrainingEventCard event={event} />
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </FadeInWhenVisible>
                </div>
            </div>

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

            <CalendarModal
                isOpen={showCalendarModal}
                onClose={() => setShowCalendarModal(false)}
                events={events}
            />
        </section>
    );
}