// src/components/ui/Card.tsx
import { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const cardVariants = cva(
  'rounded-lg overflow-hidden',
  {
    variants: {
      variant: {
        default: 'bg-card shadow-card border border-border',
        problem: 'bg-[#FAC4C4] border-2 border-black',
        green: 'bg-[#D1FAE5] border-2 border-black',
      },
      padding: {
        none: '',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
      }
    },
    defaultVariants: {
      variant: 'default',
      padding: 'md',
    }
  }
);

interface CardProps extends VariantProps<typeof cardVariants> {
  children: ReactNode;
  className?: string;
}

export function Card({ 
  children, 
  variant, 
  padding,
  className = '' 
}: CardProps) {
  return (
    <div className={cardVariants({ variant, padding, className })}>
      {children}
    </div>
  );
}

// Example usage:
export function ProblemCard({ 
  children,
  className = ''
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Card 
      variant="problem"
      padding="lg"
      className={`text-center ${className}`}
    >
      <div className="text-lg font-medium">
        {children}
      </div>
    </Card>
  );
}