// src/app/services/page.tsx
'use client';

import BaseTemplate from '@/components/layout/BaseTemplate';
import { motion } from 'framer-motion';
import { SERVICES } from '@/data/services';
import { CONTACT_INFO } from '@/data/contact';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
    },
    viewport: { once: true }
};

export default function ServicesPage() {
    return (
        <BaseTemplate>
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] bg-gray-900 flex items-center">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />
                    <Image
                        src="/images/hero/services-hero.jpg"
                        alt="Services Hero"
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
                            Our Services
                        </h1>
                        <p className="text-xl text-gray-200 max-w-xl">
                            Professional rescue and emergency response services for any situation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Services Section */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 gap-16">
                        {SERVICES.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial="initial"
                                whileInView="whileInView"
                                viewport={{ once: true }}
                                variants={fadeIn}
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                }`}
                            >
                                <div className="relative h-[400px] rounded-2xl overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                        {service.title}
                                    </h2>
                                    <p className="text-gray-600 mb-8">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-3 mb-8">
                                        {service.features.map((feature, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-center gap-2 text-gray-600"
                                            >
                                                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        href={`/services/${service.slug}`}
                                        className="inline-flex items-center gap-2 text-orange-500 hover:gap-4 transition-all"
                                    >
                                        Learn More <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 bg-gray-900">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto"
                    >
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Need Emergency Assistance?
                        </h2>
                        <p className="text-gray-300 mb-8">
                            Our team is available 24/7 for emergency response and rescue operations.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={`tel:${CONTACT_INFO.phone.value}`}
                                className="bg-orange-500 text-white px-8 py-4 rounded-full hover:bg-orange-600 transition-colors inline-flex items-center justify-center gap-2"
                            >
                                Call Now: {CONTACT_INFO.phone.display}
                            </a>
                            <Link
                                href="/contact"
                                className="bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
                            >
                                Contact Us <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </BaseTemplate>
    );
}