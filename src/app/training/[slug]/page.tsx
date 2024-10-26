import { TRAINING_COURSES } from '@/lib/constants';
import ClientCoursePage from './ClientPage';

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
    const course = TRAINING_COURSES.find(c => c.slug === params.slug);
    return {
        title: course ? `${course.title} - Training Course` : 'Training Course',
        description: course?.description || 'Professional rescue training course details'
    };
};

export function generateStaticParams() {
    return TRAINING_COURSES.map((course) => ({
        slug: course.slug
    }));
}

export default function CoursePage({ params }: { params: { slug: string } }) {
    return <ClientCoursePage params={params} />;
}