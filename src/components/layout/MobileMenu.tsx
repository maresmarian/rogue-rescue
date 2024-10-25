'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Phone, Shield } from 'lucide-react';

interface MenuItem {
    label: string;
    path: string;
    subItems?: { label: string; path: string; }[];
}

interface MobileMenuProps {
    menu: MenuItem[];
}

export default function MobileMenu({ menu }: MobileMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        setIsOpen(false);
        setActiveSubmenu(null);
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
                    <div className="fixed inset-0 bg-black/50 z-50">
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-lg"
                        >
                            <div className="flex items-center justify-between p-6 border-b border-gray-100">
                                <div className="flex items-center gap-2">
                                    <div className="h-8 w-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                                        <Shield className="text-white w-4 h-4" />
                                    </div>
                                    <span className="font-bold text-gray-900">ROGUE RESCUE</span>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 text-gray-400 hover:text-gray-600"
                                    aria-label="Close menu"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="p-6 overflow-y-auto max-h-[calc(100vh-80px)]">
                                <nav className="space-y-6">
                                    {menu.map((item) => (
                                        <div key={item.path}>
                                            {item.subItems ? (
                                                <>
                                                    <button
                                                        onClick={() => setActiveSubmenu(activeSubmenu === item.label ? null : item.label)}
                                                        className="flex items-center justify-between w-full text-left"
                                                    >
                            <span className={`text-lg ${pathname.startsWith(item.path) ? 'text-orange-500 font-medium' : 'text-gray-900'}`}>
                              {item.label}
                            </span>
                                                        <ChevronRight className={`w-5 h-5 transition-transform ${activeSubmenu === item.label ? 'rotate-90' : ''}`} />
                                                    </button>

                                                    <AnimatePresence>
                                                        {activeSubmenu === item.label && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: 'auto', opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                className="overflow-hidden"
                                                            >
                                                                <div className="pl-4 mt-4 space-y-4 border-l border-gray-100">
                                                                    {item.subItems.map((subItem) => (
                                                                        <Link
                                                                            key={subItem.path}
                                                                            href={subItem.path}
                                                                            className={`block text-base ${
                                                                                pathname === subItem.path ? 'text-orange-500' : 'text-gray-600 hover:text-gray-900'
                                                                            }`}
                                                                        >
                                                                            {subItem.label}
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </>
                                            ) : (
                                                <Link
                                                    href={item.path}
                                                    className={`block text-lg ${pathname === item.path ? 'text-orange-500 font-medium' : 'text-gray-900'}`}
                                                >
                                                    {item.label}
                                                </Link>
                                            )}
                                        </div>
                                    ))}
                                </nav>

                                <div className="mt-8 pt-6 border-t border-gray-100">

                                    <a href="tel:8337278534"
                                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full"
                                    >
                                    <Phone className="w-5 h-5" />
                                    <span>(833) 727-8534</span>
                                </a>
                            </div>
                    </div>
                    </motion.div>
                    </div>
                    )}
            </AnimatePresence>
        </div>
    );
}