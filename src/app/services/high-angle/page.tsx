'use client';

import BaseTemplate from '@/components/layout/BaseTemplate';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, AlertTriangle, Phone, Mountain, Cog, Shield, Clipboard, Anchor } from 'lucide-react';
import { CONTACT_INFO } from "@/data";

const FEATURES = [
    "Technical rope rescue operations",
    "Tower and structure access",
    "Mountain and wilderness rescue",
    "Equipment inspection and maintenance",
    "Vertical safety systems",
    "Emergency response planning"
];

const SPECIALIZATIONS = [
    {
        title: "Tower Rescue",
        description: "Specialized rescue operations for telecommunications and wind turbine towers.",
        image: "/images/services/tower-rescue.jpg"
    },
    {
        title: "Mountain and Wilderness Rescue",
        description: "Technical rescue operations in mountainous and wilderness environments.",
        image: "/images/services/mountain-rescue.jpg"
    },
    {
        title: "Industrial Access",
        description: "Safe access and rescue capabilities for industrial vertical environments.",
        image: "/images/services/industrial-rescue.jpg"
    }
];

const CAPABILITIES = [
    {
        title: "Vertical Access",
        description: "Specialized equipment and techniques for accessing hard-to-reach vertical environments.",
        icon: Mountain
    },
    {
        title: "Safety Systems",
        description: "Comprehensive safety protocols and redundant systems for secure operations.",
        icon: Shield
    },
    {
        title: "Equipment Management",
        description: "State-of-the-art rescue equipment with regular maintenance and inspection.",
        icon: Cog
    },
    {
        title: "Custom Solutions",
        description: "Tailored rescue plans for unique vertical environments and challenges.",
        icon: Clipboard
    },
];

export default function HighAngleRescuePage() {
    return (
        <BaseTemplate>
            {/* Hero Section */}
            <section className="relative h-[70vh] min-h-[600px] flex items-center">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />
                    <Image
                        src="/images/services/high-angle-rescue.jpg"
                        alt="High Angle Rescue"
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
                            High Angle Rescue
                        </h1>
                        <p className="text-xl text-gray-200 mb-8">
                            Professional vertical rescue operations and safety systems for challenging environments.
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
                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-orange-100 p-2 rounded-lg">
                            <Anchor className="w-6 h-6 text-orange-500" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">
                            Vertical Rescue Excellence
                        </h2>
                    </div>
                    <p className="text-gray-600 mb-8">
                        Our high angle rescue team specializes in complex vertical rescue operations,
                        providing professional services for industrial, recreational, and emergency scenarios.
                        With advanced equipment and extensive training, we ensure safe and efficient rescue
                        operations in challenging vertical environments.
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
                        src="/images/services/high-angle-rescue-2.jpg"
                        alt="High Angle Rescue Operations"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    </section>

    {/* Capabilities Grid */}
    <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Our Capabilities
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Comprehensive vertical rescue solutions backed by advanced equipment and expertise.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {CAPABILITIES.map((capability, index) => {
                    const Icon = capability.icon;
                    return (
                        <motion.div
                            key={capability.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
                        >
                            <div className="bg-orange-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                                <Icon className="w-7 h-7 text-orange-500" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {capability.title}
                            </h3>
                            <p className="text-gray-600">
                                {capability.description}
                            </p>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    </section>

    {/* Specializations */}
    <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Areas of Specialization
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Expert vertical rescue services across diverse environments and scenarios.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {SPECIALIZATIONS.map((spec, index) => (
                    <motion.div
                        key={spec.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="group relative h-[400px] rounded-2xl overflow-hidden"
                    >
                        <Image
                            src={spec.image}
                            alt={spec.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        <div className="absolute bottom-0 p-6 text-white">
                            <h3 className="text-xl font-bold mb-2">{spec.title}</h3>
                            <p className="text-white/80">{spec.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>

    {/* Emergency CTA */}
    <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
            <div className="bg-orange-500 rounded-2xl p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/50 to-transparent" />
                <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                        <AlertTriangle className="w-8 h-8 text-white" />
                        <h2 className="text-3xl font-bold text-white">
                            Need Emergency Rescue?
                        </h2>
                    </div>
                    <p className="text-white/90 mb-8 max-w-xl">
                        Our high angle rescue team is available 24/7 for emergency response.
                        Contact us immediately for urgent rescue operations.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">

                        <a href={`tel:${CONTACT_INFO.phone.value}`}
                        className="bg-white text-orange-500 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
                        >
                        <Phone className="w-5 h-5" />
                            {CONTACT_INFO.phone.display}
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