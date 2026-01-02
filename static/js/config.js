/**
 * API Configuration
 * Update API_BASE to your Railway URL after deployment
 */
const CONFIG = {
    // Production:  Railway API URL
    API_BASE: 'https://stategenui-production.up.railway.app',

    // Development: Local server
    //API_BASE: 'http://localhost:8080',

    // Static data paths (served from GitHub Pages)
    // Use relative path for GitHub Pages subdirectory hosting
    DATA_BASE: 'data',
};

// Helper function to get full API URL
function apiUrl(endpoint) {
    return CONFIG.API_BASE + endpoint;
}

// Helper function to get static data URL
function dataUrl(filename) {
    return CONFIG.DATA_BASE + '/' + filename;
}
