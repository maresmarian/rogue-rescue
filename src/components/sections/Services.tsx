// src/components/sections/Services.tsx
'use client';

import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';
import { SERVICES } from '@/lib/constants';
import SectionTitle from '@/components/common/SectionTitle';
import ImageLoader from '@/components/common/ImageLoader';

type IconName = keyof typeof Icons;

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const item = {
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

const imageScale = {
    initial: { scale: 1 },
    hover: {
        scale: 1.1,
        transition: {
            duration: 0.4,
            ease: "easeOut"
        }
    }
};

const buttonSlide = {
    initial: { gap: '0.5rem' },
    hover: {
        gap: '0.75rem',
        transition: {
            duration: 0.2,
            ease: "easeOut"
        }
    }
};

export default function Services() {
    return (
        <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex items-end justify-between mb-12"
                >
                    <SectionTitle
                        title="Our Services"
                        subtitle="Comprehensive rescue and training solutions for challenging environments"
                    />
                    <motion.button
                        initial="initial"
                        whileHover="hover"
                        className="text-orange-500 flex items-center gap-2 hover:gap-3 transition-all"
                    >
                        <motion.div variants={buttonSlide} className="flex items-center">
                            View All Services <ArrowRight className="w-5 h-5" />
                        </motion.div>
                    </motion.button>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {SERVICES.map((service, index) => {
                        const IconComponent = Icons[service.icon as IconName];

                        return (
                            <motion.div
                                key={index}
                                variants={item}
                                whileHover="hover"
                                initial="initial"
                                className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all border border-gray-100"
                            >
                                {/* Image Container */}
                                <div className="relative w-full h-64 overflow-hidden">
                                    <motion.div
                                        className="relative w-full h-full"
                                        variants={imageScale}
                                    >
                                        <ImageLoader
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </motion.div>
                                </div>

                                <div className="p-8">
                                    <div className="h-14 w-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                                        <IconComponent className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors" />
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-600 mb-6">
                                        {service.description}
                                    </p>

                                    <motion.a
                                        href="#"
                                        className="text-orange-500 flex items-center gap-2 text-sm"
                                        whileHover={{ gap: '0.75rem' }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        Learn More <ArrowRight className="w-4 h-4" />
                                    </motion.a>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}