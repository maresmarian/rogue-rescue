'use client';

import BaseTemplate from '@/components/layout/BaseTemplate';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, AlertTriangle, Phone } from 'lucide-react';

const FEATURES = [
    "Confined space rescue operations",
    "Industrial rescue services",
    "Equipment inspections and maintenance",
    "Site safety assessments",
    "Emergency response planning",
    "Custom rescue solutions"
];

const SCENARIOS = [
    {
        title: "Industrial Facilities",
        description: "Specialized rescue services for manufacturing and industrial environments.",
        image: "/images/services/industrial-rescue.jpg"
    },
    {
        title: "Construction Sites",
        description: "Emergency response and rescue operations for construction projects.",
        image: "/images/services/technical-rescue.jpg"
    },
    {
        title: "Infrastructure",
        description: "Technical rescue services for bridges, tunnels, and other infrastructure.",
        image: "/images/services/technical-rescue-2.jpg"
    }
];

export default function TechnicalRescuePage() {
    return (
        <BaseTemplate>
            {/* Hero Section */}
            <section className="relative h-[70vh] min-h-[600px] flex items-center">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />
                    <Image
                        src="/images/services/technical-rescue.jpg"
                        alt="Technical Rescue"
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
                        className="max-w-xl"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Technical Rescue
                        </h1>
                        <p className="text-xl text-gray-200 mb-8">
                            Specialized rescue operations for complex and challenging environments.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">

                            <a href="tel:8337278534"
                            className="bg-orange-500 text-white px-8 py-4 rounded-full hover:bg-orange-600 transition-colors inline-flex items-center justify-center gap-2"
                            >
                            <Phone className="w-5 h-5" />
                            Emergency Response
                        </a>
                        <Link
                            href="/contact"
                            className="bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
                        >
                            Request Service
                        </Link>
                </div>
            </motion.div>
        </div>
</section>

    {/* Overview Section */}
    <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Comprehensive Technical Rescue Services
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Our technical rescue team specializes in complex rescue operations in challenging environments.
                        With years of experience and state-of-the-art equipment, we provide professional rescue services
                        for industrial, construction, and infrastructure settings.
                    </p>
                    <div className="space-y-4">
                        {FEATURES.map((feature) => (
                            <div key={feature} className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                                <span className="text-gray-700">{feature}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <div className="relative h-[500px] rounded-2xl overflow-hidden">
                    <Image
                        src="/images/services/technical-rescue-2.jpg"
                        alt="Technical Rescue Operations"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    </section>

    {/* Scenarios Section */}
    <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Rescue Scenarios
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    We provide specialized rescue services across various scenarios and environments.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {SCENARIOS.map((scenario, index) => (
                    <motion.div
                        key={scenario.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
                    >
                        <div className="relative h-48">
                            <Image
                                src={scenario.image}
                                alt={scenario.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {scenario.title}
                            </h3>
                            <p className="text-gray-600">
                                {scenario.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>

    {/* Emergency CTA */}
    <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
            <div className="bg-orange-500 rounded-2xl p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/50 to-transparent" />
                <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                        <AlertTriangle className="w-8 h-8 text-white" />
                        <h2 className="text-3xl font-bold text-white">
                            Emergency Response Available
                        </h2>
                    </div>
                    <p className="text-white/90 mb-8 max-w-xl">
                        Our technical rescue team is available 24/7 for emergency response.
                        Contact us immediately for urgent rescue operations.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">

                        <a href="tel:8337278534"
                        className="bg-white text-orange-500 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
                        >
                        <Phone className="w-5 h-5" />
                        (833) 727-8534
                    </a>
                    <Link
                        href="/contact"
                        className="bg-orange-600 text-white px-8 py-4 rounded-full hover:bg-orange-700 transition-colors inline-flex items-center justify-center gap-2"
                    >
                        Request Service
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    </div>
</section>
</BaseTemplate>
);
}