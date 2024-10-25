import BaseTemplate from '@/components/layout/BaseTemplate';
import FAQ from '@/components/sections/FAQ';

export default function AboutPage() {
    return (
        <BaseTemplate>
            <div className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                        About Rogue Rescue
                    </h1>
                    {/* Add your about content here */}
                </div>
            </div>
            <FAQ />
        </BaseTemplate>
    );
}