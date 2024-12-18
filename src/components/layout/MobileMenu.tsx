// src/components/layout/MobileMenu.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Shield } from 'lucide-react';
import { MenuItem } from '@/data/navigation';
import { CONTACT_INFO, COMPANY_INFO } from '@/data';
import Image from 'next/image';


interface MobileMenuProps {
    menu: ReadonlyArray<MenuItem>;
}

export default function MobileMenu({ menu }: MobileMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Helper function to check if a path is active
    const isActivePath = (path: string, itemPath: string) => {
        if (itemPath === '/') {
            return path === itemPath;
        }
        return path.startsWith(itemPath);
    };

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

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
                className="p-2 text-gray-600 hover:text-gray-900"
                aria-label="Open menu"
            >
                <Menu className="w-6 h-6" />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50"
                    >
                        <div className="min-h-screen bg-white">
                            {/* Header */}
                            <div
                                className="bg-white px-6 py-4 flex items-center justify-between sticky top-0 border-b border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 flex items-center justify-center">
                                        <Image
                                            src="/logo.png"
                                            alt="Rogue Rescue Logo"
                                            width={40}
                                            height={40}
                                            className="object-contain"
                                        />
                                    </div>
                                    <span className="text-xl font-bold">{COMPANY_INFO.name}</span>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2"
                                >
                                    <X className="w-6 h-6"/>
                                </button>
                            </div>

                            {/* Phone Button */}

                            <a href={`tel:${CONTACT_INFO.phone.value}`}
                               className="block mx-6 my-4 py-4 px-6 bg-orange-500 rounded-full text-center text-white text-lg font-medium"
                            >
                                <Phone className="inline-block w-5 h-5 mr-2 -mt-1"/>
                                {CONTACT_INFO.phone.display}
                            </a>

                            {/* Navigation Links */}
                            <nav className="mt-8 px-6 space-y-6">
                                {menu.map((item) => (
                                    <div key={item.path}>
                                        <Link
                                            href={item.path}
                                            className={`block text-2xl ${
                                                isActivePath(pathname, item.path)
                                                ? 'text-orange-500 font-medium'
                                                : 'text-gray-900'
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                    {item.subItems && (
                                        <div className="mt-4 pl-4 space-y-4">
                                            {item.subItems.map((subItem) => (
                                                <Link
                                                    key={subItem.path}
                                                    href={subItem.path}
                                                    className={`block text-lg ${
                                                        isActivePath(pathname, subItem.path)
                                                            ? 'text-orange-500 font-medium'
                                                            : 'text-gray-600'
                                                    }`}
                                                >
                                                    {subItem.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>
                    </div>
                    </motion.div>
                    )}
            </AnimatePresence>
        </div>
    );
}