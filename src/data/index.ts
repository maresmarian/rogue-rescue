import { COMPANY_STATS } from "@/data/stats";
import { CONTACT_INFO } from "@/data/contact";
import { COMPANY_INFO } from "@/data/company";
import { MENU_ITEMS } from "@/data/navigation";

export * from './contact';
export * from './stats';
export * from './company';
export * from './services';
export * from './partners';
export * from './navigation';

export const SITE_CONFIG = {
    company: COMPANY_INFO,
    contact: CONTACT_INFO,
    stats: COMPANY_STATS,
    menu: MENU_ITEMS
};