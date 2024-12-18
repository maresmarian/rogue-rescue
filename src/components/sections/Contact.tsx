// src/components/sections/Contact.tsx
'use client';

import { useState } from 'react';
import { Phone, Mail } from 'lucide-react';
import SectionTitle from '@/components/common/SectionTitle';
import RequestTrainingModal from '@/components/common/RequestTrainingModal';
import { CONTACT_INFO, COMPANY_STATS, SERVICES } from '@/data';


export default function Contact() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const form = e.currentTarget;
            const formData = {
                type: 'contact',
                name: form.querySelector<HTMLInputElement>('[name="name"]')?.value,
                email: form.querySelector<HTMLInputElement>('[name="email"]')?.value,
                message: form.querySelector<HTMLTextAreaElement>('[name="message"]')?.value,
            };

            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Failed to send message');

            setShowSuccess(true);
            form.reset();
            setTimeout(() => setShowSuccess(false), 5000);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };
    

    return (
        <>
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            <div>
                                <SectionTitle
                                    title="Get in Touch"
                                    subtitle="Ready to work with us? Contact our team for inquiries about services and training."
                                    light
                                />

                                <div className="space-y-8">
                                    <div className="flex items-center gap-4">
                                        <div
                                            className="h-12 w-12 bg-gray-800 rounded-xl flex items-center justify-center">
                                            <Phone className="w-6 h-6 text-orange-500"/>
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
                                        <div
                                            className="h-12 w-12 bg-gray-800 rounded-xl flex items-center justify-center">
                                            <Mail className="w-6 h-6 text-orange-500"/>
                                        </div>
                                        <div>
                                            <p className="text-gray-400">Email us at</p>
                                            <a
                                                href={`mailto:${CONTACT_INFO.email.general}`}
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
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {showSuccess && (
                                        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                                            <p className="text-green-800">Message sent successfully!</p>
                                        </div>
                                    )}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                        <textarea
                                            name="message"
                                            required
                                            rows={4}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-orange-500 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all disabled:opacity-50"
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            </div>
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