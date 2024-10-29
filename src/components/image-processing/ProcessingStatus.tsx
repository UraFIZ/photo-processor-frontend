import { Button } from '@/components/ui/Button';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { ProcessingPhase } from '@/types/image';

interface ProcessingStatusProps {
  phase: ProcessingPhase;
  onProcess: () => void;
  onDownload?: () => void;
}

export default function ProcessingStatus({
  phase,
  onProcess,
  onDownload
}: ProcessingStatusProps) {
  const renderContent = () => {
    switch (phase) {
      case 'validating':
        return (
          <div className="flex items-center justify-center space-x-2">
            <div className="animate-spin h-5 w-5 border-2 border-primary border-t-transparent rounded-full" />
            <span className="text-text-secondary">
              Validating image...
            </span>
          </div>
        );

      case 'idle':
        return (
          <Button 
            variant="share"
            fullWidth 
            onClick={onProcess}
          >
            Remove Background
          </Button>
        );

      case 'processing':
        return (
          <div className="space-y-3">
            <ProgressBar progress={70} />
            <p className="text-center text-text-secondary">
              Removing background...
            </p>
          </div>
        );

      case 'success':
        return (
          <div className="flex space-x-4">
            <Button 
              variant="secondary" 
              fullWidth
              onClick={onDownload}
            >
              Download
            </Button>
            <Button variant="share" fullWidth>
              Share
            </Button>
          </div>
        );

      case 'error':
        return (
          <Button 
            variant="outline"
            fullWidth 
            onClick={onProcess}
          >
            Try Again
          </Button>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-4">
      {renderContent()}
    </div>
  );
}