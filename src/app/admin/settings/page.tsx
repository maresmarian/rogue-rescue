// src/app/admin/settings/page.tsx
'use client';

import Link from 'next/link';
import { Users, Building } from 'lucide-react';

const SETTINGS_SECTIONS = [
    {
        title: 'Users',
        description: 'Manage admin users and permissions',
        icon: Users,
        href: '/admin/settings/users',
    },
    {
        title: 'Company',
        description: 'Update company information and settings',
        icon: Building,
        href: '/admin/settings/company',
    },
];

export default function SettingsPage() {
    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Settings</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SETTINGS_SECTIONS.map((section) => {
                    const Icon = section.icon;
                    return (
                        <Link
                            key={section.title}
                            href={section.href}
                            className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-2 bg-orange-100 rounded-lg">
                                    <Icon className="w-6 h-6 text-orange-500" />
                                </div>
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-900">
                                        {section.title}
                                    </h2>
                                    <p className="text-sm text-gray-500">
                                        {section.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}