// src/app/admin/settings/company/page.tsx
'use client';

import { useState } from 'react';
import { Building, Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO, CONTACT_INFO } from '@/data';

export default function CompanySettingsPage() {
  const [companyInfo, setCompanyInfo] = useState({
    name: COMPANY_INFO.name,
    phone: CONTACT_INFO.phone.display,
    email: CONTACT_INFO.email.general,
    address: {
      street: CONTACT_INFO.address.street,
      city: CONTACT_INFO.address.city,
      state: CONTACT_INFO.address.state,
      zip: CONTACT_INFO.address.zip,
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement update functionality
    console.log('Update company info:', companyInfo);
  };

  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Company Settings
      </h1>

      <div className="bg-white rounded-xl shadow-sm">
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <Building className="w-4 h-4" />
              Company Name
            </label>
            <input
              type="text"
              value={companyInfo.name}
              onChange={(e) =>
                setCompanyInfo({ ...companyInfo, name: e.target.value })
              }
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <Phone className="w-4 h-4" />
              Phone Number
            </label>
            <input
              type="tel"
              value={companyInfo.phone}
              onChange={(e) =>
                setCompanyInfo({ ...companyInfo, phone: e.target.value })
              }
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <Mail className="w-4 h-4" />
              Email Address
            </label>
            <input
              type="email"
              value={companyInfo.email}
              onChange={(e) =>
                setCompanyInfo({ ...companyInfo, email: e.target.value })
              }
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <MapPin className="w-4 h-4" />
              Address
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Street"
                value={companyInfo.address.street}
                onChange={(e) =>
                  setCompanyInfo({
                    ...companyInfo,
                    address: { ...companyInfo.address, street: e.target.value },
                  })
                }
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
              <input
                type="text"
                placeholder="City"
                value={companyInfo.address.city}
                onChange={(e) =>
                  setCompanyInfo({
                    ...companyInfo,
                    address: { ...companyInfo.address, city: e.target.value },
                  })
                }
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
              <input
                type="text"
                placeholder="State"
                value={companyInfo.address.state}
                onChange={(e) =>
                  setCompanyInfo({
                    ...companyInfo,
                    address: { ...companyInfo.address, state: e.target.value },
                  })
                }
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
              <input
                type="text"
                placeholder="ZIP Code"
                value={companyInfo.address.zip}
                onChange={(e) =>
                  setCompanyInfo({
                    ...companyInfo,
                    address: { ...companyInfo.address, zip: e.target.value },
                  })
                }
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
