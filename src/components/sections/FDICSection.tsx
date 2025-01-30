// src/components/sections/FDICSection.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function FDICSection() {
    return (
        <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8"
                >
                    <div className="flex-shrink-0">
                        <Link
                            href="https://www.fdic.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block hover:opacity-80 transition-opacity"
                        >
                            <Image
                                src="/images/partners/FDIC.svg"
                                alt="FDIC International"
                                width={200}
                                height={100}
                                className="object-contain"
                            />
                        </Link>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Join Us at FDIC International 2025
                        </h3>
                        <p className="text-gray-600">
                            Rogue Rescue Academy is proud to be a part of the 2025 FDIC International Conference.
                            We would like to thank Liberty Mountain, for partnering with us to staff a booth.
                            Stop by and say hello. We'll see you there Heroes!
                        </p>
                        <Link
                            href="https://www.fdic.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-4 text-orange-500 hover:text-orange-600 transition-colors"
                        >
                            Visit FDIC Website
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                            </svg>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}