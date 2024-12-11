import React from 'react';
import { Users } from 'lucide-react';
import { PageHero } from '../shared/PageHero';
export function AboutHero() {
  return (
    <PageHero
      icon={Users}
      title="About BOSS Entrepreneurship"
      description="Empowering students to become the next generation of innovative leaders and successful entrepreneurs through hands-on experience and mentorship."
      gradientFrom="blue-600"
      gradientTo="blue-800"
    />
    <div className="relative py-20 px-4 bg-gradient-to-b from-blue-600 to-blue-800">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          About BOSS Entrepreneurship
        </h1>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
          Empowering students to become the next generation of innovative leaders and successful entrepreneurs through hands-on experience and mentorship.
        </p>
      </div>
    </div>
  );
}
