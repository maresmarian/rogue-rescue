// src/lib/formatDate.ts
export const formatDateForURL = (date: Date | string) => {
    const d = new Date(date);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

export const formatDay = (date: Date | string) => {
    const d = new Date(date);
    return d.getDate();
};

export const formatMonth = (date: Date | string) => {
    const d = new Date(date);
    return new Intl.DateTimeFormat('en-US', { month: 'short' }).format(d);
};

export const formatMonthYear = (date: Date | string) => {
    const d = new Date(date);
    return new Intl.DateTimeFormat('en-US', {
        month: 'long',
        year: 'numeric'
    }).format(d);
};