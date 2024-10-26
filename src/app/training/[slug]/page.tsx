import { TRAINING_COURSES } from '@/lib/constants';
import ClientCoursePage from './ClientPage';
import { Metadata } from 'next';

interface PageParams {
    slug: string;
}

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
    const course = TRAINING_COURSES.find(c => c.slug === params.slug);
    return {
        title: course ? `${course.title} - Training Course` : 'Training Course',
        description: course?.description || 'Professional rescue training course details'
    };
}

export async function generateStaticParams(): Promise<PageParams[]> {
    return TRAINING_COURSES.map((course) => ({
        slug: course.slug
    }));
}

export default async function CoursePage({ params }: { params: PageParams }) {
    return <ClientCoursePage params={params} />;
}