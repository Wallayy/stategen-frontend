/**
 * API Configuration
 * Update API_BASE to your Railway URL after deployment
 */
const CONFIG = {
    // Production: Your Railway API URL
    // API_BASE: 'https://your-app.up.railway.app',

    // Development: Local server
    API_BASE: 'http://localhost:8080',

    // Static data paths (served from GitHub Pages)
    DATA_BASE: '/data',
};

// Helper function to get full API URL
function apiUrl(endpoint) {
    return CONFIG.API_BASE + endpoint;
}

// Helper function to get static data URL
function dataUrl(filename) {
    return CONFIG.DATA_BASE + '/' + filename;
}
