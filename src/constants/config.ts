export const IMAGE_CONFIG = {
  maxSizeMB: 10,
  acceptedTypes: ['image/jpeg', 'image/png'],
  dimensions: {
    min: { width: 600, height: 600 },
    recommended: { width: 1200, height: 1200 }
  }
};
  
export const API_ENDPOINTS = {
  processImage: '/api/process-image',
};