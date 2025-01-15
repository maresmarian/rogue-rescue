// src/lib/formatDate.ts

export const formatDateInPT = (date: Date, options: Intl.DateTimeFormatOptions = {}) => {
    return new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Los_Angeles',
        ...options
    }).format(date);
};

export const formatDateForURL = (date: Date) => {
    const formatted = formatDateInPT(date, {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
    // Convert from MM/DD/YYYY to YYYY-MM-DD
    const [month, day, year] = formatted.split('/');
    return `${year}-${month}-${day}`;
};