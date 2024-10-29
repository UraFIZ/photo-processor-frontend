interface ProgressBarProps {
    progress: number;
    variant?: 'default' | 'success';
    className?: string;
  }
  
  export function ProgressBar({ 
    progress, 
    variant = 'default',
    className = '' 
  }: ProgressBarProps) {
    const colorClasses = {
      default: 'bg-primary',
      success: 'bg-primary-green',
    };
  
    return (
      <div className={`h-2 bg-gray-100 rounded-full overflow-hidden ${className}`}>
        <div 
          className={`h-full transition-all duration-300 ease-in-out ${colorClasses[variant]}`}
          style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        />
      </div>
    );
  }