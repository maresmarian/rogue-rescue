// src/components/layout/Navigation.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Shield, Phone } from 'lucide-react';
import MobileMenu from './MobileMenu';
import { MENU_ITEMS } from '@/data/navigation';
import { CONTACT_INFO, COMPANY_INFO } from '@/data';
import Image from 'next/image';

export default function Navigation() {
  const pathname = usePathname();

  // Helper function to check if a path is active
  const isActivePath = (path: string, itemPath: string) => {
    if (itemPath === '/') {
      return path === itemPath;
    }
    return path.startsWith(itemPath);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-10 w-10 flex items-center justify-center">
              <Image
                src="/logo/logo.png"
                alt="Rogue Rescue Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="font-bold text-xl text-gray-900">
              {COMPANY_INFO.name}
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {MENU_ITEMS.map((item) => {
              const isActive =
                isActivePath(pathname, item.path) ||
                (item.subItems &&
                  item.subItems.some((subItem) =>
                    isActivePath(pathname, subItem.path)
                  ));

              return (
                <div key={item.path} className="relative group">
                  <Link href={item.path} className="py-2">
                    <span
                      className={`text-sm ${
                        isActive
                          ? 'text-orange-500 font-medium'
                          : 'text-gray-600 hover:text-gray-900'
                      } transition-colors`}
                    >
                      {item.label}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="navUnderline"
                        className="absolute left-0 right-0 h-0.5 bg-orange-500 bottom-0"
                      />
                    )}
                  </Link>

                  {item.subItems && (
                    <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[200px]">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.path}
                            href={subItem.path}
                            className={`block px-4 py-2 text-sm ${
                              isActivePath(pathname, subItem.path)
                                ? 'text-orange-500 bg-orange-50 font-medium'
                                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                            } transition-colors`}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            <a
              href={`tel:${CONTACT_INFO.phone.value}`}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>{CONTACT_INFO.phone.display}</span>
            </a>
          </div>

          <MobileMenu menu={MENU_ITEMS} />
        </div>
      </div>
    </nav>
  );
}
