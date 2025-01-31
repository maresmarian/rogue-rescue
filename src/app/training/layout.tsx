import { Metadata } from 'next';

export const metadata = {
    metadataBase: new URL('https://rogue.marianmares.cz'),
    title: {
        template: '%s | Rogue Rescue',
        default: 'Rogue Rescue - Professional Rescue Services',
    },
    description: 'Professional rescue services and comprehensive training solutions',
};

export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Revalidate every hour, adjust as needed

export default function TrainingLayout({
                                           children,
                                       }: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-white">
            {children}
        </div>
    );
}