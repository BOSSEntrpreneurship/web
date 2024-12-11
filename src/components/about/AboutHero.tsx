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
  );
}
