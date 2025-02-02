// src/components/admin/layout/navigationItems.ts
import { Layout, Users, Calendar, Settings, Building } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface NavigationItem {
    name: string;
    href: string;
    icon: LucideIcon;
    subItems?: {
        name: string;
        href: string;
        icon: LucideIcon;
    }[];
}

export const navigationItems: NavigationItem[] = [
    { name: 'Dashboard', href: '/admin', icon: Layout },
    { name: 'Registrations', href: '/admin/registrations', icon: Calendar },
    {
        name: 'Settings',
        href: '/admin/settings',
        icon: Settings,
        subItems: [
            { name: 'Users', href: '/admin/settings/users', icon: Users },
            { name: 'Company', href: '/admin/settings/company', icon: Building },
        ]
    },
];