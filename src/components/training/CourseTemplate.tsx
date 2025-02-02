// src/components/training/CourseTemplate.tsx
'use client';

import { motion } from 'framer-motion';
import {
  Clock,
  Users,
  Award,
  MapPin,
  Calendar,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Target,
  ShieldCheck,
  GraduationCap,
  AlertTriangle,
  Package,
  Construction,
  MountainSnow,
  Link,
  Link2,
  Trophy,
  HeartPulse,
  AlertCircle,
} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { CourseTemplateProps } from '@/types/training';
import type { LucideIcon } from 'lucide-react';
import { formatCourseDate, formatDateForDisplay } from '@/lib/formatDate';

const ICON_MAP: Record<string, LucideIcon> = {
  BookOpen,
  Construction,
  MountainSnow,
  Link,
  Link2,
  Trophy,
  HeartPulse,
  GraduationCap,
};

export default function CourseTemplate({
  course,
  onRegister,
  selectedDate: initialDate,
}: CourseTemplateProps) {
  const [selectedDate, setSelectedDate] = useState(initialDate || '');

  const getAvailableSpots = (date: string | null) => {
    if (!date) return 0;
    return course.dates.find((d) => d.date === date)?.spotsAvailable || 0;
  };

  const handleRegister = () => {
    const availableSpots = getAvailableSpots(selectedDate);
    if (availableSpots <= 0) {
      alert(
        'This course is currently full. Please choose another date or contact us for waiting list.'
      );
      return;
    }
    onRegister(selectedDate);
  };

  // Helper function to get icon component from string name
  const getIconComponent = (iconName: string): LucideIcon => {
    return ICON_MAP[iconName] || BookOpen;
  };

  const formatSelectDate = (date: string) => {
    const d = new Date(date);
    return d.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </motion.div>

        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center gap-4">
                <span className="bg-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-medium">
                  {course.category}
                </span>
                <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  {course.level}
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                {course.title}
              </h1>

              <div className="grid grid-cols-3 gap-8 py-6">
                <div className="flex items-center gap-3 text-white/90">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60">Duration</div>
                    <div className="font-medium">{course.duration}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-white/90">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60">Capacity</div>
                    <div className="font-medium">
                      {course.maxParticipants} spots
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-white/90">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60">Location</div>
                    <div className="font-medium">{course.location}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Course Schedule */}
              <div className="bg-orange-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Program Schedule
                </h3>
                <div className="space-y-6">
                  {course.schedule.map((day, index) => {
                    const DayIcon = getIconComponent(day.icon);
                    return (
                      <motion.div
                        key={index}
                        className="relative pl-12"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="absolute left-0 top-0 w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                          <DayIcon className="w-5 h-5 text-orange-500" />
                        </div>
                        <div className="bg-white rounded-xl p-4 shadow-sm">
                          <h4 className="font-bold text-gray-900">
                            Day {day.day}
                          </h4>
                          <p className="text-gray-600">{day.focus}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Course Description Blocks */}
              <div className="space-y-8">
                {course.description.split('\n\n').map((block, index) => {
                  // Handle bullet point sections
                  if (block.includes('•')) {
                    const [title, ...points] = block.split('\n');
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 rounded-xl p-6"
                      >
                        {title && (
                          <h3 className="text-xl font-bold text-gray-900 mb-4">
                            {title.replace(':', '')}
                          </h3>
                        )}
                        <div className="space-y-3">
                          {points.map((point, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                              <span className="text-gray-700">
                                {point.replace('•', '').trim()}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    );
                  }

                  // Regular paragraphs
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="prose prose-lg max-w-none"
                    >
                      <p className="text-gray-600">{block.trim()}</p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Prerequisites */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-orange-500" />
                  Prerequisites
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.prerequisites.map((prereq, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm"
                    >
                      <CheckCircle2 className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{prereq}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's Included */}
              <div className="bg-white rounded-2xl border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Package className="w-6 h-6 text-orange-500" />
                  What's Included
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.includes.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl"
                    >
                      <CheckCircle2 className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Registration Sidebar */}
            <div className="lg:col-start-3">
              <div className="sticky top-24 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-baseline justify-between mb-6">
                  <span className="text-3xl font-bold text-gray-900">
                    ${course.price}
                  </span>
                  <span className="text-gray-500">{course.duration}</span>
                </div>

                <div className="space-y-3 mb-3">
                  {' '}
                  {/* Změna z mb-6 na space-y-6 pro lepší spacing */}
                  {/* Datum */}
                  <div className="flex items-center gap-3 text-gray-600">
                    <Calendar className="w-5 h-5 flex-shrink-0" />
                    <select
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="flex-1 bg-white border border-gray-200 rounded-lg px-3 py-2"
                    >
                      <option value="">Select a date</option>
                      {course.dates.map(({ date }) => (
                        <option key={date} value={date}>
                          {formatSelectDate(date)}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/* Lokace - vždy viditelná */}
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 flex-shrink-0" />
                    <span>{course.location}</span>
                  </div>
                  {/* Dostupnost - pouze když je vybráno datum */}
                  {selectedDate && (
                    <div
                      className={`flex items-center gap-3 ${
                        getAvailableSpots(selectedDate) > 0
                          ? 'text-green-600'
                          : 'text-red-600'
                      }`}
                    >
                      <Users className="w-5 h-5 flex-shrink-0" />
                      <span>
                        {getAvailableSpots(selectedDate) > 0
                          ? `${getAvailableSpots(selectedDate)} spots available`
                          : 'Course Full'}
                      </span>
                    </div>
                  )}
                </div>

                <button
                  onClick={handleRegister}
                  disabled={
                    !selectedDate || getAvailableSpots(selectedDate) <= 0
                  }
                  className="w-full bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {!selectedDate
                    ? 'Select a Date'
                    : getAvailableSpots(selectedDate) <= 0
                      ? 'Course Full'
                      : 'Register Now'}
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-sm text-gray-500 text-center mt-4">
                  * Equipment and materials included
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
