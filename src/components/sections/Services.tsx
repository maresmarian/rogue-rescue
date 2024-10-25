'use client';

import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import SectionTitle from '@/components/common/SectionTitle';
import Image from 'next/image';

// Type for dynamic icon usage
type IconName = keyof typeof Icons;

export default function Services() {
    return (
        <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-end justify-between">
                    <SectionTitle
                        title="Our Services"
                        subtitle="Comprehensive rescue and training solutions for challenging environments"
                    />
                    <button className="text-orange-500 flex items-center gap-2 hover:gap-3 transition-all">
                        View All Services <ArrowRight className="w-5 h-5" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((service, index) => {
                        // Dynamically get the icon component
                        const IconComponent = Icons[service.icon as IconName];

                        return (
                            <div
                                key={index}
                                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 overflow-hidden"
                            >
                                {/* Service Image Background */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <div className="h-14 w-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                                        <IconComponent className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                    <p className="text-gray-600 mb-6">{service.description}</p>
                                    <a href="#" className="text-orange-500 flex items-center gap-2 text-sm group-hover:gap-3 transition-all">
                                        Learn More <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}