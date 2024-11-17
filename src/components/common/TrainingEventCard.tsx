// src/components/common/TrainingEventCard.tsx
import { Calendar, ArrowRight } from 'lucide-react';
import { TrainingEvent } from '@/types';
import { motion } from 'framer-motion';

interface TrainingEventCardProps {
    event: TrainingEvent;
    onClick?: () => void;
}

export default function TrainingEventCard({ event, onClick }: TrainingEventCardProps) {
    return (
        <motion.div
            whileHover={{ x: 5 }}
            className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group"
            onClick={onClick}
        >
            <div className="h-16 w-16 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Calendar className="w-8 h-8 text-orange-500" />
            </div>
            <div className="flex-grow">
                <h4 className="font-bold text-gray-900">{event.title}</h4>
                <p className="text-gray-600">{event.date.toLocaleDateString()}</p>
                <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm text-orange-500">{event.spots} spots available</span>
                    <span className="text-sm text-gray-400">•</span>
                    <span className="text-sm text-gray-600 capitalize">{event.type}</span>
                </div>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors" />
        </motion.div>
    );
}