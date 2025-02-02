// src/app/admin/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { BarChart3, Calendar, Users, DollarSign, Clock } from 'lucide-react';
import { TRAINING_COURSES } from '@/data/training';
import type { Registration } from '@/types';
import Link from 'next/link';
import DashboardCharts from "@/components/admin/DashboardCharts";

interface DashboardStats {
    totalRegistrations: number;
    pendingRegistrations: number;
    totalRevenue: number;
    upcomingCourses: number;
}

export default function AdminDashboardPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [stats, setStats] = useState<DashboardStats>({
        totalRegistrations: 0,
        pendingRegistrations: 0,
        totalRevenue: 0,
        upcomingCourses: 0,
    });
    const [recentRegistrations, setRecentRegistrations] = useState<Registration[]>([]);
    

    useEffect(() => {
        fetchDashboardData();
    }, []);

    const fetchDashboardData = async () => {
        try {
            // Fetch registrations
            const response = await fetch('/api/registrations');
            const registrations = await response.json();

            // Calculate stats
            const totalRegistrations = registrations.length;
            const pendingRegistrations = registrations.filter(
                (reg: Registration) => reg.status === 'pending'
            ).length;

            const totalRevenue = registrations
                .filter((reg: Registration) => reg.status === 'approved')
                .reduce((total: number, reg: Registration) => {
                    const course = TRAINING_COURSES.find(c => c.id === reg.courseId);
                    return total + (course?.price || 0);
                }, 0);

            // Get upcoming courses count
            const today = new Date();
            const upcomingCourses = TRAINING_COURSES.reduce((count, course) => {
                const futureDates = course.dates.filter(dateObj => new Date(dateObj.date) > today);
                return count + futureDates.length;
            }, 0);

            // Set stats
            setStats({
                totalRegistrations,
                pendingRegistrations,
                totalRevenue,
                upcomingCourses,
            });

            // Set recent registrations (last 5)
            setRecentRegistrations(
                registrations
                    .sort((a: Registration, b: Registration) =>
                        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
                    )
                    .slice(0, 5)
            );
        } catch (error) {
            console.error('Error fetching dashboard data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-96">
                <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <DashboardCharts />
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="p-2 bg-blue-100 rounded-lg">
                            <Users className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Total Registrations</p>
                            <p className="text-2xl font-bold text-gray-900">{stats.totalRegistrations}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="p-2 bg-orange-100 rounded-lg">
                            <Clock className="w-6 h-6 text-orange-600" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Pending Approvals</p>
                            <p className="text-2xl font-bold text-gray-900">{stats.pendingRegistrations}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="p-2 bg-green-100 rounded-lg">
                            <DollarSign className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Total Revenue</p>
                            <p className="text-2xl font-bold text-gray-900">${stats.totalRevenue}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="p-2 bg-purple-100 rounded-lg">
                            <Calendar className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Upcoming Courses</p>
                            <p className="text-2xl font-bold text-gray-900">{stats.upcomingCourses}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Registrations */}
            <div className="bg-white rounded-xl shadow-sm">
                <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-gray-900">Recent Registrations</h2>
                        <Link
                            href="/admin/registrations"
                            className="text-sm text-orange-500 hover:text-orange-600"
                        >
                            View All
                        </Link>
                    </div>
                </div>
                <div className="p-6">
                    <div className="space-y-4">
                        {recentRegistrations.map((registration) => (
                            <div
                                key={registration._id}
                                className="flex items-center justify-between py-3 px-4 bg-gray-50 rounded-lg"
                            >
                                <div>
                                    <p className="font-medium text-gray-900">
                                        {registration.firstName} {registration.lastName}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {registration.courseName || registration.courseTitle}
                                    </p>
                                </div>
                                <div className="text-right">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      registration.status === 'approved' ? 'bg-green-100 text-green-800' :
                          registration.status === 'rejected' ? 'bg-red-100 text-red-800' :
                              'bg-yellow-100 text-yellow-800'
                  }`}>
                    {registration.status}
                  </span>
                                    <p className="text-sm text-gray-500 mt-1">
                                        {new Date(registration.createdAt).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}