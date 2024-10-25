import PageTransitions from '@/components/common/PageTransitions';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import Footer from '@/components/layout/Footer';

interface BaseTemplateProps {
    children: React.ReactNode;
    showBreadcrumbs?: boolean;
}

export default function BaseTemplate({ children, showBreadcrumbs = true }: BaseTemplateProps) {
    return (
        <PageTransitions>
            {showBreadcrumbs && <Breadcrumbs />}
            <main className="pt-20 min-h-screen bg-gradient-to-b from-white to-gray-50">
                {children}
            </main>
            <Footer />
        </PageTransitions>
    );
}