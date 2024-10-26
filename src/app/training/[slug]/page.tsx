// src/app/training/[slug]/page.tsx
import { TRAINING_COURSES } from '@/lib/constants';
import ClientCoursePage from './ClientPage';
import { Metadata } from 'next';

type Props = {
    params: { slug: string }
}

export function generateMetadata({ params }: Props): Metadata {
    const course = TRAINING_COURSES.find(c => c.slug === params.slug);
    return {
        title: course ? `${course.title} - Training Course` : 'Training Course',
        description: course?.description || 'Professional rescue training course details'
    };
}

export function generateStaticParams() {
    return TRAINING_COURSES.map((course) => ({
        slug: course.slug
    }));
}

export default function CoursePage(props: Props) {
    return <ClientCoursePage {...props} />;
}