// src/components/admin/layout/AdminHeader.tsx
'use client';

import { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { Menu, Bell, Settings, User, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MobileAdminNav from "@/components/admin/layout/MobileAdminNav";

export default function AdminHeader() {
    const { data: session } = useSession();
    const [showUserMenu, setShowUserMenu] = useState(false);

    const handleLogout = async () => {
        await signOut({ callbackUrl: '/admin/login' });
    };

    return (
        <header className="bg-white shadow-sm fixed top-0 right-0 left-0 z-50 md:left-64">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between">
                    <div className="flex flex-shrink-0 items-center">
                        <MobileAdminNav />
                        <span className="text-2xl font-bold text-orange-500">Rogue Rescue</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="p-2 text-gray-400 hover:text-gray-500">
                            <Bell className="h-6 w-6" />
                        </button>

                        <div className="relative">
                            <button
                                onClick={() => setShowUserMenu(!showUserMenu)}
                                className="flex items-center gap-2 p-2 text-gray-600 hover:text-gray-900"
                            >
                                <User className="h-6 w-6" />
                                <span>{session?.user?.name}</span>
                            </button>

                            <AnimatePresence>
                                {showUserMenu && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-1 ring-1 ring-black ring-opacity-5"
                                    >
                                        <button
                                            onClick={handleLogout}
                                            className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                                        >
                                            <LogOut className="w-4 h-4" />
                                            Sign Out
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}