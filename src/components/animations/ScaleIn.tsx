import React from 'react';
import { useInView } from '../../hooks/useInView';

interface ScaleInProps {
  children: React.ReactNode;
  delay?: number;
  threshold?: number;
}

export function ScaleIn({ children, delay = 0, threshold = 0.2 }: ScaleInProps) {
  const { ref, isInView } = useInView({ threshold });

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transform transition-all duration-400 ease-out
      ${isInView 
        ? 'opacity-100 scale-100' 
        : 'opacity-0 scale-95'
      }`}
    >
      {children}
    </div>
  );
}
