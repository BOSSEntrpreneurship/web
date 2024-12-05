import React from 'react';
import { useInView } from '../../hooks/useInView';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  threshold?: number;
}

export function FadeIn({ children, delay = 0, threshold = 0 }: FadeInProps) {
  const { ref, isInView } = useInView({ threshold });

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transform transition-all duration-700 ease-out
      ${isInView 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
}
