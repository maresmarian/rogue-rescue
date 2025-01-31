// src/components/admin/AdminRegistrationTable.tsx
import { Registration } from '@/types/training';
import { formatDateForDisplay } from '@/lib/formatDate';
import { Check, X, Trash2, AlertCircle } from 'lucide-react';
import { useState } from 'react';

interface AdminRegistrationTableProps {
    registrations: Registration[];
    onStatusUpdate: (id: string, status: 'approved' | 'rejected') => Promise<void>;
    onDelete: (id: string) => Promise<void>;
    refreshData: () => Promise<void>;
}

export default function AdminRegistrationTable({
                                                   registrations,
                                                   onStatusUpdate,
                                                   onDelete,
                                                   refreshData
                                               }: AdminRegistrationTableProps) {
    const [deleteConfirmation, setDeleteConfirmation] = useState<string | null>(null);
    const [actionInProgress, setActionInProgress] = useState<string | null>(null);

    return (
        <>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Reference
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Course
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Student
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Contact
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {registrations.map((registration) => (
                            <tr key={registration._id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {registration.referenceNumber}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {registration.courseName || registration.courseTitle ||
                                        `Unknown Course (${registration.courseId})`}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {formatDateForDisplay(registration.selectedDate)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">
                                        {registration.firstName} {registration.lastName}
                                    </div>
                                    <div className="text-sm text-gray-500">{registration.company}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{registration.email}</div>
                                    <div className="text-sm text-gray-500">{registration.phone}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                   <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full
                     ${registration.status === 'approved' ? 'bg-green-100 text-green-800' :
                       registration.status === 'rejected' ? 'bg-red-100 text-red-800' :
                           'bg-yellow-100 text-yellow-800'}`}
                   >
                     {registration.status}
                   </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <div className="flex space-x-2">
                                        {registration.status === 'pending' && (
                                            <>
                                                <button
                                                    onClick={async () => {
                                                        setActionInProgress(`approve-${registration._id}`);
                                                        await onStatusUpdate(registration._id, 'approved');
                                                        setActionInProgress(null);
                                                    }}
                                                    disabled={actionInProgress === `approve-${registration._id}`}
                                                    className="text-green-600 hover:text-green-900 p-1 rounded-full hover:bg-green-100 disabled:opacity-50"
                                                    title="Approve"
                                                >
                                                    {actionInProgress === `approve-${registration._id}` ? (
                                                        <div className="w-5 h-5 border-2 border-green-600 border-t-transparent rounded-full animate-spin" />
                                                    ) : (
                                                        <Check className="w-5 h-5" />
                                                    )}
                                                </button>
                                                <button
                                                    onClick={async () => {
                                                        setActionInProgress(`reject-${registration._id}`);
                                                        await onStatusUpdate(registration._id, 'rejected');
                                                        setActionInProgress(null);
                                                    }}
                                                    disabled={actionInProgress === `reject-${registration._id}`}
                                                    className="text-red-600 hover:text-red-900 p-1 rounded-full hover:bg-red-100 disabled:opacity-50"
                                                    title="Reject"
                                                >
                                                    {actionInProgress === `reject-${registration._id}` ? (
                                                        <div className="w-5 h-5 border-2 border-red-600 border-t-transparent rounded-full animate-spin" />
                                                    ) : (
                                                        <X className="w-5 h-5" />
                                                    )}
                                                </button>
                                            </>
                                        )}
                                        <button
                                            onClick={() => setDeleteConfirmation(registration._id)}
                                            disabled={actionInProgress === `delete-${registration._id}`}
                                            className="text-gray-600 hover:text-gray-900 p-1 rounded-full hover:bg-gray-100 disabled:opacity-50"
                                            title="Delete"
                                        >
                                            {actionInProgress === `delete-${registration._id}` ? (
                                                <div className="w-5 h-5 border-2 border-gray-600 border-t-transparent rounded-full animate-spin" />
                                            ) : (
                                                <Trash2 className="w-5 h-5" />
                                            )}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Delete Confirmation Modal */}
            {deleteConfirmation && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-8 max-w-md mx-4">
                        <div className="flex items-center mb-4">
                            <AlertCircle className="h-6 w-6 text-red-500 mr-2" />
                            <h3 className="text-lg font-medium text-gray-900">Confirm Deletion</h3>
                        </div>
                        <p className="mb-4 text-gray-500">
                            Are you sure you want to delete this registration? This action cannot be undone.
                        </p>
                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={() => setDeleteConfirmation(null)}
                                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={async () => {
                                    if (deleteConfirmation) {
                                        setActionInProgress(`delete-${deleteConfirmation}`);
                                        await onDelete(deleteConfirmation);
                                        setActionInProgress(null);
                                        setDeleteConfirmation(null);
                                    }
                                }}
                                disabled={actionInProgress?.startsWith('delete')}
                                className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md disabled:opacity-50"
                            >
                                {actionInProgress?.startsWith('delete') ? (
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto" />
                                ) : (
                                    'Delete'
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}