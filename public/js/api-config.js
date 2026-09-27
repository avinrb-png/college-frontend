window.API_BASE_URL = window.API_BASE_URL || 'https://college-backend-dq1q.onrender.com';

window.apiUrl = function (path) {
    const baseUrl = String(window.API_BASE_URL).replace(/\/+$/, '');
    return `${baseUrl}/${String(path).replace(/^\/+/, '')}`;
};