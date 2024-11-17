import { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
        template: '%s - Rogue Rescue Training',
        default: 'Training Courses - Rogue Rescue',
    },
    description: 'Professional rescue and emergency response training courses'
};

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