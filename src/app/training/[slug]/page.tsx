import { TRAINING_COURSES } from '@/lib/constants';
import ClientCoursePage from './ClientPage';
import { Metadata } from 'next';

type Props = {
    params: {
        slug: string;
    };
    searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const course = TRAINING_COURSES.find(c => c.slug === params.slug);
    return {
        title: course ? `${course.title} - Training Course` : 'Training Course',
        description: course?.description || 'Professional rescue training course details'
    };
}

export function generateStaticParams() {
    return TRAINING_COURSES.map((course) => ({
        slug: course.slug,
    }));
}

// Add 'use server' directive at the top level
export default function CoursePage({ params }: Props) {
    return <ClientCoursePage params={params} />;
}