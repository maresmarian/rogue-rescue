// src/data/contact.ts
import { EmergencyContact } from "@/types/contact";

export const CONTACT_INFO = {
    phone: {
        display: "+1 541 301 0579",
        value: "+15413010579",
        emergency: true
    },
    email: {
        general: "weidman.roguerescue@gmail.com",
        training: "training@roguerescue.com",
        support: "support@roguerescue.com"
    },
    address: {
        street: "2885 Oakridge Ave",
        city: "Central Point",
        state: "OR",
        zip: "97502",
        country: "United States",
        coordinates: {
            lat: 42.341238952148935,
            lng: -122.94186183024644
        }
    },
    hours: {
        office: {
            weekdays: "9:00 AM - 5:00 PM",
            weekends: "Closed"
        },
        emergency: "24/7 Emergency Response"
    },
    social: {
        facebook: "https://facebook.com/roguerescue",
        instagram: "https://instagram.com/roguerescue",
        linkedin: "https://linkedin.com/company/roguerescue"
    }
};

export const EMERGENCY_CONTACTS: EmergencyContact[] = [
    {
        name: 'Emergency Hotline',
        description: 'For life-threatening emergencies',
        number: {
            display: '911',
            value: '911'
        },
        priority: 1,
        isPublicService: true
    },
    {
        name: 'Rogue Rescue 24/7',
        description: 'Professional rescue services',
        number: {
            display: "+1 541 301 0579",
            value: "+15413010579",
        },
        priority: 2
    }
];

export const EMERGENCY_INFO = {
    title: 'Emergency Contact',
    warning: 'For immediate emergency assistance:',
    disclaimer: "Please note: If you're experiencing a life-threatening emergency, always call 911 first.",
    available: '24/7 Emergency Services Available'
};