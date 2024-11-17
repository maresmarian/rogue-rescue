// src/app/training/[slug]/page.tsx

import { TRAINING_COURSES } from '@/data/training';
import ClientCoursePage from './ClientPage';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { TrainingCourse } from '@/types';

interface Props {
    params: { slug: string };
    searchParams?: { [key: string]: string | string[] | undefined };
}

export const dynamic = 'force-static';
export const dynamicParams = false;

// This ensures all paths are generated at build time
export async function generateStaticParams() {
    // Use the existing slugs from the courses data
    const paths = TRAINING_COURSES.map((course) => ({
        slug: course.slug // Use the existing slug directly
    }));

    console.log('Generated paths:', paths); // For debugging
    return paths;
}

// Metadata for each course page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await Promise.resolve(params);
    const course = TRAINING_COURSES.find(c => c.slug === resolvedParams.slug);

    if (!course) {
        return {
            title: 'Course Not Found',
            description: 'The requested training course could not be found.'
        };
    }

    return {
        title: `${course.title} - Rogue Rescue Training`,
        description: course.description,
        openGraph: {
            title: course.title,
            description: course.description,
            images: [{ url: course.image }]
        },
    };
}

export default async function CoursePage({ params, searchParams = {} }: Props) {
    const resolvedParams = await Promise.resolve(params);
    const course = TRAINING_COURSES.find(c => c.slug === resolvedParams.slug);

    if (!course) {
        notFound();
    }

    return <ClientCoursePage
        course={course}
        params={resolvedParams}
        searchParams={searchParams}
    />;
}