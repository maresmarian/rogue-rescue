// src/components/training/RegistrationForm.tsx
'use client';

import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import type { TrainingCourse } from '@/types';

interface RegistrationFormProps {
    course: TrainingCourse;
    selectedDate: string | null | undefined;
    onSuccess: () => void;
}

export default function RegistrationForm({ course, selectedDate, onSuccess }: RegistrationFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        dietaryRestrictions: '',
        emergencyContact: {
            name: '',
            phone: '',
            relationship: ''
        }
    });

    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Check if course is full
        if (course.spotsAvailable <= 0) {
            alert('Sorry, this course is currently full. Please select another date or contact us for the waiting list.');
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    type: 'registration',
                    course,
                    selectedDate,
                    ...formData,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to send form');
            }

            setIsSubmitting(false);
            setShowSuccess(true);
            // Reset form
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                company: '',
                dietaryRestrictions: '',
                emergencyContact: {
                    name: '',
                    phone: '',
                    relationship: ''
                }
            });

            // Call success callback
            onSuccess();
        } catch (error) {
            console.error('Error:', error);
            setIsSubmitting(false);
            alert('There was an error processing your registration. Please try again or contact us directly.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                    </label>
                    <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={e => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                    </label>
                    <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={e => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                </label>
                <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                </label>
                <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company/Organization
                </label>
                <input
                    type="text"
                    value={formData.company}
                    onChange={e => setFormData(prev => ({ ...prev, company: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Dietary Restrictions/Allergies
                </label>
                <input
                    type="text"
                    value={formData.dietaryRestrictions}
                    onChange={e => setFormData(prev => ({ ...prev, dietaryRestrictions: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                />
            </div>

            <div className="border-t border-gray-100 pt-6">
                <h3 className="font-bold text-gray-900 mb-4">Emergency Contact</h3>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Contact Name *
                        </label>
                        <input
                            type="text"
                            required
                            value={formData.emergencyContact.name}
                            onChange={e => setFormData(prev => ({
                                ...prev,
                                emergencyContact: { ...prev.emergencyContact, name: e.target.value }
                            }))}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Contact Phone *
                            </label>
                            <input
                                type="tel"
                                required
                                value={formData.emergencyContact.phone}
                                onChange={e => setFormData(prev => ({
                                    ...prev,
                                    emergencyContact: { ...prev.emergencyContact, phone: e.target.value }
                                }))}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Relationship *
                            </label>
                            <input
                                type="text"
                                required
                                value={formData.emergencyContact.relationship}
                                onChange={e => setFormData(prev => ({
                                    ...prev,
                                    emergencyContact: { ...prev.emergencyContact, relationship: e.target.value }
                                }))}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 text-white px-8 py-4 rounded-xl hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Processing...
                    </>
                ) : (
                    'Complete Registration'
                )}
            </button>

            {showSuccess && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                    <p className="text-green-800">
                        Registration submitted successfully! We'll contact you shortly with further details.
                    </p>
                </div>
            )}
        </form>
    );
}