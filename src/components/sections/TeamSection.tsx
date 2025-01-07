// src/components/sections/TeamSection.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, Award, GraduationCap, MapPin, Briefcase, Heart, Medal, School } from 'lucide-react';
import { TEAM_MEMBERS } from '@/data/team';

interface TimelineItemProps {
    year: string;
    title: string;
    description?: string;
}

const TimelineItem = ({ year, title, description }: TimelineItemProps) => (
    <div className="relative pl-8 pb-6 last:pb-0">
        <div className="absolute left-0 top-0 h-full w-[2px] bg-orange-100">
            <div className="absolute left-[-5px] top-1 h-3 w-3 rounded-full bg-orange-500" />
        </div>
        <div className="text-sm font-medium text-orange-500 mb-1">{year}</div>
        <div className="font-medium text-gray-900">{title}</div>
        {description && <div className="text-sm text-gray-600 mt-1">{description}</div>}
    </div>
);

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
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
                        >
                            {/* Header Section */}
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
                                {/* Basic Info */}
                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                                        {member.name}
                                    </h3>
                                    <p className="text-orange-500 text-sm mb-2">{member.role}</p>
                                    <p className="text-gray-600 text-sm mb-4">{member.shortBio}</p>
                                    <div className="flex items-center gap-4">

                                        <a href={`mailto:${member.email}`}
                                        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-orange-500 transition-colors"
                                        >
                                        <Mail className="w-4 h-4" />
                                        {member.email}
                                    </a>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <MapPin className="w-4 h-4" />
                                        {member.location.current}
                                    </div>
                                </div>
                            </div>

                            {/* Career Timeline */}
                            <div className="mb-8">
                                <div className="flex items-center gap-2 text-gray-900 font-medium mb-4">
                                    <Briefcase className="w-5 h-5 text-orange-500" />
                                    <h4>Career Timeline</h4>
                                </div>
                                {member.career.map((item) => (
                                    <TimelineItem key={item.year} {...item} />
                                ))}
                            </div>

                            {/* Specialties */}
                            <div className="mb-6">
                                <div className="flex items-center gap-2 text-gray-900 font-medium mb-3">
                                    <GraduationCap className="w-5 h-5 text-orange-500" />
                                    <h4>Areas of Expertise</h4>
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
                            <div className="mb-6">
                                <div className="flex items-center gap-2 text-gray-900 font-medium mb-3">
                                    <Award className="w-5 h-5 text-orange-500" />
                                    <h4>Certifications</h4>
                                </div>
                                <div className="space-y-4">
                                    {Object.entries(member.certifications).map(([category, certs]) => (
                                        certs && certs.length > 0 && (
                                            <div key={category}>
                                                <h5 className="text-sm font-medium text-gray-700 mb-2 capitalize">
                                                    {category}
                                                </h5>
                                                <div className="flex flex-wrap gap-2">
                                                    {certs.map(cert => (
                                                        <span
                                                            key={cert}
                                                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                                                        >
                                                                {cert}
                                                            </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )
                                    ))}
                                </div>
                            </div>

                            {/* Awards */}
                            {member.awards && (
                                <div className="mb-6">
                                    <div className="flex items-center gap-2 text-gray-900 font-medium mb-3">
                                        <Medal className="w-5 h-5 text-orange-500" />
                                        <h4>Awards & Recognition</h4>
                                    </div>
                                    <div className="space-y-2">
                                        {member.awards.map(award => (
                                            <div
                                                key={`${award.year}-${award.title}`}
                                                className="flex items-start gap-2"
                                            >
                                                    <span className="text-sm font-medium text-orange-500">
                                                        {award.year}
                                                    </span>
                                                <div>
                                                    <div className="text-sm font-medium text-gray-900">
                                                        {award.title}
                                                    </div>
                                                    {award.issuer && (
                                                        <div className="text-xs text-gray-600">
                                                            {award.issuer}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        </motion.div>
                        ))}
                </div>
            </div>
        </section>
    );
}