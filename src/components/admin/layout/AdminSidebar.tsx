// src/components/admin/layout/AdminSidebar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Layout,
    Users,
    Calendar,
    Settings,
    FileText,
    BarChart, User
} from 'lucide-react';

const navigation = [
    { name: 'Dashboard', href: '/admin', icon: Layout },
    { name: 'Registrations', href: '/admin/registrations', icon: Users },
    { name: 'Admin Users', href: '/admin/users', icon: User },
    { name: 'Courses', href: '/admin/courses', icon: Calendar },
    { name: 'Reports', href: '/admin/reports', icon: FileText },
    { name: 'Analytics', href: '/admin/analytics', icon: BarChart },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
];

export default function AdminSidebar() {
    const pathname = usePathname();

    return (
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
            <div className="flex min-h-0 flex-1 flex-col bg-gray-900">
                <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
                    <nav className="mt-5 flex-1 space-y-1 px-2">
                        {navigation.map((item) => {
                            const isActive = pathname === item.href;
                            const Icon = item.icon;

                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                                        isActive
                                            ? 'bg-gray-800 text-white'
                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                    }`}
                                >
                                    <Icon
                                        className={`mr-3 h-6 w-6 flex-shrink-0 ${
                                            isActive ? 'text-orange-500' : 'text-gray-400 group-hover:text-gray-300'
                                        }`}
                                    />
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </div>
        </div>
    );
}