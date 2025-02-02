// src/components/common/TrainingEventCard.tsx

'use client';

import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import type { TrainingEvent } from '@/types';
import { formatDateForURL, formatDay, formatMonth } from '@/lib/formatDate';

interface TrainingEventCardProps {
  event: TrainingEvent;
  variant?: 'calendar' | 'default';
  onClick?: () => void;
}

export default function TrainingEventCard({
  event,
  variant = 'default',
  onClick,
}: TrainingEventCardProps) {
  return (
    <motion.div
      whileHover={{ x: 5 }}
      className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group"
      onClick={onClick}
    >
      {variant === 'calendar' ? (
        <div className="h-16 w-16 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
          <Calendar className="w-8 h-8 text-orange-500" />
        </div>
      ) : (
        <div className="h-16 w-16 bg-orange-100 rounded-xl flex flex-col items-center justify-center flex-shrink-0">
          <span className="text-orange-500 font-bold">
            {formatDay(event.date)}
          </span>
          <span className="text-orange-500 text-sm">
            {formatMonth(event.date)}
          </span>
        </div>
      )}

      <div className="flex-grow min-w-0">
        <h4 className="font-bold text-gray-900 truncate">{event.title}</h4>
        {variant === 'calendar' ? (
          <p className="text-gray-600 truncate">
            {new Date(event.date).toLocaleDateString()}
          </p>
        ) : (
          <p className="text-gray-600 truncate">{event.location}</p>
        )}
        <div className="flex items-center gap-2 mt-1 flex-wrap">
          {variant === 'default' && (
            <span className="text-sm bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full">
              {event.category}
            </span>
          )}
          <span className="text-sm text-orange-500">
            {event.spotsAvailable} spots available
          </span>
          <span className="text-sm text-gray-400">•</span>
          <span className="text-sm text-gray-600 capitalize">
            {variant === 'calendar' ? event.type : `$${event.price}`}
          </span>
        </div>
      </div>

      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors flex-shrink-0" />
    </motion.div>
  );
}
