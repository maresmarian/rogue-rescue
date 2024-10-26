"use client";

import BaseTemplate from '@/components/layout/BaseTemplate';
import { motion } from 'framer-motion';
import { Users, Award, Clock, Shield } from 'lucide-react';
import FAQ from '@/components/sections/FAQ';
import Image from "next/image";

const STATS = [
    {
        number: "500+",
        label: "Rescue Operations",
        icon: Shield
    },
    {
        number: "15+",
        label: "Years Experience",
        icon: Clock
    },
    {
        number: "1000+",
        label: "Trained Professionals",
        icon: Users
    },
    {
        number: "24/7",
        label: "Emergency Response",
        icon: Award
    }
];

export default function AboutPage() {
    return (
        <BaseTemplate>
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] bg-gray-900 flex items-center">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
                    <Image
                        src="/images/team/team-photo.jpg"
                        alt="Who are we"
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
                            Who We Are
                        </h1>
                        <p className="text-xl text-gray-200 max-w-xl">
                            A dedicated team of rescue professionals committed to saving lives and providing exceptional training.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                            <p className="text-gray-600 mb-6">
                                At Rogue Rescue, our mission is to provide the highest quality rescue services and professional training.
                                We believe in constant improvement, cutting-edge techniques, and unwavering dedication to safety.
                            </p>
                            <p className="text-gray-600">
                                Our team consists of highly trained professionals with extensive experience in technical rescue,
                                emergency medical services, and specialized training delivery.
                            </p>
                        </motion.div>
                        <div className="grid grid-cols-2 gap-6">
                            {STATS.map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                                    >
                                        <div className="h-12 w-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                                            <Icon className="w-6 h-6 text-orange-500" />
                                        </div>
                                        <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                                        <div className="text-gray-600">{stat.label}</div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Our core values guide everything we do, from emergency response to professional training.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {['Excellence', 'Safety', 'Innovation'].map((value, index) => (
                            <motion.div
                                key={value}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all"
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{value}</h3>
                                <p className="text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQ />
        </BaseTemplate>
    );
}