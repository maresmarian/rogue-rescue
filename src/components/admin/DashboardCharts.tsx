// src/components/admin/DashboardCharts.tsx
'use client';

import { useState, useEffect } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell
} from 'recharts';

const COLORS = ['#f4511e', '#3b82f6', '#10b981', '#8b5cf6', '#f59e0b'];

interface RegistrationsByDate {
    date: string;
    count: number;
}

interface RegistrationsByCourse {
    name: string;
    value: number;
}

interface PieChartData {
    name: string;
    percent: number;
}

export default function DashboardCharts() {
    const [registrationsByDate, setRegistrationsByDate] = useState<RegistrationsByDate[]>([]);
    const [registrationsByCourse, setRegistrationsByCourse] = useState<RegistrationsByCourse[]>([]);

    useEffect(() => {
        fetchChartData();
    }, []);

    const fetchChartData = async () => {
        try {
            const response = await fetch('/api/admin/dashboard/charts');
            const data = await response.json();
            setRegistrationsByDate(data.byDate);
            setRegistrationsByCourse(data.byCourse);
        } catch (error) {
            console.error('Error fetching chart data:', error);
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            {/* Daily Registrations Chart */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Registrations (Last 30 Days)
                </h3>
                <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={registrationsByDate}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis
                                dataKey="date"
                                tick={{ fontSize: 12 }}
                                interval={6}
                            />
                            <YAxis
                                tick={{ fontSize: 12 }}
                                allowDecimals={false}
                            />
                            <Tooltip />
                            <Bar dataKey="count" fill="#f4511e" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Registrations by Course Chart */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Registrations by Course
                </h3>
                <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={registrationsByCourse}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={({ name, percent }: PieChartData) => `${name} (${(percent * 100).toFixed(0)}%)`}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {registrationsByCourse.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}