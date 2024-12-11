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
    <div className={`relative py-20 px-4 bg-gradient-to-br from-${gradientFrom} to-${gradientTo}`}>
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-block p-2.5 bg-white/10 rounded-full mb-4">
          <Icon className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {title}
        </h1>
        <p className="text-lg text-white/90 max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
}
