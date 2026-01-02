// Shared Map Configuration
// CALIBRATED from 5 reference points (Updated 2025-12-11)
const MAP_CONFIG = {
    imageDimensions: { width: 1801, height: 1872 },
    mapImagePath: 'static/images/realm_map.png',
    scaleX: 0.999134,
    offsetX: -5.764631,
    scaleY: 0.998806,
    offsetY: 39.379864
};

// Merge into CONFIG (defined in config.js)
if (typeof CONFIG !== 'undefined') {
    Object.assign(CONFIG, MAP_CONFIG);
} else {
    var CONFIG = MAP_CONFIG;
}
