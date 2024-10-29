// src/utils/imageValidation.ts
import { ValidationError } from '@/types/image';

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ACCEPTED_TYPES = ['image/jpeg', 'image/png'];
const MIN_DIMENSIONS = { width: 600, height: 600 }; // Example minimum dimensions

export async function validateImage(file: File): Promise<void> {
  const errors: ValidationError[] = [];

  // Check file size
  if (file.size > MAX_FILE_SIZE) {
    errors.push({
      code: 'FILE_SIZE',
      message: 'Image size should be less than 10MB'
    });
  }

  // Check file type
  if (!ACCEPTED_TYPES.includes(file.type)) {
    errors.push({
      code: 'FILE_TYPE',
      message: 'Only JPEG and PNG files are accepted'
    });
  }

  // Check image dimensions
  try {
    const dimensions = await getImageDimensions(file);
    if (dimensions.width < MIN_DIMENSIONS.width || 
        dimensions.height < MIN_DIMENSIONS.height) {
      errors.push({
        code: 'IMAGE_DIMENSIONS',
        message: 'Image dimensions should be at least 600x600 pixels'
      });
    }
  } catch {
    errors.push({
      code: 'GENERAL',
      message: 'Failed to validate image dimensions'
    });
  }

  if (errors.length > 0) {
    throw errors;
  }
}

function getImageDimensions(file: File): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = URL.createObjectURL(file);

    img.onload = () => {
      URL.revokeObjectURL(img.src);
      resolve({ width: img.width, height: img.height });
    };

    img.onerror = () => {
      URL.revokeObjectURL(img.src);
      reject(new Error('Failed to load image'));
    };
  });
}