// src/data/navigation.ts
export type MenuItem = {
    label: string;
    path: string;
    subItems?: { label: string; path: string; }[];
};

export const MENU_ITEMS: MenuItem[] = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    {
        label: 'Services',
        path: '/services',
        subItems: [
            { label: 'Wildfire EMS', path: '/services/wildfire-ems' },
            { label: 'Technical Rescue', path: '/services/technical-rescue' },
            { label: 'High Angle Rescue', path: '/services/high-angle' },
        ]
    },
    { label: 'Training', path: '/training' },
    { label: 'Contact', path: '/contact' }
];