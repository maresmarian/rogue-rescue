// src/app/admin/registrations/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { Registration } from '@/types/training';
import { TRAINING_COURSES } from '@/data/training/courses';
import AdminRegistrationTable from '@/components/admin/AdminRegistrationTable';
import { Search, Filter, Shield } from 'lucide-react';

export default function RegistrationsPage() {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [filteredRegistrations, setFilteredRegistrations] = useState<
    Registration[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  useEffect(() => {
    fetchRegistrations();
  }, []);

  useEffect(() => {
    filterRegistrations();
  }, [searchTerm, selectedCourse, selectedStatus, registrations]);

  const fetchRegistrations = async () => {
    try {
      const response = await fetch('/api/registrations');
      const registrations = await response.json();

      // Sort by date, newest first
      const sortedRegistrations = registrations.sort(
        (a: Registration, b: Registration) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

      setRegistrations(sortedRegistrations);
      setFilteredRegistrations(sortedRegistrations);
    } catch (error) {
      console.error('Error fetching registrations:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filterRegistrations = () => {
    let filtered = [...registrations];

    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (reg) =>
          reg.firstName.toLowerCase().includes(search) ||
          reg.lastName.toLowerCase().includes(search) ||
          reg.email.toLowerCase().includes(search) ||
          reg.referenceNumber.toLowerCase().includes(search) ||
          reg.courseName.toLowerCase().includes(search)
      );
    }

    if (selectedCourse) {
      filtered = filtered.filter((reg) => reg.courseId === selectedCourse);
    }

    setFilteredRegistrations(filtered);
  };

  // src/app/admin/registrations/page.tsx
  const handleStatusUpdate = async (
    id: string,
    status: 'approved' | 'rejected'
  ) => {
    try {
      console.log('Updating status:', { id, status });

      const response = await fetch(`/api/registrations/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });

      const responseData = await response.json();
      console.log('Response data:', responseData);

      if (!response.ok) {
        console.error('Update failed:', responseData);
        throw new Error(
          responseData.error +
            (responseData.debug
              ? ` (Debug: ${JSON.stringify(responseData.debug)})`
              : '')
        );
      }

      await fetchRegistrations();
    } catch (error) {
      console.error('Error updating registration:', error);
      alert(error instanceof Error ? error.message : 'Failed to update status');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/registrations/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete registration');
      }

      await fetchRegistrations();
    } catch (error) {
      console.error('Error deleting registration:', error);
      // Tady bychom mohli přidat nějaké UI upozornění o chybě
    }
  };

  return (
    <div>
      <div className="md:flex md:items-center md:justify-between mb-8">
        <div className="flex-1 min-w-0">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-orange-500 mr-3" />
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              Course Registrations
            </h2>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            placeholder="Search registrations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <select
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm rounded-md"
        >
          <option value="">All Courses</option>
          {TRAINING_COURSES.map((course) => (
            <option key={course.id} value={course.id}>
              {course.title}
            </option>
          ))}
        </select>

        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm rounded-md"
        >
          <option value="">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500" />
        </div>
      ) : (
        <AdminRegistrationTable
          registrations={filteredRegistrations}
          onStatusUpdate={handleStatusUpdate}
          onDelete={handleDelete}
          refreshData={fetchRegistrations}
        />
      )}
    </div>
  );
}
