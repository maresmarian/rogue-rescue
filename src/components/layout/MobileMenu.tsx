// src/components/layout/MobileMenu.tsx
'use client';

import { useState, useEffect } from 'react';
import { X, Menu } from 'lucide-react';
import Link from 'next/link';

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <div className="lg:hidden">
            <button
                onClick={() => setIsOpen(true)}
                className="text-gray-600 hover:text-gray-900"
            >
                <Menu className="w-6 h-6" />
            </button>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/50 z-50">
                    <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-lg px-6 py-6 animate-slide-in">
                        <div className="flex items-center justify-between mb-8">
                            <span className="font-bold text-xl text-gray-900">Menu</span>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <nav className="space-y-6">
                            <Link
                                href="/"
                                className="block text-lg font-medium text-gray-900 hover:text-orange-500 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="/about"
                                className="block text-lg font-medium text-gray-900 hover:text-orange-500 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                href="/services"
                                className="block text-lg font-medium text-gray-900 hover:text-orange-500 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Services
                            </Link>
                            <Link
                                href="/training"
                                className="block text-lg font-medium text-gray-900 hover:text-orange-500 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Training
                            </Link>
                            <Link
                                href="/contact"
                                className="block text-lg font-medium text-gray-900 hover:text-orange-500 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact
                            </Link>

                            <div className="pt-6 border-t border-gray-200">
                                <a
                                    href="tel:8337278534"
                                    className="block text-lg font-medium text-orange-500 hover:text-orange-600 transition-colors"
                                >
                                    (833) 727-8534
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
            )}
        </div>
    );
}