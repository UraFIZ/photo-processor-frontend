import { ReactNode } from 'react';

interface AlertProps {
  children: ReactNode;
  variant?: 'error' | 'success' | 'info';
  className?: string;
}

export function Alert({ 
  children, 
  variant = 'info',
  className = '' 
}: AlertProps) {
  const variantClasses = {
    error: 'bg-red-50 text-red-700 border-red-200',
    success: 'bg-green-50 text-green-700 border-green-200',
    info: 'bg-blue-50 text-primary border-primary-light',
  };

  return (
    <div className={`
      p-4 rounded-lg border
      ${variantClasses[variant]}
      ${className}
    `}>
      {children}
    </div>
  );
}