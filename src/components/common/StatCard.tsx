// src/components/common/StatCard.tsx
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
    icon: LucideIcon;
    value: string;
    label: string;
}

export default function StatCard({ icon: Icon, value, label }: StatCardProps) {
    return (
        <div className="bg-gray-800 rounded-2xl p-6">
            <Icon className="w-8 h-8 text-orange-500 mb-4" />
            <h4 className="text-3xl font-bold text-white mb-2">{value}</h4>
            <p className="text-gray-400">{label}</p>
        </div>
    );
}