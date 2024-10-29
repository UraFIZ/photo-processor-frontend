// src/components/image-processing/ImageInput.tsx
'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Alert } from '@/components/ui/Alert';
import FileUpload from './FileUpload';
import ImagePreview from './ImagePreview';
import ProcessingStatus from './ProcessingStatus';
import { validateImage } from '@/utils/imageValidation';
import { removeBackground } from '@/lib/api/imageProcessor';
import { ProcessingPhase, ValidationError } from '@/types/image';

interface ImageData {
  file: File;
  preview: string;
  processed?: string;
}

export default function ImageInput() {
  const [imageData, setImageData] = useState<ImageData | null>(null);
  const [processingPhase, setProcessingPhase] = useState<ProcessingPhase>('idle');
  const [errors, setErrors] = useState<ValidationError[]>([]);

  const handleImageSelect = async (file: File) => {
    setErrors([]);
    setProcessingPhase('validating');

    try {
      await validateImage(file);
      const imageUrl = URL.createObjectURL(file);
      setImageData({
        file,
        preview: imageUrl
      });
      setProcessingPhase('idle');
    } catch (error) {
      if (Array.isArray(error)) {
        setErrors(error);
      } else {
        setErrors([{
          code: 'GENERAL',
          message: 'Failed to process image'
        }]);
      }
      setProcessingPhase('error');
    }
  };

  const handleRemove = () => {
    if (imageData?.preview) {
      URL.revokeObjectURL(imageData.preview);
    }
    if (imageData?.processed) {
      URL.revokeObjectURL(imageData.processed);
    }
    setImageData(null);
    setProcessingPhase('idle');
    setErrors([]);
  };

  const handleProcess = async () => {
    if (!imageData?.file) return;
    
    try {
      setProcessingPhase('uploading');
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate upload
      
      setProcessingPhase('processing');
      const processedImageUrl = await removeBackground(imageData.file);
      
      setImageData(prev => prev ? {
        ...prev,
        processed: processedImageUrl
      } : null);
      
      setProcessingPhase('success');
    } catch {
      setProcessingPhase('error');
      setErrors([{
        code: 'GENERAL',
        message: 'Failed to remove background. Please try again.'
      }]);
    }
  };

  const handleDownload = async () => {
    if (!imageData?.processed) return;
    
    try {
      const link = document.createElement('a');
      link.href = imageData.processed;
      link.download = 'processed-image.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      setErrors([{
        code: 'GENERAL',
        message: 'Failed to download image'
      }]);
    }
  };

  // Get current preview (processed image if available, otherwise original preview)
  const currentPreview = imageData?.processed || imageData?.preview;

  return (
    <Card className="w-full border-4 border-primary-green">
      {errors.length > 0 && (
      <div className="p-4">
      {errors.map((error, index) => (
      <Alert 
        key={index}
        variant="error" 
        className="mb-2 last:mb-0"
      >
        {error.message}
      </Alert>
      ))}
      </div>
      )}

      {!imageData ? (
      <FileUpload onImageSelect={handleImageSelect} />
      ) : (
      <div className="space-y-4">
      <ImagePreview 
      imageUrl={currentPreview!} 
      onRemove={handleRemove} 
      showOriginal={!!imageData.processed}
      originalUrl={imageData.preview}
      />
      <ProcessingStatus 
      phase={processingPhase}
      onProcess={handleProcess}
      onDownload={handleDownload}
      />
      </div>
      )}
    </Card>
  );
}