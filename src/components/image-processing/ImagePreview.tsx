import Image from 'next/image';
import { useState } from 'react';

interface ImagePreviewProps {
    imageUrl: string;
    onRemove: () => void;
    showOriginal?: boolean;
    originalUrl?: string;
  }
  
  export default function ImagePreview({ 
    imageUrl, 
    onRemove,
    showOriginal,
    originalUrl
  }: ImagePreviewProps) {
    const [showingOriginal, setShowingOriginal] = useState(false);
    return (
      <div className="relative p-4">
        <div className="aspect-[2/3] relative rounded-lg overflow-hidden bg-card-hover">
          <Image
            src={showingOriginal && originalUrl ? originalUrl : imageUrl}
            alt="Preview"
            layout="fill"
            objectFit="contain"
          />
        </div>
        
        {showOriginal && originalUrl && (
        <button
          onMouseEnter={() => setShowingOriginal(true)}
          onMouseLeave={() => setShowingOriginal(false)}
          className="absolute bottom-6 left-6 px-3 py-1.5 
                     bg-white/90 hover:bg-white
                     rounded-md shadow-card
                     text-sm text-text-secondary"
        >
          Show original
        </button>
      )}

      <button
        onClick={onRemove}
        className="absolute top-6 right-6 p-2 rounded-full
                   bg-white/90 hover:bg-white
                   shadow-card hover:shadow-lg
                   text-text-secondary hover:text-text-primary
                   transition-all duration-200"
        aria-label="Remove image"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    );
  }