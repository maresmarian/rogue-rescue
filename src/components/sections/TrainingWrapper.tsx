// src/components/sections/TrainingWrapper.tsx
'use client';

import { useEffect, useState } from 'react';
import type { TrainingCourse } from '@/types';
import Training from './Training';

// src/components/sections/TrainingWrapper.tsx

export default function TrainingWrapper() {
  const [courses, setCourses] = useState<TrainingCourse[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCourses = async () => {
    try {
      const response = await fetch('/api/courses/availability', {
        cache: 'no-store',
        next: { revalidate: 0 },
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
