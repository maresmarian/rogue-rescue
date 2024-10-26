'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
}

export default function Modal({ isOpen, onClose, children, title }: ModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 z-50"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none p-4"
                    >
                        <div className="bg-white rounded-2xl w-full max-w-lg pointer-events-auto">
                            <div className="flex items-center justify-between p-6 border-b border-gray-100">
                                {title && (
                                    <h2 className="text-xl font-bold text-gray-900">{title}</h2>
                                )}
                                <button
                                    onClick={onClose}
                                    className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="p-6">{children}</div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}