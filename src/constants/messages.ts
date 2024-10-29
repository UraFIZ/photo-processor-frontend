export const ERROR_MESSAGES = {
  FILE_TOO_LARGE: 'File size should be less than 5MB',
  INVALID_FILE_TYPE: 'Please upload a valid JPEG or PNG image',
  UPLOAD_FAILED: 'Failed to upload image',
  PROCESSING_FAILED: 'Failed to process image',
};

export const SUCCESS_MESSAGES = {
  UPLOAD_COMPLETE: 'Image uploaded successfully',
  PROCESSING_COMPLETE: 'Image processed successfully',
}; 

export const MESSAGES = {
  upload: {
    title: 'Upload your photo',
    drag: 'Drag and drop your photo here',
    or: 'or',
    browse: 'Browse files',
  },
  validation: {
    size: 'Image must be less than 10MB',
    type: 'Only JPEG and PNG files are accepted',
    dimensions: 'Image dimensions must be at least 600x600 pixels',
  },
  processing: {
    validating: 'Validating image...',
    uploading: 'Uploading image...',
    processing: 'Removing background...',
    success: 'Processing complete!',
    error: 'Something went wrong. Please try again.',
  }
};