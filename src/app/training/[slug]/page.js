import { TRAINING_COURSES } from '@/lib/constants';
import ClientCoursePage from './ClientPage';

export function generateStaticParams() {
    return TRAINING_COURSES.map((course) => ({
        slug: course.slug,
    }));
}

export function generateMetadata({ params }) {
    const course = TRAINING_COURSES.find(c => c.slug === params.slug);
    return {
        title: course ? `${course.title} - Training Course` : 'Training Course',
        description: course?.description || 'Professional rescue training course details'
    };
}

export default function CoursePage({ params }) {
    return <ClientCoursePage params={params} />;
}