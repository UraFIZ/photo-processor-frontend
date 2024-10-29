'use client';

import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { IMAGE_CONFIG } from '@/constants/config';

interface FileUploadProps {
  onImageSelect: (file: File) => void;
}

export default function FileUpload({ onImageSelect }: FileUploadProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onImageSelect(acceptedFiles[0]);
    }
  }, [onImageSelect]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': IMAGE_CONFIG.acceptedTypes
    },
    maxFiles: 1,
    multiple: false
  });

  return (
    <div className="p-6">
      <div
        {...getRootProps()}
        className={`
          border-2 border-dashed rounded-xl p-8
          flex flex-col items-center justify-center
          transition-colors cursor-pointer
          min-h-[240px]
          ${isDragActive 
            ? 'border-primary bg-primary/5' 
            : 'border-border hover:border-primary hover:bg-card-hover'
          }
        `}
      >
        <input {...getInputProps()} />
        
        <svg
          className={`w-12 h-12 mb-4 ${isDragActive ? 'text-primary' : 'text-text-secondary'}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>

        <div className="text-center space-y-2">
          <p className="text-base font-medium text-text-primary">
            {isDragActive 
              ? 'Drop your image here' 
              : 'Click to upload or drag and drop'
            }
          </p>
          <p className="text-sm text-text-secondary">
            {`Supports ${IMAGE_CONFIG.acceptedTypes.join(', ')} • Max ${IMAGE_CONFIG.maxSizeMB}MB`}
          </p>
        </div>
      </div>
    </div>
  );
}