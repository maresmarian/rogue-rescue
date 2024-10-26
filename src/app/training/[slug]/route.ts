import { TRAINING_COURSES } from '@/lib/constants';

export async function generateStaticParams() {
    return TRAINING_COURSES.map((course) => ({
        slug: course.slug
    }));
}

export const metadata = {
    title: 'Training Course',
    description: 'Professional rescue training course details'
};

export const dynamicParams = false;