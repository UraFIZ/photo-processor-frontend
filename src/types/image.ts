export type ProcessingPhase = 
  | 'idle' 
  | 'validating'
  | 'uploading'
  | 'processing'
  | 'success'
  | 'error';

export interface ImageFile {
  file: File;
  preview: string;
}

export interface ProcessedImage {
  originalUrl: string;
  processedUrl: string;
}

export interface ValidationError {
    code: 'FILE_SIZE' | 'FILE_TYPE' | 'IMAGE_DIMENSIONS' | 'GENERAL';
    message: string;
}