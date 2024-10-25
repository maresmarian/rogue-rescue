// src/components/common/SectionTitle.tsx
interface SectionTitleProps {
    title: string;
    subtitle?: string;
    light?: boolean;
}

export default function SectionTitle({ title, subtitle, light = false }: SectionTitleProps) {
    return (
        <div className="mb-12">
            <h2 className={`text-4xl font-bold ${light ? 'text-white' : 'text-gray-900'} mb-4`}>
                {title}
            </h2>
            {subtitle && (
                <p className={`${light ? 'text-gray-400' : 'text-gray-600'} max-w-2xl`}>
                    {subtitle}
                </p>
            )}
        </div>
    );
}