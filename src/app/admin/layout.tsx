// src/app/admin/layout.tsx
'use client';

import { useSession } from 'next-auth/react';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import AdminHeader from '@/components/admin/layout/AdminHeader';
import AdminSidebar from '@/components/admin/layout/AdminSidebar';

export default function AdminLayout({
                                        children,
                                    }: {
    children: React.ReactNode;
}) {
    const { status } = useSession();
    const pathname = usePathname();
    const isLoginPage = pathname === '/admin/login';

    // Pokud jsme na login stránce, renderujeme pouze obsah bez admin layoutu
    if (isLoginPage) {
        return <>{children}</>;
    }

    // Loading stav
    if (status === 'loading') {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    // Admin layout pro přihlášené uživatele
    return (
        <div>
            <AdminHeader />
            <AdminSidebar />
            <div className="md:pl-64 pt-16">
                <main className="py-10">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}