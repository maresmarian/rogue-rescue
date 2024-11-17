'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const MainChoices = () => {
    return (
        <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Rescue Services */}
                    <Link href="/services">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all relative cursor-pointer h-[500px]"
                        >
                            <div className="relative h-full w-full">
                                <Image
                                    src="/images/hero/rogue-rescue-services.jpg"
                                    alt="Rescue Services"
                                    fill
                                    className="object-cover brightness-90 group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                                    <h2 className="text-4xl font-bold text-orange-500 mb-3">
                                        RESCUE SERVICES
                                    </h2>
                                    <p className="text-lg text-white mb-6 max-w-md">
                                        Professional rescue solutions and emergency response services
                                    </p>
                                </div>
                                {/* Sliding description */}
                                <div className="absolute bottom-0 left-0 right-0 bg-white p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                    <p className="text-gray-600 mb-6">
                                        Specialized technical rescue operations, equipment, and professional emergency response solutions for challenging environments.
                                    </p>
                                    <div className="inline-flex items-center gap-2 text-orange-500 group-hover:gap-3 transition-all">
                                        Explore Services <ArrowRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </Link>

                    {/* Academy */}
                    <Link href="/training">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all relative cursor-pointer h-[500px]"
                        >
                            <div className="relative h-full w-full">
                                <Image
                                    src="/images/hero/rogue-rescue-academy.jpg"
                                    alt="Rescue Academy"
                                    fill
                                    className="object-cover brightness-90 group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                                    <h2 className="text-4xl font-bold text-orange-500 mb-3">
                                        ACADEMY
                                    </h2>
                                    <p className="text-lg text-white mb-6 max-w-md">
                                        Expert-led training programs and professional certifications
                                    </p>
                                </div>
                                {/* Sliding description */}
                                <div className="absolute bottom-0 left-0 right-0 bg-white p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                    <p className="text-gray-600 mb-6">
                                        Comprehensive training programs designed to prepare professionals for challenging rescue scenarios and emergency situations.
                                    </p>
                                    <div className="inline-flex items-center gap-2 text-orange-500 group-hover:gap-3 transition-all">
                                        View Programs <ArrowRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default MainChoices;