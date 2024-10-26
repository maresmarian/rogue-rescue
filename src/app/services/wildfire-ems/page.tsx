'use client';

import BaseTemplate from '@/components/layout/BaseTemplate';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, AlertTriangle, Phone, Flag, Thermometer, Users } from 'lucide-react';

const FEATURES = [
    "Rapid response medical support",
    "Remote area operations",
    "Heat-related illness treatment",
    "Smoke inhalation care",
    "Mobile medical units",
    "24/7 emergency availability"
];

const CAPABILITIES = [
    {
        title: "Mobile Medical Units",
        description: "Fully equipped mobile medical stations for rapid deployment in wildfire zones.",
        icon: Flag
    },
    {
        title: "Heat Management",
        description: "Specialized care for heat-related illnesses and environmental hazards.",
        icon: Thermometer
    },
    {
        title: "Team Support",
        description: "Dedicated medical support for firefighting and rescue teams.",
        icon: Users
    }
];

export default function WildfireEMSPage() {
    return (
        <BaseTemplate>
            {/* Hero Section */}
            <section className="relative h-[70vh] min-h-[600px] flex items-center">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />
                    <Image
                        src="/images/services/wildfire-ems.jpg"
                        alt="Wildfire EMS"
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
                            Wildfire EMS
                        </h1>
                        <p className="text-xl text-gray-200 mb-8">
                            Emergency medical services specialized for wildfire environments and remote operations.
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
                        Specialized Medical Support for Wildfire Operations
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Our Wildfire EMS team provides crucial medical support in challenging wildfire environments.
                        With specialized training and equipment, we ensure the safety and well-being of firefighting
                        teams and emergency responders.
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
                        src="/images/services/wildfire-ems-2.jpg"
                        alt="Wildfire EMS Operations"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    </section>

    {/* Capabilities Section */}
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
                    Comprehensive medical support services designed for wildfire environments.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {CAPABILITIES.map((capability, index) => {
                    const Icon = capability.icon;
                    return (
                        <motion.div
                            key={capability.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all"
                        >
                            <div className="bg-orange-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                                <Icon className="w-7 h-7 text-orange-500" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
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

    {/* Emergency CTA */}
    <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
            <div className="bg-orange-500 rounded-2xl p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/50 to-transparent" />
                <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                        <AlertTriangle className="w-8 h-8 text-white" />
                        <h2 className="text-3xl font-bold text-white">
                            24/7 Emergency Response
                        </h2>
                    </div>
                    <p className="text-white/90 mb-8 max-w-xl">
                        Our Wildfire EMS team is ready to deploy at a moment's notice.
                        Contact us immediately for emergency medical support.
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