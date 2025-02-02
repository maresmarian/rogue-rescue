// src/components/sections/TrainingWrapper.tsx
'use client';

import { useEffect, useState } from "react";
import type { TrainingCourse } from "@/types";
import Training from './Training';

export default function TrainingWrapper() {
    const [isLoading, setIsLoading] = useState(true);
    const [courses, setCourses] = useState<TrainingCourse[]>([]);

    const fetchCourses = async () => {
        try {
            const response = await fetch('/api/courses/availability', {
                cache: 'no-store',  // Přidáme no-store pro vždy aktuální data
                next: { revalidate: 0 }
            });
            if (!response.ok) throw new Error('Failed to fetch courses');
            const data = await response.json();
            setCourses(data);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchCourses();

        // Přidáme interval pro pravidelnou aktualizaci
        const interval = setInterval(fetchCourses, 30000); // každých 30 sekund

        return () => clearInterval(interval);
    }, []);

    return <Training courses={courses} isLoading={isLoading} />;
}