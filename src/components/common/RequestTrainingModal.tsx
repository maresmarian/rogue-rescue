// src/components/common/RequestTrainingModal.tsx
'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

interface RequestTrainingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function RequestTrainingModal({ isOpen, onClose }: RequestTrainingModalProps) {
    const [showSuccess, setShowSuccess] = useState(false);

    const handleClickOutside = (e: React.MouseEvent) => {
        if ((e.target as HTMLElement).classList.contains('modal-overlay')) {
            onClose();
        }
    };
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        trainingType: 'technical',
        message: ''
    });

    if (!isOpen) return null;
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    type: 'training-request',
                    ...formData,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to send form');
            }

            setShowSuccess(true);
            setTimeout(() => {
                onClose();
            }, 2000); // Close modal after 2 seconds
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center modal-overlay"
            onClick={handleClickOutside}
        >
            <div className="bg-white rounded-3xl p-8 max-w-2xl w-full mx-4 relative">
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-gray-400 hover:text-gray-600"
                >
                    <X className="w-6 h-6" />
                </button>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Training</h3>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                            <input
                                type="tel"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Company/Organization</label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                                value={formData.company}
                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Training Type</label>
                        <select
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                            value={formData.trainingType}
                            onChange={(e) => setFormData({ ...formData, trainingType: e.target.value })}
                        >
                            <option value="technical">Technical Rescue</option>
                            <option value="medical">Medical Training</option>
                            <option value="rope">Rope Rescue</option>
                            <option value="custom">Custom Program</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                        <textarea
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                            rows={4}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-orange-500 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all"
                    >
                        Submit Request
                    </button>
                    {showSuccess && (
                        <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                            <p className="text-green-800">
                                Training request submitted successfully! We'll get back to you soon.
                            </p>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}