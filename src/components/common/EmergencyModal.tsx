'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X, AlertTriangle } from 'lucide-react';

export default function EmergencyModal() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Emergency Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed right-6 bottom-24 z-40 bg-red-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
                <Phone className="w-6 h-6" />
            </button>

            {/* Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="bg-white rounded-2xl p-8 max-w-lg w-full relative"
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                                    <AlertTriangle className="w-6 h-6 text-red-500" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">Emergency Contact</h2>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                                    <p className="text-red-800 font-medium">
                                        For immediate emergency assistance:
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                                        <Phone className="w-6 h-6 text-gray-600" />
                                        <div>
                                            <p className="text-sm text-gray-600">Emergency Hotline</p>
                                            <a href="tel:911" className="text-xl font-bold text-gray-900">
                                                911
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                                        <Phone className="w-6 h-6 text-gray-600" />
                                        <div>
                                            <p className="text-sm text-gray-600">Rogue Rescue 24/7</p>
                                            <a href="tel:8337278534" className="text-xl font-bold text-gray-900">
                                                (833) 727-8534
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-sm text-gray-600">
                                    Please note: If you're experiencing a life-threatening emergency,
                                    always call 911 first.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}