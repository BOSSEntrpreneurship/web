import React from 'react';
import { LucideIcon } from 'lucide-react';

interface PageHeroProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
}

export function PageHero({ icon: Icon, title, description, gradientFrom, gradientTo }: PageHeroProps) {
  return (
    <div className={`relative py-32 px-4 bg-gradient-to-br from-${gradientFrom} to-${gradientTo}`}>
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-block p-3 bg-white/10 rounded-full mb-6">
          <Icon className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {title}
        </h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
}
