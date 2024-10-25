'use client';

import { Users, Award, Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { TRAINING_EVENTS } from '@/lib/constants';
import SectionTitle from '@/components/common/SectionTitle';
import FadeInWhenVisible from '@/components/effects/FadeInWhenVisible';
import Image from 'next/image';

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
                                <motion.div
                                    variants={statsAnimation}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    className="bg-gray-800 rounded-2xl p-6"
                                >
                                    <Users className="w-8 h-8 text-orange-500 mb-4" />
                                    <h4 className="text-3xl font-bold text-white mb-2">500+</h4>
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
                                    <h4 className="text-3xl font-bold text-white mb-2">15+</h4>
                                    <p className="text-gray-400">Training Programs</p>
                                </motion.div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-orange-500 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all flex items-center justify-center gap-2"
                                >
                                    View Calendar <Calendar className="w-5 h-5" />
                                </motion.button>
                                <motion.button
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
                                <motion.span
                                    whileHover={{ x: 5 }}
                                    className="text-sm text-orange-500 cursor-pointer flex items-center gap-1"
                                >
                                    View All
                                    <ArrowRight className="w-4 h-4" />
                                </motion.span>
                            </div>

                            <div className="space-y-6">
                                {TRAINING_EVENTS.map((event, index) => (
                                    <motion.div
                                        key={index}
                                        variants={cardAnimation}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: true }}
                                        whileHover={{ x: 5 }}
                                        className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group"
                                    >
                                        <div className="h-16 w-16 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Calendar className="w-8 h-8 text-orange-500" />
                                        </div>
                                        <div className="flex-grow">
                                            <h4 className="font-bold text-gray-900">{event.title}</h4>
                                            <p className="text-gray-600">{event.date}</p>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className="text-sm text-orange-500">{event.spots} spots available</span>
                                                <span className="text-sm text-gray-400">•</span>
                                                <span className="text-sm text-gray-600 capitalize">{event.type}</span>
                                            </div>
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </FadeInWhenVisible>
                </div>
            </div>
        </section>
    );
}