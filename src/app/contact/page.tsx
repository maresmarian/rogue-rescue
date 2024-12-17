// src/app/contact/page.tsx
'use client';

import BaseTemplate from '@/components/layout/BaseTemplate';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { CONTACT_INFO } from '@/data';
import ContactMap from "@/components/map/ContactMap";

const CONTACT_SUBJECTS = [
    { value: 'services', label: 'Services Inquiry' },
    { value: 'training', label: 'Training Information' },
    { value: 'partnership', label: 'Partnership Opportunity' },
    { value: 'other', label: 'Other' }
] as const;

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [showSuccess, setShowSuccess] = useState(false);

// Update handleSubmit
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const form = e.currentTarget;
            const formData = {
                type: 'contact',
                firstName: form.querySelector<HTMLInputElement>('[name="firstName"]')?.value,
                lastName: form.querySelector<HTMLInputElement>('[name="lastName"]')?.value,
                email: form.querySelector<HTMLInputElement>('[name="email"]')?.value,
                subject: form.querySelector<HTMLSelectElement>('[name="subject"]')?.value,
                message: form.querySelector<HTMLTextAreaElement>('[name="message"]')?.value
            };

            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to send form');
            }

            setIsSubmitting(false);
            setShowSuccess(true);
            form.reset();

            // Hide success message after 5 seconds
            setTimeout(() => {
                setShowSuccess(false);
            }, 5000);
        } catch (error) {
            console.error('Error:', error);
            setIsSubmitting(false);
        }
    };

    return (
        <BaseTemplate>
            {/* Contact Hero */}
            <section className="relative bg-gray-900 py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
                            <p className="text-xl text-gray-300 mb-8">
                                Get in touch with our team for inquiries about services, training, or emergency response.
                            </p>

                            {/* Emergency Contact */}
                            <div className="bg-orange-500 rounded-2xl p-6 mb-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <Phone className="w-6 h-6 text-white" />
                                    <h2 className="text-xl font-bold text-white">Emergency Line</h2>
                                </div>

                                <a href={`tel:${CONTACT_INFO.phone.value}`}
                                className="text-2xl font-bold text-white hover:underline"
                                >
                                {CONTACT_INFO.phone.display}
                            </a>
                            <p className="text-white/80 mt-2">{CONTACT_INFO.hours.emergency}</p>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-gray-300">
                            <Mail className="w-6 h-6 text-orange-500" />
                            <div>
                                <p className="text-sm text-gray-400">Email us at</p>
                                <a
                                    href={`mailto:${CONTACT_INFO.email.general}`}
                                    className="hover:text-white transition-colors"
                                >
                                    {CONTACT_INFO.email.general}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-gray-300">
                            <MapPin className="w-6 h-6 text-orange-500" />
                            <div>
                                <p className="text-sm text-gray-400">Visit us at</p>
                                <p>
                                    {CONTACT_INFO.address.street}, {CONTACT_INFO.address.city}, {' '}
                                    {CONTACT_INFO.address.state} {CONTACT_INFO.address.zip}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-gray-300">
                            <Clock className="w-6 h-6 text-orange-500" />
                            <div>
                                <p className="text-sm text-gray-400">Office Hours</p>
                                <p>Weekdays: {CONTACT_INFO.hours.office.weekdays}</p>
                                <p>Weekends: {CONTACT_INFO.hours.office.weekends}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white rounded-2xl p-8"
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Subject
                            </label>
                            <select
                                required
                                name="subject"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                            >
                                <option value="">Select a subject</option>
                                {CONTACT_SUBJECTS.map(subject => (
                                    <option key={subject.value} value={subject.value}>
                                        {subject.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Message
                            </label>
                            <textarea
                                required
                                name="message"
                                rows={4}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-orange-500 text-white px-8 py-4 rounded-xl hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <>Processing...</>
                            ) : (
                                <>
                                    Send Message <ArrowRight className="w-5 h-5" />
                                </>
                            )}
                        </button>
                        {showSuccess && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6"
                            >
                                <p className="text-green-800">
                                    Message sent successfully! We'll get back to you soon.
                                </p>
                            </motion.div>
                        )}
                    </form>
                </motion.div>
            </div>
        </div>
</section>

            <ContactMap />
</BaseTemplate>
);
}