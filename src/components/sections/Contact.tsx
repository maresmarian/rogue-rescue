'use client';

import { useState } from 'react';
import { Phone, Mail } from 'lucide-react';
import SectionTitle from '@/components/common/SectionTitle';
import RequestTrainingModal from '@/components/common/RequestTrainingModal';
import { CONTACT_INFO, COMPANY_STATS, SERVICES } from '@/data';


export default function Contact() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section className="py-24 px-6 bg-gradient-to-br from-gray-900 to-gray-800">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <SectionTitle
                                title="Get in Touch"
                                subtitle="Ready to work with us? Contact our team for inquiries about services and training."
                                light
                            />

                            <div className="space-y-8">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 bg-gray-800 rounded-xl flex items-center justify-center">
                                        <Phone className="w-6 h-6 text-orange-500" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400">Call us at</p>
                                        <a
                                            href={`tel:${CONTACT_INFO.phone.value}`}
                                            className="text-white font-bold hover:text-orange-500 transition-colors"
                                        >
                                            {CONTACT_INFO.phone.display}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 bg-gray-800 rounded-xl flex items-center justify-center">
                                        <Mail className="w-6 h-6 text-orange-500" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400">Email us at</p>
                                        <a
                                            href={`tel:${CONTACT_INFO.email.general}`}
                                            className="text-white font-bold hover:text-orange-500 transition-colors"
                                        >
                                            {CONTACT_INFO.email.general}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="mt-12 bg-orange-500 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all inline-flex items-center gap-2"
                            >
                                Schedule Training
                            </button>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white rounded-2xl p-8">
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all" rows={4}></textarea>
                                </div>
                                <button className="w-full bg-orange-500 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <RequestTrainingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}