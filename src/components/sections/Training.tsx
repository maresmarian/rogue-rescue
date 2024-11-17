'use client';

import { Users, Award, Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { getUpcomingEvents } from '@/lib/constants';
import SectionTitle from '@/components/common/SectionTitle';
import FadeInWhenVisible from '@/components/effects/FadeInWhenVisible';
import TrainingEventCard from '@/components/common/TrainingEventCard';
import Link from 'next/link';
import { useState } from 'react';
import Modal from '@/components/common/Modal';
import RequestTrainingModal from '@/components/common/RequestTrainingModal';
import { CONTACT_INFO, COMPANY_STATS, SERVICES } from '@/data';

const statsAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

const cardAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

export default function Training() {
    const [showRequestModal, setShowRequestModal] = useState(false);
    const upcomingEvents = getUpcomingEvents().slice(0, 3); // Show only 3 events

    return (
        <>
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
                                    <motion.div
                                        variants={statsAnimation}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: true }}
                                        className="bg-gray-800 rounded-2xl p-6"
                                    >
                                        <Users className="w-8 h-8 text-orange-500 mb-4" />
                                        <h4 className="text-3xl font-bold text-white mb-2">{COMPANY_STATS.training.professionals}</h4>
                                        <p className="text-gray-400">Trained Professionals</p>
                                    </motion.div>

                                    <motion.div
                                        variants={statsAnimation}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: true }}
                                        className="bg-gray-800 rounded-2xl p-6"
                                    >
                                        <Award className="w-8 h-8 text-orange-500 mb-4" />
                                        <h4 className="text-3xl font-bold text-white mb-2">{COMPANY_STATS.training.programs}</h4>
                                        <p className="text-gray-400">Training Programs</p>
                                    </motion.div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link href="/training#calendar">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-orange-500 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all flex items-center justify-center gap-2"
                                        >
                                            View Calendar <Calendar className="w-5 h-5" />
                                        </motion.button>
                                    </Link>
                                    <motion.button
                                        onClick={() => setShowRequestModal(true)}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
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

                                <div className="space-y-6">
                                    {upcomingEvents.map((event) => (
                                        <Link
                                            key={event.id}
                                            href={`/training/${event.slug}?date=${event.date.toISOString().split('T')[0]}`}
                                        >
                                            <TrainingEventCard event={event} />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </FadeInWhenVisible>
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
        </>
    );
}