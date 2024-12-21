// src/components/sections/TeamSection.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, Award, List } from 'lucide-react';
import { TEAM_MEMBERS } from '@/data/team';

export default function TeamSection() {
    return (
        <section className="py-24 px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Team</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Meet our experienced professionals dedicated to providing the highest quality rescue services and training.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {TEAM_MEMBERS.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{delay: index * 0.1}}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
                        >
                            <div className="relative w-full aspect-[4/3]">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover object-center"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-orange-500 text-sm mb-4">{member.role}</p>
                                <p className="text-gray-600 mb-6">{member.bio}</p>

                                <div className="space-y-6 mb-6">
                                {/* Specialties */}
                                    <div>
                                        <div className="flex items-center gap-2 text-sm text-gray-900 font-medium mb-2">
                                            <List className="w-4 h-4 text-orange-500"/>
                                            Specialties
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {member.specialties.map(specialty => (
                                                <span
                                                    key={specialty}
                                                    className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full"
                                                >
                                                    {specialty}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Certifications */}
                                    <div>
                                        <div className="flex items-center gap-2 text-sm text-gray-900 font-medium mb-2">
                                            <Award className="w-4 h-4 text-orange-500"/>
                                            Certifications
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {member.certifications.map(cert => (
                                                <span
                                                    key={cert}
                                                    className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                                                >
                                                    {cert}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Awards - Only if they exist */}
                                    {member.awards && (
                                        <div>
                                            <div
                                                className="flex items-center gap-2 text-sm text-gray-900 font-medium mb-2">
                                                <Award className="w-4 h-4 text-orange-500"/>
                                                Awards
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {member.awards.map(award => (
                                                    <span
                                                        key={award}
                                                        className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full"
                                                    >
                                                        {award}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <a
                                    href={`mailto:${member.email}`}
                                    className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-orange-500 transition-colors"
                                >
                                    <Mail className="w-4 h-4"/>
                                    {member.email}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}