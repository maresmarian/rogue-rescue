// src/data/partners.ts
export const PARTNERS = [
    {
        name: 'Liberty Mountain',
        url: 'https://libertymountain.com',
        logo: '/images/partners/liberty-mountain-logo.png',
        description: 'Premier provider of climbing and rescue equipment',
        relationship: 'Equipment Partner'
    },
    {
        name: 'Singing Rock',
        url: 'https://www.singingrock.com',
        logo: '/images/partners/singing-rock-logo.png',
        description: 'Professional climbing and rescue gear manufacturer',
        relationship: 'Technical Partner'
    },
    {
        name: 'Rope Rescue CZ',
        url: 'https://play.google.com/store/apps/details?id=cz.appkee.metodikavvh',
        logo: '/images/partners/rope-rescue-cz-logo.png',
        description: 'Leading rope rescue methodology provider',
        relationship: 'Training Partner'
    }
] as const;

// You can also add types if needed
export interface Partner {
    name: string;
    url: string;
    logo: string;
    description: string;
    relationship: string;
}